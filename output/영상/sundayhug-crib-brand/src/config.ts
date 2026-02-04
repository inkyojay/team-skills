import type { BrandedShowcaseConfig } from "./types";

export const brandAdConfig: BrandedShowcaseConfig = {
  brand: {
    name: "썬데이허그",
    color: "#A8C5A0",
  },
  header: {
    logoSrc: "images/logo.svg",
    productName: "꿀잠 ABC 접이식 아기침대",
  },
  transitionDurationFrames: 6,
  scenes: [
    {
      // scene1.mp3: 3.34초
      type: "intro",
      videoSrc: "videos/joy.mp4",
      videoStartFrom: 2,
      durationSeconds: 4,
      caption: {
        text: "아기의 편안한 잠자리를 위한 선택",
        highlightWords: ["편안한 잠자리"],
      },
      narrationSrc: "audio/scene1.mp3",
      narrationDelay: 3,
      captionDelay: 5,
    },
    {
      // scene2.mp3: 4.20초
      type: "feature",
      videoSrc: "videos/jwon.mp4",
      videoStartFrom: 5,
      durationSeconds: 5,
      caption: {
        text: "접이식 설계로 어디서든 간편하게",
        highlightWords: ["접이식 설계"],
      },
      narrationSrc: "audio/scene2.mp3",
      narrationDelay: 3,
      captionDelay: 5,
    },
    {
      // scene3.mp3: 3.31초
      type: "feature",
      videoSrc: "videos/eunny.mp4",
      videoStartFrom: 3,
      durationSeconds: 4,
      caption: {
        text: "안전한 수면 환경을 완성합니다",
        highlightWords: ["안전한 수면 환경"],
      },
      narrationSrc: "audio/scene3.mp3",
      narrationDelay: 3,
      captionDelay: 5,
    },
    {
      // scene4.mp3: 3.67초
      type: "feature",
      videoSrc: "videos/ankko.mp4",
      videoStartFrom: 4,
      durationSeconds: 4.5,
      caption: {
        text: "간편한 설치, 깔끔한 수납",
        highlightWords: ["간편한 설치", "깔끔한 수납"],
      },
      narrationSrc: "audio/scene4.mp3",
      narrationDelay: 3,
      captionDelay: 5,
    },
    {
      // scene5.mp3: 4.01초
      type: "cta",
      videoSrc: "videos/jwon.mp4",
      videoStartFrom: 20,
      durationSeconds: 4.5,
      caption: {
        text: "꿀잠 ABC 침대, 썬데이허그",
        highlightWords: ["꿀잠 ABC", "썬데이허그"],
      },
      narrationSrc: "audio/scene5.mp3",
      narrationDelay: 3,
      captionDelay: 5,
    },
  ],
};
