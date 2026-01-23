---
name: meta-ads
description: |
  Meta(Facebook/Instagram) 광고 카피와 크리에이티브를 생성합니다.
  "메타 광고", "페이스북 광고", "인스타 광고", "광고 소재", "SNS 광고" 요청 시 사용.
triggers:
  - "메타 광고"
  - "페이스북 광고"
  - "인스타 광고"
  - "인스타그램 광고"
  - "광고 소재"
  - "SNS 광고"
  - "광고 이미지"
  - "광고 카피"
---

# Meta 광고 스킬

Meta(Facebook/Instagram) 광고 카피와 크리에이티브를 자동으로 생성합니다.

## 기능

1. **웹 크롤링**: URL에서 제품 정보 및 이미지 자동 추출
2. **카피 생성**: 5가지 톤으로 광고 카피 작성
3. **크리에이티브 생성**: HTML 프리셋으로 PNG 광고 이미지 제작
4. **A/B 테스트**: 여러 버전의 광고 세트 생성

## 참조 파일

스킬 실행 전 반드시 참조 파일을 읽어주세요:

```
/Users/inkyo/skills/meta-ads/references/ad-specs.md      # Meta 광고 규격
/Users/inkyo/skills/meta-ads/references/copy-templates.md # 카피 템플릿
/Users/inkyo/skills/meta-ads/references/preset-guide.md   # 프리셋 가이드
```

## 워크플로우

### Step 1: 입력 분석

사용자 입력을 분석하여 모드를 결정합니다:

| 입력 유형 | 처리 방식 |
|-----------|-----------|
| URL 제공 | 웹 크롤링으로 제품정보 + 이미지 추출 |
| 제품명/정보 직접 입력 | 정보 정리 후 진행 |
| 프로모션/할인 광고 | 인터뷰 모드로 상세 요구사항 파악 |

**인터뷰 모드 질문 (프로모션 광고 시):**
1. 어떤 제품/서비스인가요?
2. 할인율 또는 혜택은 무엇인가요?
3. 프로모션 기간은 언제까지인가요?
4. 타겟 고객은 누구인가요?
5. 원하는 분위기는? (긴급함/프리미엄/친근함)

### Step 2: 이미지 수집

URL이 제공된 경우:

```bash
cd /Users/inkyo/skills/meta-ads
python scripts/crawl_product.py --url "URL" --output output/campaign-name/
python scripts/download_images.py --urls "이미지URL목록" --output output/campaign-name/images/
```

이미지가 없으면 사용자에게 이미지 제공 요청.

### Step 3: 카피 생성

references/copy-templates.md를 참고하여 5가지 톤으로 카피 생성:

1. **감성적 (Emotional)**: 감정에 호소, 스토리텔링
2. **기능적 (Functional)**: 제품 기능/스펙 강조
3. **긴급성 (Urgency)**: 한정 기간, 재고 소진 강조
4. **사회적 증거 (Social Proof)**: 리뷰, 판매량, 인증
5. **문제-해결 (Problem-Solution)**: 고객 고민 → 해결책

각 톤별로 생성:
- 헤드라인 (40자 이내)
- Primary Text (125자 이내)
- 설명 (30자 이내)
- CTA 버튼 텍스트

### Step 4: 프리셋 선택 & 크리에이티브 생성

#### 광고 형식별 프리셋

**단일 이미지 (1080×1080)**
| 프리셋 | 용도 | 파일 |
|--------|------|------|
| product-hero | 제품 중심 히어로 | single-image/product-hero.html |
| benefit-focus | 혜택 강조 | single-image/benefit-focus.html |
| testimonial | 후기/리뷰 | single-image/testimonial.html |
| problem-solution | 문제-해결 | single-image/problem-solution.html |
| urgency-cta | 긴급성/CTA | single-image/urgency-cta.html |
| lifestyle | 라이프스타일 | single-image/lifestyle.html |

**캐러셀 (1080×1080 × N장)**
| 프리셋 | 용도 | 파일 |
|--------|------|------|
| feature-cards | 기능별 카드 5장 | carousel/feature-cards.html |
| step-by-step | 단계별 설명 4장 | carousel/step-by-step.html |
| before-after | 비포-애프터 3장 | carousel/before-after.html |
| product-lineup | 제품 라인업 N장 | carousel/product-lineup.html |

**스토리/릴스 (1080×1920)**
| 프리셋 | 용도 | 파일 |
|--------|------|------|
| vertical-hero | 세로 히어로 | story/vertical-hero.html |
| swipe-up-cta | 스와이프 CTA | story/swipe-up-cta.html |
| countdown | 카운트다운 | story/countdown.html |

#### 프리셋 추천 기준

| 캠페인 목표 | 추천 프리셋 |
|-------------|-------------|
| 신제품 런칭 | product-hero, feature-cards |
| 프로모션/할인 | urgency-cta, countdown |
| 브랜드 인지도 | lifestyle, vertical-hero |
| 리타겟팅 | testimonial, problem-solution |
| 기능 설명 | benefit-focus, step-by-step |

#### 크리에이티브 생성

```bash
cd /Users/inkyo/skills/meta-ads
python scripts/generate_ad.py \
  --template assets/templates/single-image/product-hero.html \
  --data '{"headline": "...", "image": "...", "cta": "..."}' \
  --output output/campaign-name/creatives/hero-v1.png
```

### Step 5: 출력

#### 폴더 구조
```
output/campaign-name/
├── images/              # 원본 이미지
├── creatives/           # 생성된 광고 소재
│   ├── single-image/
│   ├── carousel/
│   └── story/
└── copy.md              # 광고 카피 모음
```

#### copy.md 형식

```markdown
# [제품명] Meta 광고 카피

## 캠페인 정보
| 항목 | 내용 |
|------|------|
| 제품 | [제품명] |
| 목표 | [전환/인지도/트래픽] |
| 타겟 | [타겟 설명] |

## 헤드라인 (5개)
1. [감성] ...
2. [기능] ...
3. [사회적 증거] ...
4. [문제-해결] ...
5. [긴급성] ...

## Primary Text
### 버전 A: 감성
...

### 버전 B: 기능
...

### 버전 C: 사회적 증거
...

## CTA 옵션
- 지금 구매하기
- 더 알아보기
- 할인 받기

## A/B 테스트 추천
| 테스트 | 버전 A | 버전 B |
|--------|--------|--------|
| 헤드라인 | #1 | #4 |
| 이미지 | hero-v1 | urgency |
| CTA | 지금 구매하기 | 할인 받기 |
```

## 사용 예시

### 예시 1: URL로 제품 광고 생성
```
사용자: https://www.sundayhug.kr/product/sleeping-bag 이 제품 메타 광고 만들어줘

Claude:
1. URL에서 제품 정보 크롤링
2. 이미지 다운로드
3. 5가지 톤 카피 생성
4. product-hero, benefit-focus 프리셋으로 크리에이티브 생성
5. copy.md + PNG 이미지 출력
```

### 예시 2: 프로모션 광고
```
사용자: 블랙프라이데이 30% 할인 광고 만들어줘

Claude:
1. 인터뷰 모드 진입
2. 제품, 기간, 타겟 등 질문
3. urgency-cta, countdown 프리셋 추천
4. 긴급성 톤 카피 + 크리에이티브 생성
```

### 예시 3: 캐러셀 광고
```
사용자: 슬리핑백 기능 설명하는 캐러셀 광고 만들어줘

Claude:
1. 제품 정보 수집
2. feature-cards 프리셋 선택
3. 5장 카드 구성 (메인 + 기능 4개)
4. 각 카드별 PNG 생성
```

## 브랜드 컬러

브랜드별 컬러 CSS:
- `/Users/inkyo/skills/meta-ads/assets/brands/sundayhug-colors.css`
- `/Users/inkyo/skills/meta-ads/assets/brands/default-colors.css`

## 텍스트 제한 (Meta 정책)

| 요소 | 최대 글자 수 |
|------|-------------|
| Primary Text | 125자 |
| 헤드라인 | 40자 |
| 설명 | 30자 |

## 이미지 규격

| 형식 | 사이즈 | 비율 |
|------|--------|------|
| 피드 단일 이미지 | 1080×1080 | 1:1 |
| 피드 세로형 | 1080×1350 | 4:5 |
| 캐러셀 | 1080×1080 | 1:1 |
| 스토리/릴스 | 1080×1920 | 9:16 |
| 링크 광고 | 1200×628 | 1.91:1 |
