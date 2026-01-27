#!/bin/bash
# Google Cloud TTS 나레이션 생성 스크립트
#
# 사용법:
#   ./generate-tts.sh <텍스트> <출력파일명>
#
# 예시:
#   ./generate-tts.sh "이불을 덮어줘도 항상 밖으로 나와있는 우리 아이" audio/scene1.mp3
#
# 사전 요구사항:
#   - Google Cloud CLI (gcloud) 설치 및 인증
#   - Text-to-Speech API 활성화
#   - GOOGLE_CLOUD_PROJECT 환경변수 설정 (선택)
#
# 음성 설정:
#   - ko-KR-Wavenet-A: 여성 음성 (기본)
#   - ko-KR-Wavenet-C: 남성 음성
#   - 속도(speakingRate): 1.0 기본, 1.1 약간 빠르게

set -euo pipefail

TEXT="${1:?텍스트를 입력하세요}"
OUTPUT="${2:?출력 파일명을 입력하세요 (예: audio/scene1.mp3)}"

# 설정 (필요시 수정)
VOICE_NAME="${VOICE_NAME:-ko-KR-Wavenet-A}"
SPEAKING_RATE="${SPEAKING_RATE:-1.05}"
PITCH="${PITCH:-0}"

# 출력 디렉토리 생성
mkdir -p "$(dirname "$OUTPUT")"

# TTS 요청 JSON 생성
REQUEST_JSON=$(cat <<EOF
{
  "input": { "text": "$TEXT" },
  "voice": {
    "languageCode": "ko-KR",
    "name": "$VOICE_NAME"
  },
  "audioConfig": {
    "audioEncoding": "MP3",
    "speakingRate": $SPEAKING_RATE,
    "pitch": $PITCH,
    "effectsProfileId": ["small-bluetooth-speaker-class-device"]
  }
}
EOF
)

# API 호출
echo "🎙️ TTS 생성: \"$TEXT\""
echo "   음성: $VOICE_NAME, 속도: $SPEAKING_RATE"

RESPONSE=$(curl -s -X POST \
  -H "Authorization: Bearer $(gcloud auth print-access-token)" \
  -H "Content-Type: application/json" \
  -d "$REQUEST_JSON" \
  "https://texttospeech.googleapis.com/v1/text:synthesize")

# audioContent 추출 및 디코딩
echo "$RESPONSE" | python3 -c "
import sys, json, base64
data = json.load(sys.stdin)
if 'audioContent' in data:
    audio = base64.b64decode(data['audioContent'])
    with open('$OUTPUT', 'wb') as f:
        f.write(audio)
    print(f'   ✅ 저장: $OUTPUT ({len(audio)} bytes)')
else:
    print('   ❌ 오류:', data.get('error', {}).get('message', 'Unknown error'))
    sys.exit(1)
"
