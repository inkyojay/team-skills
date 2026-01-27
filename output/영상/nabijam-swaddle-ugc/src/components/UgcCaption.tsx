import React from "react";
import { useCurrentFrame, useVideoConfig, interpolate, spring } from "remotion";

export const UgcCaption: React.FC<{
  text: string;
  highlightWords?: string[];
  highlightColor?: string;
}> = ({ text, highlightWords = [], highlightColor = "#FFE53B" }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const progress = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 180 },
  });

  const opacity = interpolate(progress, [0, 1], [0, 1]);
  const translateY = interpolate(progress, [0, 1], [20, 0]);

  const renderText = () => {
    if (highlightWords.length === 0) return text;

    const regex = new RegExp(`(${highlightWords.join("|")})`, "g");
    const parts = text.split(regex);

    return parts.map((part, i) =>
      highlightWords.includes(part) ? (
        <span key={i} style={{ color: highlightColor }}>
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
        bottom: 300,
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
          fontSize: 58,
          fontWeight: 900,
          color: "#fff",
          fontFamily: "Pretendard, system-ui, -apple-system, sans-serif",
          textAlign: "center",
          lineHeight: 1.4,
          margin: 0,
          WebkitTextStroke: "2px rgba(0,0,0,0.3)",
          paintOrder: "stroke fill",
          textShadow: [
            "0 4px 12px rgba(0,0,0,0.9)",
            "0 2px 4px rgba(0,0,0,0.9)",
            "0 0 40px rgba(0,0,0,0.5)",
          ].join(", "),
          letterSpacing: -1,
        }}
      >
        {renderText()}
      </p>
    </div>
  );
};
