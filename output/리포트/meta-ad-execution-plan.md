# Meta 광고 실행 계획서 (M3 구조 기반)

> **전략**: M3 구조 + 졸업 시스템 + 스윔레인 철학 + 전환 이벤트별 분리
> **제품 수**: 4개 (구매 전환 2개 + 장바구니 전환 2개)
> **일 예산**: 40만원
> **기간**: 8주 (Phase별 진행)

---

## 1. 전체 구조 Overview

```
광고 계정 (40만원/일)
│
├── Campaign 1: [Prospecting] Purchase Testing (CBO, 20만원)
│   │   ※ 구매 확신 높은 제품끼리만 경쟁
│   │
│   ├── Ad Set: 슬리핑백 - Broad (Product A)
│   └── Ad Set: 나비잠 - Broad (Product B)
│
├── Campaign 2: [Prospecting] AddToCart Testing (CBO, 10만원)
│   │   ※ 테스트 필요 제품끼리만 경쟁
│   │
│   ├── Ad Set: 스와들포켓 - Broad (Product C)
│   └── Ad Set: 스와들스트랩 - Broad (Product D)
│
├── Campaign 3: [Scaling] Winners Only (CBO, 0원 → 졸업 후 증액)
│   └── 졸업한 광고만 이동 (처음엔 비어있음)
│
└── Campaign 4: [Retargeting] Recovery (ABO, 10만원)
    ├── Ad Set: Hot - ATC 7일 (5만원)
    └── Ad Set: Warm - VC 30일 (5만원)
```

### 왜 Prospecting을 2개로 분리하는가?

```
❌ 하나의 CBO에 Purchase + AddToCart 혼합 시:
   → AddToCart가 더 "쉬운" 전환이라 예산 편중
   → Purchase 제품이 기회를 못 받음

✅ 전환 이벤트별 분리 시:
   → Purchase끼리만 공정 경쟁 (슬리핑백 vs 나비잠)
   → AddToCart끼리만 공정 경쟁 (스와들포켓 vs 스와들스트랩)
   → 예산 통제 가능 (20만원 vs 10만원)
```

---

## 2. 제품 배치 전략

| 제품 | 슬롯 | 전환 이벤트 | 선택 이유 |
|-----|------|-----------|----------|
| **슬리핑백** | Product A | Purchase | 40% 할인 + 범용성 높음, 객단가 32,900원 |
| **나비잠** | Product B | Purchase | 42% 할인 + 3장 세트(59,900원)로 AOV 높임 |
| **스와들포켓** | Product C | AddToCart | 할인 없음(29,900원), 시장 반응 확인 필요 |
| **스와들스트랩** | Product D | AddToCart | 41% 할인이지만 객단가 낮음(19,900원), 테스트 |

### 장바구니 전환의 역할

```
AddToCart 전환 장점:
├── 더 낮은 CPA로 더 많은 데이터 수집
├── 구매 가능성 있는 제품 빠르게 파악
├── "예비 졸업생" 풀 형성
└── 리타겟팅 오디언스 확보
```

---

## 3. Campaign 1: Prospecting - Purchase (CBO)

### 캠페인 설정

| 항목 | 설정값 |
|------|--------|
| **캠페인 이름** | `META_Conv_Prospecting_Purchase_2025Q1` |
| **목표** | Sales |
| **예산 유형** | CBO (캠페인 예산 최적화) |
| **일 예산** | 200,000원 |
| **입찰 전략** | 최고 볼륨 (Highest Volume) |
| **전환 이벤트** | Purchase |
| **기여 기간** | 7일 클릭, 1일 조회 |

### Ad Set 구성 (2개)

#### Ad Set 1: 슬리핑백_Broad
| 항목 | 설정값 |
|------|--------|
| **타겟팅** | Broad (만 25-54세, 모든 성별) |
| **지역** | 대한민국 |
| **상세 타겟팅** | 없음 (Broad) |
| **제외 타겟** | PUR_180D, ATC_7D, VC_30D |
| **노출 위치** | Advantage+ Placements |
| **크리에이티브 수** | 3개 |

#### Ad Set 2: 나비잠_Broad
| 항목 | 설정값 |
|------|--------|
| **타겟팅** | Broad (만 25-54세, 모든 성별) |
| **제외 타겟** | PUR_180D, ATC_7D, VC_30D |
| **노출 위치** | Advantage+ Placements |
| **크리에이티브 수** | 3개 |

### 크리에이티브 매핑

```
Campaign 1: Purchase Prospecting
│
├── 슬리핑백_Broad - 3개
│   ├── 슬리핑백_Callout: sleeping-bag-callout.png (4x5+1x1)
│   │   └── 카피: "밤새 이불 걷어차는 아기 때문에 걱정이신가요?"
│   ├── 슬리핑백_Stress: sleeping-bag-stress.png
│   │   └── 카피: "10번을 뒤집어도 벗겨지지 않는 설계"
│   └── 슬리핑백_Minimal: sleeping-bag-minimal.png
│       └── 카피: "밤새 따뜻하게 감싸주는 잠"
│
└── 나비잠_Broad - 3개
    ├── 나비잠_Callout: nabijam-callout.png
    │   └── 카피: "밤마다 지퍼 올리다 아기 깨운 적 있나요?"
    ├── 나비잠_Offer: nabijam-offer.png
    │   └── 카피: "3장 세트 59,900원 (47% OFF)"
    └── 나비잠_UGC: nabijam-ugc.png
        └── 카피: "지퍼 소리에 안 깨서 너무 좋아요!"
```

---

## 4. Campaign 2: Prospecting - AddToCart (CBO)

### 캠페인 설정

| 항목 | 설정값 |
|------|--------|
| **캠페인 이름** | `META_Conv_Prospecting_AddToCart_2025Q1` |
| **목표** | Sales |
| **예산 유형** | CBO (캠페인 예산 최적화) |
| **일 예산** | 100,000원 |
| **입찰 전략** | 최고 볼륨 (Highest Volume) |
| **전환 이벤트** | AddToCart |
| **기여 기간** | 7일 클릭, 1일 조회 |

### Ad Set 구성 (2개)

#### Ad Set 1: 스와들포켓_Broad
| 항목 | 설정값 |
|------|--------|
| **타겟팅** | Broad (만 25-54세, 모든 성별) |
| **지역** | 대한민국 |
| **제외 타겟** | PUR_180D, ATC_7D, VC_30D |
| **노출 위치** | Advantage+ Placements |
| **크리에이티브 수** | 2개 |

#### Ad Set 2: 스와들스트랩_Broad
| 항목 | 설정값 |
|------|--------|
| **타겟팅** | Broad (만 25-54세, 모든 성별) |
| **제외 타겟** | PUR_180D, ATC_7D, VC_30D |
| **노출 위치** | Advantage+ Placements |
| **크리에이티브 수** | 2개 |

### 크리에이티브 매핑

```
Campaign 2: AddToCart Prospecting
│
├── 스와들포켓_Broad - 2개
│   ├── 스와들포켓_Callout: swaddle-pocket-callout.png
│   │   └── 카피: "모로반사에 깜짝 놀라 우는 아기, 어떻게 재우세요?"
│   └── 스와들포켓_UGC: swaddle-pocket-ugc.png
│       └── 카피: "포켓에 넣기만 하면 끝이라 남편도 혼자 재울 수 있어요!"
│
└── 스와들스트랩_Broad - 2개
    ├── 스와들스트랩_Stress: swaddle-strap-stress.png
    │   └── 카피: "찍찍이 소리 없이 잠든 아기를 감싸다"
    └── 스와들스트랩_Offer: swaddle-strap-offer.png
        └── 카피: "41% OFF — 19,900원 + 무료배송"
```

---

## 5. Campaign 3: Scaling (Winners Only)

### 캠페인 설정

| 항목 | 설정값 |
|------|--------|
| **캠페인 이름** | `META_Conv_Scaling_Winners_2025Q1` |
| **목표** | Sales |
| **예산 유형** | CBO |
| **일 예산** | 0원 (시작 시) → 졸업 후 증액 |
| **입찰 전략** | 최고 볼륨 → Cost Cap (7주차~) |
| **전환 이벤트** | Purchase (모든 광고세트) |

### 초기 상태

```
Scaling Campaign (초기)
└── (비어있음 - 졸업 대기 중)
```

### 졸업 후 상태 (예시)

```
Scaling Campaign (2주차 이후)
├── Ad Set: 슬리핑백 - Winner 1 (졸업한 크리에이티브)
├── Ad Set: 나비잠 - Winner 1
└── Ad Set: 스와들포켓 - Graduated (ATC→PUR 전환)
```

---

## 6. Campaign 4: Retargeting

### 캠페인 설정

| 항목 | 설정값 |
|------|--------|
| **캠페인 이름** | `META_Conv_Retargeting_Recovery_2025Q1` |
| **목표** | Sales |
| **예산 유형** | ABO (광고세트 예산) |
| **총 일 예산** | 100,000원 |
| **전환 이벤트** | Purchase |

### Ad Set 구성 (2개)

#### Ad Set: Hot Audience
| 항목 | 설정값 |
|------|--------|
| **일 예산** | 50,000원 |
| **타겟** | ATC_7D (7일 내 장바구니) |
| **제외** | PUR_180D |
| **크리에이티브** | Direct Offer 소재 2개 (긴급성/할인) |

**크리에이티브 매핑 (Hot):**
```
├── 슬리핑백_DirectOffer: "40% 할인, 놓치지 마세요" + sleeping-bag-lifestyle.png
└── 나비잠_DirectOffer: "42% 할인, 지금이 기회예요" + nabijam-offer.png
```

#### Ad Set: Warm Audience
| 항목 | 설정값 |
|------|--------|
| **일 예산** | 50,000원 |
| **타겟** | VC_30D + PV_30D |
| **제외** | PUR_180D, ATC_7D |
| **크리에이티브** | UGC/Lifestyle 소재 2개 (리마인드) |

**크리에이티브 매핑 (Warm):**
```
├── 슬리핑백_UGC: "아기가 뒤척이는데 한 번도 벗겨진 적 없어요!" + sleeping-bag-review.png
└── 나비잠_UGC: "지퍼 소리에 안 깨서 너무 좋아요!" + nabijam-ugc.png
```

---

## 7. 졸업 시스템 상세

### 졸업 기준

```
졸업 조건 체크리스트:
├── 조건 1: 해당 광고세트에서 전환 10건 이상
├── 조건 2: 최근 7일 ROAS ≥ 1.5 (또는 CPA ≤ 목표 CPA × 1.3)
├── 조건 3: 3일 연속 안정적 성과 유지
└── 조건 4: 해당 크리에이티브 CTR ≥ 1%
```

### Purchase 제품 (슬리핑백, 나비잠) 졸업

```
[Campaign 1: Prospecting Purchase CBO]
슬리핑백/나비잠 Ad Set
       │
       ▼
   7-14일 테스트
       │
   ┌───┴───────────────────────────┐
   │                               │
   성과 부진                        성과 우수
   │                               │
   ▼                               ▼
   크리에이티브 교체              "졸업"
   (새 크리에이티브 투입)              │
                                   ▼
                          Scaling Campaign으로 이동
                          (해당 크리에이티브만)
```

### AddToCart 제품 (스와들포켓, 스와들스트랩) 졸업 (2단계)

```
[Campaign 2: Prospecting AddToCart CBO]
스와들포켓/스와들스트랩 Ad Set
       │
       ▼
   7-14일 테스트 (ATC 기준)
       │
   ┌───┴───────────────────────────┐
   │                               │
   ATC 부진                        ATC 우수 (50건+)
   │                               │
   ▼                               ▼
   크리에이티브 교체              1차 졸업: ATC→Purchase 전환
   또는 제품 교체                      │
                                   ▼
                          Prospecting에서 Purchase로 테스트
                          (전환 이벤트만 변경)
                                   │
                               7-14일 추가 테스트
                                   │
                          ┌────────┴────────┐
                          │                 │
                       Purchase 부진      Purchase 우수
                          │                 │
                          ▼                 ▼
                       ATC로 복귀        2차 졸업: Scaling으로
```

### 졸업 프로세스 상세

```
Step 1: 성과 확인 (매일)
├── Prospecting CBO 내 각 광고세트 성과 체크
├── 크리에이티브별 성과 비교
└── 졸업 조건 충족 여부 판단

Step 2: 졸업 결정 (7-14일차)
├── 졸업 조건 모두 충족 시
├── 해당 "크리에이티브"를 Scaling Campaign으로 복제
└── 원본은 Prospecting에 유지 (비교용)

Step 3: Scaling Campaign 세팅
├── 새 Ad Set 생성 (졸업한 크리에이티브용)
├── 동일한 Broad 타겟팅
├── 전환 이벤트: Purchase
└── 예산 증액 시작

Step 4: 모니터링
├── 24시간 후 성과 확인
├── Prospecting vs Scaling 비교
└── 문제 시 Scaling 중단, Prospecting 유지
```

---

## 8. 스케일업 전략

### 예산 증액 로드맵

```
Week 1-2: 학습 단계
├── Prospecting Purchase: 20만원
├── Prospecting AddToCart: 10만원
├── Scaling: 0원
├── Retargeting: 10만원
└── 총: 40만원/일

Week 3-4: 첫 졸업 & 스케일
├── Prospecting Purchase: 15만원 (-5만원)
├── Prospecting AddToCart: 10만원 (유지)
├── Scaling: 10만원 (+10만원) ← 졸업 광고
├── Retargeting: 10만원
└── 총: 45만원/일 (+5만원)

Week 5-6: 확장 단계
├── Prospecting Purchase: 10만원
├── Prospecting AddToCart: 10만원
├── Scaling: 20만원 ← 추가 졸업
├── Retargeting: 10만원
└── 총: 50만원/일 (+10만원)

Week 7-8: 성숙 단계
├── Prospecting Purchase: 10만원 (테스트용 유지)
├── Prospecting AddToCart: 5만원
├── Scaling: 30만원 (메인 수익원)
├── Retargeting: 10만원
└── 총: 55만원/일
```

### Scaling Campaign 증액 규칙

```
증액 조건:
├── ROAS ≥ 2.0 (최근 3일)
├── CPA ≤ 목표 CPA
└── 안정적 전환 발생

증액 방법:
├── 1회 증액: 최대 +20%
├── 증액 후 24시간 모니터링
├── 안정 시 다음 증액
└── 불안정 시 원복

증액 예시:
Day 1: 10만원
Day 3: 12만원 (+20%)
Day 5: 14.4만원 (+20%)
Day 7: 17만원 (+20%)
```

---

## 9. 8주 실행 스케줄

### Phase 1: 런칭 & 학습 (Week 1-2)

#### Day 1: 세팅 & 런칭
```
[ ] Custom Audience 생성
    ├── PUR_180D (180일 구매자)
    ├── PUR_30D (30일 구매자)
    ├── ATC_7D (7일 장바구니)
    ├── ATC_30D (30일 장바구니)
    ├── VC_30D (30일 상품조회)
    └── PV_30D (30일 페이지방문)

[ ] Campaign 1 (Prospecting - Purchase) 생성 & 활성화
[ ] Campaign 2 (Prospecting - AddToCart) 생성 & 활성화
[ ] Campaign 4 (Retargeting) 생성 & 활성화
[ ] Campaign 3 (Scaling) 생성 (비활성 상태로)
[ ] 픽셀 이벤트 정상 작동 확인
```

#### Day 2-7: 학습 기간
```
[ ] 매일 체크 (건드리지 않음!)
    ├── 예산 소진율
    ├── 노출/도달
    ├── 승인 상태
    └── 이상 징후만 확인

[ ] 절대 금지 사항
    ├── 예산 변경
    ├── 타겟 변경
    ├── 크리에이티브 ON/OFF
    └── 입찰 전략 변경
```

#### Day 8-14: 첫 분석 & 최적화
```
[ ] Day 8: 첫 성과 분석
    ├── 광고세트별 ROAS/CPA 비교
    ├── 크리에이티브별 CTR 비교
    ├── 제품별 성과 순위
    └── 졸업 후보 파악

[ ] Day 10: 저성과 정리
    ├── CTR < 0.5% 크리에이티브 OFF
    ├── 지출 0원 광고세트 점검
    └── 새 크리에이티브 1-2개 추가

[ ] Day 14: 1차 졸업 판단
    ├── 졸업 조건 충족 광고 파악
    ├── Scaling Campaign 활성화 준비
    └── 2주차 리포트 작성
```

### Phase 2: 첫 졸업 & 스케일 (Week 3-4)

#### Day 15-17: 첫 졸업 실행
```
[ ] 졸업 조건 충족 크리에이티브 확인
    예상: 슬리핑백 또는 나비잠에서 1-2개

[ ] Scaling Campaign 세팅
    ├── 졸업 크리에이티브 복제
    ├── Ad Set 생성 (Broad 타겟)
    ├── 전환 이벤트: Purchase
    └── 일 예산: 10만원으로 시작

[ ] 예산 재배분
    ├── Prospecting Purchase: 20만원 → 15만원
    ├── Prospecting AddToCart: 10만원 (유지)
    ├── Scaling: 0원 → 10만원
    └── Retargeting: 10만원 (유지)
```

#### Day 18-21: 스케일 모니터링
```
[ ] Scaling Campaign 성과 확인
    ├── ROAS 확인 (목표: ≥ 1.5)
    ├── CPA 안정성
    └── Prospecting 대비 비교

[ ] 문제 시 대응
    ├── ROAS < 1.0 연속 2일: Scaling 일시 중단
    ├── CPA 급등: 예산 -30%
    └── 안정 시: 유지
```

#### Day 22-28: 크리에이티브 리프레시
```
[ ] 새 크리에이티브 제작 & 투입
    ├── 성과 좋은 콘셉트 변형 2개
    ├── 완전 새로운 콘셉트 1개
    └── Prospecting에 추가

[ ] AddToCart 제품 1차 졸업 검토
    ├── 스와들포켓/스와들스트랩 중 ATC 50건+ 제품
    ├── ATC→Purchase 전환 테스트 준비
    └── 전환율 분석 (ATC → PUR)

[ ] 4주차 리포트 작성
```

### Phase 3: 확장 (Week 5-6)

#### Day 29-35: 추가 졸업 & 증액
```
[ ] 2차 졸업 실행
    ├── Prospecting에서 추가 성공 크리에이티브
    ├── AddToCart → Purchase 전환 제품

[ ] Scaling Campaign 증액
    ├── 기존 Ad Set: +20%
    ├── 새 졸업 Ad Set 추가
    └── 목표: 일 20만원

[ ] 예산 재배분
    ├── Prospecting Purchase: 15만원 → 10만원
    ├── Prospecting AddToCart: 10만원 (유지)
    ├── Scaling: 10만원 → 20만원
    └── Retargeting: 10만원 (유지)
```

#### Day 36-42: 최적화 심화
```
[ ] 요일별 성과 분석
    ├── 최근 4주 데이터 분석
    ├── 고성과 요일 파악
    └── 요일별 예산 조정 검토

[ ] 연령/성별 분석
    ├── 성과 좋은 세그먼트 파악
    ├── 타겟 조정 검토
    └── (급격한 변경 금지)

[ ] 6주차 리포트 작성
```

### Phase 4: 성숙 & Cost Cap 도입 (Week 7-8)

#### Day 43-49: Cost Cap 준비
```
[ ] Cost Cap 도입 조건 확인
    ├── 총 구매 전환 50건+
    ├── CPA 안정화 여부
    └── 계정 "신호" 충분 여부

[ ] Cost Cap 테스트 (조건 충족 시)
    ├── Scaling Campaign 일부 Ad Set에만
    ├── Cost Cap = 현재 평균 CPA × 1.2
    └── 48시간 모니터링
```

#### Day 50-56: 안정화
```
[ ] 최종 구조 정리
    ├── Prospecting Purchase: 10만원 (테스트 전용)
    ├── Prospecting AddToCart: 5만원 (테스트 전용)
    ├── Scaling: 30만원 (메인 수익원)
    └── Retargeting: 10만원

[ ] 다음 달 계획 수립
    ├── 신제품 추가 여부
    ├── 예산 증액 계획
    └── 크리에이티브 로드맵

[ ] 8주 최종 리포트 작성
```

---

## 10. 크리에이티브 운영 가이드

### 크리에이티브 교체 타이밍

```
교체 신호:
├── CTR 하락 (최고점 대비 50% 이상)
├── Frequency > 7 (피로도)
├── CPA 급등 (평균 대비 2배)
└── 2주 이상 성과 정체

교체 방법:
├── 기존 크리에이티브 OFF (삭제 X)
├── 새 크리에이티브 동일 광고세트에 추가
└── 7일 학습 후 판단
```

### 주간 크리에이티브 투입 계획

```
Week 1: 초기 10개 (런칭)
Week 2: +0개 (학습 기간)
Week 3: +2개 (저성과 교체)
Week 4: +3개 (성공 콘셉트 변형 + 신규)
Week 5: +2개
Week 6: +2개
Week 7: +2개
Week 8: +2개

총 8주: 약 23개 크리에이티브 테스트
```

### 크리에이티브 콘셉트 다양화

```
테스트할 콘셉트 유형:
├── Hook 변형 (첫 3초)
├── 형식 변형 (비디오/이미지/카루셀)
├── 메시지 변형 (혜택/문제해결/사회적증거)
├── 길이 변형 (15초/30초/60초)
└── 스타일 변형 (프로/UGC/리뷰)
```

---

## 11. KPI & 의사결정 기준

### 핵심 KPI

| 지표 | 목표 | 위험 신호 | 액션 |
|-----|------|---------|------|
| **ROAS** | ≥ 2.0 | < 1.0 (3일) | 크리에이티브 교체 |
| **CPA** | ≤ 목표 CPA | > 목표 x 2 | 예산 감소 또는 OFF |
| **CTR** | ≥ 1% | < 0.5% | 크리에이티브 OFF |
| **CVR** | ≥ 2% | < 0.5% | 랜딩페이지 점검 |
| **Frequency** | < 5 | > 7 | 오디언스 확장 필요 |

### 광고세트 ON/OFF 기준

```
OFF 조건 (모두 충족 시):
├── 지출 5만원 이상
├── ROAS < 0.5 (또는 전환 0건)
└── 3일 연속

유지 조건:
├── ROAS ≥ 1.0
├── 또는 전환 발생 중
└── 학습 기간 (7일) 미만
```

### 제품별 성과 판단 (8주 후)

```
[Star] - Scaling 메인
├── ROAS ≥ 2.5
├── 안정적 전환
└── 예산 증액 대상

[Cash Cow] - Scaling 유지
├── ROAS 1.5-2.5
├── 수익 기여
└── 현상 유지

[Question Mark] - Prospecting 유지
├── ROAS 1.0-1.5
├── 가능성 있음
└── 크리에이티브 테스트 계속

[Dog] - 종료 검토
├── ROAS < 1.0 (8주간)
├── 개선 없음
└── 제품 교체 고려
```

---

## 12. 예산 배분 요약

### 초기 (Week 1-2)

| 캠페인 | 일 예산 | 비중 |
|-------|--------|------|
| Prospecting - Purchase | 200,000원 | 50% |
| Prospecting - AddToCart | 100,000원 | 25% |
| Scaling | 0원 | 0% |
| Retargeting | 100,000원 | 25% |
| **합계** | **400,000원** | **100%** |

### 성장기 (Week 3-4)

| 캠페인 | 일 예산 | 비중 |
|-------|--------|------|
| Prospecting - Purchase | 150,000원 | 33.3% |
| Prospecting - AddToCart | 100,000원 | 22.2% |
| Scaling | 100,000원 | 22.2% |
| Retargeting | 100,000원 | 22.2% |
| **합계** | **450,000원** | **100%** |

### 성숙기 (Week 7-8)

| 캠페인 | 일 예산 | 비중 |
|-------|--------|------|
| Prospecting - Purchase | 100,000원 | 18.2% |
| Prospecting - AddToCart | 50,000원 | 9.1% |
| Scaling | 300,000원 | 54.5% |
| Retargeting | 100,000원 | 18.2% |
| **합계** | **550,000원** | **100%** |

---

## 13. 체크리스트

### 런칭 전 필수

- [ ] 픽셀 설치 & 이벤트 테스트 (Purchase, ATC, VC, PV)
- [ ] Custom Audience 6개 생성
- [ ] 크리에이티브 10개 준비
- [ ] 랜딩페이지 모바일 최적화
- [ ] UTM 파라미터 설정
- [ ] 광고 정책 위반 요소 점검

### 매일 체크

- [ ] 예산 소진율 확인
- [ ] 광고 승인 상태
- [ ] 이상 징후 확인

### 주간 체크

- [ ] 광고세트별 ROAS/CPA 분석
- [ ] 크리에이티브별 성과 비교
- [ ] 졸업 후보 파악
- [ ] 새 크리에이티브 필요 여부

### 격주 체크

- [ ] 졸업 실행
- [ ] 예산 재배분
- [ ] 리포트 작성
- [ ] 다음 2주 계획

---

## 14. Quick Reference

### 졸업 조건 요약

```
Purchase 제품 (슬리핑백, 나비잠):
├── 전환 10건+
├── ROAS ≥ 1.5 (7일)
├── 3일 연속 안정
└── CTR ≥ 1%

AddToCart 제품 1차 (스와들포켓, 스와들스트랩):
├── ATC 50건+
├── ATC→PUR 전환율 > 3%
└── → Purchase로 전환 테스트

AddToCart 제품 2차:
├── Purchase 전환 성공
├── ROAS ≥ 1.5
└── → Scaling으로 졸업
```

### 예산 증액 규칙

```
조건: ROAS ≥ 2.0 (3일 연속)
증액: +20%/회
간격: 최소 48시간
상한: 일 증액 최대 30%
```

### 위기 대응

```
CPA 급등 시:
1. 24시간 모니터링
2. 지속 시 예산 -30%
3. 48시간 후 재평가
4. 미개선 시 크리에이티브 교체

전환 0건 시:
1. 7일까지 대기 (학습)
2. 7일 후에도 0건: 크리에이티브 점검
3. 랜딩페이지/결제 프로세스 확인
4. 14일 0건: 광고세트 OFF
```

---

*이 계획서는 M3 구조와 졸업 시스템을 기반으로 작성되었으며, 실제 성과에 따라 유연하게 조정해야 합니다.*
