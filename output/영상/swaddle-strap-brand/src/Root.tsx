import React from "react";
import { Composition } from "remotion";
import { SundayhugBrandAd } from "./SundayhugBrandAd";
import { brandAdConfig } from "./config";
import { calculateTotalFrames } from "./utils/timing";

const fps = 30;
const transitionDuration = brandAdConfig.transitionDurationFrames ?? 8;
const totalDurationFrames = calculateTotalFrames(
  brandAdConfig.scenes,
  fps,
  transitionDuration,
);

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="SwaddleStrapBrand"
      component={SundayhugBrandAd}
      durationInFrames={totalDurationFrames}
      fps={fps}
      width={1080}
      height={1920}
      defaultProps={{ config: brandAdConfig }}
    />
  );
};
