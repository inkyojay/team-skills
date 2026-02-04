import type { UgcReviewConfig } from "./types";

export const ugcAdConfig: UgcReviewConfig = {
  brand: {
    name: "썬데이허그",
    color: "#A8C5A0",
  },
  highlightColor: "#FFE53B",
  transitionDurationFrames: 4,
  searchOverlay: {
    platform: "naver",
    searchQuery: "접이식 아기침대 추천",
  },
  scenes: [
    {
      // scene1.mp3: 3.58초
      type: "selfie-hook",
      videoSrc: "videos/ankko.mp4",
      videoStartFrom: 1,
      durationSeconds: 4,
      caption: {
        text: "아기 잠자리 매번 고민되시죠?",
        highlightWords: ["잠자리"],
      },
      narrationSrc: "audio/scene1.mp3",
      narrationDelay: 2,
      captionDelay: 2,
    },
    {
      // scene2.mp3: 4.51초
      type: "search-screen",
      videoSrc: "videos/joy.mp4",
      videoStartFrom: 2,
      durationSeconds: 5,
      caption: {
        text: "접이식 아기침대 뭐가 좋을까?",
        highlightWords: ["접이식 아기침대"],
      },
      narrationSrc: "audio/scene2.mp3",
      narrationDelay: 2,
      captionDelay: 2,
    },
    {
      // scene3.mp3: 4.46초
      type: "demo-clip",
      videoSrc: "videos/jwon.mp4",
      videoStartFrom: 3,
      durationSeconds: 5,
      caption: {
        text: "썬데이허그 꿀잠 ABC 침대!",
        highlightWords: ["썬데이허그", "꿀잠 ABC"],
      },
      narrationSrc: "audio/scene3.mp3",
      narrationDelay: 2,
      captionDelay: 2,
    },
    {
      // scene4.mp3: 4.39초
      type: "feature",
      videoSrc: "videos/eunny.mp4",
      videoStartFrom: 5,
      durationSeconds: 5,
      caption: {
        text: "접이식이라 어디서든 꿀잠",
        highlightWords: ["접이식"],
      },
      narrationSrc: "audio/scene4.mp3",
      narrationDelay: 2,
      captionDelay: 2,
    },
    {
      // scene5.mp3: 3.96초
      type: "cta",
      videoSrc: "videos/ankko.mp4",
      videoStartFrom: 12,
      durationSeconds: 4.5,
      caption: {
        text: "우리 아기 꿀잠, 썬데이허그",
        highlightWords: ["꿀잠", "썬데이허그"],
      },
      narrationSrc: "audio/scene5.mp3",
      narrationDelay: 2,
      captionDelay: 2,
    },
  ],
};
