import type { AdConfig } from "./types";

/**
 * 나비잠 속싸개 실키밤부 - 광고 설정
 *
 * 스크립트 v2 + TTS/BGM 추가
 * 총 ~19초, 7씬 구성
 */
export const nabijamAdConfig: AdConfig = {
  brand: {
    name: "SUNDAY HUG",
    accentColor: "#E8726E", // 코랄
  },
  bgmSrc: "audio/bgm.mp3",
  bgmVolume: 0.15,
  transitionDurationFrames: 8,
  scenes: [
    // HOOK (0-3초)
    {
      type: "video",
      src: "hook.mp4",
      videoStartFrom: 0,
      durationSeconds: 3,
      subtitle: "또 깼다...",
      showHeader: true,
      narrationSrc: "audio/scene1.mp3",
      narrationDelay: 8,
    },
    // 씬 2 (3-5초)
    {
      type: "video",
      src: "hook.mp4",
      videoStartFrom: 3,
      durationSeconds: 2,
      subtitle: "이거 하나로 해결됐어요",
      showHeader: true,
      narrationSrc: "audio/scene2.mp3",
      narrationDelay: 5,
    },
    // 씬 3 (5-8초) - 제품 클로즈업
    {
      type: "video",
      src: "product-detail.mp4",
      videoStartFrom: 0,
      durationSeconds: 3,
      subtitle: "실키밤부 소재, 실크 같은 촉감",
      showHeader: true,
      narrationSrc: "audio/scene3.mp3",
      narrationDelay: 5,
    },
    // 씬 4 (8-11초) - 아기 나비잠
    {
      type: "video",
      src: "baby-nabijam.mp4",
      videoStartFrom: 0,
      durationSeconds: 3,
      subtitle: "나비잠 자세로 포근하게",
      showHeader: true,
      narrationSrc: "audio/scene4.mp3",
      narrationDelay: 5,
    },
    // 씬 5 (11-14초) - 모로반사 완화
    {
      type: "video",
      src: "hook.mp4",
      videoStartFrom: 6,
      durationSeconds: 3,
      subtitle: "모로반사 완화, 오늘도 육퇴 성공",
      showHeader: true,
      narrationSrc: "audio/scene5.mp3",
      narrationDelay: 5,
    },
    // 씬 6 (14-17초) - CTA
    {
      type: "image",
      src: "flatlay.jpg",
      durationSeconds: 3,
      subtitle: "지금 바로 구매하기!",
      showHeader: true,
      narrationSrc: "audio/scene6.mp3",
      narrationDelay: 5,
    },
    // END (17-19초) - 로고 카드
    {
      type: "logo",
      durationSeconds: 2,
      showHeader: false,
    },
  ],
};
