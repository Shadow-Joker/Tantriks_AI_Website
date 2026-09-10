import { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import {
  Layers,
  Cpu,
  Activity,
  CheckCircle,
  Database,
  TrendingUp,
} from 'lucide-react';


export function ProductRevealStudio() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const prefersReduced = useReducedMotion();
  const [activeTab, setActiveTab] = useState<'pipeline' | 'swarm' | 'telemetry'>('pipeline');

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
      id="services"
      ref={containerRef}
      className="relative py-24 md:py-36 overflow-hidden border-t border-[#4D694E]/15"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#4D694E]/10 border border-[#4D694E]/30 text-[#2B3E2C] font-semibold text-xs font-mono uppercase tracking-widest mb-4">
            Our Capabilities
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold font-display tracking-tight text-[#2B3E2C] mb-6">
            What We Build
          </h2>
          <p className="text-base sm:text-lg text-[#2B3E2C]/85 leading-relaxed max-w-[65ch] mx-auto">
            From intelligent assistants to enterprise-grade automation, we build AI systems designed for real-world impact.
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
          className="relative rounded-3xl overflow-hidden glass-panel-elevated border border-[#4D694E]/25 shadow-[0_40px_100px_rgba(43,62,44,0.12)]"
        >
          {/* Studio Chrome Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-6 py-4 bg-[#F4E7C5]/95 border-b border-[#4D694E]/20">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                <span className="w-3 h-3 rounded-full bg-[#4D694E]" />
              </div>
              <div className="h-4 w-px bg-[#4D694E]/20 mx-1" />
              <span className="text-xs font-mono font-medium text-[#2B3E2C]/85">
                tantriks-ai // solutions-matrix // 12-services
              </span>
            </div>

            {/* Studio Navigation Tabs */}
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#FFF3D5] border border-[#4D694E]/20 self-start sm:self-auto">
              <button
                onClick={() => setActiveTab('pipeline')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  activeTab === 'pipeline'
                    ? 'bg-[#4D694E] text-[#FFF3D5] shadow-sm font-bold'
                    : 'text-[#2B3E2C]/75 hover:text-[#2B3E2C]'
                }`}
              >
                <Cpu className="w-3.5 h-3.5" />
                <span>AI Assistants</span>
              </button>

              <button
                onClick={() => setActiveTab('swarm')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  activeTab === 'swarm'
                    ? 'bg-[#4D694E] text-[#FFF3D5] shadow-sm font-bold'
                    : 'text-[#2B3E2C]/75 hover:text-[#2B3E2C]'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Workflow Automation</span>
              </button>

              <button
                onClick={() => setActiveTab('telemetry')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  activeTab === 'telemetry'
                    ? 'bg-[#4D694E] text-[#FFF3D5] shadow-sm font-bold'
                    : 'text-[#2B3E2C]/75 hover:text-[#2B3E2C]'
                }`}
              >
                <Activity className="w-3.5 h-3.5" />
                <span>Enterprise Systems</span>
              </button>
            </div>
          </div>

          {/* Studio Body */}
          <div className="p-6 md:p-8 bg-gradient-to-b from-[#FFF3D5] to-[#F4E7C5]">
            {activeTab === 'pipeline' && (
              <div className="space-y-6">
                {/* Visual Services Grid: Group 1 */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative">
                  {/* Service 1 */}
                  <div className="p-4 rounded-xl bg-[#FFF3D5] border border-[#4D694E]/25 hover:border-[#4D694E]/45 transition-colors shadow-sm flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between text-[11px] font-mono text-[#4D694E] font-bold mb-2">
                        <span>SERVICE 01</span>
                        <span className="text-[#2B3E2C]/70">Voice AI</span>
                      </div>
                      <div className="text-sm font-bold text-[#2B3E2C]">AI Receptionists &amp; Voice Assistants</div>
                      <div className="mt-2 text-xs text-[#2B3E2C]/80 leading-relaxed">
                        Intelligent voice-based assistants that can communicate with customers, handle inquiries, collect information, and automate routine conversations.
                      </div>
                    </div>
                    <div className="mt-4 pt-3 border-t border-[#4D694E]/15 text-[10px] font-mono text-[#4D694E] font-semibold">
                      Natural Conversational Flow
                    </div>
                  </div>

                  {/* Service 2 */}
                  <div className="p-4 rounded-xl bg-[#4D694E]/10 border border-[#4D694E]/40 shadow-sm flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between text-[11px] font-mono text-[#4D694E] font-bold mb-2">
                        <span>SERVICE 02</span>
                        <span className="text-[#2B3E2C]/70">Conversational</span>
                      </div>
                      <div className="text-sm font-bold text-[#2B3E2C]">AI Chatbots</div>
                      <div className="mt-2 text-xs text-[#2B3E2C]/80 leading-relaxed">
                        Custom conversational AI experiences designed around your business, knowledge base, customers, and workflows.
                      </div>
                    </div>
                    <div className="mt-4 pt-3 border-t border-[#4D694E]/20 text-[10px] font-mono text-[#4D694E] font-semibold">
                      Knowledge-Trained Logic
                    </div>
                  </div>

                  {/* Service 3 */}
                  <div className="p-4 rounded-xl bg-[#FFF3D5] border border-[#4D694E]/25 hover:border-[#4D694E]/45 transition-colors shadow-sm flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between text-[11px] font-mono text-[#4D694E] font-bold mb-2">
                        <span>SERVICE 03</span>
                        <span className="text-[#2B3E2C]/70">Agriculture</span>
                      </div>
                      <div className="text-sm font-bold text-[#2B3E2C]">AI Farmers Helpline</div>
                      <div className="mt-2 text-xs text-[#2B3E2C]/80 leading-relaxed">
                        Intelligent agricultural assistance that helps farmers access useful information and support through AI-powered interactions.
                      </div>
                    </div>
                    <div className="mt-4 pt-3 border-t border-[#4D694E]/15 text-[10px] font-mono text-[#4D694E] font-semibold">
                      Accessible Knowledge
                    </div>
                  </div>

                  {/* Service 4 */}
                  <div className="p-4 rounded-xl bg-[#FFF3D5] border border-[#4D694E]/25 hover:border-[#4D694E]/45 transition-colors shadow-sm flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between text-[11px] font-mono text-[#4D694E] font-bold mb-2">
                        <span>SERVICE 04</span>
                        <span className="text-[#2B3E2C]/70">Personalized AI</span>
                      </div>
                      <div className="text-sm font-bold text-[#2B3E2C]">AI Hairstylist &amp; Dresser</div>
                      <div className="mt-2 text-xs text-[#2B3E2C]/80 leading-relaxed">
                        AI-powered experiences that help users explore hairstyles, dressing options, and personalized recommendations.
                      </div>
                    </div>
                    <div className="mt-4 pt-3 border-t border-[#4D694E]/15 text-[10px] font-mono text-[#4D694E] font-semibold">
                      Tailored Visual Suggestions
                    </div>
                  </div>
                </div>

                {/* Bottom capability highlights */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-[#4D694E]/20">
                  <div className="p-4 rounded-xl bg-[#FFF3D5] border border-[#4D694E]/20 flex items-center gap-4 shadow-sm">
                    <div className="w-10 h-10 rounded-lg bg-[#4D694E]/15 border border-[#4D694E]/30 flex items-center justify-center text-[#4D694E]">
                      <Cpu className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-[#2B3E2C]/70 font-mono">HUMAN-CENTERED</div>
                      <div className="text-sm font-bold text-[#2B3E2C]">Natural Voice &amp; Chat</div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-[#FFF3D5] border border-[#4D694E]/20 flex items-center gap-4 shadow-sm">
                    <div className="w-10 h-10 rounded-lg bg-[#4D694E]/15 border border-[#4D694E]/30 flex items-center justify-center text-[#4D694E]">
                      <CheckCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-[#2B3E2C]/70 font-mono">BUSINESS KNOWLEDGE</div>
                      <div className="text-sm font-bold text-[#4D694E]">Tailored to Your Operations</div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-[#FFF3D5] border border-[#4D694E]/20 flex items-center gap-4 shadow-sm">
                    <div className="w-10 h-10 rounded-lg bg-[#4D694E]/15 border border-[#4D694E]/30 flex items-center justify-center text-[#4D694E]">
                      <Database className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-[#2B3E2C]/70 font-mono">24/7 AVAILABILITY</div>
                      <div className="text-sm font-bold text-[#2B3E2C]">Always-On Assistance</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'swarm' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {/* Service 5 */}
                  <div className="p-4 rounded-xl bg-[#FFF3D5] border border-[#4D694E]/25 hover:border-[#4D694E]/45 transition-colors shadow-sm flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between text-[11px] font-mono text-[#4D694E] font-bold mb-2">
                        <span>SERVICE 05</span>
                        <span className="text-[#2B3E2C]/70">Operations</span>
                      </div>
                      <div className="text-sm font-bold text-[#2B3E2C]">Verification Call Automation</div>
                      <div className="mt-2 text-xs text-[#2B3E2C]/80 leading-relaxed">
                        Automated verification and calling workflows that reduce manual effort and streamline operational processes.
                      </div>
                    </div>
                    <div className="mt-4 pt-3 border-t border-[#4D694E]/15 text-[10px] font-mono text-[#4D694E] font-semibold">
                      Automated Calling Workflows
                    </div>
                  </div>

                  {/* Service 6 */}
                  <div className="p-4 rounded-xl bg-[#FFF3D5] border border-[#4D694E]/25 hover:border-[#4D694E]/45 transition-colors shadow-sm flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between text-[11px] font-mono text-[#4D694E] font-bold mb-2">
                        <span>SERVICE 06</span>
                        <span className="text-[#2B3E2C]/70">Growth</span>
                      </div>
                      <div className="text-sm font-bold text-[#2B3E2C]">Lead Generation</div>
                      <div className="mt-2 text-xs text-[#2B3E2C]/80 leading-relaxed">
                        AI-powered systems designed to identify, qualify, organize, and manage potential leads more efficiently.
                      </div>
                    </div>
                    <div className="mt-4 pt-3 border-t border-[#4D694E]/15 text-[10px] font-mono text-[#4D694E] font-semibold">
                      Qualified Lead Pipeline
                    </div>
                  </div>

                  {/* Service 7 */}
                  <div className="p-4 rounded-xl bg-[#FFF3D5] border border-[#4D694E]/25 hover:border-[#4D694E]/45 transition-colors shadow-sm flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between text-[11px] font-mono text-[#4D694E] font-bold mb-2">
                        <span>SERVICE 07</span>
                        <span className="text-[#2B3E2C]/70">Commerce</span>
                      </div>
                      <div className="text-sm font-bold text-[#2B3E2C]">E-commerce Assistants</div>
                      <div className="mt-2 text-xs text-[#2B3E2C]/80 leading-relaxed">
                        Intelligent shopping assistants that help customers discover products, answer questions, and navigate the buying journey.
                      </div>
                    </div>
                    <div className="mt-4 pt-3 border-t border-[#4D694E]/15 text-[10px] font-mono text-[#4D694E] font-semibold">
                      Buying Journey Support
                    </div>
                  </div>

                  {/* Service 8 */}
                  <div className="p-4 rounded-xl bg-[#4D694E]/10 border border-[#4D694E]/40 shadow-sm flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between text-[11px] font-mono text-[#4D694E] font-bold mb-2">
                        <span>SERVICE 08</span>
                        <span className="text-[#2B3E2C]/70">Automation</span>
                      </div>
                      <div className="text-sm font-bold text-[#2B3E2C]">n8n Workflow Automation</div>
                      <div className="mt-2 text-xs text-[#2B3E2C]/80 leading-relaxed">
                        Intelligent workflow automation connecting tools, services, APIs, and business processes into efficient automated systems.
                      </div>
                    </div>
                    <div className="mt-4 pt-3 border-t border-[#4D694E]/20 text-[10px] font-mono text-[#4D694E] font-semibold">
                      Connected APIs &amp; Tools
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-[#4D694E]/20">
                  <div className="p-4 rounded-xl bg-[#FFF3D5] border border-[#4D694E]/20 flex items-center gap-4 shadow-sm">
                    <div className="w-10 h-10 rounded-lg bg-[#4D694E]/15 border border-[#4D694E]/30 flex items-center justify-center text-[#4D694E]">
                      <Layers className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-[#2B3E2C]/70 font-mono">N8N ARCHITECTURE</div>
                      <div className="text-sm font-bold text-[#2B3E2C]">Unified Tooling Connectivity</div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-[#FFF3D5] border border-[#4D694E]/20 flex items-center gap-4 shadow-sm">
                    <div className="w-10 h-10 rounded-lg bg-[#4D694E]/15 border border-[#4D694E]/30 flex items-center justify-center text-[#4D694E]">
                      <CheckCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-[#2B3E2C]/70 font-mono">REDUCE EFFORT</div>
                      <div className="text-sm font-bold text-[#4D694E]">Zero Repetitive Work</div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-[#FFF3D5] border border-[#4D694E]/20 flex items-center gap-4 shadow-sm">
                    <div className="w-10 h-10 rounded-lg bg-[#4D694E]/15 border border-[#4D694E]/30 flex items-center justify-center text-[#4D694E]">
                      <TrendingUp className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-[#2B3E2C]/70 font-mono">OPERATIONAL SCALE</div>
                      <div className="text-sm font-bold text-[#2B3E2C]">Streamlined Processes</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'telemetry' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {/* Service 9 */}
                  <div className="p-4 rounded-xl bg-[#FFF3D5] border border-[#4D694E]/25 hover:border-[#4D694E]/45 transition-colors shadow-sm flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between text-[11px] font-mono text-[#4D694E] font-bold mb-2">
                        <span>SERVICE 09</span>
                        <span className="text-[#2B3E2C]/70">Documents</span>
                      </div>
                      <div className="text-sm font-bold text-[#2B3E2C]">Document Understanding</div>
                      <div className="mt-2 text-xs text-[#2B3E2C]/80 leading-relaxed">
                        AI systems that extract, understand, classify, and process information from complex business documents.
                      </div>
                    </div>
                    <div className="mt-4 pt-3 border-t border-[#4D694E]/15 text-[10px] font-mono text-[#4D694E] font-semibold">
                      Automated Data Extraction
                    </div>
                  </div>

                  {/* Service 10 */}
                  <div className="p-4 rounded-xl bg-[#FFF3D5] border border-[#4D694E]/25 hover:border-[#4D694E]/45 transition-colors shadow-sm flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between text-[11px] font-mono text-[#4D694E] font-bold mb-2">
                        <span>SERVICE 10</span>
                        <span className="text-[#2B3E2C]/70">Languages</span>
                      </div>
                      <div className="text-sm font-bold text-[#2B3E2C]">Translation</div>
                      <div className="mt-2 text-xs text-[#2B3E2C]/80 leading-relaxed">
                        AI-powered translation systems designed to make information and communication more accessible across languages.
                      </div>
                    </div>
                    <div className="mt-4 pt-3 border-t border-[#4D694E]/15 text-[10px] font-mono text-[#4D694E] font-semibold">
                      Cross-Language Access
                    </div>
                  </div>

                  {/* Service 11 */}
                  <div className="p-4 rounded-xl bg-[#4D694E]/10 border border-[#4D694E]/40 shadow-sm flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between text-[11px] font-mono text-[#4D694E] font-bold mb-2">
                        <span>SERVICE 11</span>
                        <span className="text-[#2B3E2C]/70">Autonomous</span>
                      </div>
                      <div className="text-sm font-bold text-[#2B3E2C]">Enterprise AI Agents</div>
                      <div className="mt-2 text-xs text-[#2B3E2C]/80 leading-relaxed">
                        Intelligent agents designed to perform specialized tasks, interact with business systems, and support complex organizational workflows.
                      </div>
                    </div>
                    <div className="mt-4 pt-3 border-t border-[#4D694E]/20 text-[10px] font-mono text-[#4D694E] font-semibold">
                      Specialized Task Support
                    </div>
                  </div>

                  {/* Service 12 */}
                  <div className="p-4 rounded-xl bg-[#FFF3D5] border border-[#4D694E]/25 hover:border-[#4D694E]/45 transition-colors shadow-sm flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between text-[11px] font-mono text-[#4D694E] font-bold mb-2">
                        <span>SERVICE 12</span>
                        <span className="text-[#2B3E2C]/70">Engineering</span>
                      </div>
                      <div className="text-sm font-bold text-[#2B3E2C]">Enterprise Software</div>
                      <div className="mt-2 text-xs text-[#2B3E2C]/80 leading-relaxed">
                        Scalable custom software engineered around your organization&apos;s specific operational requirements.
                      </div>
                    </div>
                    <div className="mt-4 pt-3 border-t border-[#4D694E]/15 text-[10px] font-mono text-[#4D694E] font-semibold">
                      Custom Operational Scale
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-[#4D694E]/20">
                  <div className="p-4 rounded-xl bg-[#FFF3D5] border border-[#4D694E]/20 flex items-center gap-4 shadow-sm">
                    <div className="w-10 h-10 rounded-lg bg-[#4D694E]/15 border border-[#4D694E]/30 flex items-center justify-center text-[#4D694E]">
                      <Database className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-[#2B3E2C]/70 font-mono">ENTERPRISE SYSTEMS</div>
                      <div className="text-sm font-bold text-[#2B3E2C]">Built for Production Load</div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-[#FFF3D5] border border-[#4D694E]/20 flex items-center gap-4 shadow-sm">
                    <div className="w-10 h-10 rounded-lg bg-[#4D694E]/15 border border-[#4D694E]/30 flex items-center justify-center text-[#4D694E]">
                      <CheckCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-[#2B3E2C]/70 font-mono">RELIABLE EXTRACTION</div>
                      <div className="text-sm font-bold text-[#4D694E]">High Accuracy Understanding</div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-[#FFF3D5] border border-[#4D694E]/20 flex items-center gap-4 shadow-sm">
                    <div className="w-10 h-10 rounded-lg bg-[#4D694E]/15 border border-[#4D694E]/30 flex items-center justify-center text-[#4D694E]">
                      <Activity className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-[#2B3E2C]/70 font-mono">SEAMLESS INTEGRATION</div>
                      <div className="text-sm font-bold text-[#2B3E2C]">Fits Your Organization</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
