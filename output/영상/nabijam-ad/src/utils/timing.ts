import type { SceneConfig } from "../types";

/**
 * TransitionSeries의 오버랩을 고려하여 각 씬의 절대 시작 프레임을 계산합니다.
 */
export function calculateSceneStarts(
  scenes: SceneConfig[],
  fps: number,
  transitionDuration: number,
): number[] {
  const starts: number[] = [];
  let currentFrame = 0;

  for (let i = 0; i < scenes.length; i++) {
    starts.push(currentFrame);
    const sceneDurationFrames = Math.round(scenes[i].durationSeconds * fps);
    currentFrame += sceneDurationFrames - transitionDuration;
  }

  return starts;
}

/**
 * 전체 영상 길이를 프레임 단위로 계산합니다.
 */
export function calculateTotalFrames(
  scenes: SceneConfig[],
  fps: number,
  transitionDuration: number,
): number {
  const totalSeconds = scenes.reduce((sum, s) => sum + s.durationSeconds, 0);
  const transitionOverlap =
    (transitionDuration * (scenes.length - 1)) / fps;
  return Math.round((totalSeconds - transitionOverlap) * fps);
}
