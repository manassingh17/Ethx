export const ETHICAL_ANIMATION_FRAME_COUNT = 240;
export const ETHICAL_ANIMATION_BASE_PATH = "/images/ethical-animation";
/** Matches frame sequence (near-black). */
export const ETHICAL_ANIMATION_BG = "#000000";

export function getEthicalAnimationFramePath(frameIndex: number): string {
  const frameNumber = frameIndex + 1;
  const padded = String(frameNumber).padStart(3, "0");
  return `${ETHICAL_ANIMATION_BASE_PATH}/ezgif-frame-${padded}.jpg`;
}
