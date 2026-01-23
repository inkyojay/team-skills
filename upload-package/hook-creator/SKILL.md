---
name: hook-creator
description: Claude Code 훅(이벤트 핸들러)을 설정하는 방법을 안내합니다. "훅 생성", "이벤트 설정", "자동화" 요청 시 사용.
---

# 훅 생성

Claude Code 훅(이벤트 핸들러)을 설정하는 방법을 안내합니다.

## 트리거
- "훅 만들어줘"
- "이벤트 핸들러 설정"
- "자동화 추가"

## 훅 이벤트

| 이벤트 | 설명 |
|--------|------|
| PreToolUse | 도구 실행 전 |
| PostToolUse | 도구 실행 후 |
| Notification | 알림 발생 시 |
| UserPromptSubmit | 사용자 입력 시 |

## 설정 파일
`.claude/settings.json`

```json
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Edit",
        "command": "echo 'Editing file...'"
      }
    ],
    "PostToolUse": [
      {
        "matcher": "Bash",
        "command": "./scripts/post-bash.sh"
      }
    ]
  }
}
```

## 훅 구성요소

| 필드 | 설명 |
|------|------|
| matcher | 대상 도구/이벤트 |
| command | 실행할 명령어 |
| condition | 조건 (선택) |

## 사용 예시

### 파일 수정 시 자동 포맷팅
```json
{
  "matcher": "Edit",
  "command": "prettier --write $FILE_PATH"
}
```

### 커밋 전 린트 체크
```json
{
  "matcher": "Bash",
  "condition": "contains(command, 'git commit')",
  "command": "npm run lint"
}
```
