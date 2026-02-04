import React from "react";
import { AbsoluteFill, Video, useVideoConfig, staticFile } from "remotion";

export const DemoClip: React.FC<{
  src: string;
  startFrom?: number;
  children?: React.ReactNode;
}> = ({ src, startFrom = 0, children }) => {
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill>
      <Video
        src={staticFile(src)}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
        startFrom={startFrom * fps}
        muted
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 55%, rgba(0,0,0,0.6) 100%)",
        }}
      />
      {children}
    </AbsoluteFill>
  );
};
