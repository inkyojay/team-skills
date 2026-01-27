import React from "react";
import {
  AbsoluteFill,
  Video,
  useVideoConfig,
  useCurrentFrame,
  staticFile,
  interpolate,
} from "remotion";

/**
 * 비디오 클립 + 그라데이션 오버레이 + 느린 줌 효과
 */
export const VideoClip: React.FC<{
  src: string;
  startFrom?: number;
  children?: React.ReactNode;
}> = ({ src, startFrom = 0, children }) => {
  const { fps } = useVideoConfig();
  const frame = useCurrentFrame();

  // 느린 Ken Burns 줌인 효과
  const scale = interpolate(frame, [0, 120], [1.0, 1.08], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill>
      <Video
        src={staticFile(src)}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transform: `scale(${scale})`,
        }}
        startFrom={startFrom * fps}
        muted
      />
      {/* 상단 + 하단 그라데이션 */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0) 18%, rgba(0,0,0,0) 55%, rgba(0,0,0,0.65) 100%)",
        }}
      />
      {children}
    </AbsoluteFill>
  );
};
