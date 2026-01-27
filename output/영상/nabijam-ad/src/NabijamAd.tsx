import React from "react";
import {
  AbsoluteFill,
  Audio,
  Sequence,
  useVideoConfig,
  staticFile,
  interpolate,
} from "remotion";
import { TransitionSeries, linearTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";

import type { AdConfig } from "./types";
import { calculateSceneStarts } from "./utils/timing";
import { VideoClip } from "./components/VideoClip";
import { ImageSlide } from "./components/ImageSlide";
import { LogoEnding } from "./components/LogoEnding";
import { TopHeader } from "./components/TopHeader";
import { SubtitleBox } from "./components/SubtitleBox";

/**
 * 나비잠 속싸개 실키밤부 - 메인 컴포지션
 *
 * BGM + TTS 나레이션 + 역동적 애니메이션
 * 나레이션은 TransitionSeries 바깥에 절대 프레임으로 배치하여
 * 씬 전환 시 오디오 겹침을 방지합니다.
 */
export const NabijamAd: React.FC<{ config: AdConfig }> = ({ config }) => {
  const { fps, durationInFrames } = useVideoConfig();

  const transitionDuration = config.transitionDurationFrames ?? 8;
  const sceneStarts = calculateSceneStarts(
    config.scenes,
    fps,
    transitionDuration,
  );

  // 엔딩 씬을 제외한 헤더 표시 범위
  const lastHeaderSceneIndex = config.scenes.findIndex(
    (s) => s.showHeader === false,
  );
  const headerEndFrame =
    lastHeaderSceneIndex >= 0
      ? sceneStarts[lastHeaderSceneIndex]
      : sceneStarts[sceneStarts.length - 1] +
        Math.round(
          config.scenes[config.scenes.length - 1].durationSeconds * fps,
        );

  const bgmVolume = config.bgmVolume ?? 0.3;

  return (
    <AbsoluteFill style={{ backgroundColor: "#000" }}>
      {/* ─── 비디오/이미지 + 자막 (TransitionSeries) ─── */}
      <TransitionSeries>
        {config.scenes.flatMap((scene, i) => {
          const durationInFrames = Math.round(scene.durationSeconds * fps);
          const subtitleDelay = scene.subtitleDelay ?? 5;
          const isLast = i === config.scenes.length - 1;

          const elements: React.ReactNode[] = [];

          elements.push(
            <TransitionSeries.Sequence
              key={`scene-${i}`}
              durationInFrames={durationInFrames}
            >
              {scene.type === "video" && scene.src && (
                <VideoClip src={scene.src} startFrom={scene.videoStartFrom}>
                  {scene.subtitle && (
                    <Sequence from={subtitleDelay} layout="none">
                      <SubtitleBox text={scene.subtitle} />
                    </Sequence>
                  )}
                </VideoClip>
              )}
              {scene.type === "image" && scene.src && (
                <ImageSlide src={scene.src}>
                  {scene.subtitle && (
                    <Sequence from={subtitleDelay} layout="none">
                      <SubtitleBox text={scene.subtitle} />
                    </Sequence>
                  )}
                </ImageSlide>
              )}
              {scene.type === "logo" && <LogoEnding />}
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

      {/* ─── 고정 상단 헤더 (엔딩 씬 제외) ─── */}
      <Sequence from={0} durationInFrames={headerEndFrame} layout="none">
        <TopHeader />
      </Sequence>

      {/* ─── BGM (전체 재생, 끝에서 페이드아웃) ─── */}
      {config.bgmSrc && (
        <Audio
          src={staticFile(config.bgmSrc)}
          volume={(f) =>
            interpolate(
              f,
              [0, fps * 1, durationInFrames - fps * 2, durationInFrames],
              [0, bgmVolume, bgmVolume, 0],
              { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
            )
          }
        />
      )}

      {/* ─── TTS 나레이션: 절대 타이밍으로 배치 ─── */}
      {config.scenes.map((scene, i) => {
        if (!scene.narrationSrc) return null;
        const delay = scene.narrationDelay ?? 5;
        return (
          <Sequence
            key={`narration-${i}`}
            from={sceneStarts[i] + delay}
            layout="none"
          >
            <Audio src={staticFile(scene.narrationSrc)} volume={0.85} />
          </Sequence>
        );
      })}
    </AbsoluteFill>
  );
};
