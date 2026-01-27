import React from "react";
import {
  useCurrentFrame,
  useVideoConfig,
  spring,
  interpolate,
} from "remotion";

/**
 * Konny 스타일 자막 - 노란색 둥근 박스 + 검정 볼드 텍스트
 * 바운스 + 스케일 팝 애니메이션
 */
export const SubtitleBox: React.FC<{
  text: string;
}> = ({ text }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // 바운스 있는 스프링 (더 역동적)
  const popIn = spring({
    frame,
    fps,
    config: { damping: 8, stiffness: 200 },
  });

  const opacity = interpolate(popIn, [0, 0.5], [0, 1], {
    extrapolateRight: "clamp",
  });
  const translateY = interpolate(popIn, [0, 1], [60, 0]);
  const scale = interpolate(popIn, [0, 1], [0.7, 1]);

  // 미묘한 호흡 효과 (안착 후)
  const breathe = interpolate(
    frame,
    [15, 30, 45, 60, 75, 90],
    [1, 1.02, 1, 1.02, 1, 1.02],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  const finalScale = popIn >= 0.95 ? breathe : scale;

  return (
    <div
      style={{
        position: "absolute",
        bottom: 260,
        left: 0,
        right: 0,
        display: "flex",
        justifyContent: "center",
        padding: "0 40px",
        opacity,
        transform: `translateY(${translateY}px) scale(${finalScale})`,
      }}
    >
      <div
        style={{
          backgroundColor: "#FFD43B",
          borderRadius: 24,
          padding: "22px 44px",
          boxShadow: "0 6px 24px rgba(0,0,0,0.3)",
          border: "3px solid rgba(255,255,255,0.3)",
        }}
      >
        <span
          style={{
            fontSize: 48,
            fontWeight: 900,
            color: "#1a1a1a",
            fontFamily: "Pretendard, system-ui, -apple-system, sans-serif",
            letterSpacing: -0.5,
            lineHeight: 1.3,
          }}
        >
          {text}
        </span>
      </div>
    </div>
  );
};
