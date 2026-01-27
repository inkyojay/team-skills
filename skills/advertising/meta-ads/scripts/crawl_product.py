#!/usr/bin/env python3
"""
웹사이트에서 제품 정보를 크롤링하는 스크립트

사용법:
    python crawl_product.py --url "https://example.com/product" --output output/campaign/

출력:
    - product_info.json: 제품 정보 (이름, 가격, 설명, 이미지 URL 등)
"""

import argparse
import json
import os
import re
import sys
from typing import Optional
from urllib.parse import urljoin, urlparse

try:
    from playwright.sync_api import sync_playwright, TimeoutError as PlaywrightTimeout
except ImportError:
    print("Error: playwright가 설치되지 않았습니다.")
    print("설치: pip install playwright && playwright install chromium")
    sys.exit(1)

try:
    from bs4 import BeautifulSoup
except ImportError:
    print("Error: beautifulsoup4가 설치되지 않았습니다.")
    print("설치: pip install beautifulsoup4")
    sys.exit(1)


def extract_price(text: str) -> Optional[str]:
    """텍스트에서 가격 추출"""
    # 한국 원화 패턴
    patterns = [
        r'₩[\s]*([\d,]+)',
        r'([\d,]+)[\s]*원',
        r'KRW[\s]*([\d,]+)',
        r'\$([\d,]+\.?\d*)',
    ]

    for pattern in patterns:
        match = re.search(pattern, text)
        if match:
            price = match.group(1).replace(',', '')
            return f"{int(float(price)):,}원"

    return None


def extract_images(soup: BeautifulSoup, base_url: str) -> list:
    """페이지에서 제품 이미지 URL 추출"""
    images = []
    seen = set()

    # 일반적인 제품 이미지 선택자들
    selectors = [
        'img[class*="product"]',
        'img[class*="main"]',
        'img[class*="gallery"]',
        'img[class*="thumb"]',
        '.product-image img',
        '.product-gallery img',
        '.product-detail img',
        '[data-testid*="product"] img',
        '.swiper-slide img',
        '.slick-slide img',
    ]

    for selector in selectors:
        for img in soup.select(selector):
            src = img.get('src') or img.get('data-src') or img.get('data-lazy-src')
            if src:
                full_url = urljoin(base_url, src)
                if full_url not in seen and not full_url.endswith('.svg'):
                    seen.add(full_url)
                    images.append(full_url)

    # 일반 이미지도 확인 (큰 이미지 우선)
    for img in soup.find_all('img'):
        src = img.get('src') or img.get('data-src')
        if src:
            full_url = urljoin(base_url, src)
            # 작은 아이콘 제외
            width = img.get('width', '999')
            height = img.get('height', '999')
            try:
                if int(width) < 100 or int(height) < 100:
                    continue
            except ValueError:
                pass

            if full_url not in seen and not full_url.endswith('.svg'):
                seen.add(full_url)
                images.append(full_url)

    return images[:10]  # 최대 10개


def extract_features(soup: BeautifulSoup) -> list:
    """제품 특징/혜택 추출"""
    features = []

    # 리스트 형태의 특징
    selectors = [
        '.product-features li',
        '.features li',
        '.benefits li',
        '.product-info li',
        '[class*="feature"] li',
        '[class*="benefit"] li',
    ]

    for selector in selectors:
        items = soup.select(selector)
        if items:
            for item in items[:5]:
                text = item.get_text(strip=True)
                if text and len(text) > 5:
                    features.append(text)
            if features:
                break

    return features[:5]


def crawl_product(url: str, output_dir: str, wait_time: int = 3000) -> dict:
    """
    제품 페이지 크롤링

    Args:
        url: 제품 페이지 URL
        output_dir: 출력 디렉토리
        wait_time: 페이지 로딩 대기 시간 (ms)

    Returns:
        제품 정보 딕셔너리
    """

    os.makedirs(output_dir, exist_ok=True)

    product_info = {
        'url': url,
        'name': None,
        'price': None,
        'original_price': None,
        'description': None,
        'features': [],
        'images': [],
        'brand': None,
    }

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            viewport={'width': 1920, 'height': 1080},
            user_agent='Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36'
        )
        page = context.new_page()

        try:
            # 페이지 로드
            page.goto(url, wait_until='networkidle', timeout=30000)
            page.wait_for_timeout(wait_time)

            # HTML 파싱
            html = page.content()
            soup = BeautifulSoup(html, 'html.parser')

            # 제품명 추출
            name_selectors = [
                'h1[class*="product"]',
                'h1[class*="title"]',
                '.product-name',
                '.product-title',
                '[data-testid*="product-title"]',
                'h1',
            ]

            for selector in name_selectors:
                elem = soup.select_one(selector)
                if elem:
                    product_info['name'] = elem.get_text(strip=True)
                    break

            # 가격 추출
            price_selectors = [
                '.product-price',
                '.price',
                '[class*="price"]',
                '[data-testid*="price"]',
            ]

            for selector in price_selectors:
                elems = soup.select(selector)
                for elem in elems:
                    text = elem.get_text(strip=True)
                    price = extract_price(text)
                    if price:
                        if not product_info['price']:
                            product_info['price'] = price
                        elif not product_info['original_price']:
                            # 두 번째 가격은 원래 가격일 수 있음
                            product_info['original_price'] = price

            # 설명 추출
            desc_selectors = [
                '.product-description',
                '.description',
                '[class*="description"]',
                'meta[name="description"]',
            ]

            for selector in desc_selectors:
                elem = soup.select_one(selector)
                if elem:
                    if elem.name == 'meta':
                        product_info['description'] = elem.get('content', '')
                    else:
                        product_info['description'] = elem.get_text(strip=True)[:500]
                    break

            # 특징 추출
            product_info['features'] = extract_features(soup)

            # 이미지 추출
            product_info['images'] = extract_images(soup, url)

            # 브랜드 추출
            brand_selectors = [
                '.brand',
                '[class*="brand"]',
                'meta[property="og:site_name"]',
            ]

            for selector in brand_selectors:
                elem = soup.select_one(selector)
                if elem:
                    if elem.name == 'meta':
                        product_info['brand'] = elem.get('content', '')
                    else:
                        product_info['brand'] = elem.get_text(strip=True)
                    break

        except PlaywrightTimeout:
            print(f"Warning: 페이지 로딩 타임아웃: {url}")
        except Exception as e:
            print(f"Error: 크롤링 중 오류 발생: {e}")
        finally:
            browser.close()

    # 결과 저장
    output_file = os.path.join(output_dir, 'product_info.json')
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(product_info, f, ensure_ascii=False, indent=2)

    print(f"제품 정보 저장 완료: {output_file}")

    return product_info


def main():
    parser = argparse.ArgumentParser(description='웹사이트에서 제품 정보 크롤링')
    parser.add_argument('--url', required=True, help='제품 페이지 URL')
    parser.add_argument('--output', default='output/', help='출력 디렉토리')
    parser.add_argument('--wait', type=int, default=3000, help='페이지 로딩 대기 시간 (ms)')

    args = parser.parse_args()

    print(f"크롤링 시작: {args.url}")
    result = crawl_product(args.url, args.output, args.wait)

    print("\n=== 크롤링 결과 ===")
    print(f"제품명: {result.get('name', 'N/A')}")
    print(f"가격: {result.get('price', 'N/A')}")
    print(f"이미지 수: {len(result.get('images', []))}")
    print(f"특징 수: {len(result.get('features', []))}")


if __name__ == '__main__':
    main()
