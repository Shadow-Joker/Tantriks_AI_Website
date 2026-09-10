import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FEATURE_CHAPTERS } from '../../lib/constants';
import { Zap, ShieldCheck, Globe, CheckCircle2 } from 'lucide-react';

export function FeatureStorySticky() {
  const [activeChapterIndex, setActiveChapterIndex] = useState(0);
  const chapterRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const viewportCenter = window.innerHeight / 2;

      chapterRefs.current.forEach((el, index) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.top <= viewportCenter && rect.bottom >= viewportCenter) {
          setActiveChapterIndex(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const activeChapter = FEATURE_CHAPTERS[activeChapterIndex] || FEATURE_CHAPTERS[0];

  return (
    <section className="relative py-24 md:py-36 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* LEFT: Large Sticky Product Visualization Stage */}
          <div className="lg:col-span-6 lg:sticky lg:top-32 h-[420px] md:h-[520px] self-start">
            <div className="w-full h-full glass-panel-elevated rounded-3xl p-6 border border-white/10 flex flex-col justify-between relative overflow-hidden shadow-2xl">
              {/* Dynamic Ambient Background Glow */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full blur-[100px] pointer-events-none transition-colors duration-500"
                style={{ backgroundColor: `${activeChapter.accentColor}20` }}
              />

              {/* Stage Top Bar */}
              <div className="flex items-center justify-between z-10 border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-300">
                    Live Engine State: {activeChapter.headline}
                  </span>
                </div>
                <span className="text-xs font-mono text-cyan-400 bg-cyan-950/60 px-2.5 py-1 rounded-full border border-cyan-800/40">
                  Chapter 0{activeChapterIndex + 1} of 03
                </span>
              </div>

              {/* Morphing Interactive Canvas Visual */}
              <div className="relative flex-1 flex items-center justify-center my-4 z-10">
                <AnimatePresence mode="wait">
                  {activeChapterIndex === 0 && (
                    <motion.div
                      key="visual-0"
                      initial={{ opacity: 0, scale: 0.9, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9, y: -10 }}
                      transition={{ duration: 0.4 }}
                      className="w-full max-w-md p-6 rounded-2xl bg-[#090D16]/90 border border-cyan-500/30 space-y-4"
                    >
                      <div className="flex items-center justify-between text-xs font-mono text-cyan-300">
                        <span className="flex items-center gap-1.5">
                          <Zap className="w-4 h-4 text-cyan-400" />
                          PARALLEL SPECULATIVE REASONING
                        </span>
                        <span>4.2ms</span>
                      </div>
                      {/* Latency Comparison Graph */}
                      <div className="space-y-2 font-mono text-xs">
                        <div>
                          <div className="flex justify-between text-slate-400 text-[11px] mb-1">
                            <span>Traditional Sequential Chain</span>
                            <span>840ms</span>
                          </div>
                          <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                            <div className="w-4/5 h-full bg-red-500/80 rounded-full" />
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-cyan-300 text-[11px] mb-1">
                            <span>Tantriks Speculative Mesh</span>
                            <span className="text-emerald-400 font-bold">12ms</span>
                          </div>
                          <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                            <div className="w-[8%] h-full bg-cyan-400 rounded-full shadow-[0_0_8px_#00F2FE]" />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activeChapterIndex === 1 && (
                    <motion.div
                      key="visual-1"
                      initial={{ opacity: 0, scale: 0.9, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9, y: -10 }}
                      transition={{ duration: 0.4 }}
                      className="w-full max-w-md p-6 rounded-2xl bg-[#090D16]/90 border border-cyan-500/30 space-y-4"
                    >
                      <div className="flex items-center justify-between text-xs font-mono text-cyan-300">
                        <span className="flex items-center gap-1.5">
                          <ShieldCheck className="w-4 h-4 text-emerald-400" />
                          SELF-HEALING ORCHESTRATION LOOP
                        </span>
                        <span className="text-emerald-400">99.4% Auto</span>
                      </div>
                      <div className="p-3.5 rounded-xl bg-[#07090F] border border-white/5 font-mono text-xs space-y-2">
                        <div className="text-slate-400 text-[11px]">1. Anomaly Detected in Worker #8</div>
                        <div className="text-cyan-300 text-[11px]">2. Synthetic Patch Generated in 240ms</div>
                        <div className="text-emerald-400 text-[11px] flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>3. Hot-swapped without dropping user connection</span>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activeChapterIndex === 2 && (
                    <motion.div
                      key="visual-2"
                      initial={{ opacity: 0, scale: 0.9, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9, y: -10 }}
                      transition={{ duration: 0.4 }}
                      className="w-full max-w-md p-6 rounded-2xl bg-[#090D16]/90 border border-cyan-500/30 space-y-4"
                    >
                      <div className="flex items-center justify-between text-xs font-mono text-cyan-300">
                        <span className="flex items-center gap-1.5">
                          <Globe className="w-4 h-4 text-cyan-400" />
                          GLOBAL EDGE MESH TOPOLOGY
                        </span>
                        <span>240 PoPs</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                        <div className="p-3 rounded-lg bg-[#07090F] border border-white/5">
                          <div className="text-slate-500 text-[10px]">US-EAST (IAD)</div>
                          <div className="text-emerald-400 font-semibold">1.1ms latency</div>
                        </div>
                        <div className="p-3 rounded-lg bg-[#07090F] border border-white/5">
                          <div className="text-slate-500 text-[10px]">EU-WEST (LHR)</div>
                          <div className="text-emerald-400 font-semibold">2.4ms latency</div>
                        </div>
                        <div className="p-3 rounded-lg bg-[#07090F] border border-white/5">
                          <div className="text-slate-500 text-[10px]">AP-SOUTH (BOM)</div>
                          <div className="text-emerald-400 font-semibold">3.8ms latency</div>
                        </div>
                        <div className="p-3 rounded-lg bg-[#07090F] border border-white/5">
                          <div className="text-slate-500 text-[10px]">AP-EAST (TYO)</div>
                          <div className="text-emerald-400 font-semibold">2.9ms latency</div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Stage Bottom Benchmark Metrics */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10 z-10">
                {activeChapter.metrics.map((m) => (
                  <div key={m.label}>
                    <div className="text-[10px] font-mono uppercase text-slate-400">{m.label}</div>
                    <div className="text-xl font-bold font-mono text-white">{m.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: Feature Narratives (Sticky Scroll Driven) */}
          <div className="lg:col-span-6 space-y-36 lg:py-20">
            {FEATURE_CHAPTERS.map((chapter, i) => (
              <div
                key={chapter.id}
                ref={(el) => {
                  chapterRefs.current[i] = el;
                }}
                className={`transition-opacity duration-300 ${
                  activeChapterIndex === i ? 'opacity-100' : 'opacity-40'
                }`}
              >
                <div className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-3">
                  0{i + 1} // CAPABILITY
                </div>
                <h3 className="text-3xl sm:text-5xl font-bold font-display tracking-tight text-white mb-4">
                  {chapter.headline}
                </h3>
                <h4 className="text-lg font-medium text-slate-200 mb-4">{chapter.tagline}</h4>
                <p className="text-base text-slate-400 leading-relaxed max-w-[55ch] mb-6">
                  {chapter.description}
                </p>
                <div className="flex items-center gap-6 pt-2">
                  {chapter.metrics.map((m) => (
                    <div key={m.label} className="border-l-2 border-cyan-400/40 pl-3">
                      <div className="text-xs font-mono text-slate-400">{m.label}</div>
                      <div className="text-lg font-bold font-mono text-white">{m.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
