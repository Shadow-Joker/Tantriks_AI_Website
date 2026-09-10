import { motion } from 'motion/react';
import { ArrowRight, Terminal, Shield, Sparkles, Check } from 'lucide-react';
import { useMagnetic } from '../../hooks/useMagnetic';

export function FinalCTAClimax() {
  const {
    ref: btnRef,
    position: btnPos,
    handleMouseMove: handleBtnMove,
    handleMouseLeave: handleBtnLeave,
  } = useMagnetic(0.25);

  return (
    <section className="relative py-28 md:py-40 overflow-hidden border-t border-white/5">
      {/* Visual Climax Ambient Luminous Core */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[450px] bg-gradient-to-r from-cyan-500/20 via-teal-500/15 to-cyan-500/20 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Eyebrow tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-widest mb-6">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          Autonomous Velocity
        </div>

        {/* Climax Headline */}
        <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-display tracking-tighter text-white leading-[1.05] mb-8">
          YOUR NEXT PRODUCT{' '}
          <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-teal-300 bg-clip-text text-transparent">
            STARTS HERE.
          </span>
        </h2>

        {/* Supporting copy */}
        <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed mb-10">
          Join leading engineering teams using Tantriks AI to orchestrate resilient, autonomous workflows at global scale.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <div
            ref={btnRef}
            onMouseMove={handleBtnMove}
            onMouseLeave={handleBtnLeave}
            className="relative w-full sm:w-auto"
          >
            <motion.a
              href="#demo"
              animate={{ x: btnPos.x, y: btnPos.y }}
              transition={{ type: 'spring', stiffness: 200, damping: 15, mass: 0.1 }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-semibold text-[#07080B] bg-gradient-to-r from-cyan-300 via-cyan-400 to-teal-300 shadow-[0_0_30px_rgba(0,242,254,0.4)] hover:shadow-[0_0_45px_rgba(0,242,254,0.65)] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              <span>Start Building Free</span>
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </div>

          <a
            href="#architecture"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-sm font-medium text-slate-200 bg-[#0E121E] hover:bg-[#161B29] border border-white/10 hover:border-white/20 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            <Terminal className="w-4 h-4 text-cyan-400" />
            <span>Explore Platform</span>
          </a>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-mono">
          <div className="flex items-center gap-1.5">
            <Check className="w-3.5 h-3.5 text-emerald-400" />
            <span>No credit card required</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Shield className="w-3.5 h-3.5 text-cyan-400" />
            <span>SOC2 Type II Certified</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Check className="w-3.5 h-3.5 text-emerald-400" />
            <span>Deploy in 5 minutes</span>
          </div>
        </div>
      </div>
    </section>
  );
}
