---
name: capture-sections
description: 상세페이지 HTML을 섹션별 이미지로 캡처합니다. "/capture-sections [파일경로]" 형태로 사용.
---

# /capture-sections

HTML 상세페이지를 섹션별로 나누어 PNG 이미지로 캡처합니다.

## 사용법

```
/capture-sections <HTML 파일 경로>
```

## 예시

```
/capture-sections sleeping-bag.html
/capture-sections ./pages/new-product.html
```

## 프로세스

### Step 1: HTML 파일 확인

사용자가 제공한 HTML 파일 경로를 확인합니다.
파일이 존재하지 않으면 경로를 다시 요청합니다.

### Step 2: 캡처 도구 확인

Playwright, Selenium, wkhtmltoimage 중 사용 가능한 도구를 확인합니다.
없으면 Playwright 설치를 안내합니다.

### Step 3: 캡처 스크립트 실행

```bash
python3 .claude/skills/sundayhug-page-builder/scripts/capture_sections.py [HTML파일]
```

### Step 4: 결과 안내

캡처된 이미지 목록과 폴더 경로를 안내합니다.

## 섹션 주석 형식

HTML에 다음과 같은 주석이 있어야 섹션 분리가 됩니다:

```html
<!--Intro-->
...섹션 내용...
<!--Intro 끝-->

<!--Point 01-->
...섹션 내용...
<!--Point 01 끝-->

<!--브랜드 비전-->
...섹션 내용...
<!--브랜드 비전 끝-->
```

## 지원되는 섹션

- Intro (인트로)
- 후킹 멘트
- Point 01~05
- 컬러 (라인업/스와이프)
- 원단
- 사이즈 가이드
- 프로모션
- 사은품
- 브랜드 비전
- FAQ
- Stage
- HOW TO
- 경고

주석이 없는 경우 `detail_section` 클래스 기준으로 자동 분리합니다.

## 출력 형식

이미지는 HTML 파일과 같은 폴더에 `[파일명]_sections/` 폴더로 저장됩니다.

```
product_sections/
├── 00_full_page.png   (전체 페이지)
├── 01_intro.png
├── 02_hooking.png
├── 03_point01.png
├── 04_point02.png
├── 05_point03.png
├── 06_size.png
└── 07_brand.png
```

## 옵션 (스크립트 직접 실행 시)

```bash
# 기본 실행 (4개 워커로 병렬 처리)
python3 scripts/capture_sections.py page.html

# 병렬 워커 수 조절
python3 scripts/capture_sections.py page.html --parallel 8

# 다른 옵션들
python3 scripts/capture_sections.py page.html --width 600
python3 scripts/capture_sections.py page.html --no-full
python3 scripts/capture_sections.py page.html --format jpeg
```

| 옵션 | 설명 | 기본값 |
|------|------|--------|
| `-p`, `--parallel` | 병렬 워커 수 | 4 |
| `--width` | 캡처 너비 (px) | 600 |
| `--no-full` | 전체 페이지 캡처 안함 | - |
| `--format` | 이미지 포맷 (png/jpeg) | png |

## 요구사항

다음 중 하나가 필요합니다 (우선순위 순):

1. **Playwright** (권장)
   ```bash
   pip install playwright
   playwright install chromium
   ```

2. **Selenium + Chrome**
   ```bash
   pip install selenium
   # Chrome/ChromeDriver 설치 필요
   ```

3. **wkhtmltoimage**
   ```bash
   apt install wkhtmltopdf
   ```

## 주의사항

- 이미지 경로가 로컬 절대/상대 경로로 설정되어 있어야 정상 렌더링됩니다
- 더미 이미지(dummyimage.com)는 네트워크 연결이 필요합니다
- CSS 파일이 `<!--@css(...)-->` 주석에 지정되어 있어야 스타일이 적용됩니다
