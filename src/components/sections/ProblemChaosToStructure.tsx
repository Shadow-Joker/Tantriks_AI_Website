import { useState } from 'react';
import { motion } from 'motion/react';
import { AlertTriangle, CheckCircle2, RefreshCw, Cpu, Zap } from 'lucide-react';



export function ProblemChaosToStructure() {
  // Mode state: false = Legacy Chaos, true = Tantriks Structure
  const [isStructured, setIsStructured] = useState(false);

  return (
    <section id="architecture" className="relative py-24 md:py-32 overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Statement (No eyebrow per eyebrow restraint rule) */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold font-display tracking-tight text-white mb-6">
            Complexity is expensive.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-[65ch]">
            Modern software teams lose hundreds of hours stitching fragmented APIs, debugging silent prompt regressions, and wrestling with runaway token latency. What begins as a simple script collapses under production scale.
          </p>
        </div>

        {/* Interactive Chaos to Structure Visual Stage */}
        <div className="glass-panel-elevated rounded-3xl p-6 md:p-10 border border-white/10 relative overflow-hidden">
          {/* Top Control Bar with State Toggle */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-white/10">
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                ARCHITECTURE SIMULATOR
              </div>
              <div className="text-lg font-bold text-white font-display">
                {isStructured ? 'Unified Autonomous Mesh (Tantriks)' : 'Legacy Fragmented Stack'}
              </div>
            </div>

            {/* Interactive Toggle Pill */}
            <div className="flex items-center gap-2 p-1 rounded-full bg-[#07090E] border border-white/10">
              <button
                onClick={() => setIsStructured(false)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium font-mono transition-all ${
                  !isStructured
                    ? 'bg-red-500/20 text-red-300 border border-red-500/40 shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Fragmented Chaos
              </button>
              <button
                onClick={() => setIsStructured(true)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold font-mono transition-all ${
                  isStructured
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-[0_0_15px_rgba(0,242,254,0.3)]'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Tantriks Pipeline
              </button>
            </div>
          </div>

          {/* Visualization Canvas Area */}
          <div className="relative min-h-[360px] md:min-h-[400px] flex items-center justify-center p-4 rounded-2xl bg-[#080A10]/90 border border-white/5 overflow-hidden">
            {/* Background Grid Accent */}
            <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

            {!isStructured ? (
              /* CHAOS VIEW */
              <motion.div
                key="chaos"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="w-full relative h-full flex flex-col items-center justify-center py-6"
              >
                {/* Tangled SVG connecting lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40">
                  <path
                    d="M 120 180 Q 240 50 380 260 T 680 120"
                    stroke="#EF4444"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                    fill="none"
                  />
                  <path
                    d="M 150 120 Q 340 320 540 180 T 820 280"
                    stroke="#F59E0B"
                    strokeWidth="1.5"
                    strokeDasharray="6 3"
                    fill="none"
                  />
                  <path
                    d="M 280 300 Q 420 100 600 290"
                    stroke="#EF4444"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>

                {/* Tangled Unconnected Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl relative z-10">
                  <div className="p-4 rounded-xl bg-red-950/20 border border-red-500/30 backdrop-blur-md transform -rotate-2">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono text-red-400">UNMANAGED BOTTLENECK</span>
                      <AlertTriangle className="w-4 h-4 text-red-400 animate-bounce" />
                    </div>
                    <div className="text-sm font-semibold text-white">Manual Model Routing</div>
                    <div className="mt-3 text-xs font-mono text-red-300/80 bg-red-900/30 px-2.5 py-1.5 rounded">
                      Timeout after 4 retry attempts
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-500/30 backdrop-blur-md transform translate-y-3 rotate-1">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono text-amber-400">SILENT REGRESSION</span>
                      <RefreshCw className="w-4 h-4 text-amber-400" />
                    </div>
                    <div className="text-sm font-semibold text-white">Ad-hoc Prompt Chaining</div>
                    <div className="mt-3 text-xs font-mono text-amber-300/80 bg-amber-900/30 px-2.5 py-1.5 rounded">
                      Latency spiked to 840ms
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-red-950/20 border border-red-500/30 backdrop-blur-md transform rotate-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono text-red-400">COMPLIANCE RISK</span>
                      <AlertTriangle className="w-4 h-4 text-red-400" />
                    </div>
                    <div className="text-sm font-semibold text-white">Zero Observability</div>
                    <div className="mt-3 text-xs font-mono text-red-300/80 bg-red-900/30 px-2.5 py-1.5 rounded">
                      PII leak in raw token traces
                    </div>
                  </div>
                </div>

                {/* Bottom Ticker */}
                <div className="mt-8 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-xs font-mono text-red-300 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                  STATUS: Fragmented | Error Rate: 4.8% | Latency: 840ms
                </div>
              </motion.div>
            ) : (
              /* STRUCTURED VIEW */
              <motion.div
                key="structured"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="w-full relative h-full flex flex-col items-center justify-center py-6"
              >
                {/* Clean Synchronized Vector Connecting Line */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  <line
                    x1="18%"
                    y1="50%"
                    x2="82%"
                    y2="50%"
                    stroke="#00F2FE"
                    strokeWidth="2"
                    strokeDasharray="8 4"
                    className="animate-[dash_20s_linear_infinite]"
                  />
                </svg>

                {/* Unified Tantriks Node Stream */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl relative z-10">
                  <div className="p-5 rounded-xl bg-[#0F1420]/90 border border-cyan-500/40 shadow-[0_0_25px_rgba(0,242,254,0.15)]">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono text-cyan-300">STAGE 01: CLASSIFY</span>
                      <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                    </div>
                    <div className="text-sm font-semibold text-white">Neural Fast-Path</div>
                    <div className="mt-3 text-xs font-mono text-cyan-200/90 bg-cyan-950/60 border border-cyan-800/40 px-2.5 py-1.5 rounded flex items-center justify-between">
                      <span>Zero-shot Routing</span>
                      <span className="text-emerald-400">1.2ms</span>
                    </div>
                  </div>

                  <div className="p-5 rounded-xl bg-[#0F1420]/90 border border-cyan-500/40 shadow-[0_0_25px_rgba(0,242,254,0.15)]">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono text-cyan-300">STAGE 02: ORCHESTRATE</span>
                      <Cpu className="w-4 h-4 text-cyan-400" />
                    </div>
                    <div className="text-sm font-semibold text-white">Speculative Consensus</div>
                    <div className="mt-3 text-xs font-mono text-cyan-200/90 bg-cyan-950/60 border border-cyan-800/40 px-2.5 py-1.5 rounded flex items-center justify-between">
                      <span>Self-Healing Loop</span>
                      <span className="text-emerald-400">99.98%</span>
                    </div>
                  </div>

                  <div className="p-5 rounded-xl bg-[#0F1420]/90 border border-cyan-500/40 shadow-[0_0_25px_rgba(0,242,254,0.15)]">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono text-cyan-300">STAGE 03: DISPATCH</span>
                      <Zap className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div className="text-sm font-semibold text-white">Global Edge Stream</div>
                    <div className="mt-3 text-xs font-mono text-cyan-200/90 bg-cyan-950/60 border border-cyan-800/40 px-2.5 py-1.5 rounded flex items-center justify-between">
                      <span>Hardware Guardrails</span>
                      <span className="text-emerald-400">12ms total</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Ticker */}
                <div className="mt-8 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono text-emerald-300 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  STATUS: Synced Pipeline | Error Rate: 0.00% | Latency: 12ms (98.5% improvement)
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
