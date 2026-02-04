#!/usr/bin/env python3
"""
배너 고해상도 이미지 캡처 스크립트
"""

from playwright.sync_api import sync_playwright
import os
import glob

# 설정
BANNERS_DIR = os.path.dirname(__file__)
OUTPUT_DIR = os.path.join(BANNERS_DIR, 'images')
SCALE = 2  # 고해상도 (2x)

def main():
    # 출력 폴더 생성
    os.makedirs(OUTPUT_DIR, exist_ok=True)

    # 모든 HTML 배너 파일 찾기
    html_files = sorted(glob.glob(os.path.join(BANNERS_DIR, 'banner-*.html')))

    if not html_files:
        print("배너 HTML 파일을 찾을 수 없습니다.")
        return

    with sync_playwright() as p:
        # 브라우저 실행
        browser = p.chromium.launch()

        # 페이지 설정 (9:16 비율, 고해상도)
        page = browser.new_page(
            viewport={'width': 1080, 'height': 1920},
            device_scale_factor=SCALE
        )

        print(f"\n배너 이미지 캡처 시작 (Scale: {SCALE}x)")
        print(f"저장 경로: {OUTPUT_DIR}\n")

        for html_file in html_files:
            filename = os.path.basename(html_file)
            name = filename.replace('.html', '')
            output_path = os.path.join(OUTPUT_DIR, f'{name}.png')

            try:
                # HTML 파일 열기
                file_url = f'file://{os.path.abspath(html_file)}'
                page.goto(file_url)

                # 폰트 및 이미지 로딩 대기
                page.wait_for_load_state('networkidle')
                page.wait_for_timeout(1000)  # 추가 대기

                # 전체 배너 캡처
                page.screenshot(path=output_path)

                print(f"  {name}.png")

            except Exception as e:
                print(f"  {name}: 오류 - {e}")

        browser.close()

    print(f"\n완료! {len(html_files)}개 배너 이미지가 생성되었습니다.\n")

if __name__ == '__main__':
    main()
