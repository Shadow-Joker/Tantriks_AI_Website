import { useState, useEffect } from 'react';
import tantriksLogo from '../../assets/tantriks-hub-mark.svg';

interface GlobalLoaderProps {
  onComplete?: () => void;
  minDuration?: number;
}

export function GlobalLoader({ onComplete, minDuration = 1200 }: GlobalLoaderProps) {
  const [progress, setProgress] = useState(10);
  const [isExiting, setIsExiting] = useState(false);
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    // Animate progress smoothly from 10% to 100%
    const startTime = performance.now();
    let animationFrameId: number;

    const updateProgress = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const linearProgress = Math.min(elapsed / minDuration, 1);
      // Ease out cubic
      const easedProgress = 1 - Math.pow(1 - linearProgress, 3);
      const currentVal = Math.round(10 + easedProgress * 90);

      setProgress(currentVal);

      if (linearProgress < 1) {
        animationFrameId = requestAnimationFrame(updateProgress);
      } else {
        // Ready to exit
        setIsExiting(true);
        const exitTimer = setTimeout(() => {
          setIsMounted(false);
          if (onComplete) onComplete();
        }, 650); // Exit animation duration ~650ms

        return () => clearTimeout(exitTimer);
      }
    };

    animationFrameId = requestAnimationFrame(updateProgress);

    // Safety fallback timeout: unmount no matter what after 2.4s max
    const safetyTimer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(() => {
        setIsMounted(false);
        if (onComplete) onComplete();
      }, 500);
    }, 2400);

    return () => {
      cancelAnimationFrame(animationFrameId);
      clearTimeout(safetyTimer);
    };
  }, [minDuration, onComplete]);

  if (!isMounted) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Initializing Tantriks AI"
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#FFF3D5] select-none transition-all duration-700 ease-out ${
        isExiting
          ? 'opacity-0 scale-[1.02] blur-sm pointer-events-none'
          : 'opacity-100 scale-100 blur-0'
      }`}
    >
      {/* Ambient background glow elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-gradient-to-r from-[#4D694E]/15 via-[#6E8F6F]/10 to-[#4D694E]/15 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />

      {/* Center Brand & Loading Cluster */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-sm w-full">
        {/* Animated Brand Logo Icon with subtle breathing pulse */}
        <div className="relative w-16 h-16 sm:w-20 sm:h-20 mb-6 flex items-center justify-center">
          <div className="absolute inset-0 rounded-2xl bg-[#4D694E]/15 border border-[#4D694E]/30 animate-pulse" />
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-[#FFF3D5] border border-[#4D694E]/40 flex items-center justify-center p-2.5 shadow-[0_0_30px_rgba(77,105,78,0.2)]">
            <img
              src={tantriksLogo}
              alt="Tantriks AI Logo"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Brand Display Typography */}
        <div className="flex items-baseline gap-2 mb-6">
          <span className="font-display font-bold text-2xl sm:text-3xl tracking-tight text-[#2B3E2C]">
            Tantriks
          </span>
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#FFF3D5] bg-[#4D694E] border border-[#4D694E]/40 px-2 py-0.5 rounded font-bold">
            AI
          </span>
        </div>

        {/* Thin, Elegant Progress Line (0% -> 100%) */}
        <div className="w-48 sm:w-56 h-1 bg-[#EBDDB6] rounded-full overflow-hidden relative mb-4">
          <div
            className="h-full bg-gradient-to-r from-[#4D694E] via-[#6E8F6F] to-[#2B3E2C] rounded-full transition-[width] duration-150 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Subtle Status Subtext */}
        <div className="text-xs font-mono text-[#2B3E2C]/70 tracking-wide flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#4D694E] animate-ping" />
          <span>Initializing intelligence...</span>
        </div>
      </div>
    </div>
  );
}
