import React from "react";
import { Audio, staticFile } from "remotion";

export const Narration: React.FC<{
  src: string;
  volume?: number;
}> = ({ src, volume = 1 }) => {
  return <Audio src={staticFile(src)} volume={volume} />;
};
