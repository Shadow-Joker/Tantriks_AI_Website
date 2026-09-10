import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Mail, Phone, CheckCircle2 } from 'lucide-react';
import { useMagnetic } from '../../hooks/useMagnetic';

export function FinalCTAClimax() {
  const {
    ref: btnRef,
    position: btnPos,
    handleMouseMove: handleBtnMove,
    handleMouseLeave: handleBtnLeave,
  } = useMagnetic(0.25);

  return (
    <section id="contact" className="relative py-28 md:py-40 overflow-hidden border-t border-[#4D694E]/20">
      {/* Visual Climax Ambient Luminous Core */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[450px] bg-gradient-to-r from-[#4D694E]/20 via-[#364C37]/15 to-[#4D694E]/20 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Eyebrow tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#4D694E]/10 border border-[#4D694E]/30 text-[#2B3E2C] font-semibold text-xs font-mono uppercase tracking-widest mb-6">
          <Sparkles className="w-3.5 h-3.5 text-[#4D694E]" />
          Tantriks AI
        </div>

        {/* Climax Headline */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display tracking-tight text-[#2B3E2C] leading-[1.1] mb-8">
          Partner with Tantriks AI and{' '}
          <span className="bg-gradient-to-r from-[#4D694E] via-[#364C37] to-[#2B3E2C] bg-clip-text text-transparent">
            unlock the magic of intelligent automation.
          </span>
        </h2>

        {/* Supporting copy */}
        <p className="text-base sm:text-lg md:text-xl text-[#2B3E2C]/80 max-w-2xl mx-auto font-normal leading-relaxed mb-10">
          Have a workflow that could be smarter, faster, or completely automated? Let&apos;s build the right intelligent system for your business.
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
              href="mailto:tantriksai2026@gmail.com"
              animate={{ x: btnPos.x, y: btnPos.y }}
              transition={{ type: 'spring', stiffness: 200, damping: 15, mass: 0.1 }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-semibold text-[#FFF3D5] bg-gradient-to-r from-[#4D694E] to-[#364C37] shadow-[0_0_30px_rgba(77,105,78,0.4)] hover:shadow-[0_0_45px_rgba(77,105,78,0.6)] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4D694E]"
            >
              <span>Partner With Tantriks AI</span>
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </div>

          <a
            href="tel:+919123555456"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-sm font-medium text-[#2B3E2C] bg-[#4D694E]/10 hover:bg-[#4D694E]/20 border border-[#4D694E]/30 hover:border-[#4D694E]/60 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4D694E]"
          >
            <Phone className="w-4 h-4 text-[#4D694E]" />
            <span>Let&apos;s Talk</span>
          </a>
        </div>

        {/* Contact Badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-[#2B3E2C]/80 font-mono">
          <a
            href="mailto:tantriksai2026@gmail.com"
            className="flex items-center gap-1.5 hover:text-[#4D694E] transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-[#4D694E]" />
            <span>tantriksai2026@gmail.com</span>
          </a>
          <a
            href="tel:+919123555456"
            className="flex items-center gap-1.5 hover:text-[#4D694E] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#4D694E]" />
            <span>+91 9123555456</span>
          </a>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#4D694E]" />
            <span>Custom-Built for Your Workflows</span>
          </div>
        </div>
      </div>
    </section>
  );
}
