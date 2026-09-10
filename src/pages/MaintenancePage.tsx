import { usePageMetadata } from '../hooks/usePageMetadata';
import { Sparkles, Home, Cpu } from 'lucide-react';
import { Link } from '../router/Link';

export function MaintenancePage() {
  usePageMetadata(
    'Maintenance',
    "Tantriks AI is temporarily unavailable while we improve the platform. We'll be back shortly."
  );

  return (
    <div className="pt-32 pb-24 md:pt-40 md:pb-36 bg-[#FFF3D5] text-[#2B3E2C] min-h-screen flex flex-col justify-center relative overflow-hidden">
      {/* Subtle Ambient Pulse Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[400px] bg-[#4D694E]/15 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center relative z-10">
        {/* Subtle Animated System Upgrade Visualization */}
        <div className="relative w-28 h-28 mx-auto mb-8 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border border-[#4D694E]/30 animate-[spin_10s_linear_infinite]" />
          <div className="w-20 h-20 rounded-3xl bg-[#F4E7C5] border border-[#4D694E]/40 flex items-center justify-center shadow-sm relative z-10">
            <Cpu className="w-9 h-9 text-[#4D694E] animate-pulse" />
          </div>
        </div>

        {/* Status Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#4D694E]/10 border border-[#4D694E]/30 text-xs font-mono text-[#4D694E] font-medium mb-6">
          <span className="w-2 h-2 rounded-full bg-[#4D694E] animate-ping" />
          <span>System maintenance in progress</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold font-display tracking-tight text-[#2B3E2C] mb-4">
          We&apos;re making things better.
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg text-[#2B3E2C]/80 leading-relaxed max-w-lg mx-auto mb-10">
          Tantriks AI is temporarily unavailable while we improve the platform. We&apos;ll be back shortly with upgraded workflows and system enhancements.
        </p>

        {/* Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-semibold text-[#FFF3D5] bg-[#4D694E] hover:bg-[#364C37] shadow-[0_0_25px_rgba(77,105,78,0.35)] transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>

          <a
            href="mailto:tantriksai2026@gmail.com"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-sm font-medium text-[#2B3E2C] bg-[#F4E7C5] hover:bg-[#EBDDB6] border border-[#4D694E]/30 transition-all"
          >
            <Sparkles className="w-4 h-4 text-[#4D694E]" />
            <span>Contact Support</span>
          </a>
        </div>
      </div>
    </div>
  );
}
