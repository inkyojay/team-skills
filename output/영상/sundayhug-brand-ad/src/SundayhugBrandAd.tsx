import React from "react";
import { AbsoluteFill, Audio, Sequence, staticFile, useVideoConfig } from "remotion";
import { TransitionSeries, linearTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";

import type { BrandedShowcaseConfig } from "./types";
import { BrandHeader } from "./components/BrandHeader";
import { FeatureSlide } from "./components/FeatureSlide";
import { HighlightCaption } from "./components/HighlightCaption";
import { Narration } from "./components/Narration";
import { calculateSceneStarts } from "./utils/timing";

export const SundayhugBrandAd: React.FC<{
  config: BrandedShowcaseConfig;
}> = ({ config }) => {
  const { fps } = useVideoConfig();

  const transitionDuration = config.transitionDurationFrames ?? 8;

  const sceneStarts = calculateSceneStarts(
    config.scenes,
    fps,
    transitionDuration,
  );

  return (
    <AbsoluteFill style={{ backgroundColor: "#000" }}>
      {/* 하단 콘텐츠 (TransitionSeries) */}
      <TransitionSeries>
        {config.scenes.flatMap((scene, i) => {
          const durationInFrames = Math.round(scene.durationSeconds * fps);
          const captionDelay = scene.captionDelay ?? 8;
          const isLast = i === config.scenes.length - 1;

          const elements: React.ReactNode[] = [];

          elements.push(
            <TransitionSeries.Sequence
              key={`scene-${i}`}
              durationInFrames={durationInFrames}
            >
              <FeatureSlide
                src={scene.videoSrc}
                startFrom={scene.videoStartFrom}
              >
                <Sequence from={captionDelay} layout="none">
                  <HighlightCaption
                    text={scene.caption.text}
                    highlightWords={scene.caption.highlightWords}
                    brandColor={config.brand.color}
                  />
                </Sequence>
              </FeatureSlide>
            </TransitionSeries.Sequence>,
          );

          if (!isLast) {
            elements.push(
              <TransitionSeries.Transition
                key={`transition-${i}`}
                presentation={fade()}
                timing={linearTiming({
                  durationInFrames: transitionDuration,
                })}
              />,
            );
          }

          return elements;
        })}
      </TransitionSeries>

      {/* 고정 헤더 (항상 최상위) */}
      <BrandHeader
        logoSrc={config.header.logoSrc}
        productName={config.header.productName}
        productImageSrc={config.header.productImageSrc}
        brandColor={config.brand.color}
      />

      {/* BGM */}
      {config.bgmSrc && (
        <Audio src={staticFile(config.bgmSrc)} volume={config.bgmVolume ?? 0.3} />
      )}

      {/* 나레이션 */}
      {config.narrationSrc && (
        <Sequence from={config.narrationDelay ?? 5} layout="none">
          <Narration src={config.narrationSrc} />
        </Sequence>
      )}
    </AbsoluteFill>
  );
};
