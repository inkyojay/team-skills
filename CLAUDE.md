# Team Skills 프로젝트 가이드

이 프로젝트는 마케팅 및 콘텐츠 제작을 위한 AI 스킬 & 에이전트 모음입니다.

## 폴더 구조

```
team-skills/
├── skills/                     # 모든 스킬 (카테고리별)
│   ├── content-creation/       # 콘텐츠 제작
│   ├── video/                  # 영상 제작
│   ├── advertising/            # 광고
│   ├── brand/                  # 브랜드 관리
│   ├── marketing/              # 마케팅 전략
│   └── tools/                  # 유틸리티 도구
├── output/                     # 모든 결과물 (작업 유형별)
│   ├── 광고카피/               # 광고 카피 문서
│   ├── 영상/                   # 영상 소재
│   ├── 리포트/                 # 분석 리포트
│   ├── 상세페이지/             # 상세페이지 HTML
│   ├── 카드뉴스/               # 카드뉴스 이미지
│   └── 기타/                   # 기타 결과물
├── agents/                     # AI 에이전트
├── commands/                   # 슬래시 커맨드
├── scripts/                    # 유틸리티 스크립트
├── SKILL-CATALOG.md            # 스킬 카탈로그 (자동 생성)
└── 사용가이드.html              # HTML 가이드 (자동 생성)
```

## 중요: 문서 자동 업데이트

스킬이나 에이전트를 추가/수정할 때 **반드시** 다음 명령을 실행하세요:

```bash
./scripts/update-docs.sh
```

또는 Python 스크립트 직접 실행:

```bash
python3 scripts/generate-catalog.py
```

이 명령은 다음을 자동으로 업데이트합니다:
- `SKILL-CATALOG.md` - 마크다운 카탈로그
- `사용가이드.html` - HTML 가이드

## 외부 스킬 설치하기 (GitHub 레포에서)

```bash
./scripts/install-skills.sh <repo> <category>
```

예시:
```bash
./scripts/install-skills.sh coreyhaines31/marketingskills marketing
./scripts/install-skills.sh vercel-labs/agent-skills tools
```

이 스크립트는 자동으로:
1. `npx skills add`로 스킬 다운로드
2. `skills/[카테고리]/`로 정리
3. 중복 스킬 스킵
4. 임시 폴더(`.agents/`, `.agent/`) 정리
5. 문서 자동 업데이트

## 새 스킬 직접 추가하기

1. 적절한 카테고리 폴더에 스킬 폴더 생성:
   ```
   skills/[카테고리]/[스킬명]/
   ```

2. `SKILL.md` 파일 작성 (frontmatter 필수):
   ```yaml
   ---
   name: 스킬명
   description: 스킬 설명
   triggers:
     - "트리거 문구1"
     - "트리거 문구2"
   ---
   ```

3. 문서 업데이트 실행:
   ```bash
   ./scripts/update-docs.sh
   ```

## 새 에이전트 추가하기

1. `agents/` 폴더에 `.md` 파일 생성
2. 문서 업데이트 실행

## 결과물 저장 규칙

**모든 스킬과 에이전트의 결과물은 반드시 `output/` 폴더에 저장합니다.**

| 작업 유형 | 저장 경로 | 예시 |
|----------|----------|------|
| 광고 카피 | `output/광고카피/` | `output/광고카피/swaddle-strap-copy.md` |
| 영상 소재 | `output/영상/` | `output/영상/reels-sleeping-bag.mp4` |
| 분석 리포트 | `output/리포트/` | `output/리포트/competitor-analysis.md` |
| 상세페이지 | `output/상세페이지/` | `output/상세페이지/product-landing.html` |
| 카드뉴스 | `output/카드뉴스/` | `output/카드뉴스/sleeping-bag-tips/` |
| 기타 | `output/기타/` | `output/기타/brand-guide.pdf` |

> 개별 스킬 폴더 내에 output을 만들지 마세요. 항상 프로젝트 루트의 `output/`을 사용하세요.

## 카테고리 목록

| 카테고리 | 폴더 | 용도 |
|----------|------|------|
| 콘텐츠 제작 | `content-creation/` | 상세페이지, 카드뉴스 |
| 영상 제작 | `video/` | 릴스 편집, Remotion |
| 브랜드 | `brand/` | 브랜드 분석, 제품 분석 |
| 마케팅 | `marketing/` | CRO, 카피, 전략 |
| 도구 | `tools/` | 유틸리티, 스킬 생성 |
