import { motion } from 'motion/react';
import { HeroParallaxEngine } from './HeroParallaxEngine';
import { ArrowRight, Terminal, ChevronDown } from 'lucide-react';
import { useMagnetic } from '../../hooks/useMagnetic';

export function Hero() {
  const {
    ref: primaryRef,
    position: primaryPos,
    handleMouseMove: handlePrimaryMove,
    handleMouseLeave: handlePrimaryLeave,
  } = useMagnetic(0.25);

  return (
    <section className="relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[550px] bg-gradient-to-b from-[#4D694E]/15 via-[#4D694E]/5 to-transparent dark:from-[#82D173]/12 dark:via-[#82D173]/5 dark:to-transparent blur-3xl pointer-events-none -z-10" />

      {/* Starting Screen: Pure Hero Typography & CTA Content Stack (Full First Viewport) */}
      <div className="min-h-[calc(100dvh-5rem)] flex flex-col justify-center items-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 md:pt-28 pb-10 z-20">
        {/* 2. Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display tracking-tight text-[#2B3E2C] dark:text-[#F4FAF3] leading-[1.08] mb-6"
        >
          We don&apos;t just build AI —{' '}
          <span className="bg-gradient-to-r from-[#4D694E] via-[#364C37] to-[#2B3E2C] dark:from-[#82D173] dark:via-[#A9ECA0] dark:to-[#F4FAF3] bg-clip-text text-transparent">
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
          <p className="text-base sm:text-lg md:text-xl font-semibold text-[#2B3E2C] dark:text-[#F4FAF3] leading-snug">
            Intelligent software, automation, and AI agents built around the way your business actually works.
          </p>
          <p className="text-xs sm:text-sm md:text-base text-[#2B3E2C]/80 dark:text-[#F4FAF3]/80 font-normal leading-relaxed">
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
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-[#FFF3D5] dark:text-[#0F0A0A] bg-gradient-to-r from-[#4D694E] to-[#364C37] dark:from-[#82D173] dark:to-[#5EB74D] hover:from-[#364C37] hover:to-[#2B3E2C] shadow-[0_0_25px_rgba(77,105,78,0.4)] dark:shadow-[0_0_25px_rgba(130,209,115,0.4)] hover:shadow-[0_0_35px_rgba(77,105,78,0.55)] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4D694E]"
            >
              <span>Partner With Us</span>
              <ArrowRight className="w-4 h-4 text-[#FFF3D5] dark:text-[#0F0A0A]" />
            </motion.a>
          </div>

          <a
            href="#services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-medium text-[#2B3E2C] dark:text-[#F4FAF3] bg-[#4D694E]/10 dark:bg-[#82D173]/10 hover:bg-[#4D694E]/20 dark:hover:bg-[#82D173]/20 border border-[#4D694E]/30 dark:border-[#82D173]/30 hover:border-[#4D694E]/60 dark:hover:border-[#82D173]/60 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4D694E]"
          >
            <Terminal className="w-4 h-4 text-[#4D694E] dark:text-[#82D173]" />
            <span>Explore Our Solutions</span>
          </a>
        </motion.div>

        {/* Subtle scroll cue indicating the interactive studio below */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 flex flex-col items-center gap-1.5 text-[#2B3E2C]/50 dark:text-[#82D173]/60 text-[11px] font-mono tracking-wider uppercase"
        >
          <span>Scroll to explore engine</span>
          <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
        </motion.div>
      </div>

      {/* Parallax Engine Stage (Moved down into its own dedicated section) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.8 }}
        className="w-full pb-16 md:pb-24 pt-4 md:pt-8"
      >
        <HeroParallaxEngine />
      </motion.div>
    </section>
  );
}
