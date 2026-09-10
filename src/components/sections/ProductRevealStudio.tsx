import { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import {
  Layers,
  Cpu,
  Activity,
  CircleDot,
  CheckCircle,
  Database,
  TrendingUp,
} from 'lucide-react';


export function ProductRevealStudio() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const prefersReduced = useReducedMotion();
  const [activeTab, setActiveTab] = useState<'pipeline' | 'swarm' | 'telemetry'>('pipeline');
  const [activeAgentIndex, setActiveAgentIndex] = useState(1);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'center center'],
  });

  // Perspective and scale reveal animation
  const scale = useTransform(scrollYProgress, [0, 1], [0.92, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [0.4, 1]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [12, 0]);

  return (
    <section
      id="platform"
      ref={containerRef}
      className="relative py-24 md:py-36 overflow-hidden border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header (No eyebrow per eyebrow restraint rule) */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold font-display tracking-tight text-white mb-6">
            The Autonomous SaaS Studio.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-[65ch] mx-auto">
            Experience complete control over distributed AI swarms, real-time memory fabrics, and edge deployment pipelines in one integrated workspace.
          </p>
        </div>

        {/* 3D Perspective Reveal Wrapper */}
        <motion.div
          style={{
            scale: prefersReduced ? 1 : scale,
            opacity: prefersReduced ? 1 : opacity,
            rotateX: prefersReduced ? 0 : rotateX,
            transformPerspective: 1400,
          }}
          className="relative rounded-3xl overflow-hidden glass-panel-elevated border border-white/15 shadow-[0_40px_100px_rgba(0,0,0,0.9)]"
        >
          {/* Studio Chrome Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-6 py-4 bg-[#0A0D15]/95 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <div className="h-4 w-px bg-white/10 mx-1" />
              <span className="text-xs font-mono font-medium text-slate-300">
                tantriks-studio // prod-mesh-alpha-09
              </span>
            </div>

            {/* Studio Navigation Tabs */}
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#121622] border border-white/5 self-start sm:self-auto">
              <button
                onClick={() => setActiveTab('pipeline')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  activeTab === 'pipeline'
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Pipeline Mesh</span>
              </button>

              <button
                onClick={() => setActiveTab('swarm')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  activeTab === 'swarm'
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Cpu className="w-3.5 h-3.5" />
                <span>Agent Swarm</span>
              </button>

              <button
                onClick={() => setActiveTab('telemetry')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  activeTab === 'telemetry'
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Activity className="w-3.5 h-3.5" />
                <span>Live Telemetry</span>
              </button>
            </div>
          </div>

          {/* Studio Body */}
          <div className="p-6 md:p-8 bg-gradient-to-b from-[#090C14] to-[#06080D]">
            {activeTab === 'pipeline' && (
              <div className="space-y-6">
                {/* Visual Pipeline Graph */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
                  {/* Step 1 */}
                  <div className="p-4 rounded-xl bg-[#0F131F]/90 border border-white/10 hover:border-cyan-500/40 transition-colors">
                    <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-2">
                      <span>01. INGRESS</span>
                      <span className="text-cyan-400 font-semibold">Active</span>
                    </div>
                    <div className="text-sm font-semibold text-white">Semantic Parser</div>
                    <div className="mt-3 text-xs text-slate-400">
                      Tokenizes incoming query and indexes against hybrid memory vectors.
                    </div>
                    <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-slate-500">
                      <span>Throughput</span>
                      <span className="text-slate-200">18.4k req/s</span>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-500/40 shadow-[0_0_20px_rgba(0,242,254,0.1)]">
                    <div className="flex items-center justify-between text-[11px] font-mono text-cyan-300 mb-2">
                      <span>02. REASONING</span>
                      <span className="text-emerald-400 font-semibold">Streaming</span>
                    </div>
                    <div className="text-sm font-semibold text-white">Speculative Swarm</div>
                    <div className="mt-3 text-xs text-slate-300">
                      Runs 4 parallel inference branches with tree-of-thought pruning.
                    </div>
                    <div className="mt-4 pt-3 border-t border-cyan-500/20 flex items-center justify-between text-[10px] font-mono text-cyan-300">
                      <span>Latency</span>
                      <span className="text-emerald-400">4.2ms</span>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="p-4 rounded-xl bg-[#0F131F]/90 border border-white/10 hover:border-cyan-500/40 transition-colors">
                    <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-2">
                      <span>03. VERIFY</span>
                      <span className="text-slate-400 font-semibold">Ready</span>
                    </div>
                    <div className="text-sm font-semibold text-white">Guardrail Filter</div>
                    <div className="mt-3 text-xs text-slate-400">
                      Hardware-enforced hallucination checks and strict enterprise policy guards.
                    </div>
                    <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-slate-500">
                      <span>Accuracy</span>
                      <span className="text-slate-200">99.98%</span>
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div className="p-4 rounded-xl bg-[#0F131F]/90 border border-white/10 hover:border-cyan-500/40 transition-colors">
                    <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-2">
                      <span>04. EGRESS</span>
                      <span className="text-emerald-400 font-semibold">Edge</span>
                    </div>
                    <div className="text-sm font-semibold text-white">Edge Push Stream</div>
                    <div className="mt-3 text-xs text-slate-400">
                      Direct TCP streaming back to user application with zero intermediate buffering.
                    </div>
                    <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-slate-500">
                      <span>Global PoPs</span>
                      <span className="text-slate-200">240 active</span>
                    </div>
                  </div>
                </div>

                {/* Lower telemetry panel inside studio */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-white/5">
                  <div className="p-4 rounded-xl bg-[#0B0E17] border border-white/5 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                      <TrendingUp className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 font-mono">TOKEN THROUGHPUT</div>
                      <div className="text-lg font-bold text-white font-mono">142,850 / sec</div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-[#0B0E17] border border-white/5 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                      <CheckCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 font-mono">EXECUTION CONSENSUS</div>
                      <div className="text-lg font-bold text-emerald-400 font-mono">99.98% valid</div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-[#0B0E17] border border-white/5 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                      <Database className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 font-mono">MEMORY CACHE HIT</div>
                      <div className="text-lg font-bold text-white font-mono">94.2% hit rate</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'swarm' && (
              <div className="space-y-4">
                <div className="text-xs font-mono text-slate-400 mb-2">
                  AUTONOMOUS AGENT COLLABORATION LANES
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  {[
                    { role: 'Planner Agent', model: 'tantriks-reason-v4', state: 'Consensus Leader', tok: '3.4k' },
                    { role: 'Code Synthesizer', model: 'deep-codegen-flash', state: 'Synthesizing Ast', tok: '9.2k' },
                    { role: 'Security Auditor', model: 'policy-guard-hsm', state: 'Zero Vulnerabilities', tok: '1.1k' },
                    { role: 'Edge Deployer', model: 'mesh-compiler-v2', state: 'Warm Deploy', tok: '0.6k' },
                  ].map((agent, i) => (
                    <div
                      key={agent.role}
                      onClick={() => setActiveAgentIndex(i)}
                      className={`p-4 rounded-xl cursor-pointer transition-all ${
                        activeAgentIndex === i
                          ? 'bg-cyan-950/30 border border-cyan-500/50 shadow-[0_0_20px_rgba(0,242,254,0.15)]'
                          : 'bg-[#0E121E]/80 border border-white/10 hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-mono text-cyan-300">AGENT 0{i + 1}</span>
                        <CircleDot className="w-3 h-3 text-emerald-400 animate-pulse" />
                      </div>
                      <div className="text-sm font-semibold text-white">{agent.role}</div>
                      <div className="mt-2 text-[11px] font-mono text-slate-400">{agent.model}</div>
                      <div className="mt-3 text-[10px] font-mono text-slate-300 bg-[#06080D] px-2 py-1 rounded flex justify-between">
                        <span>{agent.state}</span>
                        <span className="text-cyan-400">{agent.tok} tok</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'telemetry' && (
              <div className="p-4 rounded-xl bg-[#06080D] border border-white/10 font-mono text-xs text-slate-300 space-y-2">
                <div className="text-slate-500 flex justify-between border-b border-white/5 pb-2">
                  <span>TIMESTAMP // TRACE ID</span>
                  <span>STATUS</span>
                </div>
                <div className="text-emerald-400">
                  [20:46:12.802] INGRESS: POST /v1/orchestration/dispatch -&gt; 200 OK (1.2ms)
                </div>
                <div className="text-cyan-300">
                  [20:46:12.804] SWARM: Speculative branch consensus validated by 4/4 nodes.
                </div>
                <div className="text-slate-300">
                  [20:46:12.806] MEMORY: Vector index hit #emb-9942 (distance: 0.012).
                </div>
                <div className="text-emerald-400">
                  [20:46:12.808] EGRESS: Stream routed to 240 global edge POPs. TTFB: 4.1ms.
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
