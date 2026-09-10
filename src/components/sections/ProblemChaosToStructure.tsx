import { useState } from 'react';
import { motion } from 'motion/react';
import { AlertTriangle, CheckCircle2, RefreshCw, Cpu, Zap } from 'lucide-react';



export function ProblemChaosToStructure() {
  // Mode state: false = Legacy Chaos, true = Tantriks Structure
  const [isStructured, setIsStructured] = useState(false);

  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden border-t border-[#4D694E]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Statement */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#4D694E]/10 border border-[#4D694E]/30 text-[#2B3E2C] font-semibold text-xs font-mono uppercase tracking-widest mb-4">
            About Tantriks AI
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold font-display tracking-tight text-[#2B3E2C] mb-6">
            AI Built Around Your Business.
          </h2>
          <p className="text-base sm:text-lg text-[#2B3E2C]/85 leading-relaxed max-w-[65ch] mb-4">
            Every business works differently. Instead of forcing your team into generic software, Tantriks AI creates intelligent systems around your unique workflows, challenges, and goals.
          </p>
          <p className="text-sm sm:text-base text-[#2B3E2C]/75 leading-relaxed max-w-[65ch]">
            We combine artificial intelligence, automation, software engineering, and human-centered design to create technology that fits naturally into the way your organization operates.
          </p>
        </div>

        {/* Interactive Chaos to Structure Visual Stage */}
        <div className="glass-panel-elevated rounded-3xl p-6 md:p-10 border border-[#4D694E]/25 relative overflow-hidden">
          {/* Top Control Bar with State Toggle */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-[#4D694E]/20">
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-[#4D694E] font-bold">
                {isStructured ? 'THE SOLUTION' : 'THE PROBLEM'}
              </div>
              <div className="text-lg font-bold text-[#2B3E2C] font-display">
                {isStructured
                  ? 'Intelligence, engineered for your workflow.'
                  : "Your business isn't generic. Your technology shouldn't be either."}
              </div>
            </div>

            {/* Interactive Toggle Pill */}
            <div className="flex items-center gap-2 p-1 rounded-full bg-[#4D694E]/10 border border-[#4D694E]/25">
              <button
                onClick={() => setIsStructured(false)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium font-mono transition-all ${
                  !isStructured
                    ? 'bg-[#364C37] text-[#FFF3D5] border border-[#364C37] shadow-sm font-semibold'
                    : 'text-[#2B3E2C]/80 hover:text-[#2B3E2C]'
                }`}
              >
                The Problem
              </button>
              <button
                onClick={() => setIsStructured(true)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold font-mono transition-all ${
                  isStructured
                    ? 'bg-[#4D694E] text-[#FFF3D5] border border-[#4D694E] shadow-[0_0_15px_rgba(77,105,78,0.3)]'
                    : 'text-[#2B3E2C]/80 hover:text-[#2B3E2C]'
                }`}
              >
                The Solution
              </button>
            </div>
          </div>

          {/* Visualization Canvas Area */}
          <div className="relative min-h-[360px] md:min-h-[400px] flex items-center justify-center p-4 rounded-2xl bg-[#FFF3D5] border border-[#4D694E]/20 overflow-hidden">
            {/* Background Grid Accent */}
            <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

            {!isStructured ? (
              /* CHAOS VIEW (THE PROBLEM) */
              <motion.div
                key="chaos"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="w-full relative h-full flex flex-col items-center justify-center py-6"
              >
                {/* Tangled SVG connecting lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-60">
                  <path
                    d="M 120 180 Q 240 50 380 260 T 680 120"
                    stroke="#4D694E"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                    fill="none"
                  />
                  <path
                    d="M 150 120 Q 340 320 540 180 T 820 280"
                    stroke="#364C37"
                    strokeWidth="1.5"
                    strokeDasharray="6 3"
                    fill="none"
                  />
                  <path
                    d="M 280 300 Q 420 100 600 290"
                    stroke="#2B3E2C"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>

                {/* Tangled Unconnected Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl relative z-10">
                  <div className="p-4 rounded-xl bg-[#FFF3D5] border border-[#4D694E]/30 backdrop-blur-md shadow-md transform -rotate-2">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono text-[#4D694E] font-bold">PAIN POINT 01</span>
                      <AlertTriangle className="w-4 h-4 text-[#4D694E] animate-bounce" />
                    </div>
                    <div className="text-sm font-bold text-[#2B3E2C]">Repetitive Work</div>
                    <div className="mt-3 text-xs font-mono text-[#2B3E2C] bg-[#F4E7C5] border border-[#4D694E]/20 px-2.5 py-1.5 rounded">
                      Teams spend valuable time on tasks that could be automated.
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-[#FFF3D5] border border-[#364C37]/30 backdrop-blur-md shadow-md transform translate-y-3 rotate-1">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono text-[#364C37] font-bold">PAIN POINT 02</span>
                      <RefreshCw className="w-4 h-4 text-[#364C37]" />
                    </div>
                    <div className="text-sm font-bold text-[#2B3E2C]">Complex AI Adoption</div>
                    <div className="mt-3 text-xs font-mono text-[#2B3E2C] bg-[#F4E7C5] border border-[#364C37]/20 px-2.5 py-1.5 rounded">
                      Powerful AI can be expensive, complicated, and difficult to integrate.
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-[#FFF3D5] border border-[#2B3E2C]/30 backdrop-blur-md shadow-md transform rotate-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono text-[#2B3E2C] font-bold">PAIN POINT 03 &amp; 04</span>
                      <AlertTriangle className="w-4 h-4 text-[#2B3E2C]" />
                    </div>
                    <div className="text-sm font-bold text-[#2B3E2C]">Generic Tools &amp; Silos</div>
                    <div className="mt-3 text-xs font-mono text-[#2B3E2C] bg-[#F4E7C5] border border-[#2B3E2C]/20 px-2.5 py-1.5 rounded">
                      Off-the-shelf tools miss needed capabilities and don&apos;t connect to existing workflows.
                    </div>
                  </div>
                </div>

                {/* Bottom Ticker */}
                <div className="mt-8 px-4 py-2 rounded-full bg-[#4D694E]/10 border border-[#4D694E]/30 text-xs font-mono text-[#2B3E2C] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#4D694E] animate-ping" />
                  CHALLENGE: Off-the-shelf platforms force your business to adapt to technology.
                </div>
              </motion.div>
            ) : (
              /* STRUCTURED VIEW (THE SOLUTION) */
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
                    stroke="#4D694E"
                    strokeWidth="2"
                    strokeDasharray="8 4"
                    className="animate-[dash_20s_linear_infinite]"
                  />
                </svg>

                {/* Unified Tantriks Node Stream */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl relative z-10">
                  <div className="p-5 rounded-xl bg-[#FFF3D5] border border-[#4D694E]/30 shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono text-[#4D694E] font-bold">AUTOMATE &amp; INTEGRATE</span>
                      <CheckCircle2 className="w-4 h-4 text-[#4D694E]" />
                    </div>
                    <div className="text-sm font-bold text-[#2B3E2C]">Bespoke Workflow Sync</div>
                    <div className="mt-3 text-xs font-mono text-[#2B3E2C] bg-[#F4E7C5] border border-[#4D694E]/20 px-2.5 py-1.5 rounded">
                      Automate repetitive tasks and integrate AI directly into existing systems.
                    </div>
                  </div>

                  <div className="p-5 rounded-xl bg-[#FFF3D5] border border-[#4D694E]/30 shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono text-[#4D694E] font-bold">DECISION &amp; AGENTS</span>
                      <Cpu className="w-4 h-4 text-[#4D694E]" />
                    </div>
                    <div className="text-sm font-bold text-[#2B3E2C]">Intelligent AI Agents</div>
                    <div className="mt-3 text-xs font-mono text-[#2B3E2C] bg-[#F4E7C5] border border-[#4D694E]/20 px-2.5 py-1.5 rounded">
                      Improve decision-making and deploy AI agents alongside your team.
                    </div>
                  </div>

                  <div className="p-5 rounded-xl bg-[#FFF3D5] border border-[#364C37]/30 shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono text-[#364C37] font-bold">EVOLVING SOFTWARE</span>
                      <Zap className="w-4 h-4 text-[#364C37]" />
                    </div>
                    <div className="text-sm font-bold text-[#2B3E2C]">Scalable Custom Systems</div>
                    <div className="mt-3 text-xs font-mono text-[#2B3E2C] bg-[#F4E7C5] border border-[#364C37]/20 px-2.5 py-1.5 rounded">
                      Create software that evolves continuously as your business grows.
                    </div>
                  </div>
                </div>

                {/* Bottom Ticker */}
                <div className="mt-8 px-4 py-2 rounded-full bg-[#4D694E]/15 border border-[#4D694E]/30 text-xs font-mono text-[#2B3E2C] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#4D694E] animate-pulse" />
                  &ldquo;Instead of adapting your business to technology, we adapt technology to your business.&rdquo;
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
