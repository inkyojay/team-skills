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
    searchQuery: "신생아 속싸개 추천",
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
      videoStartFrom: 2,
      durationSeconds: 3,
      caption: {
        text: "신생아 속싸개 뭐가 좋을까?",
        highlightWords: ["속싸개"],
      },
      captionDelay: 2,
    },
    {
      type: "demo-clip",
      videoSrc: "videos/demo-product.mp4",
      videoStartFrom: 2,
      durationSeconds: 4,
      caption: {
        text: "나비잠 속싸개 찾았다!",
        highlightWords: ["나비잠 속싸개"],
      },
      captionDelay: 2,
    },
    {
      type: "feature",
      videoSrc: "videos/feature-material.mp4",
      videoStartFrom: 5,
      durationSeconds: 4,
      caption: {
        text: "실키밤부 소재로 야들야들",
        highlightWords: ["실키밤부"],
      },
      captionDelay: 2,
    },
    {
      type: "feature",
      videoSrc: "videos/feature-demo.mp4",
      videoStartFrom: 15,
      durationSeconds: 4,
      caption: {
        text: "나비잠자세로 쏙 감싸주니까 안심",
        highlightWords: ["나비잠자세"],
      },
      captionDelay: 2,
    },
    {
      type: "cta",
      videoSrc: "videos/cta-sleeping.mp4",
      videoStartFrom: 2,
      durationSeconds: 3.5,
      caption: {
        text: "모로반사 걱정 끝, 썬데이허그",
        highlightWords: ["썬데이허그"],
      },
      captionDelay: 2,
    },
  ],
};
