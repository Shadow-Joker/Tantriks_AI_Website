import { motion } from 'motion/react';
import { ECOSYSTEM_MODULES } from '../../lib/constants';
import { Cpu, Database, Network, Globe, Activity, ShieldCheck, ArrowUpRight } from 'lucide-react';

const iconMap: Record<string, typeof Cpu> = {
  Cpu,
  Database,
  Network,
  Globe,
  Activity,
  ShieldCheck,
};

export function EcosystemSpatial() {
  return (
    <section id="ecosystem" className="relative py-24 md:py-36 border-t border-white/5 overflow-hidden">
      {/* Background ambient radial */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-cyan-500/5 blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header (Eyebrow allowed here: 1 eyebrow per 3 sections rule check) */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/20 text-cyan-300 text-xs font-mono uppercase tracking-widest mb-4">
            Unified Ecosystem Topology
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold font-display tracking-tight text-white mb-6">
            Engineered for Spatial Scale.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-[65ch] mx-auto">
            Six foundational pillars designed to interlock seamlessly, giving your team an unbroken foundation for building intelligent systems.
          </p>
        </div>

        {/* Spatial Bento Grid with Distinct Depth Variations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ECOSYSTEM_MODULES.map((module, index) => {
            const IconComponent = iconMap[module.icon] || Cpu;

            return (
              <motion.div
                key={module.id}
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className={`p-6 md:p-7 rounded-2xl glass-panel relative overflow-hidden transition-all duration-300 group ${
                  index === 0
                    ? 'border-cyan-500/30 bg-gradient-to-br from-cyan-950/20 via-[#0E121D] to-[#0A0D15]'
                    : index === 2
                    ? 'border-emerald-500/20 bg-gradient-to-br from-emerald-950/10 via-[#0E121D] to-[#0A0D15]'
                    : 'border-white/10'
                }`}
                data-cursor="INSPECT"
              >
                {/* Glow ambient highlight */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-400/5 rounded-full blur-2xl group-hover:bg-cyan-400/15 transition-all duration-500" />

                {/* Top status indicator */}
                <div className="flex items-center justify-between mb-5 z-10 relative">
                  <div className="w-10 h-10 rounded-xl bg-[#131825] border border-white/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:border-cyan-400/40 transition-all duration-300">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono text-slate-400 bg-[#07090F] px-2 py-0.5 rounded border border-white/5">
                      {module.category}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  </div>
                </div>

                {/* Content */}
                <div className="z-10 relative">
                  <h3 className="text-xl font-bold font-display text-white mb-2 group-hover:text-cyan-200 transition-colors">
                    {module.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                    {module.description}
                  </p>

                  {/* Module Telemetry Footer */}
                  <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-400">Latency: <span className="text-emerald-400">{module.latency}</span></span>
                    <span className="text-cyan-300 flex items-center gap-1">
                      {module.stats}
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
