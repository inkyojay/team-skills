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
    searchQuery: "스와들업 졸업 슬리핑백",
  },
  scenes: [
    {
      // scene1.mp3: 2.55초
      type: "selfie-hook",
      videoSrc: "videos/hook-kick.mp4",
      videoStartFrom: 1,
      durationSeconds: 3,
      caption: {
        text: "이불 걷어차는 우리 아기 어쩌죠?",
        highlightWords: ["걷어차는"],
      },
      captionDelay: 2,
    },
    {
      // scene2.mp3: 2.47초
      type: "search-screen",
      videoSrc: "videos/search-screen.mp4",
      videoStartFrom: 3,
      durationSeconds: 3,
      caption: {
        text: "스와들업 졸업 후 뭘 입혀야 하지?",
        highlightWords: ["스와들업 졸업"],
      },
      captionDelay: 2,
    },
    {
      // scene3.mp3: 3.53초
      type: "demo-clip",
      videoSrc: "videos/demo-product.mp4",
      videoStartFrom: 2,
      durationSeconds: 4,
      caption: {
        text: "썬데이허그 꿀잠 슬리핑백!",
        highlightWords: ["썬데이허그", "슬리핑백"],
      },
      captionDelay: 2,
    },
    {
      // scene4.mp3: 2.82초
      type: "feature",
      videoSrc: "videos/feature-material.mp4",
      videoStartFrom: 6,
      durationSeconds: 3.5,
      caption: {
        text: "대나무 실키 소재로 야들야들",
        highlightWords: ["대나무 실키"],
      },
      captionDelay: 2,
    },
    {
      // scene5.mp3: 3.89초
      type: "feature",
      videoSrc: "videos/feature-zipper.mp4",
      videoStartFrom: 7,
      durationSeconds: 4.5,
      caption: {
        text: "투웨이 지퍼로 기저귀 교체 편리!",
        highlightWords: ["투웨이 지퍼"],
      },
      captionDelay: 2,
    },
    {
      // scene6.mp3: 2.82초
      type: "cta",
      videoSrc: "videos/cta-sleeping.mp4",
      videoStartFrom: 34,
      durationSeconds: 3.5,
      caption: {
        text: "꿀잠의 비결, 썬데이허그",
        highlightWords: ["꿀잠", "썬데이허그"],
      },
      captionDelay: 2,
    },
  ],
};
