import React from "react";
import { AbsoluteFill, Audio, Sequence, staticFile, useVideoConfig } from "remotion";
import { TransitionSeries, linearTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";

import type { UgcReviewConfig } from "./types";
import { UgcCaption } from "./components/UgcCaption";
import { SelfieHook } from "./components/SelfieHook";
import { SearchScreen } from "./components/SearchScreen";
import { DemoClip } from "./components/DemoClip";
import { Narration } from "./components/Narration";
import { calculateSceneStarts } from "./utils/timing";

export const SundayhugUgcAd: React.FC<{ config: UgcReviewConfig }> = ({
  config,
}) => {
  const { fps } = useVideoConfig();

  const transitionDuration = config.transitionDurationFrames ?? 4;
  const highlightColor = config.highlightColor ?? "#FFE53B";

  const sceneStarts = calculateSceneStarts(
    config.scenes,
    fps,
    transitionDuration,
  );

  const renderSceneContent = (
    scene: (typeof config.scenes)[0],
    children: React.ReactNode,
  ) => {
    switch (scene.type) {
      case "selfie-hook":
        return (
          <SelfieHook src={scene.videoSrc} startFrom={scene.videoStartFrom}>
            {children}
          </SelfieHook>
        );
      case "search-screen":
        return (
          <SearchScreen
            src={scene.videoSrc}
            startFrom={scene.videoStartFrom}
            searchQuery={config.searchOverlay?.searchQuery}
            platform={config.searchOverlay?.platform}
          >
            {children}
          </SearchScreen>
        );
      default:
        return (
          <DemoClip src={scene.videoSrc} startFrom={scene.videoStartFrom}>
            {children}
          </DemoClip>
        );
    }
  };

  return (
    <AbsoluteFill style={{ backgroundColor: "#000" }}>
      <TransitionSeries>
        {config.scenes.flatMap((scene, i) => {
          const durationInFrames = Math.round(scene.durationSeconds * fps);
          const captionDelay = scene.captionDelay ?? 5;
          const isLast = i === config.scenes.length - 1;

          const elements: React.ReactNode[] = [];

          elements.push(
            <TransitionSeries.Sequence
              key={`scene-${i}`}
              durationInFrames={durationInFrames}
            >
              {renderSceneContent(
                scene,
                <Sequence from={captionDelay} layout="none">
                  <UgcCaption
                    text={scene.caption.text}
                    highlightWords={scene.caption.highlightWords}
                    highlightColor={highlightColor}
                  />
                </Sequence>,
              )}
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
