"""
로깅 유틸리티

일관된 로깅 설정을 제공합니다.
"""

import logging
import sys
from typing import Optional


def setup_logging(
    level: int = logging.INFO,
    format_string: str = None,
    log_file: str = None
) -> logging.Logger:
    """
    로깅을 설정합니다.

    Args:
        level: 로그 레벨 (기본: INFO)
        format_string: 로그 포맷 (기본: 시간 + 레벨 + 메시지)
        log_file: 로그 파일 경로 (선택)

    Returns:
        설정된 루트 로거
    """
    if format_string is None:
        format_string = "%(asctime)s [%(levelname)s] %(message)s"

    # 루트 로거 설정
    logger = logging.getLogger()
    logger.setLevel(level)

    # 기존 핸들러 제거
    for handler in logger.handlers[:]:
        logger.removeHandler(handler)

    # 콘솔 핸들러
    console_handler = logging.StreamHandler(sys.stdout)
    console_handler.setLevel(level)
    console_handler.setFormatter(logging.Formatter(format_string))
    logger.addHandler(console_handler)

    # 파일 핸들러 (선택)
    if log_file:
        file_handler = logging.FileHandler(log_file, encoding='utf-8')
        file_handler.setLevel(level)
        file_handler.setFormatter(logging.Formatter(format_string))
        logger.addHandler(file_handler)

    return logger


def get_logger(name: str) -> logging.Logger:
    """
    이름이 지정된 로거를 가져옵니다.

    Args:
        name: 로거 이름 (보통 __name__)

    Returns:
        로거 인스턴스
    """
    return logging.getLogger(name)


class ProgressLogger:
    """진행 상황을 로깅하는 유틸리티 클래스"""

    def __init__(self, total: int, prefix: str = "진행", logger: logging.Logger = None):
        """
        Args:
            total: 총 항목 수
            prefix: 로그 접두사
            logger: 사용할 로거 (기본: 루트 로거)
        """
        self.total = total
        self.current = 0
        self.prefix = prefix
        self.logger = logger or logging.getLogger()

    def update(self, message: str = None):
        """진행 상황을 업데이트합니다."""
        self.current += 1
        percent = (self.current / self.total) * 100
        msg = f"{self.prefix}: [{self.current}/{self.total}] ({percent:.1f}%)"
        if message:
            msg += f" - {message}"
        self.logger.info(msg)

    def done(self, message: str = "완료"):
        """작업 완료를 로깅합니다."""
        self.logger.info(f"{self.prefix}: {message}")
