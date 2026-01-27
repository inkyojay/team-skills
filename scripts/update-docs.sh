#!/bin/bash
#
# 스킬 카탈로그 & 사용 가이드 자동 업데이트
#
# 사용법:
#   ./scripts/update-docs.sh
#
# 출력:
#   - SKILL-CATALOG.md
#   - 사용가이드.html
#

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"

cd "$PROJECT_DIR"

echo "📚 문서 자동 업데이트 시작..."
python3 "$SCRIPT_DIR/generate-catalog.py"

echo ""
echo "📁 생성된 파일:"
echo "   - SKILL-CATALOG.md"
echo "   - 사용가이드.html"
