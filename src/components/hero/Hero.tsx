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
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[450px] bg-gradient-to-b from-[#4D694E]/20 via-[#4D694E]/10 to-transparent blur-3xl pointer-events-none -z-10" />

      {/* Hero Typography & CTA Content Stack (Max 4 Text Elements) */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-6 md:pt-10 z-20">

        {/* 2. Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display tracking-tight text-[#2B3E2C] leading-[1.08] mb-6"
        >
          We don&apos;t just build AI —{' '}
          <span className="bg-gradient-to-r from-[#4D694E] via-[#364C37] to-[#2B3E2C] bg-clip-text text-transparent">
            we craft magic.
          </span>
        </motion.h1>

        {/* 3. Subtext */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto mb-8 space-y-3"
        >
          <p className="text-base sm:text-lg md:text-xl font-semibold text-[#2B3E2C] leading-snug">
            Intelligent software, automation, and AI agents built around the way your business actually works.
          </p>
          <p className="text-xs sm:text-sm md:text-base text-[#2B3E2C]/80 font-normal leading-relaxed">
            Tantriks AI builds custom AI systems, intelligent automation, AI agents, and enterprise software designed around unique workflows — helping businesses automate repetitive work, make better decisions, and scale with intelligent technology.
          </p>
        </motion.div>

        {/* 4. CTAs */}
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
              href="#contact"
              animate={{ x: primaryPos.x, y: primaryPos.y }}
              transition={{ type: 'spring', stiffness: 200, damping: 15, mass: 0.1 }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-[#FFF3D5] bg-gradient-to-r from-[#4D694E] to-[#364C37] hover:from-[#364C37] hover:to-[#2B3E2C] shadow-[0_0_25px_rgba(77,105,78,0.4)] hover:shadow-[0_0_35px_rgba(77,105,78,0.55)] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4D694E]"
            >
              <span>Partner With Us</span>
              <ArrowRight className="w-4 h-4 text-[#FFF3D5]" />
            </motion.a>
          </div>

          <a
            href="#services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-medium text-[#2B3E2C] bg-[#4D694E]/10 hover:bg-[#4D694E]/20 border border-[#4D694E]/30 hover:border-[#4D694E]/60 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4D694E]"
          >
            <Terminal className="w-4 h-4 text-[#4D694E]" />
            <span>Explore Our Solutions</span>
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
