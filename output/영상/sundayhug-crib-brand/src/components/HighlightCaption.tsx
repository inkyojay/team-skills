import React from "react";
import { useCurrentFrame, useVideoConfig, interpolate, spring } from "remotion";

export const HighlightCaption: React.FC<{
  text: string;
  highlightWords?: string[];
  brandColor?: string;
}> = ({ text, highlightWords = [] }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // 텍스트 전체 페이드인
  const textProgress = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 160 },
  });

  const opacity = interpolate(textProgress, [0, 1], [0, 1]);
  const translateY = interpolate(textProgress, [0, 1], [20, 0]);

  // 하이라이트 팝 애니메이션 (텍스트 등장 후 5프레임 뒤에 빵!)
  const highlightDelay = 5;
  const popProgress = spring({
    frame: Math.max(0, frame - highlightDelay),
    fps,
    config: { damping: 8, stiffness: 200, mass: 0.6 },
  });

  const highlightScale = interpolate(popProgress, [0, 1], [0.5, 1]);
  const highlightOpacity = interpolate(popProgress, [0, 1], [0, 1]);

  const renderText = () => {
    if (highlightWords.length === 0) return text;

    const regex = new RegExp(`(${highlightWords.join("|")})`, "g");
    const parts = text.split(regex);

    return parts.map((part, i) =>
      highlightWords.includes(part) ? (
        <span
          key={i}
          style={{
            display: "inline-block",
            background: "#FFD700",
            padding: "8px 18px",
            borderRadius: 12,
            color: "#000",
            fontWeight: 900,
            transform: `scale(${highlightScale})`,
            opacity: highlightOpacity,
            textShadow: "none",
          }}
        >
          {part}
        </span>
      ) : (
        <span key={i}>{part}</span>
      ),
    );
  };

  return (
    <div
      style={{
        position: "absolute",
        bottom: 280,
        left: 0,
        right: 0,
        display: "flex",
        justifyContent: "center",
        padding: "0 50px",
        opacity,
        transform: `translateY(${translateY}px)`,
      }}
    >
      <p
        style={{
          fontSize: 64,
          fontWeight: 800,
          color: "#fff",
          fontFamily: "Pretendard, system-ui, -apple-system, sans-serif",
          textAlign: "center",
          lineHeight: 1.5,
          margin: 0,
          textShadow: [
            "0 4px 12px rgba(0,0,0,0.9)",
            "0 2px 4px rgba(0,0,0,0.95)",
          ].join(", "),
          letterSpacing: -0.5,
        }}
      >
        {renderText()}
      </p>
    </div>
  );
};
