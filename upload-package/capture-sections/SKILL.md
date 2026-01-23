---
name: capture-sections
description: HTML 상세페이지를 섹션별 고해상도 이미지로 캡처합니다. "섹션 캡처", "HTML 이미지로", "스크린샷" 요청 시 사용.
---

# 섹션 캡처

HTML 상세페이지를 섹션별 고해상도 이미지로 캡처합니다.

## 트리거
- "섹션별로 캡처해줘"
- "HTML 이미지로 변환"
- "상세페이지 스크린샷"

## 기능
- HTML 파일을 섹션별로 자동 감지
- 고해상도 PNG 이미지로 캡처
- 2x~4x 스케일 지원

## 사용법
```
python3 capture_sections.py --html-file input.html --output-dir ./output
```

## 옵션
| 옵션 | 설명 |
|------|------|
| --html-file | 변환할 HTML 파일 경로 |
| --output-dir | 이미지 저장 디렉토리 |
| --scale | 이미지 스케일 (기본: 2.0) |
| --width | 뷰포트 너비 (기본: 1440px) |
| --full-page | 전체 페이지 스크린샷 포함 |

## 섹션 자동 감지
- section 태그
- class에 'section', 'block', 'container' 포함
- article, main > div

## 출력 파일명
`{순번}_{클래스명}.png`
예: 01_hero-section.png, 02_product-info.png
