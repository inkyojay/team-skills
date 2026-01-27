# Meta Reels 광고 템플릿 (Remotion)

Remotion을 사용한 세로형 릴스/스토리 광고 영상 템플릿입니다.

## 규격

| 항목 | 값 |
|------|-----|
| 해상도 | 1080×1920 |
| 비율 | 9:16 (세로) |
| FPS | 30 |
| 권장 길이 | 6~15초 |

## 구성 요소

템플릿에 포함된 오버레이 요소:

1. **브랜드 로고** (상단) - 0.3초부터 페이드인
2. **제품명** (상단 중앙) - 1초부터 페이드인
3. **특징 태그** (중앙) - 2초부터 순차 페이드인
4. **가격** (하단) - 3초부터 스프링 애니메이션
5. **CTA 버튼** (하단) - 4초부터 스프링 + 펄스 애니메이션
6. **별점/리뷰** (최하단) - 5초부터 페이드인

## 사용법

### 1. 프로젝트 생성

```bash
npx create-video@latest my-ad --blank
cd my-ad
npm install
```

### 2. 템플릿 복사

`MetaReelsAd.tsx` 파일을 프로젝트의 `src/` 폴더에 복사합니다.

### 3. Root.tsx 설정

```tsx
import "./index.css";
import { Composition } from "remotion";
import { MetaReelsAd } from "./MetaReelsAd";

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="MetaReelsAd"
      component={MetaReelsAd}
      durationInFrames={30 * 15}  // 15초
      fps={30}
      width={1080}
      height={1920}
      defaultProps={{
        videoSrc: "video.mp4",
      }}
    />
  );
};
```

### 4. 영상 파일 추가

`public/` 폴더에 배경 영상 파일을 추가합니다.

### 5. 미리보기

```bash
npm run dev
```

브라우저에서 http://localhost:3000 접속

### 6. 렌더링

```bash
npx remotion render MetaReelsAd out/ad.mp4
```

## 커스터마이징

### Props

| Prop | 타입 | 설명 |
|------|------|------|
| `videoSrc` | string | 배경 영상 파일명 (public 폴더 기준) |

### 텍스트 수정

컴포넌트 내 다음 항목들을 수정하세요:

- **브랜드명**: `SUNDAY HUG`
- **제품명**: `꿀잠 슬리핑백`
- **서브타이틀**: `실키 밤부`
- **특징 태그**: `["부드러운 촉감", "통기성 우수", "6가지 컬러"]`
- **가격**: `54,900원`
- **CTA**: `지금 구매하기`
- **별점**: `4.9 (227개 리뷰)`

### 색상 수정

주요 색상 변수:
- 브랜드 컬러: `#5a7d65` (그린)
- CTA 그라데이션: `#7c9885` → `#5a7d65`
- 텍스트: `#fff` (흰색), `#2d2d2d` (어두운 회색)

### 타이밍 조절

각 `<Sequence from={프레임}>` 값을 조절하여 등장 타이밍 변경:
- 30fps 기준: 30프레임 = 1초
- 예: `from={60}` = 2초 후 등장

## 파일 구조

```
remotion/templates/meta-reels-ad/
├── MetaReelsAd.tsx    # 메인 컴포넌트
└── README.md          # 이 문서
```

## 관련 스킬

- [meta-ads](../../meta-ads/) - 정적 이미지 광고
- [reels-editor](../../reels-editor/) - FFmpeg 기반 릴스 편집
- [remotion rules](../rules/) - Remotion 베스트 프랙티스
