import type { BrandedShowcaseConfig } from "./types";

export const brandAdConfig: BrandedShowcaseConfig = {
  brand: {
    name: "썬데이허그",
    color: "#A8C5A0",
  },
  header: {
    logoSrc: "images/logo.svg",
    productName: "꿀잠 스와들 스트랩",
  },
  transitionDurationFrames: 6,
  narrationSrc: "audio/narration.mp3",
  narrationDelay: 3,
  bgmSrc: "audio/bgm.mp3",
  bgmVolume: 0.25,
  scenes: [
    {
      type: "intro",
      videoSrc: "videos/intro-strap.mp4",
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
        text: "스트랩으로 모로반사 안심",
        highlightWords: ["모로반사"],
      },
      captionDelay: 5,
    },
    {
      type: "feature",
      videoSrc: "videos/feature-velcro.mp4",
      videoStartFrom: 5,
      durationSeconds: 4,
      caption: {
        text: "무소음 벨크로로 조용하게",
        highlightWords: ["무소음 벨크로"],
      },
      captionDelay: 5,
    },
    {
      type: "feature",
      videoSrc: "videos/feature-easy.mp4",
      videoStartFrom: 10,
      durationSeconds: 4,
      caption: {
        text: "간편한 착탈, 기저귀 교체도 쉽게",
        highlightWords: ["간편한 착탈"],
      },
      captionDelay: 5,
    },
    {
      type: "cta",
      videoSrc: "videos/cta-brand.mp4",
      videoStartFrom: 12,
      durationSeconds: 4,
      caption: {
        text: "편안한 수면의 시작, 썬데이허그",
        highlightWords: ["썬데이허그"],
      },
      captionDelay: 5,
    },
  ],
};
