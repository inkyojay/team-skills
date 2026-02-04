#!/usr/bin/env python3
"""
HTML 섹션별 고해상도 이미지 캡처 스크립트
"""

from playwright.sync_api import sync_playwright
import os

# 설정
HTML_PATH = os.path.join(os.path.dirname(__file__), 'abc-bed-live-event.html')
OUTPUT_DIR = os.path.join(os.path.dirname(__file__), 'captured-images')
SCALE = 2  # 고해상도 (2x)

# 캡처할 섹션 정의
SECTIONS = [
    {
        'name': '01_hero',
        'selector': '.hero',
        'description': '히어로 섹션'
    },
    {
        'name': '02_product-card',
        'selector': '.product-card',
        'description': '제품 카드'
    },
    {
        'name': '03_countdown',
        'selector': '.countdown-section',
        'description': '카운트다운'
    },
    {
        'name': '04_price-detail',
        'selector': '#price-section',
        'description': '가격 혜택'
    },
    {
        'name': '05_event',
        'selector': '#event-section',
        'description': '라이브 이벤트'
    },
    {
        'name': '06_reviews',
        'selector': '.review-section',
        'description': '실제 후기'
    },
    {
        'name': '07_photos',
        'selector': '.photo-section',
        'description': '실사용 사진'
    },
    {
        'name': '00_full-page',
        'selector': None,  # 전체 페이지
        'description': '전체 페이지'
    }
]

def main():
    # 출력 폴더 생성
    os.makedirs(OUTPUT_DIR, exist_ok=True)

    with sync_playwright() as p:
        # 브라우저 실행
        browser = p.chromium.launch()

        # 페이지 설정 (고해상도)
        page = browser.new_page(
            viewport={'width': 480, 'height': 800},
            device_scale_factor=SCALE
        )

        # HTML 파일 열기
        file_url = f'file://{os.path.abspath(HTML_PATH)}'
        page.goto(file_url)

        # 이미지 로딩 대기
        page.wait_for_load_state('networkidle')
        page.wait_for_timeout(1000)  # 추가 대기

        print(f"\n📸 이미지 캡처 시작 (Scale: {SCALE}x)")
        print(f"📁 저장 경로: {OUTPUT_DIR}\n")

        for section in SECTIONS:
            name = section['name']
            selector = section['selector']
            desc = section['description']

            output_path = os.path.join(OUTPUT_DIR, f'{name}.png')

            try:
                if selector is None:
                    # 전체 페이지 캡처
                    page.screenshot(path=output_path, full_page=True)
                else:
                    # 섹션 캡처
                    element = page.query_selector(selector)
                    if element:
                        element.screenshot(path=output_path)
                    else:
                        print(f"⚠️  {desc}: 요소를 찾을 수 없음 ({selector})")
                        continue

                print(f"✅ {desc}: {name}.png")

            except Exception as e:
                print(f"❌ {desc}: 오류 발생 - {e}")

        browser.close()

    print(f"\n✨ 완료! {OUTPUT_DIR} 폴더를 확인하세요.\n")

if __name__ == '__main__':
    main()
