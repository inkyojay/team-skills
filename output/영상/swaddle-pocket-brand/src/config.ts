import type { BrandedShowcaseConfig } from "./types";

export const brandAdConfig: BrandedShowcaseConfig = {
  brand: {
    name: "썬데이허그",
    color: "#A8C5A0",
  },
  header: {
    logoSrc: "images/logo.svg",
    productName: "꿀잠 스와들 포켓",
  },
  transitionDurationFrames: 6,
  narrationSrc: "audio/narration.mp3",
  narrationDelay: 3,
  bgmSrc: "audio/bgm.mp3",
  bgmVolume: 0.25,
  scenes: [
    {
      type: "intro",
      videoSrc: "videos/intro-pocket.mp4",
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
      videoStartFrom: 3,
      durationSeconds: 4,
      caption: {
        text: "포켓에 쏙, 모로반사 안심",
        highlightWords: ["모로반사"],
      },
      captionDelay: 5,
    },
    {
      type: "feature",
      videoSrc: "videos/feature-material.mp4",
      videoStartFrom: 12,
      durationSeconds: 4,
      caption: {
        text: "엘라스틴 소재로 부드럽게",
        highlightWords: ["엘라스틴"],
      },
      captionDelay: 5,
    },
    {
      type: "feature",
      videoSrc: "videos/feature-easy.mp4",
      videoStartFrom: 3,
      durationSeconds: 4,
      caption: {
        text: "쏙 넣기만 하면 끝, 초간편",
        highlightWords: ["초간편"],
      },
      captionDelay: 5,
    },
    {
      type: "cta",
      videoSrc: "videos/cta-brand.mp4",
      videoStartFrom: 20,
      durationSeconds: 4,
      caption: {
        text: "편안한 수면의 시작, 썬데이허그",
        highlightWords: ["썬데이허그"],
      },
      captionDelay: 5,
    },
  ],
};
