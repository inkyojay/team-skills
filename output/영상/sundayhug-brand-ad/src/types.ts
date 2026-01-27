export interface HighlightCaptionConfig {
  text: string;
  highlightWords?: string[];
}

export interface BrandHeaderConfig {
  logoSrc: string;
  productName: string;
  productImageSrc?: string;
}

export interface ShowcaseSceneConfig {
  videoSrc: string;
  videoStartFrom?: number;
  durationSeconds: number;
  type: "intro" | "feature" | "cta";
  caption: HighlightCaptionConfig;
  narrationSrc?: string;
  narrationDelay?: number;
  captionDelay?: number;
}

export interface BrandedShowcaseConfig {
  scenes: ShowcaseSceneConfig[];
  brand: {
    name: string;
    color: string;
  };
  header: BrandHeaderConfig;
  transitionDurationFrames?: number;
  narrationSrc?: string;
  narrationDelay?: number;
  bgmSrc?: string;
  bgmVolume?: number;
}
