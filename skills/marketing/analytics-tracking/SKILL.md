---
name: analytics-tracking
description: |
  분석 추적 설정 및 이벤트 기획.
  "분석 설정", "GA4", "이벤트 추적" 요청 시 사용.
triggers:
  - "분석 설정"
  - "GA4"
  - "이벤트 추적"
  - "전환 추적"
  - "픽셀 설정"
---

# 분석 추적 스킬

GA4, Meta Pixel 등 분석 도구를 설정하고 이벤트를 기획합니다.

## Google Analytics 4 (GA4)

### 기본 설정
```markdown
## 필수 설정
1. GA4 속성 생성
2. 데이터 스트림 추가
3. 추적 코드 설치
4. 기본 이벤트 확인

## 향상된 측정 (자동)
- page_view
- scroll
- outbound_click
- site_search
- video_engagement
- file_download
```

### 이커머스 이벤트
```javascript
// 상품 조회
gtag('event', 'view_item', {
  currency: 'KRW',
  value: 59000,
  items: [{
    item_id: 'PILLOW001',
    item_name: '밤부 베개',
    item_brand: '썬데이허그',
    item_category: '베개',
    price: 59000
  }]
});

// 장바구니 추가
gtag('event', 'add_to_cart', {
  currency: 'KRW',
  value: 59000,
  items: [{...}]
});

// 결제 시작
gtag('event', 'begin_checkout', {
  currency: 'KRW',
  value: 59000,
  items: [{...}]
});

// 구매 완료
gtag('event', 'purchase', {
  transaction_id: 'T12345',
  currency: 'KRW',
  value: 59000,
  shipping: 0,
  items: [{...}]
});
```

### 맞춤 이벤트
```javascript
// 리뷰 작성
gtag('event', 'write_review', {
  product_id: 'PILLOW001',
  rating: 5
});

// 위시리스트 추가
gtag('event', 'add_to_wishlist', {
  item_id: 'PILLOW001'
});

// 쿠폰 적용
gtag('event', 'apply_coupon', {
  coupon_code: 'WELCOME15'
});

// 채팅 시작
gtag('event', 'start_chat', {
  page_location: window.location.href
});
```

### 전환 설정
```markdown
## 주요 전환
1. purchase (구매)
2. begin_checkout (결제 시작)
3. add_to_cart (장바구니)
4. sign_up (회원가입)
5. generate_lead (리드)

## 전환 가치
- purchase: 실제 금액
- begin_checkout: 예상 금액 × 50%
- add_to_cart: 예상 금액 × 20%
```

## Meta Pixel

### 기본 이벤트
```javascript
// 페이지 조회
fbq('track', 'PageView');

// 콘텐츠 조회
fbq('track', 'ViewContent', {
  content_ids: ['PILLOW001'],
  content_type: 'product',
  value: 59000,
  currency: 'KRW'
});

// 장바구니 추가
fbq('track', 'AddToCart', {
  content_ids: ['PILLOW001'],
  content_type: 'product',
  value: 59000,
  currency: 'KRW'
});

// 결제 시작
fbq('track', 'InitiateCheckout', {
  content_ids: ['PILLOW001'],
  value: 59000,
  currency: 'KRW'
});

// 구매
fbq('track', 'Purchase', {
  content_ids: ['PILLOW001'],
  content_type: 'product',
  value: 59000,
  currency: 'KRW'
});
```

### 맞춤 전환
```javascript
// 회원가입
fbq('track', 'CompleteRegistration');

// 검색
fbq('track', 'Search', {
  search_string: '아기 베개'
});

// 리드
fbq('track', 'Lead', {
  content_name: '뉴스레터 구독'
});
```

## UTM 파라미터

### 구조
```
?utm_source=instagram
&utm_medium=paid
&utm_campaign=summer_sale
&utm_content=carousel_1
&utm_term=아기베개
```

### 네이밍 규칙
```markdown
## utm_source (출처)
- instagram, facebook, naver, google, email

## utm_medium (매체)
- paid, organic, email, referral, social

## utm_campaign (캠페인)
- summer_sale_2024
- new_product_launch
- retargeting_cart

## utm_content (콘텐츠)
- carousel_1, video_1, image_a

## utm_term (키워드)
- 아기베개, 슬리핑백 (검색 광고용)
```

### UTM 빌더
```markdown
## 예시
Instagram 광고 → 여름 세일 캠페인 → 캐러셀 광고

URL: sundayhug.kr/product/pillow
?utm_source=instagram
&utm_medium=paid
&utm_campaign=summer_sale_2024
&utm_content=carousel_pillow
```

## 대시보드 구성

### 핵심 지표
```markdown
## 트래픽
- 세션 수
- 사용자 수
- 신규 vs 재방문

## 참여
- 평균 세션 시간
- 페이지뷰
- 이탈률

## 전환
- 전환율
- 매출
- 평균 주문 금액

## 획득
- 채널별 트래픽
- 캠페인 성과
- 소스/매체
```

### 리포트 템플릿
```markdown
## 주간 리포트
| 지표 | 이번 주 | 지난 주 | 변화 |
|------|---------|---------|------|
| 세션 | X | X | +X% |
| 구매 | X | X | +X% |
| 매출 | X원 | X원 | +X% |
| CVR | X% | X% | +X% |

## 채널별 성과
| 채널 | 세션 | 매출 | ROAS |
|------|------|------|------|
| Meta | X | X | X% |
| 네이버 | X | X | X% |
| 오가닉 | X | X | - |
```

## 이벤트 기획 체크리스트

### 이커머스 필수
- [ ] view_item (상품 조회)
- [ ] add_to_cart (장바구니)
- [ ] begin_checkout (결제 시작)
- [ ] add_payment_info (결제 정보)
- [ ] purchase (구매 완료)

### 참여 이벤트
- [ ] sign_up (회원가입)
- [ ] login (로그인)
- [ ] search (검색)
- [ ] add_to_wishlist (찜하기)
- [ ] share (공유)

### 마케팅 이벤트
- [ ] view_promotion (프로모션 조회)
- [ ] select_promotion (프로모션 클릭)
- [ ] apply_coupon (쿠폰 적용)

## 출력 형식

```markdown
# [사이트명] 분석 추적 설계

## 추적 도구
- GA4: ✅
- Meta Pixel: ✅
- 네이버 애널리틱스: ✅

## 이벤트 매핑
| 행동 | GA4 이벤트 | Meta 이벤트 |
|------|-----------|------------|
| 상품 조회 | view_item | ViewContent |
| 장바구니 | add_to_cart | AddToCart |
| 구매 | purchase | Purchase |

## 전환 설정
| 전환 | 가치 | 우선순위 |
|------|------|----------|
| purchase | 실제 금액 | 높음 |
| ... | ... | ... |

## UTM 규칙
[네이밍 규칙 정의]

## 대시보드
[주요 지표 정의]
```
