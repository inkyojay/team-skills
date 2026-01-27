import React from "react";
import {
  useCurrentFrame,
  useVideoConfig,
  spring,
  interpolate,
} from "remotion";

/**
 * 고정 상단 UI - Konny 스타일 (역동적 입장 애니메이션)
 */
export const TopHeader: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // 로고 뱃지 - 빠르게 팝인
  const badgePop = spring({
    frame,
    fps,
    config: { damping: 10, stiffness: 200 },
  });

  // 서브카피 - 살짝 딜레이
  const subCopyIn = spring({
    frame: frame - 6,
    fps,
    config: { damping: 12, stiffness: 180 },
  });

  // 메인카피 - 더 딜레이
  const mainCopyIn = spring({
    frame: frame - 12,
    fps,
    config: { damping: 12, stiffness: 180 },
  });

  // 미묘한 글로우 펄스 (안착 후)
  const glowPulse = interpolate(
    frame % 60,
    [0, 30, 60],
    [0.15, 0.35, 0.15],
  );

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: 80,
        zIndex: 10,
      }}
    >
      {/* 브랜드 뱃지 */}
      <div
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.95)",
          borderRadius: 50,
          padding: "12px 36px",
          marginBottom: 16,
          boxShadow: `0 2px 12px rgba(0,0,0,0.15), 0 0 20px rgba(232,114,110,${glowPulse})`,
          opacity: interpolate(badgePop, [0, 1], [0, 1]),
          transform: `scale(${interpolate(badgePop, [0, 1], [0.5, 1])})`,
        }}
      >
        <span
          style={{
            fontSize: 28,
            fontWeight: 800,
            color: "#333",
            fontFamily: "Pretendard, system-ui, -apple-system, sans-serif",
            letterSpacing: 2,
          }}
        >
          SUNDAY HUG
        </span>
      </div>

      {/* 서브 카피 - 코랄 */}
      <p
        style={{
          fontSize: 36,
          fontWeight: 700,
          color: "#E8726E",
          fontFamily: "Pretendard, system-ui, -apple-system, sans-serif",
          margin: 0,
          marginBottom: 8,
          textShadow: "0 1px 8px rgba(0,0,0,0.3)",
          opacity: interpolate(subCopyIn, [0, 1], [0, 1]),
          transform: `translateY(${interpolate(subCopyIn, [0, 1], [20, 0])}px)`,
        }}
      >
        속싸개 찾고 있다면?
      </p>

      {/* 메인 카피 */}
      <p
        style={{
          fontSize: 44,
          fontWeight: 900,
          color: "#fff",
          fontFamily: "Pretendard, system-ui, -apple-system, sans-serif",
          margin: 0,
          textShadow: "0 2px 12px rgba(0,0,0,0.5)",
          opacity: interpolate(mainCopyIn, [0, 1], [0, 1]),
          transform: `translateY(${interpolate(mainCopyIn, [0, 1], [20, 0])}px) scale(${interpolate(mainCopyIn, [0, 1], [0.9, 1])})`,
        }}
      >
        실키밤부 나비잠 속싸개
      </p>
    </div>
  );
};
