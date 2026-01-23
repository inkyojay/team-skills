---
name: subagent-creator
description: Claude Code 서브 에이전트를 만드는 방법을 안내합니다. "에이전트 생성", "서브에이전트", "Task 에이전트" 요청 시 사용.
---

# 서브 에이전트 생성

Claude Code 서브 에이전트를 만드는 방법을 안내합니다.

## 트리거
- "에이전트 만들어줘"
- "서브에이전트 생성"
- "Task 에이전트 추가"

## 에이전트 구조

### 프론트매터
```markdown
---
name: agent-name
description: 에이전트 설명. 트리거 키워드 포함.
tools: Read, Grep, Glob, Bash, WebSearch, WebFetch
model: sonnet
---
```

### 본문
```markdown
# 에이전트 역할

## When Invoked
1. Step 1
2. Step 2

## Output Format
```

## 사용 가능한 도구

| 도구 | 용도 |
|------|------|
| Read | 파일 읽기 |
| Grep | 텍스트 검색 |
| Glob | 파일 찾기 |
| Bash | 명령어 실행 |
| WebSearch | 웹 검색 |
| WebFetch | 웹페이지 크롤링 |
| Task | 다른 에이전트 호출 |

## 모델 선택

| 모델 | 용도 |
|------|------|
| haiku | 빠른 단순 작업 |
| sonnet | 균형 (기본) |
| opus | 복잡한 작업 |

## 저장 위치
`~/.claude/agents/` 또는 프로젝트 `.claude/agents/`
