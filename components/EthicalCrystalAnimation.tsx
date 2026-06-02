"use client";

import { useEffect, useRef } from "react";
import {
  ETHICAL_ANIMATION_BG,
  ETHICAL_ANIMATION_FRAME_COUNT,
  getEthicalAnimationFramePath,
} from "@/lib/ethicalAnimation";

/** 60 logical fps for smoother motion */
const FRAME_INTERVAL_MS = 1000 / 60;
const PRELOAD_BATCH = 16;

function loadFrame(index: number): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.decoding = "async";
    img.src = getEthicalAnimationFramePath(index);
    img.onload = async () => {
      try {
        if ("decode" in img) await img.decode();
      } catch {
        /* optional */
      }
      resolve(img);
    };
    img.onerror = () => reject(new Error(`Failed to load frame ${index + 1}`));
  });
}

async function preloadAllFrames(): Promise<HTMLImageElement[]> {
  const frames: HTMLImageElement[] = new Array(ETHICAL_ANIMATION_FRAME_COUNT);
  for (let start = 0; start < ETHICAL_ANIMATION_FRAME_COUNT; start += PRELOAD_BATCH) {
    const end = Math.min(start + PRELOAD_BATCH, ETHICAL_ANIMATION_FRAME_COUNT);
    const batch = await Promise.all(
      Array.from({ length: end - start }, (_, i) => loadFrame(start + i))
    );
    batch.forEach((img, i) => {
      frames[start + i] = img;
    });
  }
  return frames;
}

type Props = {
  /** Fill parent with cover (full banner). */
  fullBleed?: boolean;
};

export default function EthicalCrystalAnimation({ fullBleed = false }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const framesRef = useRef<HTMLImageElement[]>([]);
  const frameIndexRef = useRef(0);
  const directionRef = useRef<1 | -1>(1);
  const accumulatorRef = useRef(0);
  const lastTimestampRef = useRef(0);
  const readyRef = useRef(false);
  const rafRef = useRef(0);
  const resizeObserverRef = useRef<ResizeObserver | null>(null);

  useEffect(() => {
    let cancelled = false;

    const fitCanvas = () => {
      const container = containerRef.current;
      const canvas = canvasRef.current;
      const first = framesRef.current[0];
      if (!container || !canvas || !first?.naturalWidth) return;

      const { width: cw, height: ch } = container.getBoundingClientRect();
      if (!cw || !ch) return;

      const iw = first.naturalWidth;
      const ih = first.naturalHeight;

      if (fullBleed) {
        const scale = Math.max(cw / iw, ch / ih) * 1.04;
        const displayW = iw * scale;
        const displayH = ih * scale;
        canvas.style.width = `${displayW}px`;
        canvas.style.height = `${displayH}px`;
        canvas.style.left = `${(cw - displayW) / 2}px`;
        canvas.style.top = `${(ch - displayH) / 2}px`;
        canvas.style.position = "absolute";
      } else {
        const aspect = iw / ih;
        let displayW = cw;
        let displayH = cw / aspect;
        if (displayH > ch) {
          displayH = ch;
          displayW = ch * aspect;
        }
        canvas.style.width = `${displayW}px`;
        canvas.style.height = `${displayH}px`;
        canvas.style.left = "";
        canvas.style.top = "";
        canvas.style.position = "relative";
      }
    };

    const drawFrame = (index: number) => {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext("2d", { alpha: false });
      const img = framesRef.current[index];
      if (!canvas || !ctx || !img?.complete) return;

      ctx.fillStyle = ETHICAL_ANIMATION_BG;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0);
    };

    const advanceFrame = () => {
      const last = ETHICAL_ANIMATION_FRAME_COUNT - 1;
      let index = frameIndexRef.current;
      let direction = directionRef.current;

      if (direction === 1) {
        if (index >= last) {
          direction = -1;
          index = last - 1;
        } else {
          index += 1;
        }
      } else if (index <= 0) {
        direction = 1;
        index = 1;
      } else {
        index -= 1;
      }

      frameIndexRef.current = index;
      directionRef.current = direction;
      drawFrame(index);
    };

    const tick = (timestamp: number) => {
      if (cancelled) return;

      if (!readyRef.current) {
        rafRef.current = requestAnimationFrame(tick);
        return;
      }

      if (!lastTimestampRef.current) lastTimestampRef.current = timestamp;
      const delta = Math.min(timestamp - lastTimestampRef.current, 32);
      lastTimestampRef.current = timestamp;
      accumulatorRef.current += delta;

      while (accumulatorRef.current >= FRAME_INTERVAL_MS) {
        accumulatorRef.current -= FRAME_INTERVAL_MS;
        advanceFrame();
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    preloadAllFrames()
      .then((frames) => {
        if (cancelled) return;
        framesRef.current = frames;
        readyRef.current = true;

        const first = frames[0];
        const canvas = canvasRef.current;
        if (canvas && first?.naturalWidth) {
          canvas.width = first.naturalWidth;
          canvas.height = first.naturalHeight;
        }

        frameIndexRef.current = 0;
        directionRef.current = 1;
        accumulatorRef.current = 0;
        lastTimestampRef.current = 0;
        drawFrame(0);

        const container = containerRef.current;
        if (container) {
          fitCanvas();
          resizeObserverRef.current = new ResizeObserver(fitCanvas);
          resizeObserverRef.current.observe(container);
        }

        rafRef.current = requestAnimationFrame(tick);
      })
      .catch(() => {
        if (!cancelled) rafRef.current = requestAnimationFrame(tick);
      });

    return () => {
      cancelled = true;
      cancelAnimationFrame(rafRef.current);
      resizeObserverRef.current?.disconnect();
      resizeObserverRef.current = null;
    };
  }, [fullBleed]);

  return (
    <div
      ref={containerRef}
      className={`ethical-crystal-animation${fullBleed ? " ethical-crystal-animation--bleed" : ""}`}
      aria-hidden
    >
      <div className="ethical-crystal-animation__stage">
        <canvas ref={canvasRef} className="ethical-crystal-animation__canvas" />
      </div>
    </div>
  );
}
