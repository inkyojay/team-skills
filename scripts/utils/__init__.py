"""
공통 유틸리티 모듈

이 패키지는 여러 스킬 스크립트에서 공통으로 사용하는 유틸리티를 제공합니다.

사용법:
    from utils import extract_price, setup_logging
    from utils.web import crawl_page
"""

from .text import extract_price, clean_text, truncate_text
from .logging import setup_logging, get_logger

__all__ = [
    'extract_price',
    'clean_text',
    'truncate_text',
    'setup_logging',
    'get_logger',
]
