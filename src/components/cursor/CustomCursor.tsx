import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'motion/react';
import { useMediaQuery } from '../../hooks/useMediaQuery';

export function CustomCursor() {
  const isPointerFine = useMediaQuery('(pointer: fine)');
  const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');
  const [isVisible, setIsVisible] = useState(false);
  const [cursorType, setCursorType] = useState<'default' | 'pointer' | 'interactive'>('default');
  const [badgeText, setBadgeText] = useState('');

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    if (!isPointerFine || prefersReducedMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest('[data-cursor]');
      const clickable = target.closest('a, button, [role="button"], input, select');

      if (interactive) {
        setCursorType('interactive');
        setBadgeText(interactive.getAttribute('data-cursor') || '');
      } else if (clickable) {
        setCursorType('pointer');
        setBadgeText('');
      } else {
        setCursorType('default');
        setBadgeText('');
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isPointerFine, prefersReducedMotion, isVisible, mouseX, mouseY]);

  if (!isPointerFine || prefersReducedMotion || !isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#4D694E]/50 bg-[#4D694E]/15 backdrop-blur-[1px] flex items-center justify-center transition-[width,height,background-color] duration-200"
        style={{
          x: smoothX,
          y: smoothY,
          width: cursorType === 'interactive' ? 84 : cursorType === 'pointer' ? 44 : 26,
          height: cursorType === 'interactive' ? 84 : cursorType === 'pointer' ? 44 : 26,
        }}
      >
        {badgeText && (
          <span className="text-[10px] font-mono tracking-widest text-[#2B3E2C] font-bold uppercase">
            {badgeText}
          </span>
        )}
      </motion.div>

      {/* Center dot */}
      <motion.div
        className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4D694E] shadow-[0_0_8px_#4D694E]"
        style={{
          x: mouseX,
          y: mouseY,
          width: cursorType === 'pointer' ? 6 : 4,
          height: cursorType === 'pointer' ? 6 : 4,
        }}
      />

    </div>
  );
}
