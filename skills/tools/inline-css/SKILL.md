---
name: inline-css
description: HTML 파일의 CSS 클래스를 인라인 스타일로 변환합니다. "CSS 인라인 변환", "인라인 스타일로 만들어줘" 요청 시 사용.
---

# CSS 인라인 변환

HTML 파일의 CSS 클래스를 인라인 스타일로 변환합니다.
이메일 템플릿, 상세페이지 등에 유용합니다.

## 트리거
- "CSS 인라인으로 변환해줘"
- "HTML 인라인 스타일로 만들어줘"

## 작업 절차

### 1단계: 파일 분석
- HTML 파일에서 사용된 CSS 클래스 파악
- CSS 파일에서 각 클래스의 스타일 정의 확인

### 2단계: 변환 실행
1. HTML의 class="..." 속성을 찾음
2. 각 클래스를 해당 인라인 스타일로 변환
3. 여러 클래스는 스타일 병합
4. 기존 style 속성이 있으면 추가
5. link rel="stylesheet" 태그 제거

### 3단계: 이미지 태그 처리
모든 img 태그에 기본 스타일 추가:
- max-width: 100%; height: auto; display: block;

### 4단계: 출력
- 원본 파일명에 _inline 접미사 추가
- 예: page.html → page_inline.html

## 주요 CSS 클래스 매핑

**배경색:**
- .bg-color-white → background-color: white; padding: 50px 0;
- .bg-color-dailycream → background-color: #FFFBF5; padding: 50px 0;
- .bg-color-oat → background-color: #EAE2D5; padding: 50px 0;

**타이포그래피:**
- .title → font-size: 24px; font-weight: 600; text-align: center;
- .desc_small → font-size: 15px; line-height: 23px; text-align: center;
- .sub_title → font-size: 18px; font-weight: 600; text-align: center;
