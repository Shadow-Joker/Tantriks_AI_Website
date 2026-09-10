import { METRIC_HIGHLIGHTS, TESTIMONIALS } from '../../lib/constants';

export function MetricsSocialProof() {
  return (
    <section id="metrics" className="relative py-24 md:py-36 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header (No eyebrow per eyebrow restraint rule) */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold font-display tracking-tight text-white mb-6">
            Proven at Production Scale.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-[60ch] mx-auto">
            Engineered for mission-critical enterprise workloads where failure is not an option.
          </p>
        </div>

        {/* Large Editorial Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {METRIC_HIGHLIGHTS.map((metric) => (
            <div
              key={metric.label}
              className="p-8 rounded-3xl glass-panel border border-white/10 relative overflow-hidden group hover:border-cyan-500/30 transition-colors duration-300"
            >
              <div className="text-5xl sm:text-6xl md:text-7xl font-bold font-mono tracking-tight text-white mb-4 bg-gradient-to-r from-white via-slate-100 to-cyan-300 bg-clip-text text-transparent">
                {metric.value}
              </div>
              <div className="text-base sm:text-lg font-bold font-display text-slate-100 mb-2">
                {metric.label}
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                {metric.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Real SVG Partner Logo Wall (Logo-only per rules, no clutter text) */}
        <div className="py-12 border-y border-white/5">
          <div className="text-center text-xs font-mono uppercase tracking-widest text-slate-500 mb-8">
            Powering Next-Generation Engineering Stacks
          </div>
          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
            {/* Vercel Logo */}
            <svg className="h-6 w-auto text-white fill-current" viewBox="0 0 116 100">
              <path fillRule="evenodd" clipRule="evenodd" d="M57.5 0L115 100H0L57.5 0Z" />
            </svg>
            {/* Supabase Logo */}
            <svg className="h-7 w-auto text-white fill-current" viewBox="0 0 109 113">
              <path d="M63.7 110.2c-2.3 3.3-7.5 2.1-8.2-1.8l-8.6-47.5h48.3c4.7 0 7.3 5.4 4.3 9l-35.8 40.3z" />
              <path d="M45.2 2.7c2.3-3.3 7.5-2.1 8.2 1.8l8.6 47.5H13.7c-4.7 0-7.3-5.4-4.3-9L45.2 2.7z" opacity=".6" />
            </svg>
            {/* Cloudflare Logo */}
            <svg className="h-7 w-auto text-white fill-current" viewBox="0 0 120 40">
              <path d="M96.7 18.2c-.7-5.5-5.3-9.7-11-9.7-4.8 0-8.9 3-10.4 7.4-1.7-1.3-3.8-2.1-6.1-2.1-5.1 0-9.4 3.7-10.2 8.7-2.3-.9-4.8-1.4-7.5-1.4-10.3 0-18.7 8.1-19.1 18.3H98c5.8 0 10.6-4.7 10.6-10.6 0-5.1-3.6-9.3-8.5-10.3l-3.4-.3z" />
            </svg>
            {/* GitHub Logo */}
            <svg className="h-7 w-auto text-white fill-current" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
          </div>
        </div>

        {/* Customer Engineering Quotes (Attribution clean, no em-dashes) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.author}
              className="p-8 rounded-3xl glass-panel border border-white/10 flex flex-col justify-between"
            >
              <div className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal mb-8">
                &ldquo;{t.quote}&rdquo;
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <div>
                  <div className="font-display font-semibold text-white text-sm">{t.author}</div>
                  <div className="text-xs text-slate-400">
                    {t.role}, <span className="text-slate-200">{t.company}</span>
                  </div>
                </div>
                <div className="text-xs font-mono text-cyan-400 bg-cyan-950/60 border border-cyan-800/40 px-2.5 py-1 rounded-full">
                  {t.metric}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
