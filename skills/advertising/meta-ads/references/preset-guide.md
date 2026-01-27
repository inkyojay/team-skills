# Meta 광고 프리셋 가이드

## 프리셋 개요

HTML/CSS 기반 광고 템플릿으로, Jinja2 템플릿 엔진을 사용하여 데이터를 주입하고 Playwright로 PNG 이미지를 생성합니다.

## 프리셋 위치

```
meta-ads/assets/templates/
├── single-image/     # 피드 단일 이미지 (1080×1080)
├── carousel/         # 캐러셀 (1080×1080 × N장)
└── story/            # 스토리/릴스 (1080×1920)
```

---

## 단일 이미지 프리셋 (1080×1080)

### 1. product-hero

**용도:** 제품을 전면에 내세우는 기본 광고

**레이아웃:**
```
┌─────────────────────┐
│                     │
│   [제품 이미지]      │
│                     │
│  ─────────────────  │
│  강력한 헤드라인     │
│  서브 카피          │
│        [CTA]        │
└─────────────────────┘
```

**데이터 구조:**
```json
{
  "productImage": "/path/to/image.jpg",
  "headline": "헤드라인 텍스트",
  "subCopy": "서브 카피 텍스트",
  "cta": "지금 구매하기",
  "brandColor": "#FF6B6B"
}
```

**추천 상황:**
- 신제품 런칭
- 브랜드 인지도 캠페인
- 제품 비주얼이 강력한 경우

---

### 2. benefit-focus

**용도:** 제품의 핵심 혜택을 강조

**레이아웃:**
```
┌─────────────────────┐
│  ✓ 혜택 1           │
│  ✓ 혜택 2           │
│  ✓ 혜택 3           │
│  ─────────────────  │
│  [제품] 가격        │
│        [CTA]        │
└─────────────────────┘
```

**데이터 구조:**
```json
{
  "benefits": [
    "모로반사 차단으로 깊은 수면",
    "4계절 사용 가능한 온도조절",
    "OEKO-TEX 인증 친환경 소재"
  ],
  "productImage": "/path/to/thumbnail.jpg",
  "price": "89,000원",
  "cta": "지금 구매하기"
}
```

**추천 상황:**
- 기능성 제품
- 경쟁사 대비 장점이 명확한 경우
- 리타겟팅 광고

---

### 3. testimonial

**용도:** 고객 후기로 신뢰 구축

**레이아웃:**
```
┌─────────────────────┐
│  ★★★★★              │
│                     │
│  "리뷰 내용..."     │
│                     │
│  - 구매자 이름      │
│  ─────────────────  │
│  [제품] 지금 구매   │
└─────────────────────┘
```

**데이터 구조:**
```json
{
  "rating": 5,
  "review": "첫날부터 5시간 연속 잤어요! 정말 신세계입니다.",
  "reviewer": "경기 김OO님",
  "productImage": "/path/to/image.jpg",
  "cta": "후기 더 보기"
}
```

**추천 상황:**
- 리뷰가 좋은 제품
- 신규 고객 유치
- 전환 캠페인

---

### 4. problem-solution

**용도:** 고객 고민을 자극하고 해결책 제시

**레이아웃:**
```
┌─────────────────────┐
│  😫 이런 고민       │
│     있으셨나요?     │
│                     │
│  • 문제 1           │
│  • 문제 2           │
│  ─────────────────  │
│  ✨ [제품]으로      │
│     해결하세요!     │
│        [CTA]        │
└─────────────────────┘
```

**데이터 구조:**
```json
{
  "problems": [
    "수시로 깨는 아기",
    "모로반사로 놀라 우는 아기",
    "잠들기까지 오래 걸리는 아기"
  ],
  "productName": "꿀잠슬리핑백",
  "productImage": "/path/to/image.jpg",
  "cta": "해결책 보기"
}
```

**추천 상황:**
- 문제 해결형 제품
- 인지도가 낮은 신제품
- 교육이 필요한 제품

---

### 5. urgency-cta

**용도:** 긴급성으로 즉각적인 행동 유도

**레이아웃:**
```
┌─────────────────────┐
│  🔥 오늘만 30% OFF  │
│  ─────────────────  │
│                     │
│    [제품 이미지]    │
│                     │
│  ₩59,000 → ₩41,300  │
│   [지금 구매하기]   │
└─────────────────────┘
```

**데이터 구조:**
```json
{
  "promoText": "오늘만 30% OFF",
  "productImage": "/path/to/image.jpg",
  "originalPrice": "59,000원",
  "salePrice": "41,300원",
  "discountRate": "30%",
  "cta": "지금 구매하기",
  "urgencyColor": "#FF4444"
}
```

**추천 상황:**
- 프로모션/할인 캠페인
- 시즌 세일
- 한정 수량 판매

---

### 6. lifestyle

**용도:** 브랜드 이미지와 감성 전달

**레이아웃:**
```
┌─────────────────────┐
│                     │
│  [라이프스타일      │
│   이미지]           │
│                     │
│  브랜드 슬로건      │
│  작은 제품 썸네일   │
└─────────────────────┘
```

**데이터 구조:**
```json
{
  "lifestyleImage": "/path/to/lifestyle.jpg",
  "brandSlogan": "아기와 엄마의 편안한 밤",
  "productThumbnail": "/path/to/thumbnail.jpg",
  "brandLogo": "/path/to/logo.png"
}
```

**추천 상황:**
- 브랜드 인지도 캠페인
- 프리미엄 제품
- 감성 마케팅

---

## 캐러셀 프리셋 (1080×1080 × N장)

### 1. feature-cards (5장)

**구성:**
- Card 1: 메인 제품 이미지 + 헤드라인
- Card 2-4: 각 기능 포인트
- Card 5: CTA + 가격

**데이터 구조:**
```json
{
  "mainImage": "/path/to/main.jpg",
  "headline": "꿀잠슬리핑백의 비밀",
  "features": [
    {"icon": "moon", "title": "모로반사 차단", "desc": "깊은 수면 유도"},
    {"icon": "temp", "title": "온도 조절", "desc": "4계절 사용"},
    {"icon": "cert", "title": "안전 인증", "desc": "KC/OEKO-TEX"}
  ],
  "price": "89,000원",
  "cta": "지금 구매하기"
}
```

---

### 2. step-by-step (4장)

**구성:**
- Card 1: "이렇게 사용하세요" 타이틀
- Card 2-4: Step 1, 2, 3

**데이터 구조:**
```json
{
  "title": "3단계로 완성하는 꿀잠",
  "steps": [
    {"num": 1, "image": "/path/to/step1.jpg", "desc": "슬리핑백에 아기를 눕혀요"},
    {"num": 2, "image": "/path/to/step2.jpg", "desc": "지퍼를 올려 감싸요"},
    {"num": 3, "image": "/path/to/step3.jpg", "desc": "꿀잠 타임!"}
  ]
}
```

---

### 3. before-after (3장)

**구성:**
- Card 1: Before 상황
- Card 2: After 결과
- Card 3: 제품 + CTA

**데이터 구조:**
```json
{
  "before": {"image": "/path/to/before.jpg", "text": "밤새 깨는 아기"},
  "after": {"image": "/path/to/after.jpg", "text": "5시간 연속 수면"},
  "product": {"image": "/path/to/product.jpg", "cta": "지금 구매하기"}
}
```

---

### 4. product-lineup (N장)

**구성:**
- 각 카드: 제품 변형/컬러

**데이터 구조:**
```json
{
  "headline": "나에게 맞는 컬러 찾기",
  "products": [
    {"image": "/path/to/pink.jpg", "name": "베이비핑크", "price": "89,000원"},
    {"image": "/path/to/blue.jpg", "name": "스카이블루", "price": "89,000원"},
    {"image": "/path/to/gray.jpg", "name": "차콜그레이", "price": "89,000원"}
  ]
}
```

---

## 스토리/릴스 프리셋 (1080×1920)

### 1. vertical-hero

**레이아웃:**
```
┌───────────┐
│           │
│ [제품     │
│  이미지]  │
│           │
│───────────│
│ 헤드라인  │
│ 서브카피  │
│           │
│   [CTA]   │
│           │
└───────────┘
```

**데이터 구조:**
```json
{
  "productImage": "/path/to/vertical-image.jpg",
  "headline": "아기의 꿀잠을 위한 선택",
  "subCopy": "72,000명이 선택한 슬리핑백",
  "cta": "지금 구매하기"
}
```

---

### 2. swipe-up-cta

스와이프 업을 유도하는 디자인 (하단 화살표 포함)

**데이터 구조:**
```json
{
  "productImage": "/path/to/image.jpg",
  "headline": "자세히 보기",
  "ctaText": "스와이프하세요",
  "arrowAnimation": true
}
```

---

### 3. countdown

프로모션 카운트다운 강조

**데이터 구조:**
```json
{
  "productImage": "/path/to/image.jpg",
  "promoText": "블랙프라이데이",
  "discountText": "30% OFF",
  "countdown": {"days": 2, "hours": 14, "minutes": 30},
  "cta": "지금 구매하기"
}
```

---

## 브랜드 컬러 적용

### 컬러 파일 위치
```
meta-ads/assets/brands/
├── sundayhug-colors.css
└── default-colors.css
```

### 사용법
템플릿에서 CSS 변수로 브랜드 컬러 참조:

```css
:root {
  --brand-primary: #FF6B6B;
  --brand-secondary: #4ECDC4;
  --brand-text: #2D3436;
  --brand-bg: #FFFFFF;
}
```

---

## 프리셋 선택 가이드

| 캠페인 목표 | 1순위 프리셋 | 2순위 프리셋 |
|-------------|-------------|-------------|
| 신제품 런칭 | product-hero | feature-cards |
| 프로모션/할인 | urgency-cta | countdown |
| 브랜드 인지도 | lifestyle | vertical-hero |
| 리타겟팅 | testimonial | problem-solution |
| 기능 설명 | benefit-focus | step-by-step |
| 제품 라인업 | product-lineup | feature-cards |
