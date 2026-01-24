"""
텍스트 처리 유틸리티

가격 추출, 텍스트 정제 등의 기능을 제공합니다.
"""

import re
from typing import Optional


def extract_price(text: str) -> Optional[str]:
    """
    텍스트에서 가격을 추출합니다.

    Args:
        text: 가격이 포함된 텍스트

    Returns:
        "XX,XXX원" 형식의 가격 문자열, 없으면 None

    Examples:
        >>> extract_price("₩59,000")
        '59,000원'
        >>> extract_price("정가 89000원")
        '89,000원'
        >>> extract_price("$29.99")
        '29원'
    """
    patterns = [
        r'₩[\s]*([\d,]+)',          # ₩ 기호
        r'([\d,]+)[\s]*원',          # N원
        r'KRW[\s]*([\d,]+)',         # KRW
        r'\$([\d,]+\.?\d*)',         # 달러
        r'([\d]{1,3}(?:,[\d]{3})+)', # 쉼표 구분 숫자
    ]

    for pattern in patterns:
        match = re.search(pattern, text)
        if match:
            price_str = match.group(1).replace(',', '').split('.')[0]
            try:
                price = int(price_str)
                return f"{price:,}원"
            except ValueError:
                continue

    return None


def clean_text(text: str, max_length: int = None) -> str:
    """
    텍스트를 정제합니다.

    - 앞뒤 공백 제거
    - 연속된 공백을 하나로
    - 줄바꿈을 공백으로 변환

    Args:
        text: 정제할 텍스트
        max_length: 최대 길이 (초과 시 자름)

    Returns:
        정제된 텍스트
    """
    if not text:
        return ""

    # 줄바꿈 → 공백
    text = text.replace('\n', ' ').replace('\r', ' ')
    # 연속 공백 → 단일 공백
    text = re.sub(r'\s+', ' ', text)
    # 앞뒤 공백 제거
    text = text.strip()

    if max_length and len(text) > max_length:
        text = text[:max_length - 3] + "..."

    return text


def truncate_text(text: str, max_length: int, suffix: str = "...") -> str:
    """
    텍스트를 지정된 길이로 자릅니다.

    Args:
        text: 원본 텍스트
        max_length: 최대 길이 (suffix 포함)
        suffix: 생략 표시 문자열

    Returns:
        잘린 텍스트

    Examples:
        >>> truncate_text("Hello World", 8)
        'Hello...'
    """
    if len(text) <= max_length:
        return text

    return text[:max_length - len(suffix)] + suffix


def remove_html_tags(text: str) -> str:
    """
    HTML 태그를 제거합니다.

    Args:
        text: HTML이 포함된 텍스트

    Returns:
        태그가 제거된 텍스트
    """
    return re.sub(r'<[^>]+>', '', text)


def extract_numbers(text: str) -> list:
    """
    텍스트에서 숫자를 추출합니다.

    Args:
        text: 숫자가 포함된 텍스트

    Returns:
        추출된 숫자 리스트

    Examples:
        >>> extract_numbers("72,000명이 선택, 평점 4.8")
        [72000, 4.8]
    """
    # 쉼표 구분 숫자 먼저 처리
    text_clean = re.sub(r'(\d),(\d)', r'\1\2', text)
    # 숫자 추출
    numbers = re.findall(r'\d+\.?\d*', text_clean)
    return [float(n) if '.' in n else int(n) for n in numbers]
