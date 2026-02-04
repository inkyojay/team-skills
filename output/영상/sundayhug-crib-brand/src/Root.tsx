import React from "react";
import { Composition } from "remotion";
import { CribBrandAd } from "./CribBrandAd";
import { brandAdConfig } from "./config";
import { calculateTotalFrames } from "./utils/timing";

const fps = 30;
const transitionDuration = brandAdConfig.transitionDurationFrames ?? 6;
const totalDurationFrames = calculateTotalFrames(
  brandAdConfig.scenes,
  fps,
  transitionDuration,
);

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="CribBrandAd"
      component={CribBrandAd}
      durationInFrames={totalDurationFrames}
      fps={fps}
      width={1080}
      height={1920}
      defaultProps={{ config: brandAdConfig }}
    />
  );
};
