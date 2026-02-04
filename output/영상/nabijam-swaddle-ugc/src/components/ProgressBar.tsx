import React from "react";
import { useCurrentFrame, useVideoConfig, interpolate } from "remotion";

export const ProgressBar: React.FC<{
  color?: string;
  height?: number;
  topOffset?: number;
}> = ({ color = "#A8C5A0", height = 4, topOffset = 0 }) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  const progress = interpolate(frame, [0, durationInFrames], [0, 100], {
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        position: "absolute",
        top: topOffset,
        left: 0,
        right: 0,
        height,
        backgroundColor: "rgba(255,255,255,0.15)",
        zIndex: 100,
      }}
    >
      <div
        style={{
          width: `${progress}%`,
          height: "100%",
          backgroundColor: color,
          borderRadius: height / 2,
        }}
      />
    </div>
  );
};
