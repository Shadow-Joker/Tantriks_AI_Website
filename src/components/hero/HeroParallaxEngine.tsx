import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from 'motion/react';
import { ParticleCanvas } from './ParticleCanvas';
import { Activity, ShieldCheck, Zap, Terminal, Sparkles } from 'lucide-react';
import { useMousePosition } from '../../hooks/useMousePosition';
import tantriksLogo from '../../assets/tantriks-hub-mark.svg';




export function HeroParallaxEngine() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const prefersReduced = useReducedMotion();
  const mouse = useMousePosition();

  // Normalized mouse coordinates from center (-1 to 1)
  const normX = typeof window !== 'undefined' ? (mouse.x / window.innerWidth - 0.5) * 2 : 0;
  const normY = typeof window !== 'undefined' ? (mouse.y / window.innerHeight - 0.5) * 2 : 0;

  // Spring physics for mouse tilt
  const springConfig = { damping: 30, stiffness: 200, mass: 0.6 };
  const smoothMouseX = useSpring(normX, springConfig);
  const smoothMouseY = useSpring(normY, springConfig);

  // Scroll tracking across the hero
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Layer parallax scroll translations
  const layer1Y = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const layer2Y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const layer4Y = useTransform(scrollYProgress, [0, 1], ['0%', '45%']);
  const layer5Y = useTransform(scrollYProgress, [0, 1], ['0%', '65%']);

  // Layer 4 3D tilt
  const rotX = useTransform(smoothMouseY, [-1, 1], [8, -8]);
  const rotY = useTransform(smoothMouseX, [-1, 1], [-8, 8]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[540px] md:h-[640px] flex items-center justify-center overflow-hidden [perspective:1200px]"
    >
      {/* LAYER 01: Deep Background Atmosphere */}
      <motion.div
        style={{ y: prefersReduced ? 0 : layer1Y }}
        className="absolute inset-0 pointer-events-none z-0"
      >
        <div className="absolute inset-0 bg-radial-gradient" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#4D694E]/15 blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute inset-0 bg-grid-pattern opacity-40" />
      </motion.div>

      {/* LAYER 02: Large Abstract Geometric Forms */}
      <motion.div
        style={{
          y: prefersReduced ? 0 : layer2Y,
          x: prefersReduced ? 0 : useTransform(smoothMouseX, [-1, 1], [-20, 20]),
        }}
        className="absolute inset-0 pointer-events-none z-1 flex items-center justify-center"
      >
        {/* Orbital rings */}
        <div className="w-[520px] h-[520px] rounded-full border border-[#4D694E]/20 border-dashed animate-[spin_60s_linear_infinite]" />
        <div className="absolute w-[680px] h-[680px] rounded-full border border-[#4D694E]/15 animate-[spin_90s_linear_infinite_reverse]" />
      </motion.div>

      {/* LAYER 03: Interactive Particle Canvas */}
      <ParticleCanvas />

      {/* LAYER 04: Product / UI Stage (3D Perspective Studio Preview) */}
      <motion.div
        style={{
          y: prefersReduced ? 0 : layer4Y,
          rotateX: prefersReduced ? 0 : rotX,
          rotateY: prefersReduced ? 0 : rotY,
          transformStyle: 'preserve-3d',
        }}
        className="relative z-20 w-full max-w-3xl px-4"
        data-cursor="INSPECT"
      >
        <div className="glass-panel-elevated rounded-2xl overflow-hidden border border-[#4D694E]/25 shadow-[0_30px_80px_rgba(43,62,44,0.15)] backdrop-blur-2xl">
          {/* Mockup Studio Window Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#F4E7C5]/95 border-b border-[#4D694E]/20">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#4D694E]" />
              <div className="flex items-center gap-1.5 ml-2">
                <img src={tantriksLogo} alt="" className="w-3.5 h-3.5 object-contain" />
                <span className="text-[11px] font-mono text-[#2B3E2C] font-medium">
                  tantriks-ai // bespoke-workflow-mesh
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#4D694E]/10 border border-[#4D694E]/25 text-[10px] font-mono text-[#2B3E2C]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4D694E] animate-pulse" />
                Custom AI Active
              </span>
              <span className="text-[11px] font-mono text-[#2B3E2C]/80">Connected</span>
            </div>
          </div>

          {/* Mockup Studio Canvas Content */}
          <div className="p-4 md:p-6 bg-gradient-to-b from-[#FFF3D5] to-[#F4E7C5]">
            {/* Visual Workflow Nodes */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
              <div className="p-3.5 rounded-xl bg-[#FFF3D5] border border-[#4D694E]/20 flex flex-col justify-between shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono text-[#4D694E] uppercase tracking-wider font-bold">
                    Node 01: Ingestion
                  </span>
                  <Terminal className="w-3.5 h-3.5 text-[#4D694E]" />
                </div>
                <div className="text-xs font-bold text-[#2B3E2C]">Workflow Understanding</div>
                <div className="mt-2 text-[10px] font-mono text-[#2B3E2C]/80 flex items-center justify-between">
                  <span>Unique Business Logic</span>
                  <span className="text-[#4D694E] font-bold">Bespoke</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#4D694E]/10 border border-[#4D694E]/40 shadow-[0_0_20px_rgba(77,105,78,0.15)] flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-[#4D694E]/10 rounded-full blur-xl" />
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono text-[#4D694E] uppercase tracking-wider font-bold">
                    Node 02: Intelligence
                  </span>
                  <Sparkles className="w-3.5 h-3.5 text-[#4D694E] animate-spin" />
                </div>
                <div className="text-xs font-bold text-[#2B3E2C]">AI Agents &amp; Automation</div>
                <div className="mt-2 text-[10px] font-mono text-[#2B3E2C]/80 flex items-center justify-between">
                  <span>Working Alongside Your Team</span>
                  <span className="text-[#4D694E] font-bold">Active</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#FFF3D5] border border-[#4D694E]/20 flex flex-col justify-between shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono text-[#364C37] uppercase tracking-wider font-bold">
                    Node 03: Integration
                  </span>
                  <ShieldCheck className="w-3.5 h-3.5 text-[#364C37]" />
                </div>
                <div className="text-xs font-bold text-[#2B3E2C]">Enterprise System Sync</div>
                <div className="mt-2 text-[10px] font-mono text-[#2B3E2C]/80 flex items-center justify-between">
                  <span>Natural Operational Fit</span>
                  <span className="text-[#364C37] font-bold">Ready</span>
                </div>
              </div>
            </div>

            {/* Live Streaming Log Bar */}
            <div className="px-3.5 py-2 rounded-lg bg-[#F4E7C5]/90 border border-[#4D694E]/20 font-mono text-[11px] flex items-center justify-between text-[#2B3E2C]">
              <div className="flex items-center gap-2">
                <span className="text-[#4D694E] font-bold">›</span>
                <span className="text-[#2B3E2C] font-medium">
                  tantriks.craftMagic(&apos;bespoke_enterprise_workflow&apos;)
                </span>
                <span className="text-[#FFF3D5] bg-[#4D694E] px-1.5 py-0.2 rounded text-[10px] font-bold">
                  VERIFIED
                </span>
              </div>
              <span className="hidden sm:inline text-[#2B3E2C]/70">custom systems // zero friction</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* LAYER 05: Foreground Details (Floating Telemetry HUD Chips) */}
      <motion.div
        style={{
          y: prefersReduced ? 0 : layer5Y,
          x: prefersReduced ? 0 : useTransform(smoothMouseX, [-1, 1], [25, -25]),
        }}
        className="absolute inset-0 pointer-events-none z-30 flex items-center justify-between px-6 md:px-16"
      >
        {/* Left floating badge */}
        <div className="hidden lg:flex items-center gap-3 p-3 rounded-xl bg-[#FFF3D5]/95 border border-[#4D694E]/30 backdrop-blur-xl shadow-2xl shadow-[#4D694E]/10 -translate-y-16">
          <div className="w-8 h-8 rounded-lg bg-[#4D694E] flex items-center justify-center text-[#FFF3D5]">
            <Zap className="w-4 h-4" />
          </div>
          <div>
            <div className="text-[10px] font-mono text-[#2B3E2C]/70">CUSTOM AI SYSTEMS</div>
            <div className="text-xs font-bold text-[#2B3E2C] font-mono">Built For Your Business</div>
          </div>
        </div>

        {/* Right floating badge */}
        <div className="hidden lg:flex items-center gap-3 p-3 rounded-xl bg-[#FFF3D5]/95 border border-[#4D694E]/30 backdrop-blur-xl shadow-2xl translate-y-24">
          <div className="w-8 h-8 rounded-lg bg-[#364C37] flex items-center justify-center text-[#FFF3D5]">
            <Activity className="w-4 h-4" />
          </div>
          <div>
            <div className="text-[10px] font-mono text-[#2B3E2C]/70">INTELLIGENT AGENTS</div>
            <div className="text-xs font-bold text-[#2B3E2C] font-mono">Working Alongside Team</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
