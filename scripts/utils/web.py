"""
웹 크롤링 유틸리티

Playwright 기반 웹 크롤링 기능을 제공합니다.
"""

import os
import sys
from typing import Optional, List
from urllib.parse import urljoin, urlparse

# 선택적 의존성
try:
    from playwright.sync_api import sync_playwright, TimeoutError as PlaywrightTimeout
    PLAYWRIGHT_AVAILABLE = True
except ImportError:
    PLAYWRIGHT_AVAILABLE = False

try:
    from bs4 import BeautifulSoup
    BS4_AVAILABLE = True
except ImportError:
    BS4_AVAILABLE = False


def check_dependencies():
    """필요한 의존성을 확인합니다."""
    missing = []
    if not PLAYWRIGHT_AVAILABLE:
        missing.append("playwright (pip install playwright && playwright install chromium)")
    if not BS4_AVAILABLE:
        missing.append("beautifulsoup4 (pip install beautifulsoup4)")

    if missing:
        print("필요한 패키지가 설치되지 않았습니다:", file=sys.stderr)
        for pkg in missing:
            print(f"  - {pkg}", file=sys.stderr)
        return False
    return True


def crawl_page(
    url: str,
    wait_time: int = 3000,
    viewport: dict = None,
    user_agent: str = None
) -> Optional[str]:
    """
    웹 페이지를 크롤링합니다.

    Args:
        url: 크롤링할 URL
        wait_time: 페이지 로딩 대기 시간 (ms)
        viewport: 뷰포트 크기 (기본: 1920x1080)
        user_agent: User-Agent 문자열

    Returns:
        페이지 HTML 문자열, 실패 시 None
    """
    if not PLAYWRIGHT_AVAILABLE:
        raise ImportError("playwright가 설치되지 않았습니다")

    if viewport is None:
        viewport = {'width': 1920, 'height': 1080}

    if user_agent is None:
        user_agent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36'

    try:
        with sync_playwright() as p:
            browser = p.chromium.launch(headless=True)
            context = browser.new_context(viewport=viewport, user_agent=user_agent)
            page = context.new_page()

            page.goto(url, wait_until='networkidle', timeout=30000)
            page.wait_for_timeout(wait_time)

            html = page.content()
            browser.close()

            return html

    except PlaywrightTimeout:
        print(f"Warning: 페이지 로딩 타임아웃: {url}")
        return None
    except Exception as e:
        print(f"Error: 크롤링 중 오류 발생: {e}")
        return None


def extract_images(html: str, base_url: str, max_count: int = 10) -> List[str]:
    """
    HTML에서 이미지 URL을 추출합니다.

    Args:
        html: HTML 문자열
        base_url: 기준 URL (상대 경로 변환용)
        max_count: 최대 이미지 수

    Returns:
        이미지 URL 리스트
    """
    if not BS4_AVAILABLE:
        raise ImportError("beautifulsoup4가 설치되지 않았습니다")

    soup = BeautifulSoup(html, 'html.parser')
    images = []
    seen = set()

    # 일반적인 제품 이미지 선택자
    selectors = [
        'img[class*="product"]',
        'img[class*="main"]',
        'img[class*="gallery"]',
        '.product-image img',
        '.product-gallery img',
        '.swiper-slide img',
    ]

    for selector in selectors:
        for img in soup.select(selector):
            src = img.get('src') or img.get('data-src') or img.get('data-lazy-src')
            if src:
                full_url = urljoin(base_url, src)
                if full_url not in seen and not full_url.endswith('.svg'):
                    seen.add(full_url)
                    images.append(full_url)

                    if len(images) >= max_count:
                        return images

    return images


def get_domain(url: str) -> str:
    """URL에서 도메인을 추출합니다."""
    parsed = urlparse(url)
    return parsed.netloc
