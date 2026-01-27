import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  spring,
  interpolate,
} from "remotion";

/**
 * 엔딩 로고 카드 - 크림 배경 + SUNDAY HUG 로고 + 펄스 글로우
 */
export const LogoEnding: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // 배경 페이드
  const bgFade = spring({
    frame,
    fps,
    config: { damping: 200 },
  });

  // 로고 바운스 팝
  const logoPop = spring({
    frame: frame - 5,
    fps,
    config: { damping: 10, stiffness: 200 },
  });

  // 서브텍스트 슬라이드
  const subIn = spring({
    frame: frame - 15,
    fps,
    config: { damping: 15, stiffness: 150 },
  });

  // 코랄 글로우 펄스
  const glowPulse = interpolate(frame % 40, [0, 20, 40], [0.2, 0.5, 0.2]);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#FFF8F0",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        opacity: interpolate(bgFade, [0, 1], [0, 1]),
      }}
    >
      {/* 로고 */}
      <span
        style={{
          fontSize: 76,
          fontWeight: 900,
          color: "#333",
          fontFamily: "Pretendard, system-ui, -apple-system, sans-serif",
          letterSpacing: 6,
          opacity: interpolate(logoPop, [0, 1], [0, 1]),
          transform: `scale(${interpolate(logoPop, [0, 1], [0.5, 1])})`,
          textShadow: `0 0 30px rgba(232,114,110,${glowPulse})`,
        }}
      >
        SUNDAY HUG
      </span>

      {/* 서브 텍스트 */}
      <span
        style={{
          fontSize: 32,
          fontWeight: 500,
          color: "#999",
          fontFamily: "Pretendard, system-ui, -apple-system, sans-serif",
          letterSpacing: 2,
          marginTop: 24,
          opacity: interpolate(subIn, [0, 1], [0, 1]),
          transform: `translateY(${interpolate(subIn, [0, 1], [20, 0])}px)`,
        }}
      >
        실키밤부 나비잠 속싸개
      </span>
    </AbsoluteFill>
  );
};
