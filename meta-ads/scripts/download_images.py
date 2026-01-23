#!/usr/bin/env python3
"""
URL 목록에서 이미지를 다운로드하는 스크립트

사용법:
    python download_images.py --urls "url1,url2,url3" --output output/campaign/images/
    python download_images.py --json output/campaign/product_info.json --output output/campaign/images/

출력:
    - 다운로드된 이미지 파일들 (01.jpg, 02.jpg, ...)
"""

import argparse
import json
import os
import sys
from typing import List, Optional
from urllib.parse import urlparse, unquote
import hashlib

try:
    import requests
except ImportError:
    print("Error: requests가 설치되지 않았습니다.")
    print("설치: pip install requests")
    sys.exit(1)


def get_file_extension(url: str, content_type: Optional[str] = None) -> str:
    """URL 또는 Content-Type에서 파일 확장자 추출"""
    # Content-Type에서 추출
    if content_type:
        type_map = {
            'image/jpeg': '.jpg',
            'image/jpg': '.jpg',
            'image/png': '.png',
            'image/gif': '.gif',
            'image/webp': '.webp',
            'image/svg+xml': '.svg',
        }
        for mime, ext in type_map.items():
            if mime in content_type:
                return ext

    # URL 경로에서 추출
    path = urlparse(url).path
    path = unquote(path)

    ext_map = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg']
    for ext in ext_map:
        if ext in path.lower():
            return '.jpg' if ext == '.jpeg' else ext

    return '.jpg'  # 기본값


def download_image(url: str, output_path: str, timeout: int = 30) -> bool:
    """
    단일 이미지 다운로드

    Args:
        url: 이미지 URL
        output_path: 저장 경로
        timeout: 타임아웃 (초)

    Returns:
        성공 여부
    """
    headers = {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36',
        'Accept': 'image/webp,image/apng,image/*,*/*;q=0.8',
        'Accept-Language': 'ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7',
        'Referer': url,
    }

    try:
        response = requests.get(url, headers=headers, timeout=timeout, stream=True)
        response.raise_for_status()

        # Content-Type 확인
        content_type = response.headers.get('Content-Type', '')
        if 'image' not in content_type and 'octet-stream' not in content_type:
            print(f"Warning: 이미지가 아닐 수 있음: {content_type}")

        # 파일 저장
        with open(output_path, 'wb') as f:
            for chunk in response.iter_content(chunk_size=8192):
                f.write(chunk)

        # 파일 크기 확인
        file_size = os.path.getsize(output_path)
        if file_size < 1000:  # 1KB 미만
            print(f"Warning: 파일이 너무 작음 ({file_size} bytes): {output_path}")
            os.remove(output_path)
            return False

        return True

    except requests.exceptions.RequestException as e:
        print(f"Error: 다운로드 실패 ({url}): {e}")
        return False


def download_images(urls: List[str], output_dir: str, prefix: str = 'product') -> List[str]:
    """
    여러 이미지 다운로드

    Args:
        urls: 이미지 URL 목록
        output_dir: 출력 디렉토리
        prefix: 파일명 접두사

    Returns:
        다운로드된 파일 경로 목록
    """
    os.makedirs(output_dir, exist_ok=True)

    downloaded = []

    for i, url in enumerate(urls, 1):
        if not url:
            continue

        # 확장자 결정
        ext = get_file_extension(url)
        filename = f"{prefix}-{i:02d}{ext}"
        output_path = os.path.join(output_dir, filename)

        print(f"다운로드 중 [{i}/{len(urls)}]: {url[:80]}...")

        if download_image(url, output_path):
            downloaded.append(output_path)
            print(f"  -> 저장: {filename}")
        else:
            print(f"  -> 실패")

    return downloaded


def load_urls_from_json(json_path: str) -> List[str]:
    """JSON 파일에서 이미지 URL 목록 로드"""
    with open(json_path, 'r', encoding='utf-8') as f:
        data = json.load(f)

    # product_info.json 형식
    if 'images' in data:
        return data['images']

    # 단순 URL 배열
    if isinstance(data, list):
        return data

    return []


def main():
    parser = argparse.ArgumentParser(description='이미지 URL 목록에서 이미지 다운로드')
    parser.add_argument('--urls', help='쉼표로 구분된 이미지 URL 목록')
    parser.add_argument('--json', help='이미지 URL이 포함된 JSON 파일 경로')
    parser.add_argument('--output', default='output/images/', help='출력 디렉토리')
    parser.add_argument('--prefix', default='product', help='파일명 접두사')

    args = parser.parse_args()

    # URL 목록 준비
    urls = []

    if args.json:
        if os.path.exists(args.json):
            urls = load_urls_from_json(args.json)
            print(f"JSON에서 {len(urls)}개 URL 로드: {args.json}")
        else:
            print(f"Error: JSON 파일을 찾을 수 없음: {args.json}")
            sys.exit(1)
    elif args.urls:
        urls = [u.strip() for u in args.urls.split(',') if u.strip()]
    else:
        print("Error: --urls 또는 --json 옵션이 필요합니다.")
        parser.print_help()
        sys.exit(1)

    if not urls:
        print("Error: 다운로드할 URL이 없습니다.")
        sys.exit(1)

    print(f"\n총 {len(urls)}개 이미지 다운로드 시작...")
    print(f"출력 디렉토리: {args.output}\n")

    downloaded = download_images(urls, args.output, args.prefix)

    print(f"\n=== 다운로드 완료 ===")
    print(f"성공: {len(downloaded)}/{len(urls)}")

    if downloaded:
        print("\n다운로드된 파일:")
        for path in downloaded:
            print(f"  - {path}")

    # 결과를 JSON으로 저장
    result_file = os.path.join(args.output, 'downloaded_images.json')
    with open(result_file, 'w', encoding='utf-8') as f:
        json.dump({
            'total': len(urls),
            'downloaded': len(downloaded),
            'files': downloaded
        }, f, ensure_ascii=False, indent=2)

    print(f"\n결과 저장: {result_file}")


if __name__ == '__main__':
    main()
