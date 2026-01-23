# Meta 광고 스킬 빠른 시작 가이드

## 설치 확인

```bash
# 필수 패키지
pip install playwright jinja2 requests beautifulsoup4

# Playwright 브라우저 설치
playwright install chromium
```

## 기본 사용법

### 1. URL로 제품 광고 만들기

```
/meta https://example.com/product 광고 만들어줘
```

### 2. 직접 정보 입력

```
/meta 꿀잠슬리핑백 광고 만들어줘
- 가격: 89,000원
- 특징: 모로반사 차단, 4계절 사용
- 타겟: 신생아 부모
```

### 3. 프로모션 광고

```
/meta 블랙프라이데이 30% 할인 광고 만들어줘
```
→ 인터뷰 모드로 상세 정보 수집

## 프리셋 선택

### 단일 이미지 (1080×1080)
- `product-hero`: 제품 중심
- `benefit-focus`: 혜택 강조
- `testimonial`: 후기/리뷰
- `problem-solution`: 문제-해결
- `urgency-cta`: 긴급성/할인
- `lifestyle`: 라이프스타일

### 캐러셀
- `feature-cards`: 기능별 카드
- `step-by-step`: 단계별 설명
- `before-after`: 비포-애프터
- `product-lineup`: 제품 라인업

### 스토리/릴스 (1080×1920)
- `vertical-hero`: 세로 히어로
- `swipe-up-cta`: 스와이프 CTA
- `countdown`: 카운트다운

## 출력 위치

```
/Users/inkyo/skills/meta-ads/output/
├── campaign-name/
│   ├── images/        # 원본 이미지
│   ├── creatives/     # 생성된 광고
│   └── copy.md        # 카피 모음
```

## 카피 톤 선택

1. **감성**: 감정에 호소
2. **기능**: 스펙/기능 강조
3. **긴급성**: 한정/마감 강조
4. **사회적 증거**: 리뷰/판매량
5. **문제-해결**: 고민→해결

## 텍스트 제한

- 헤드라인: 40자
- Primary Text: 125자
- 설명: 30자

## 문제 해결

### 크롤링 실패
- 사이트가 JavaScript로 렌더링되는 경우 대기 시간 증가
- 로그인 필요 사이트는 수동 정보 입력

### 이미지 다운로드 실패
- CORS 제한이 있는 경우 수동 다운로드
- CDN 이미지는 대체로 정상 작동

### PNG 생성 실패
- Playwright 브라우저 설치 확인
- 한글 폰트 설치 확인 (Pretendard 권장)
