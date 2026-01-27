import type { BrandedShowcaseConfig } from "./types";

export const brandAdConfig: BrandedShowcaseConfig = {
  brand: {
    name: "썬데이허그",
    color: "#A8C5A0",
  },
  header: {
    logoSrc: "images/logo.svg",
    productName: "나비잠 속싸개",
  },
  transitionDurationFrames: 6,
  narrationSrc: "audio/narration.mp3",
  narrationDelay: 3,
  bgmSrc: "audio/bgm.mp3",
  bgmVolume: 0.25,
  scenes: [
    {
      type: "intro",
      videoSrc: "videos/intro-product.mp4",
      videoStartFrom: 2,
      durationSeconds: 3,
      caption: {
        text: "신생아 꿀잠의 비밀",
        highlightWords: ["꿀잠"],
      },
      captionDelay: 5,
    },
    {
      type: "feature",
      videoSrc: "videos/feature-moro.mp4",
      videoStartFrom: 5,
      durationSeconds: 4,
      caption: {
        text: "나비잠자세로 모로반사 안심",
        highlightWords: ["모로반사"],
      },
      captionDelay: 5,
    },
    {
      type: "feature",
      videoSrc: "videos/feature-material.mp4",
      videoStartFrom: 3,
      durationSeconds: 4,
      caption: {
        text: "실키 밤부소재로 부드럽게",
        highlightWords: ["실키 밤부소재"],
      },
      captionDelay: 5,
    },
    {
      type: "feature",
      videoSrc: "videos/feature-moro.mp4",
      videoStartFrom: 25,
      durationSeconds: 4,
      caption: {
        text: "간편한 착탈, 기저귀 교체도 쉽게",
        highlightWords: ["간편한 착탈"],
      },
      captionDelay: 5,
    },
    {
      type: "cta",
      videoSrc: "videos/intro-product.mp4",
      videoStartFrom: 12,
      durationSeconds: 4,
      caption: {
        text: "신생아부터 함께, 썬데이허그",
        highlightWords: ["썬데이허그"],
      },
      captionDelay: 5,
    },
  ],
};
