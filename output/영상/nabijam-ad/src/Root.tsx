import React from "react";
import { Composition } from "remotion";
import { NabijamAd } from "./NabijamAd";
import { nabijamAdConfig } from "./config";
import { calculateTotalFrames } from "./utils/timing";

const fps = 30;
const transitionDuration = nabijamAdConfig.transitionDurationFrames ?? 8;
const totalDurationFrames = calculateTotalFrames(
  nabijamAdConfig.scenes,
  fps,
  transitionDuration,
);

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="NabijamAd"
      component={NabijamAd}
      durationInFrames={totalDurationFrames}
      fps={fps}
      width={1080}
      height={1920}
      defaultProps={{ config: nabijamAdConfig }}
    />
  );
};
