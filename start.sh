#!/bin/bash

# AI 마케팅 스킬팩 시작 스크립트
# 사용법: ./start.sh 또는 더블클릭

cd "$(dirname "$0")"

echo "================================================"
echo "  AI 마케팅 스킬팩"
echo "  144개 스킬 | 11개 에이전트"
echo "================================================"
echo ""

# Claude 설치 확인
if ! command -v claude &> /dev/null; then
    echo "❌ Claude Code가 설치되지 않았습니다."
    echo ""
    echo "설치하려면 다음 명령어를 실행하세요:"
    echo "  npm install -g @anthropic-ai/claude-code"
    echo ""
    read -p "Enter 키를 눌러 종료..."
    exit 1
fi

# 인증 확인
echo "🔐 Claude 인증 확인 중..."
if ! claude auth status &> /dev/null; then
    echo ""
    echo "⚠️  로그인이 필요합니다."
    echo ""
    claude auth login
fi

echo ""
echo "✅ 준비 완료! Claude를 시작합니다."
echo ""
echo "💡 사용 예시:"
echo "   - 카톡 배너 만들어줘"
echo "   - 상세페이지 작성해줘"
echo "   - 브랜드 분석해줘"
echo ""
echo "📚 스킬 목록 보기: open 사용가이드.html"
echo "🚪 종료하기: /exit 또는 Ctrl+C"
echo ""
echo "================================================"
echo ""

# Claude 실행
claude
