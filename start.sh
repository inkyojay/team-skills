#!/bin/bash

# AI 마케팅 스킬팩 시작 스크립트
# 더블클릭하면 서버 자동 시작 + 채팅창 열림

cd "$(dirname "$0")"

echo "================================================"
echo "  AI 마케팅 스킬팩"
echo "  144개 스킬 | 11개 에이전트"
echo "================================================"
echo ""

# Node.js 확인
if ! command -v node &> /dev/null; then
    echo "❌ Node.js가 설치되지 않았습니다."
    echo "   https://nodejs.org 에서 설치하세요."
    read -p "Enter 키를 눌러 종료..."
    exit 1
fi

# 서버가 이미 실행 중인지 확인
if curl -s http://localhost:3000/api/settings > /dev/null 2>&1; then
    echo "✅ 서버가 이미 실행 중입니다."
else
    echo "🚀 서버 시작 중..."

    # 의존성 설치 확인
    if [ ! -d "dashboard/node_modules" ]; then
        echo "📦 의존성 설치 중... (최초 1회)"
        cd dashboard && npm install && cd ..
    fi

    # 서버 백그라운드 실행
    cd dashboard && npm run dev > /dev/null 2>&1 &
    SERVER_PID=$!
    cd ..

    # 서버 준비 대기
    echo -n "   서버 준비 대기"
    for i in {1..30}; do
        if curl -s http://localhost:3000/api/settings > /dev/null 2>&1; then
            echo ""
            echo "✅ 서버 준비 완료!"
            break
        fi
        echo -n "."
        sleep 1
    done
fi

echo ""
echo "🌐 사용가이드 열기..."
open "사용가이드.html"

echo ""
echo "================================================"
echo "  채팅창이 열렸습니다!"
echo "  "
echo "  💡 사용 예시:"
echo "     - 카톡 배너 만들어줘"
echo "     - 상세페이지 작성해줘"
echo "     - 브랜드 분석해줘"
echo ""
echo "  🛑 종료하려면 이 창을 닫으세요"
echo "================================================"

# 서버 로그 표시 (선택사항)
wait
