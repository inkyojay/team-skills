import type { UgcReviewConfig } from "./types";

export const ugcAdConfig: UgcReviewConfig = {
  brand: {
    name: "썬데이허그",
    color: "#A8C5A0",
  },
  highlightColor: "#FFE53B",
  transitionDurationFrames: 4,
  narrationSrc: "audio/narration.mp3",
  narrationDelay: 2,
  bgmSrc: "audio/bgm.mp3",
  bgmVolume: 0.25,
  searchOverlay: {
    platform: "naver",
    searchQuery: "신생아 스와들 포켓 추천",
  },
  scenes: [
    {
      type: "selfie-hook",
      videoSrc: "videos/hook-baby.mp4",
      videoStartFrom: 3,
      durationSeconds: 3,
      caption: {
        text: "우리 아기 모로반사 때문에 잠을 못 자요",
        highlightWords: ["모로반사"],
      },
      captionDelay: 2,
    },
    {
      type: "search-screen",
      videoSrc: "videos/search-screen.mp4",
      videoStartFrom: 3,
      durationSeconds: 3,
      caption: {
        text: "신생아 스와들 뭐가 좋을까?",
        highlightWords: ["스와들"],
      },
      captionDelay: 2,
    },
    {
      type: "demo-clip",
      videoSrc: "videos/demo-product.mp4",
      videoStartFrom: 8,
      durationSeconds: 4,
      caption: {
        text: "스와들 포켓 찾았다!",
        highlightWords: ["스와들 포켓"],
      },
      captionDelay: 2,
    },
    {
      type: "feature",
      videoSrc: "videos/feature-material.mp4",
      videoStartFrom: 3,
      durationSeconds: 4,
      caption: {
        text: "엘라스틴 소재라 쭈욱 늘어나",
        highlightWords: ["엘라스틴"],
      },
      captionDelay: 2,
    },
    {
      type: "feature",
      videoSrc: "videos/feature-demo.mp4",
      videoStartFrom: 18,
      durationSeconds: 4,
      caption: {
        text: "포켓에 쏙 넣으면 끝",
        highlightWords: ["쏙"],
      },
      captionDelay: 2,
    },
    {
      type: "cta",
      videoSrc: "videos/cta-sleeping.mp4",
      videoStartFrom: 25,
      durationSeconds: 3.5,
      caption: {
        text: "모로반사 걱정 끝, 썬데이허그",
        highlightWords: ["썬데이허그"],
      },
      captionDelay: 2,
    },
  ],
};
