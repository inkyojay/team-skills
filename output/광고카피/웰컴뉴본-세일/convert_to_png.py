#!/usr/bin/env python3
"""HTML to PNG converter using Playwright"""

import asyncio
from pathlib import Path
from playwright.async_api import async_playwright

# 설정
BASE_DIR = Path(__file__).parent
HTML_DIR = BASE_DIR / "html"
PNG_DIR = BASE_DIR / "png"

# 각 폴더별 해상도 설정
SIZES = {
    "4x5": (1080, 1350),
    "1x1": (1080, 1080),
    "9x16": (1080, 1920),
    "carousel": (1080, 1080),
}

async def convert_html_to_png():
    async with async_playwright() as p:
        browser = await p.chromium.launch()

        for folder, (width, height) in SIZES.items():
            html_folder = HTML_DIR / folder
            png_folder = PNG_DIR / folder

            if not html_folder.exists():
                continue

            html_files = list(html_folder.glob("*.html"))
            print(f"\n[{folder}] {len(html_files)}개 파일 변환 중...")

            for html_file in html_files:
                png_file = png_folder / f"{html_file.stem}.png"

                page = await browser.new_page(viewport={"width": width, "height": height})

                # 파일 URL로 변환
                file_url = f"file://{html_file.absolute()}"
                await page.goto(file_url)

                # 폰트 로딩 대기
                await page.wait_for_timeout(1000)

                # 스크린샷 저장
                await page.screenshot(path=str(png_file), full_page=False)
                await page.close()

                print(f"  ✓ {html_file.name} → {png_file.name}")

        await browser.close()
        print("\n변환 완료!")

if __name__ == "__main__":
    asyncio.run(convert_html_to_png())
