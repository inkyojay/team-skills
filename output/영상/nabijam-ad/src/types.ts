/**
 * 나비잠 속싸개 광고 - 씬 타입 정의
 */

export interface SceneConfig {
  /** 씬 타입: video, image, logo */
  type: "video" | "image" | "logo";
  /** 미디어 소스 파일명 (public/ 기준, logo 타입이면 불필요) */
  src?: string;
  /** 비디오 시작 지점 (초 단위, 기본 0) */
  videoStartFrom?: number;
  /** 씬 길이 (초 단위) */
  durationSeconds: number;
  /** 자막 텍스트 (없으면 자막 미표시) */
  subtitle?: string;
  /** 자막 등장 딜레이 (프레임 단위, 기본 5) */
  subtitleDelay?: number;
  /** 상단 헤더 표시 여부 (기본 true, 엔딩에서 false) */
  showHeader?: boolean;
  /** 나레이션 오디오 파일명 (public/ 기준) */
  narrationSrc?: string;
  /** 나레이션 시작 딜레이 (프레임 단위, 기본 5) */
  narrationDelay?: number;
}

export interface AdConfig {
  scenes: SceneConfig[];
  brand: {
    name: string;
    /** 브랜드 강조 컬러 */
    accentColor: string;
  };
  /** BGM 오디오 파일명 (public/ 기준) */
  bgmSrc?: string;
  /** BGM 볼륨 (0~1, 기본 0.3) */
  bgmVolume?: number;
  /** 씬 전환 트랜지션 길이 (프레임 단위, 기본 8) */
  transitionDurationFrames?: number;
}
