import { WHY_TANTRIKS_DIFFERENTIATORS } from '../../lib/constants';
import { Target, Compass } from 'lucide-react';

export function MetricsSocialProof() {
  return (
    <section id="why-us" className="relative py-24 md:py-36 border-t border-[#4D694E]/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold font-display tracking-tight text-[#2B3E2C] mb-6">
            Why Tantriks AI?
          </h2>
          <p className="text-base sm:text-lg text-[#2B3E2C]/80 leading-relaxed max-w-[60ch] mx-auto">
            Instead of forcing your business into generic software, we engineer bespoke intelligent systems around your unique workflows.
          </p>
        </div>

        {/* Why Tantriks AI Differentiator Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {WHY_TANTRIKS_DIFFERENTIATORS.map((diff, index) => (
            <div
              key={diff.title}
              className="p-8 rounded-3xl bg-[#FFF3D5] border border-[#4D694E]/25 relative overflow-hidden group hover:border-[#4D694E]/50 transition-colors duration-300 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="text-4xl sm:text-5xl font-bold font-mono tracking-tight mb-4 bg-gradient-to-r from-[#4D694E] to-[#2B3E2C] bg-clip-text text-transparent">
                  0{index + 1}
                </div>
                <div className="text-lg sm:text-xl font-bold font-display text-[#2B3E2C] mb-2">
                  {diff.title}
                </div>
                <p className="text-xs sm:text-sm text-[#2B3E2C]/75 leading-relaxed mb-6">
                  {diff.description}
                </p>
              </div>
              <div className="pt-4 border-t border-[#4D694E]/15">
                <span className="text-[11px] font-mono font-medium text-[#4D694E] uppercase tracking-wider">
                  {diff.highlight}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Brand Philosophy Banner (Replacing fake partner wall with authentic brand banner) */}
        <div className="py-12 border-y border-[#4D694E]/20 text-center">
          <div className="text-xs font-mono uppercase tracking-widest text-[#2B3E2C]/70 mb-3">
            Custom AI &bull; Intelligent Automation &bull; AI Agents &bull; Enterprise Software
          </div>
          <div className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-[#2B3E2C] tracking-tight">
            &ldquo;We don&apos;t just build AI &mdash; we craft magic.&rdquo;
          </div>
        </div>

        {/* Mission & Vision Showcase (Replacing fake testimonials) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
          {/* Mission Card */}
          <div className="p-8 rounded-3xl bg-[#FFF3D5] border border-[#4D694E]/25 flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-[#4D694E] mb-4">
                <Target className="w-4 h-4 text-[#4D694E]" />
                Our Mission
              </div>
              <div className="text-base sm:text-lg text-[#2B3E2C]/90 leading-relaxed font-normal mb-8">
                &ldquo;To make intelligent technology accessible, practical, and genuinely useful for businesses by building AI systems around the problems that matter.&rdquo;
              </div>
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-[#4D694E]/20">
              <div>
                <div className="font-display font-semibold text-[#2B3E2C] text-sm">Tantriks AI</div>
                <div className="text-xs text-[#2B3E2C]/70">Core Purpose</div>
              </div>
              <div className="text-xs font-mono text-[#FFF3D5] bg-[#4D694E] border border-[#4D694E]/40 px-3 py-1 rounded-full font-semibold">
                Mission
              </div>
            </div>
          </div>

          {/* Vision Card */}
          <div className="p-8 rounded-3xl bg-[#FFF3D5] border border-[#4D694E]/25 flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-[#4D694E] mb-4">
                <Compass className="w-4 h-4 text-[#4D694E]" />
                Our Vision
              </div>
              <div className="text-base sm:text-lg text-[#2B3E2C]/90 leading-relaxed font-normal mb-8">
                &ldquo;To create a future where businesses don&apos;t simply use AI &mdash; they work alongside intelligent systems designed specifically for them.&rdquo;
              </div>
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-[#4D694E]/20">
              <div>
                <div className="font-display font-semibold text-[#2B3E2C] text-sm">Tantriks AI</div>
                <div className="text-xs text-[#2B3E2C]/70">Future Outlook</div>
              </div>
              <div className="text-xs font-mono text-[#FFF3D5] bg-[#4D694E] border border-[#4D694E]/40 px-3 py-1 rounded-full font-semibold">
                Vision
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
