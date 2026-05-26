"use client";

import { useEffect, useRef, useCallback, useState } from "react";

const TOTAL_FRAMES = 64;
const FRAME_PATH = "/frames/frame_";

export function useFrameSequence(scrollMultiplier = 3) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);
  const currentFrameRef = useRef(0);
  const animFrameRef = useRef<number>(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);

  const getFramePath = useCallback((index: number) => {
    const paddedIndex = String(index).padStart(3, "0");
    return `${FRAME_PATH}${paddedIndex}.webp`;
  }, []);

  const drawFrame = useCallback((frameIndex: number) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    const img = imagesRef.current[frameIndex];
    if (!canvas || !ctx || !img) return;

    canvas.width = canvas.offsetWidth * (window.devicePixelRatio || 1);
    canvas.height = canvas.offsetHeight * (window.devicePixelRatio || 1);
    ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1);

    const canvasW = canvas.offsetWidth;
    const canvasH = canvas.offsetHeight;
    const imgRatio = img.naturalWidth / img.naturalHeight;
    const canvasRatio = canvasW / canvasH;

    let drawW, drawH, drawX, drawY;
    if (imgRatio > canvasRatio) {
      drawH = canvasH;
      drawW = canvasH * imgRatio;
      drawX = (canvasW - drawW) / 2;
      drawY = 0;
    } else {
      drawW = canvasW;
      drawH = canvasW / imgRatio;
      drawX = 0;
      drawY = (canvasH - drawH) / 2;
    }

    ctx.clearRect(0, 0, canvasW, canvasH);
    ctx.drawImage(img, drawX, drawY, drawW, drawH);
  }, []);

  // Preload frames
  useEffect(() => {
    let loaded = 0;
    const images: (HTMLImageElement | null)[] = new Array(TOTAL_FRAMES).fill(null);

    const loadFrame = (index: number): Promise<void> => {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => {
          images[index] = img;
          loaded++;
          setLoadProgress(Math.round((loaded / TOTAL_FRAMES) * 100));
          if (loaded >= 3 && !isLoaded) {
            imagesRef.current = images;
            drawFrame(0);
          }
          if (loaded === TOTAL_FRAMES) {
            imagesRef.current = images;
            setIsLoaded(true);
          }
          resolve();
        };
        img.onerror = () => {
          loaded++;
          resolve();
        };
        img.src = getFramePath(index);
      });
    };

    // Load first 5 frames immediately for fast LCP
    const priorityLoad = async () => {
      for (let i = 0; i < Math.min(5, TOTAL_FRAMES); i++) {
        await loadFrame(i);
      }
      // Then load the rest in batches
      const batchSize = 6;
      for (let i = 5; i < TOTAL_FRAMES; i += batchSize) {
        const batch = [];
        for (let j = i; j < Math.min(i + batchSize, TOTAL_FRAMES); j++) {
          batch.push(loadFrame(j));
        }
        await Promise.all(batch);
      }
    };

    priorityLoad();
  }, [drawFrame, getFramePath, isLoaded]);

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const containerH = container.offsetHeight;
      const viewportH = window.innerHeight;
      const scrolled = -rect.top;
      const totalScrollable = containerH - viewportH;
      const progress = Math.max(0, Math.min(1, scrolled / totalScrollable));
      const frameIndex = Math.min(
        TOTAL_FRAMES - 1,
        Math.floor(progress * (TOTAL_FRAMES - 1))
      );

      if (frameIndex !== currentFrameRef.current) {
        currentFrameRef.current = frameIndex;
        cancelAnimationFrame(animFrameRef.current);
        animFrameRef.current = requestAnimationFrame(() => {
          drawFrame(frameIndex);
        });
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animFrameRef.current);
    };
  }, [drawFrame]);

  return { canvasRef, containerRef, isLoaded, loadProgress };
}
