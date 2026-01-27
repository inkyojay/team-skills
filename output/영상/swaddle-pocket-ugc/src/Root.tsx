import React from "react";
import { Composition } from "remotion";
import { SundayhugUgcAd } from "./SundayhugUgcAd";
import { ugcAdConfig } from "./config";
import { calculateTotalFrames } from "./utils/timing";

const fps = 30;
const transitionDuration = ugcAdConfig.transitionDurationFrames ?? 4;
const totalDurationFrames = calculateTotalFrames(
  ugcAdConfig.scenes,
  fps,
  transitionDuration,
);

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="SwaddlePocketUgc"
      component={SundayhugUgcAd}
      durationInFrames={totalDurationFrames}
      fps={fps}
      width={1080}
      height={1920}
      defaultProps={{ config: ugcAdConfig }}
    />
  );
};
