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
    <section id="industries" className="relative py-24 md:py-36 border-t border-[#4D694E]/20 overflow-hidden">
      {/* Background ambient radial */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#4D694E]/10 blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#4D694E]/10 border border-[#4D694E]/30 text-[#2B3E2C] font-semibold text-xs font-mono uppercase tracking-widest mb-4">
            Sector Solutions
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold font-display tracking-tight text-[#2B3E2C] mb-6">
            Intelligence Across Industries
          </h2>
          <p className="text-base sm:text-lg text-[#2B3E2C]/80 leading-relaxed max-w-[65ch] mx-auto">
            Intelligent systems and automation designed around the unique challenges, compliance requirements, and operational realities of diverse sectors.
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
                className={`p-6 md:p-7 rounded-2xl relative overflow-hidden transition-all duration-300 group ${
                  index === 0
                    ? 'border border-[#4D694E]/40 bg-gradient-to-br from-[#FFF3D5] via-[#F4E7C5] to-[#EBDDB6] shadow-sm'
                    : index === 2
                    ? 'border border-[#4D694E]/30 bg-gradient-to-br from-[#F4E7C5] via-[#FFF3D5] to-[#F4E7C5] shadow-sm'
                    : 'border border-[#4D694E]/20 bg-[#F4E7C5]/70 shadow-sm'
                }`}
                data-cursor="INSPECT"
              >
                {/* Glow ambient highlight */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#4D694E]/5 rounded-full blur-2xl group-hover:bg-[#4D694E]/15 transition-all duration-500" />

                {/* Top status indicator */}
                <div className="flex items-center justify-between mb-5 z-10 relative">
                  <div className="w-10 h-10 rounded-xl bg-[#FFF3D5] border border-[#4D694E]/30 flex items-center justify-center text-[#4D694E] group-hover:scale-110 group-hover:border-[#4D694E] transition-all duration-300">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono text-[#2B3E2C]/70 bg-[#FFF3D5] px-2 py-0.5 rounded border border-[#4D694E]/20">
                      {module.category}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4D694E] animate-pulse" />
                  </div>
                </div>

                {/* Content */}
                <div className="z-10 relative">
                  <h3 className="text-xl font-bold font-display text-[#2B3E2C] mb-2 group-hover:text-[#4D694E] transition-colors">
                    {module.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#2B3E2C]/75 leading-relaxed mb-6">
                    {module.description}
                  </p>

                  {/* Module Telemetry Footer */}
                  <div className="pt-4 border-t border-[#4D694E]/20 flex items-center justify-between text-xs font-mono">
                    <span className="text-[#2B3E2C]/70">Application: <span className="text-[#4D694E] font-bold">{module.latency}</span></span>
                    <span className="text-[#2B3E2C] font-semibold flex items-center gap-1">
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
