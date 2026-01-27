export interface UgcCaptionConfig {
  text: string;
  highlightWords?: string[];
}

export interface UgcSceneConfig {
  videoSrc: string;
  videoStartFrom?: number;
  durationSeconds: number;
  type: "selfie-hook" | "search-screen" | "demo-clip" | "feature" | "cta";
  caption: UgcCaptionConfig;
  narrationSrc?: string;
  narrationDelay?: number;
  captionDelay?: number;
}

export interface SearchScreenOverlay {
  platform: "naver" | "google" | "coupang";
  searchQuery: string;
}

export interface UgcReviewConfig {
  scenes: UgcSceneConfig[];
  brand: {
    name: string;
    color: string;
  };
  searchOverlay?: SearchScreenOverlay;
  highlightColor?: string;
  transitionDurationFrames?: number;
}
