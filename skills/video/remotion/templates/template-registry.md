# Meta 광고 템플릿 레지스트리

Meta(Instagram/Facebook) 광고용 Remotion 영상 템플릿 목록입니다.
각 템플릿은 특정 광고 유형에 최적화되어 있습니다.

## 템플릿 목록

| 템플릿 | 폴더 | 용도 | 추천 길이 | 적합한 상황 |
|--------|------|------|----------|-----------|
| Meta Reels Ad | `meta-reels-ad/` | 범용 멀티씬 | 6~15초 | 범용 릴스/스토리 광고, 빠른 프로토타이핑 |
| UGC 리뷰형 | `ugc-review/` | UGC 리뷰 | 30~45초 | 개인 후기, 자연스러운 제품 추천, 셀카 훅 |
| 비교 추천형 | `comparison/` | 제품 비교 | 45~60초 | 경쟁 제품 비교, 차별화 강조, 정보 전달 |
| 브랜드 공식형 | `branded-showcase/` | 브랜드 쇼케이스 | 30~45초 | 브랜드 인지도, 공식 제품 소개, 고정 헤더 |
| 리뷰 배너형 | `review-banner/` | 리뷰 배너 | 5~10초 | 피드 광고, 리타겟팅, 짧은 노출, 소셜 프루프 |

## 템플릿 선택 가이드

### 목적별 선택

| 마케팅 목적 | 1순위 | 2순위 |
|------------|-------|-------|
| 브랜드 인지도 | branded-showcase | meta-reels-ad |
| 제품 추천/후기 | ugc-review | review-banner |
| 경쟁 차별화 | comparison | branded-showcase |
| 리타겟팅 | review-banner | ugc-review |
| 빠른 피드 노출 | review-banner | meta-reels-ad |
| 신규 고객 획득 | ugc-review | comparison |

### 예산/리소스별 선택

| 리소스 수준 | 추천 템플릿 | 이유 |
|------------|-----------|------|
| 이미지만 보유 | review-banner | 정적 이미지로 제작 가능 |
| 짧은 클립 보유 | meta-reels-ad | 범용 멀티씬으로 빠른 제작 |
| UGC 영상 보유 | ugc-review | 셀카/시연 영상 활용 |
| 다수 제품 이미지 | comparison | 그리드 비교 레이아웃 |
| 전문 촬영 소스 | branded-showcase | 고정 헤더 + 고급 레이아웃 |

## 공통 아키텍처

모든 멀티씬 템플릿(review-banner 제외)은 다음 패턴을 공유합니다:

1. **Config 기반**: TypeScript 인터페이스로 씬/브랜드/자막 설정
2. **TransitionSeries**: 씬 전환은 `@remotion/transitions` 사용
3. **나레이션 외부 배치**: TransitionSeries 바깥에 절대 프레임으로 Audio 배치
4. **씬 타이밍 유틸**: `meta-reels-ad/utils/timing.ts`의 `calculateSceneStarts()` 공유

## 파일 구조 컨벤션

각 템플릿은 다음 구조를 따릅니다:

```
template-name/
├── TemplateName.tsx       # 메인 컴포넌트
├── types.ts               # Config 타입 정의
├── analysis.md            # 레퍼런스 영상 분석
├── components/            # 전용 컴포넌트
├── references/            # 레퍼런스 영상
└── README.md              # 사용법 문서
```
