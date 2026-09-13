import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useReducedMotion, AnimatePresence } from 'motion/react';
import { ParticleCanvas } from './ParticleCanvas';
import { Activity, ShieldCheck, Zap, Terminal, Sparkles, CheckCircle2 } from 'lucide-react';
import { useMousePosition } from '../../hooks/useMousePosition';
import tantriksLogo from '../../assets/tantriks-hub-mark.svg';

const TERMINAL_COMMANDS = [
  {
    cmd: "tantriks.craftMagic('bespoke_enterprise_workflow')",
    badge: 'VERIFIED',
    telemetry: 'custom systems // zero friction',
  },
  {
    cmd: "tantriks.deployAgent({ team: 'Operations', latency: '12ms' })",
    badge: 'DEPLOYED',
    telemetry: 'autonomous sync // 99.98% uptime',
  },
  {
    cmd: "tantriks.syncKnowledgeBase({ store: 'hybrid_mesh', status: 'live' })",
    badge: 'SYNCHRONIZED',
    telemetry: 'real-time inference // active',
  },
  {
    cmd: "tantriks.orchestrateMesh({ friction: 0, scale: 'infinite' })",
    badge: 'OPTIMIZED',
    telemetry: 'neural pipeline // calibrated',
  },
];

const WORKFLOW_NODES = [
  {
    id: 0,
    nodeNumber: 'Node 01: Ingestion',
    title: 'Workflow Understanding',
    detail: 'Unique Business Logic',
    badge: 'Bespoke',
    icon: Terminal,
    metric: '1,420 ev/s',
    metricLabel: 'Stream Active',
  },
  {
    id: 1,
    nodeNumber: 'Node 02: Intelligence',
    title: 'AI Agents & Automation',
    detail: 'Working Alongside Your Team',
    badge: 'Active',
    icon: Sparkles,
    metric: '4 Agents Live',
    metricLabel: 'Neural Core Online',
  },
  {
    id: 2,
    nodeNumber: 'Node 03: Integration',
    title: 'Enterprise System Sync',
    detail: 'Natural Operational Fit',
    badge: 'Ready',
    icon: ShieldCheck,
    metric: '14ms Latency',
    metricLabel: '100% Synced',
  },
];

export function HeroParallaxEngine() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const prefersReduced = useReducedMotion();
  const mouse = useMousePosition();

  // Active node state for sequential pipeline animation
  const [activeNodeIndex, setActiveNodeIndex] = useState(1);
  const [cmdIndex, setCmdIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Cycle through active nodes automatically unless user is actively hovering
  useEffect(() => {
    if (isHovered || prefersReduced) return;
    const interval = setInterval(() => {
      setActiveNodeIndex((prev) => (prev + 1) % WORKFLOW_NODES.length);
    }, 3600);
    return () => clearInterval(interval);
  }, [isHovered, prefersReduced]);

  // Cycle terminal commands continuously
  useEffect(() => {
    const cmdInterval = setInterval(() => {
      setCmdIndex((prev) => (prev + 1) % TERMINAL_COMMANDS.length);
    }, 4200);
    return () => clearInterval(cmdInterval);
  }, []);

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

  const activeCmd = TERMINAL_COMMANDS[cmdIndex];

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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#4D694E]/15 dark:bg-[#82D173]/15 blur-[130px] rounded-full pointer-events-none animate-pulse" style={{ animationDuration: '6s' }} />
        <div className="absolute inset-0 bg-grid-pattern opacity-40" />
      </motion.div>

      {/* LAYER 02: Large Abstract Geometric Forms with Orbiting Satellites */}
      <motion.div
        style={{
          y: prefersReduced ? 0 : layer2Y,
          x: prefersReduced ? 0 : useTransform(smoothMouseX, [-1, 1], [-20, 20]),
        }}
        className="absolute inset-0 pointer-events-none z-1 flex items-center justify-center"
      >
        {/* Expanding sonar radar ripple */}
        <div className="absolute w-[420px] h-[420px] rounded-full border border-[#4D694E]/20 dark:border-[#82D173]/25 animate-ping pointer-events-none" style={{ animationDuration: '5.5s' }} />

        {/* Primary Orbital ring with orbiting satellite */}
        <div className="relative w-[520px] h-[520px] rounded-full border border-[#4D694E]/20 dark:border-[#82D173]/20 border-dashed animate-[spin_60s_linear_infinite] flex items-center justify-start">
          <span className="w-3 h-3 rounded-full bg-[#4D694E] dark:bg-[#82D173] shadow-[0_0_12px_rgba(130,209,115,0.8)] -ml-1.5 animate-pulse" />
        </div>

        {/* Secondary Orbital ring with reverse satellite */}
        <div className="absolute w-[680px] h-[680px] rounded-full border border-[#4D694E]/15 dark:border-[#82D173]/15 animate-[spin_90s_linear_infinite_reverse] flex items-start justify-center">
          <span className="w-2.5 h-2.5 rounded-full bg-[#4D694E]/80 dark:bg-[#82D173]/80 shadow-[0_0_10px_rgba(130,209,115,0.6)] -mt-1.25" />
        </div>
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
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative z-20 w-full max-w-3xl px-4 transition-transform duration-200"
        data-cursor="INSPECT"
      >
        <div className="relative glass-panel-elevated rounded-2xl overflow-hidden border border-[#4D694E]/25 dark:border-[#82D173]/30 shadow-[0_30px_80px_rgba(43,62,44,0.15)] dark:shadow-[0_30px_80px_rgba(0,0,0,0.7)] backdrop-blur-2xl">
          {/* Holographic Laser Scan Sweep Beam */}
          {!prefersReduced && (
            <motion.div
              animate={{ x: ['-120%', '300%'] }}
              transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut', repeatDelay: 1.5 }}
              className="absolute inset-y-0 w-40 bg-gradient-to-r from-transparent via-[#82D173]/15 to-transparent pointer-events-none skew-x-12 z-30"
            />
          )}

          {/* Mockup Studio Window Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#F4E7C5]/95 dark:bg-[#181313]/95 border-b border-[#4D694E]/20 dark:border-[#82D173]/20 relative z-10">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 transition-transform hover:scale-125" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 transition-transform hover:scale-125" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#4D694E] dark:bg-[#82D173] transition-transform hover:scale-125" />
              <div className="flex items-center gap-1.5 ml-2">
                <img src={tantriksLogo} alt="" className="w-3.5 h-3.5 object-contain" />
                <span className="text-[11px] font-mono text-[#2B3E2C] dark:text-[#F4FAF3] font-medium">
                  tantriks-ai // bespoke-workflow-mesh
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#4D694E]/10 dark:bg-[#82D173]/15 border border-[#4D694E]/25 dark:border-[#82D173]/30 text-[10px] font-mono text-[#2B3E2C] dark:text-[#82D173]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4D694E] dark:bg-[#82D173] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4D694E] dark:bg-[#82D173]" />
                </span>
                Custom AI Active
              </span>
              <span className="text-[11px] font-mono text-[#2B3E2C]/80 dark:text-[#82D173]/80 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4D694E] dark:bg-[#82D173] animate-pulse" />
                Connected
              </span>
            </div>
          </div>

          {/* Mockup Studio Canvas Content */}
          <div className="p-4 md:p-6 bg-gradient-to-b from-[#FFF3D5] to-[#F4E7C5] dark:from-[#0F0A0A] dark:to-[#181313] relative">
            {/* Visual Workflow Nodes */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4 relative">
              {WORKFLOW_NODES.map((node, index) => {
                const isActive = activeNodeIndex === index;
                const IconComponent = node.icon;

                return (
                  <motion.div
                    key={node.id}
                    onClick={() => setActiveNodeIndex(index)}
                    whileHover={{ scale: 1.02 }}
                    className={`relative p-3.5 rounded-xl transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                      isActive
                        ? 'bg-[#4D694E]/15 dark:bg-[#82D173]/15 border-2 border-[#4D694E] dark:border-[#82D173] shadow-[0_0_24px_rgba(77,105,78,0.2)] dark:shadow-[0_0_28px_rgba(130,209,115,0.25)]'
                        : 'bg-[#FFF3D5] dark:bg-[#181313] border border-[#4D694E]/20 dark:border-[#82D173]/20 shadow-sm opacity-85 hover:opacity-100 hover:border-[#4D694E]/40 dark:hover:border-[#82D173]/40'
                    }`}
                  >
                    {/* Active ambient glow orb */}
                    {isActive && (
                      <div className="absolute top-0 right-0 w-20 h-20 bg-[#4D694E]/15 dark:bg-[#82D173]/20 rounded-full blur-xl pointer-events-none" />
                    )}

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span
                          className={`text-[11px] font-mono uppercase tracking-wider font-bold ${
                            isActive
                              ? 'text-[#4D694E] dark:text-[#82D173]'
                              : 'text-[#2B3E2C]/70 dark:text-[#F4FAF3]/70'
                          }`}
                        >
                          {node.nodeNumber}
                        </span>
                        <div className="flex items-center gap-1.5">
                          {isActive && (
                            <span className="flex h-1.5 w-1.5 rounded-full bg-[#4D694E] dark:bg-[#82D173] animate-ping" />
                          )}
                          <IconComponent
                            className={`w-3.5 h-3.5 transition-transform duration-300 ${
                              isActive
                                ? 'text-[#4D694E] dark:text-[#82D173] scale-110'
                                : 'text-[#2B3E2C]/60 dark:text-[#F4FAF3]/60'
                            }`}
                          />
                        </div>
                      </div>

                      <div className="text-xs font-bold text-[#2B3E2C] dark:text-[#F4FAF3] flex items-center justify-between">
                        <span>{node.title}</span>
                      </div>

                      {/* Live dynamic telemetry indicator */}
                      <div className="mt-2 flex items-center justify-between text-[10px] font-mono">
                        <span className="text-[#2B3E2C]/80 dark:text-[#F4FAF3]/80">
                          {node.detail}
                        </span>
                        <span
                          className={`font-bold px-1.5 py-0.5 rounded text-[9px] ${
                            isActive
                              ? 'bg-[#4D694E] text-[#FFF3D5] dark:bg-[#82D173] dark:text-[#0F0A0A]'
                              : 'bg-[#4D694E]/10 text-[#4D694E] dark:bg-[#82D173]/10 dark:text-[#82D173]'
                          }`}
                        >
                          {node.badge}
                        </span>
                      </div>
                    </div>

                    {/* Animated Micro-equalizer or metric pulse */}
                    <div className="mt-3 pt-2 border-t border-[#4D694E]/15 dark:border-[#82D173]/15 flex items-center justify-between">
                      <span className="text-[9px] font-mono text-[#2B3E2C]/60 dark:text-[#F4FAF3]/60">
                        {node.metricLabel}
                      </span>
                      <div className="flex items-center gap-1.5">
                        {isActive ? (
                          <div className="flex items-end gap-0.5 h-2.5">
                            <span className="w-0.5 bg-[#4D694E] dark:bg-[#82D173] rounded-full animate-[pulse_0.6s_ease-in-out_infinite] h-1.5" />
                            <span className="w-0.5 bg-[#4D694E] dark:bg-[#82D173] rounded-full animate-[pulse_0.9s_ease-in-out_infinite_0.15s] h-2.5" />
                            <span className="w-0.5 bg-[#4D694E] dark:bg-[#82D173] rounded-full animate-[pulse_0.75s_ease-in-out_infinite_0.3s] h-2" />
                          </div>
                        ) : (
                          <CheckCircle2 className="w-2.5 h-2.5 text-[#4D694E]/50 dark:text-[#82D173]/50" />
                        )}
                        <span className="text-[10px] font-mono font-bold text-[#4D694E] dark:text-[#82D173]">
                          {node.metric}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Live Streaming Log Bar with Animated Command Ticker */}
            <div className="px-3.5 py-2.5 rounded-lg bg-[#F4E7C5]/90 dark:bg-[#181313]/90 border border-[#4D694E]/20 dark:border-[#82D173]/25 font-mono text-[11px] flex items-center justify-between text-[#2B3E2C] dark:text-[#F4FAF3] shadow-inner overflow-hidden min-h-[42px]">
              <div className="flex items-center gap-2 overflow-hidden mr-2">
                <span className="text-[#4D694E] dark:text-[#82D173] font-bold text-sm">›</span>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={cmdIndex}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.25 }}
                    className="flex items-center gap-2 overflow-hidden truncate"
                  >
                    <span className="truncate font-medium text-[#2B3E2C] dark:text-[#F4FAF3]">
                      {activeCmd.cmd}
                    </span>
                    <motion.span
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                      className="inline-block w-1.5 h-3.5 bg-[#4D694E] dark:bg-[#82D173] shrink-0"
                    />
                    <span className="text-[#FFF3D5] dark:text-[#0F0A0A] bg-[#4D694E] dark:bg-[#82D173] px-1.5 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider shrink-0">
                      {activeCmd.badge}
                    </span>
                  </motion.div>
                </AnimatePresence>
              </div>

              <span className="hidden sm:inline text-[#2B3E2C]/70 dark:text-[#82D173]/70 text-[10px] font-mono shrink-0">
                {activeCmd.telemetry}
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* LAYER 05: Foreground Details (Floating Telemetry HUD Chips with Levitation Animation) */}
      <motion.div
        style={{
          y: prefersReduced ? 0 : layer5Y,
          x: prefersReduced ? 0 : useTransform(smoothMouseX, [-1, 1], [25, -25]),
        }}
        className="absolute inset-0 pointer-events-none z-30 flex items-center justify-between px-6 md:px-16"
      >
        {/* Left floating badge with levitation animation */}
        <motion.div
          animate={
            prefersReduced
              ? {}
              : {
                  y: [-10, 8, -10],
                  rotate: [-1, 0.8, -1],
                }
          }
          transition={{
            duration: 5.2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="hidden lg:flex items-center gap-3 p-3 rounded-xl bg-[#FFF3D5]/95 dark:bg-[#181313]/95 border border-[#4D694E]/30 dark:border-[#82D173]/35 backdrop-blur-xl shadow-2xl shadow-[#4D694E]/10 dark:shadow-[#82D173]/15 -translate-y-16"
        >
          <div className="relative w-8 h-8 rounded-lg bg-[#4D694E] dark:bg-[#82D173] flex items-center justify-center text-[#FFF3D5] dark:text-[#0F0A0A] shadow-[0_0_15px_rgba(130,209,115,0.4)]">
            <Zap className="w-4 h-4 fill-current" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#82D173] animate-ping" />
          </div>
          <div>
            <div className="text-[10px] font-mono text-[#2B3E2C]/70 dark:text-[#82D173]/70 flex items-center gap-1">
              <span>CUSTOM AI SYSTEMS</span>
              <span className="w-1 h-1 rounded-full bg-[#4D694E] dark:bg-[#82D173]" />
              <span className="text-[9px] text-[#4D694E] dark:text-[#82D173] font-bold">99.9% Uptime</span>
            </div>
            <div className="text-xs font-bold text-[#2B3E2C] dark:text-[#F4FAF3] font-mono">
              Built For Your Business
            </div>
          </div>
        </motion.div>

        {/* Right floating badge with reverse levitation animation */}
        <motion.div
          animate={
            prefersReduced
              ? {}
              : {
                  y: [8, -10, 8],
                  rotate: [0.8, -1, 0.8],
                }
          }
          transition={{
            duration: 5.8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="hidden lg:flex items-center gap-3 p-3 rounded-xl bg-[#FFF3D5]/95 dark:bg-[#181313]/95 border border-[#4D694E]/30 dark:border-[#82D173]/35 backdrop-blur-xl shadow-2xl shadow-[#4D694E]/10 dark:shadow-[#82D173]/15 translate-y-24"
        >
          <div className="w-8 h-8 rounded-lg bg-[#364C37] dark:bg-[#82D173] flex items-center justify-center text-[#FFF3D5] dark:text-[#0F0A0A] shadow-[0_0_15px_rgba(130,209,115,0.3)]">
            <Activity className="w-4 h-4 animate-pulse" />
          </div>
          <div>
            <div className="text-[10px] font-mono text-[#2B3E2C]/70 dark:text-[#82D173]/70 flex items-center gap-1.5">
              <span>INTELLIGENT AGENTS</span>
              <div className="flex items-end gap-0.5 h-2">
                <span className="w-0.5 bg-[#4D694E] dark:bg-[#82D173] rounded-full animate-[pulse_0.7s_ease-in-out_infinite] h-1.5" />
                <span className="w-0.5 bg-[#4D694E] dark:bg-[#82D173] rounded-full animate-[pulse_1.1s_ease-in-out_infinite_0.2s] h-2" />
                <span className="w-0.5 bg-[#4D694E] dark:bg-[#82D173] rounded-full animate-[pulse_0.8s_ease-in-out_infinite_0.4s] h-1" />
              </div>
            </div>
            <div className="text-xs font-bold text-[#2B3E2C] dark:text-[#F4FAF3] font-mono">
              Working Alongside Team
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
