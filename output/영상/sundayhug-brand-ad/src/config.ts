import type { BrandedShowcaseConfig } from "./types";

export const brandAdConfig: BrandedShowcaseConfig = {
  brand: {
    name: "썬데이허그",
    color: "#A8C5A0",
  },
  header: {
    logoSrc: "images/logo.svg",
    productName: "꿀잠 슬리핑백",
  },
  transitionDurationFrames: 6,
  scenes: [
    {
      type: "intro",
      videoSrc: "videos/intro-brand.mp4",
      videoStartFrom: 1,
      durationSeconds: 3,
      caption: {
        text: "아기의 안전한 수면을 위한 선택",
        highlightWords: ["안전한 수면"],
      },
      captionDelay: 5,
      narrationSrc: "audio/scene1.mp3",
      narrationDelay: 3,
    },
    {
      type: "feature",
      videoSrc: "videos/feature-safe.mp4",
      videoStartFrom: 10,
      durationSeconds: 5,
      caption: {
        text: "움직여도 얼굴을 가리지 않아 안심",
        highlightWords: ["얼굴을 가리지 않아"],
      },
      captionDelay: 5,
      narrationSrc: "audio/scene2.mp3",
      narrationDelay: 3,
    },
    {
      type: "feature",
      videoSrc: "videos/feature-material.mp4",
      videoStartFrom: 6,
      durationSeconds: 4,
      caption: {
        text: "실키 밤부소재로 부드럽게",
        highlightWords: ["실키 밤부소재"],
      },
      captionDelay: 5,
      narrationSrc: "audio/scene3.mp3",
      narrationDelay: 3,
    },
    {
      type: "feature",
      videoSrc: "videos/feature-sleep.mp4",
      videoStartFrom: 8,
      durationSeconds: 4,
      caption: {
        text: "밤잠 12시간, 꿀잠을 선물합니다",
        highlightWords: ["12시간", "꿀잠"],
      },
      captionDelay: 5,
      narrationSrc: "audio/scene4.mp3",
      narrationDelay: 3,
    },
    {
      type: "cta",
      videoSrc: "videos/cta-baby.mp4",
      videoStartFrom: 3,
      durationSeconds: 4,
      caption: {
        text: "뒤집기 후부터 5세까지, 썬데이허그",
        highlightWords: ["5세까지", "썬데이허그"],
      },
      captionDelay: 5,
      narrationSrc: "audio/scene5.mp3",
      narrationDelay: 3,
    },
  ],
};
