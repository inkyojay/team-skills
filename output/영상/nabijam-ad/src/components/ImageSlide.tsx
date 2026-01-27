import React from "react";
import {
  AbsoluteFill,
  Img,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
} from "remotion";

/**
 * 정적 이미지 씬 - 팝인 + Ken Burns 줌 + 패닝
 */
export const ImageSlide: React.FC<{
  src: string;
  children?: React.ReactNode;
}> = ({ src, children }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // 초기 팝인
  const entrance = spring({
    frame,
    fps,
    config: { damping: 15, stiffness: 120 },
  });

  // Ken Burns: 줌인 + 약간의 패닝
  const scale = interpolate(frame, [0, 90], [1.05, 1.15], {
    extrapolateRight: "clamp",
  });
  const translateX = interpolate(frame, [0, 90], [0, -15], {
    extrapolateRight: "clamp",
  });

  const combinedScale = entrance * scale;

  return (
    <AbsoluteFill style={{ backgroundColor: "#000" }}>
      <Img
        src={staticFile(src)}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transform: `scale(${combinedScale}) translateX(${translateX}px)`,
          opacity: interpolate(entrance, [0, 1], [0, 1]),
        }}
      />
      {/* 하단 그라데이션 */}
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
