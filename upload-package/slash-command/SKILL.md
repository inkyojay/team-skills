---
name: slash-command
description: Claude Code 슬래시 커맨드를 만드는 방법을 안내합니다. "슬래시 커맨드", "커맨드 생성", "/명령어 만들기" 요청 시 사용.
---

# 슬래시 커맨드 생성

Claude Code 슬래시 커맨드를 만드는 방법을 안내합니다.

## 트리거
- "슬래시 커맨드 만들어줘"
- "/명령어 생성"
- "커맨드 추가"

## 파일 구조

### 기본 형식
```markdown
---
name: command-name
description: 커맨드 설명
---

# 커맨드 내용

사용자가 /command-name 입력 시 실행될 지시사항
```

### 저장 위치
- 전역: `~/.claude/commands/`
- 프로젝트: `./.claude/commands/`

## 프론트매터 옵션

| 옵션 | 설명 |
|------|------|
| name | 커맨드 이름 (필수) |
| description | 설명 (필수) |
| allowed-tools | 허용 도구 목록 |
| model | 사용 모델 |

## 예시

### 간단한 커맨드
```markdown
---
name: hello
description: 인사 메시지 출력
---

사용자에게 친근하게 인사하세요.
```

### 인자 받는 커맨드
```markdown
---
name: translate
description: 텍스트 번역
---

$ARGUMENTS를 한국어로 번역하세요.
```
