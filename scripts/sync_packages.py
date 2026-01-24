#!/usr/bin/env python3
"""
배포 패키지 동기화 스크립트

원본 스킬 파일을 upload-package 폴더로 동기화합니다.
SKILL.md 파일만 복사하고, 스크립트와 에셋은 제외합니다.

사용법:
    python scripts/sync_packages.py              # 모든 패키지 동기화
    python scripts/sync_packages.py --dry-run    # 변경사항 미리보기
    python scripts/sync_packages.py --package meta-ads  # 특정 패키지만
"""

import argparse
import os
import shutil
import hashlib
from pathlib import Path
from datetime import datetime

# 스크립트 위치 기준 루트 디렉토리
SCRIPT_DIR = Path(__file__).parent
ROOT_DIR = SCRIPT_DIR.parent
UPLOAD_DIR = ROOT_DIR / "upload-package"

# 동기화할 패키지 매핑 (원본 → 배포용)
PACKAGE_MAPPING = {
    # 에이전트
    "agents/brand-logo-finder.md": "brand-logo",
    "agents/brand-setup-wizard.md": "brand-setup",
    "agents/brand-updater.md": "brand-updater",
    "agents/competitor-analyzer.md": "competitor-analyzer",
    "agents/content-quality-reviewer.md": "content-reviewer",
    "agents/data-report-analyzer.md": "data-report",
    "agents/market-researcher.md": "market-researcher",
    "agents/sundayhug-marketing-hub.md": "marketing-hub",
    "agents/meta-ads-agent.md": "meta-ads",
    "agents/meta-ads-strategy-agent.md": "meta-ads-strategy",
    "agents/meta-ads-creative-agent.md": "meta-ads-creative",
    "agents/meta-ads-copy-agent.md": "meta-ads-copy",

    # 스킬
    "page-builder/SKILL.md": "page-builder",
    "card-news/SKILL.md": "card-news",
    "meta-ads/SKILL.md": "meta-ads",
    "reels-editor/SKILL.md": "reels-editor",
    "brand-tools/brand-dna/SKILL.md": "brand-dna",
    "brand-tools/product-analyzer/SKILL.md": "product-analyzer",

    # 유틸리티
    "commands/inline-css.md": "inline-css",
    "commands/capture-sections.md": "capture-sections",

    # 스킬 생성 도구
    "cc-skills/skill-creator/SKILL.md": "skill-creator",
    "cc-skills/subagent-creator/SKILL.md": "subagent-creator",
    "cc-skills/slash-command-creator/SKILL.md": "slash-command",
    "cc-skills/hook-creator/SKILL.md": "hook-creator",
    "cc-skills/html-section-capture/SKILL.md": "html2img",
    "cc-skills/youtube-collector/SKILL.md": "youtube-collector",
}


def get_file_hash(filepath: Path) -> str:
    """파일의 MD5 해시를 계산합니다."""
    if not filepath.exists():
        return ""
    with open(filepath, 'rb') as f:
        return hashlib.md5(f.read()).hexdigest()


def sync_package(source_path: str, target_name: str, dry_run: bool = False) -> dict:
    """
    단일 패키지를 동기화합니다.

    Args:
        source_path: 원본 파일 상대 경로
        target_name: 타겟 패키지 이름
        dry_run: True면 실제 복사하지 않음

    Returns:
        동기화 결과 딕셔너리
    """
    source = ROOT_DIR / source_path
    target_dir = UPLOAD_DIR / target_name
    target = target_dir / "SKILL.md"

    result = {
        "source": str(source),
        "target": str(target),
        "status": "skipped",
        "reason": ""
    }

    # 원본 파일 확인
    if not source.exists():
        result["status"] = "error"
        result["reason"] = "원본 파일 없음"
        return result

    # 해시 비교
    source_hash = get_file_hash(source)
    target_hash = get_file_hash(target)

    if source_hash == target_hash:
        result["status"] = "unchanged"
        result["reason"] = "동일한 내용"
        return result

    # 동기화 필요
    result["status"] = "updated" if target.exists() else "created"

    if not dry_run:
        target_dir.mkdir(parents=True, exist_ok=True)
        shutil.copy2(source, target)
        result["reason"] = f"동기화 완료"
    else:
        result["reason"] = "동기화 예정"

    return result


def sync_all(dry_run: bool = False, package_filter: str = None) -> list:
    """
    모든 패키지를 동기화합니다.

    Args:
        dry_run: True면 실제 복사하지 않음
        package_filter: 특정 패키지만 동기화 (이름 일부 매칭)

    Returns:
        동기화 결과 리스트
    """
    results = []

    for source_path, target_name in PACKAGE_MAPPING.items():
        # 필터 적용
        if package_filter and package_filter not in target_name:
            continue

        result = sync_package(source_path, target_name, dry_run)
        result["package"] = target_name
        results.append(result)

    return results


def print_report(results: list, dry_run: bool = False):
    """동기화 결과 리포트를 출력합니다."""
    print("\n" + "=" * 60)
    print(f"📦 패키지 동기화 {'(Dry Run)' if dry_run else ''}")
    print("=" * 60)

    # 상태별 분류
    created = [r for r in results if r["status"] == "created"]
    updated = [r for r in results if r["status"] == "updated"]
    unchanged = [r for r in results if r["status"] == "unchanged"]
    errors = [r for r in results if r["status"] == "error"]

    if created:
        print(f"\n🆕 새로 생성 ({len(created)}개):")
        for r in created:
            print(f"   + {r['package']}")

    if updated:
        print(f"\n📝 업데이트 ({len(updated)}개):")
        for r in updated:
            print(f"   ~ {r['package']}")

    if unchanged:
        print(f"\n✅ 변경 없음 ({len(unchanged)}개):")
        for r in unchanged:
            print(f"   = {r['package']}")

    if errors:
        print(f"\n❌ 오류 ({len(errors)}개):")
        for r in errors:
            print(f"   ! {r['package']}: {r['reason']}")

    print("\n" + "-" * 60)
    print(f"총 {len(results)}개 패키지")
    print(f"  생성: {len(created)}, 업데이트: {len(updated)}, "
          f"변경 없음: {len(unchanged)}, 오류: {len(errors)}")

    if dry_run:
        print("\n💡 실제 동기화하려면 --dry-run 옵션 없이 실행하세요.")

    print()


def main():
    parser = argparse.ArgumentParser(
        description="배포 패키지 동기화 스크립트"
    )
    parser.add_argument(
        "--dry-run", "-n",
        action="store_true",
        help="실제 복사하지 않고 변경사항만 미리보기"
    )
    parser.add_argument(
        "--package", "-p",
        help="특정 패키지만 동기화 (이름 일부 매칭)"
    )
    parser.add_argument(
        "--quiet", "-q",
        action="store_true",
        help="변경된 항목만 출력"
    )

    args = parser.parse_args()

    print(f"🔄 동기화 시작... ({datetime.now().strftime('%Y-%m-%d %H:%M:%S')})")

    results = sync_all(dry_run=args.dry_run, package_filter=args.package)

    if args.quiet:
        # 변경된 항목만 출력
        changed = [r for r in results if r["status"] in ("created", "updated", "error")]
        if changed:
            print_report(changed, args.dry_run)
        else:
            print("✅ 모든 패키지가 최신 상태입니다.")
    else:
        print_report(results, args.dry_run)


if __name__ == "__main__":
    main()
