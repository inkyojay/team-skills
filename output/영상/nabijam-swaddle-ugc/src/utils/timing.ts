import type { UgcSceneConfig } from "../types";

export function calculateSceneStarts(
  scenes: UgcSceneConfig[],
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

export function calculateTotalFrames(
  scenes: UgcSceneConfig[],
  fps: number,
  transitionDuration: number,
): number {
  const totalSeconds = scenes.reduce((sum, s) => sum + s.durationSeconds, 0);
  const transitionOverlap =
    (transitionDuration * (scenes.length - 1)) / fps;
  return Math.round((totalSeconds - transitionOverlap) * fps);
}
