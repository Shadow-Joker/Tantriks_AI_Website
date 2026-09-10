import { motion } from 'motion/react';
import { HeroParallaxEngine } from './HeroParallaxEngine';
import { ArrowRight, Terminal } from 'lucide-react';
import { useMagnetic } from '../../hooks/useMagnetic';

export function Hero() {
  const {
    ref: primaryRef,
    position: primaryPos,
    handleMouseMove: handlePrimaryMove,
    handleMouseLeave: handlePrimaryLeave,
  } = useMagnetic(0.25);

  return (
    <section className="relative min-h-[100dvh] pt-20 md:pt-24 pb-12 flex flex-col justify-between overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[450px] bg-gradient-to-b from-cyan-500/10 via-transparent to-transparent blur-3xl pointer-events-none -z-10" />

      {/* Hero Typography & CTA Content Stack (Max 4 Text Elements) */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-6 md:pt-10 z-20">
        {/* 1. Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/20 text-cyan-300 text-xs font-mono uppercase tracking-widest mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          Autonomous Orchestration Engine
        </motion.div>

        {/* 2. Headline (Max 2 lines, massive typography) */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-display tracking-tighter text-white leading-[1.04] mb-6"
        >
          BUILD WHAT IS{' '}
          <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-teal-300 bg-clip-text text-transparent">
            NEXT.
          </span>
        </motion.h1>

        {/* 3. Subtext (Max 20 words, clear value prop) */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed mb-8"
        >
          One unified intelligence platform for turning complex workflows into autonomous,
          resilient software systems and high-impact products.
        </motion.p>

        {/* 4. CTAs (Single-line, no duplicate intent, WCAG AA compliant) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <div
            ref={primaryRef}
            onMouseMove={handlePrimaryMove}
            onMouseLeave={handlePrimaryLeave}
            className="relative w-full sm:w-auto"
          >
            <motion.a
              href="#demo"
              animate={{ x: primaryPos.x, y: primaryPos.y }}
              transition={{ type: 'spring', stiffness: 200, damping: 15, mass: 0.1 }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-[#07080B] bg-gradient-to-r from-cyan-300 via-cyan-400 to-teal-300 shadow-[0_0_25px_rgba(0,242,254,0.35)] hover:shadow-[0_0_35px_rgba(0,242,254,0.55)] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              <span>Start Building</span>
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </div>

          <a
            href="#architecture"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-medium text-slate-200 bg-[#0F131D]/80 hover:bg-[#161B29] border border-white/10 hover:border-white/20 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            <Terminal className="w-4 h-4 text-cyan-400" />
            <span>Explore Platform</span>
          </a>
        </motion.div>
      </div>

      {/* Parallax Engine Stage */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-4 md:mt-6 w-full"
      >
        <HeroParallaxEngine />
      </motion.div>
    </section>
  );
}
