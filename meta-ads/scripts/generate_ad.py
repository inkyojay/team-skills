#!/usr/bin/env python3
"""
HTML 템플릿을 사용하여 Meta 광고 이미지(PNG)를 생성하는 스크립트

사용법:
    python generate_ad.py \
        --template assets/templates/single-image/product-hero.html \
        --data '{"headline": "테스트", "productImage": "/path/to/image.jpg"}' \
        --output output/campaign/creatives/hero.png

    python generate_ad.py \
        --template assets/templates/single-image/product-hero.html \
        --data-file data.json \
        --output output/campaign/creatives/hero.png

출력:
    - PNG 이미지 파일
"""

import argparse
import json
import os
import sys
import tempfile
from typing import Dict, Any, Optional
from pathlib import Path

try:
    from playwright.sync_api import sync_playwright
except ImportError:
    print("Error: playwright가 설치되지 않았습니다.")
    print("설치: pip install playwright && playwright install chromium")
    sys.exit(1)

try:
    from jinja2 import Environment, FileSystemLoader, BaseLoader
except ImportError:
    print("Error: jinja2가 설치되지 않았습니다.")
    print("설치: pip install jinja2")
    sys.exit(1)


# 기본 광고 크기 설정
AD_SIZES = {
    'single-image': {'width': 1080, 'height': 1080},
    'carousel': {'width': 1080, 'height': 1080},
    'story': {'width': 1080, 'height': 1920},
    'link': {'width': 1200, 'height': 628},
}


def detect_ad_type(template_path: str) -> str:
    """템플릿 경로에서 광고 유형 감지"""
    path_lower = template_path.lower()

    if 'story' in path_lower or 'reels' in path_lower:
        return 'story'
    elif 'carousel' in path_lower:
        return 'carousel'
    elif 'link' in path_lower:
        return 'link'
    else:
        return 'single-image'


def render_template(template_path: str, data: Dict[str, Any]) -> str:
    """Jinja2 템플릿 렌더링"""
    template_dir = os.path.dirname(os.path.abspath(template_path))
    template_name = os.path.basename(template_path)

    env = Environment(
        loader=FileSystemLoader(template_dir),
        autoescape=False
    )

    template = env.get_template(template_name)
    return template.render(**data)


def convert_image_paths(data: Dict[str, Any], base_dir: str) -> Dict[str, Any]:
    """상대 경로를 절대 경로(file://)로 변환"""
    result = data.copy()

    image_keys = ['productImage', 'mainImage', 'lifestyleImage', 'backgroundImage',
                  'productThumbnail', 'brandLogo', 'beforeImage', 'afterImage',
                  'stepImage', 'featureIcon']

    for key in image_keys:
        if key in result and result[key]:
            path = result[key]
            if not path.startswith(('http://', 'https://', 'file://', 'data:')):
                # 상대 경로를 절대 경로로 변환
                abs_path = os.path.abspath(os.path.join(base_dir, path))
                if os.path.exists(abs_path):
                    result[key] = f"file://{abs_path}"

    # 중첩된 이미지 경로 처리
    list_keys = ['features', 'steps', 'products', 'benefits']
    for key in list_keys:
        if key in result and isinstance(result[key], list):
            for item in result[key]:
                if isinstance(item, dict):
                    for img_key in ['image', 'icon']:
                        if img_key in item and item[img_key]:
                            path = item[img_key]
                            if not path.startswith(('http://', 'https://', 'file://', 'data:')):
                                abs_path = os.path.abspath(os.path.join(base_dir, path))
                                if os.path.exists(abs_path):
                                    item[img_key] = f"file://{abs_path}"

    return result


def generate_ad(
    template_path: str,
    data: Dict[str, Any],
    output_path: str,
    width: Optional[int] = None,
    height: Optional[int] = None,
    scale: float = 1.0
) -> str:
    """
    광고 이미지 생성

    Args:
        template_path: HTML 템플릿 경로
        data: 템플릿에 주입할 데이터
        output_path: 출력 PNG 파일 경로
        width: 이미지 너비 (자동 감지 시 None)
        height: 이미지 높이 (자동 감지 시 None)
        scale: 스케일 팩터

    Returns:
        생성된 이미지 경로
    """
    # 광고 유형 감지
    ad_type = detect_ad_type(template_path)

    if width is None or height is None:
        size = AD_SIZES.get(ad_type, AD_SIZES['single-image'])
        width = width or size['width']
        height = height or size['height']

    # 이미지 경로 변환
    base_dir = os.path.dirname(os.path.abspath(output_path))
    data = convert_image_paths(data, base_dir)

    # 템플릿 렌더링
    html_content = render_template(template_path, data)

    # 출력 디렉토리 생성
    os.makedirs(os.path.dirname(os.path.abspath(output_path)), exist_ok=True)

    # 임시 HTML 파일 생성
    with tempfile.NamedTemporaryFile(mode='w', suffix='.html', delete=False, encoding='utf-8') as f:
        f.write(html_content)
        temp_html_path = f.name

    try:
        with sync_playwright() as p:
            browser = p.chromium.launch(headless=True)

            context = browser.new_context(
                viewport={'width': width, 'height': height},
                device_scale_factor=scale
            )

            page = context.new_page()

            # HTML 파일 로드
            page.goto(f'file://{temp_html_path}', wait_until='networkidle')

            # 이미지 로딩 대기
            page.wait_for_timeout(1000)

            # 스크린샷 캡처
            page.screenshot(
                path=output_path,
                type='png',
                clip={'x': 0, 'y': 0, 'width': width, 'height': height}
            )

            browser.close()

        print(f"광고 이미지 생성 완료: {output_path}")
        print(f"  크기: {width}x{height}")
        print(f"  유형: {ad_type}")

        return output_path

    finally:
        # 임시 파일 삭제
        os.unlink(temp_html_path)


def generate_carousel(
    template_path: str,
    cards_data: list,
    output_dir: str,
    prefix: str = 'card'
) -> list:
    """
    캐러셀 광고 생성 (여러 카드)

    Args:
        template_path: HTML 템플릿 경로
        cards_data: 각 카드별 데이터 리스트
        output_dir: 출력 디렉토리
        prefix: 파일명 접두사

    Returns:
        생성된 이미지 경로 리스트
    """
    outputs = []

    for i, card_data in enumerate(cards_data, 1):
        output_path = os.path.join(output_dir, f'{prefix}-{i:02d}.png')
        result = generate_ad(template_path, card_data, output_path)
        outputs.append(result)

    return outputs


def main():
    parser = argparse.ArgumentParser(description='HTML 템플릿으로 Meta 광고 이미지 생성')
    parser.add_argument('--template', required=True, help='HTML 템플릿 경로')
    parser.add_argument('--data', help='JSON 형식의 데이터 문자열')
    parser.add_argument('--data-file', help='데이터 JSON 파일 경로')
    parser.add_argument('--output', required=True, help='출력 PNG 파일 경로')
    parser.add_argument('--width', type=int, help='이미지 너비 (기본: 자동 감지)')
    parser.add_argument('--height', type=int, help='이미지 높이 (기본: 자동 감지)')
    parser.add_argument('--scale', type=float, default=1.0, help='스케일 팩터 (기본: 1.0)')

    args = parser.parse_args()

    # 템플릿 확인
    if not os.path.exists(args.template):
        print(f"Error: 템플릿 파일을 찾을 수 없음: {args.template}")
        sys.exit(1)

    # 데이터 로드
    data = {}

    if args.data_file:
        if os.path.exists(args.data_file):
            with open(args.data_file, 'r', encoding='utf-8') as f:
                data = json.load(f)
        else:
            print(f"Error: 데이터 파일을 찾을 수 없음: {args.data_file}")
            sys.exit(1)
    elif args.data:
        try:
            data = json.loads(args.data)
        except json.JSONDecodeError as e:
            print(f"Error: JSON 파싱 실패: {e}")
            sys.exit(1)

    print(f"템플릿: {args.template}")
    print(f"출력: {args.output}")

    # 광고 생성
    generate_ad(
        template_path=args.template,
        data=data,
        output_path=args.output,
        width=args.width,
        height=args.height,
        scale=args.scale
    )


if __name__ == '__main__':
    main()
