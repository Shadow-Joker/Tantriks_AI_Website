import { useState } from 'react';
import confetti from 'canvas-confetti';
import { Play, RotateCcw, CheckCircle2, ShieldCheck, Terminal, Sparkles, Sliders, Cpu } from 'lucide-react';


interface SimulationPreset {
  id: string;
  name: string;
  command: string;
  steps: string[];
}

const PRESETS: SimulationPreset[] = [
  {
    id: 'pipeline',
    name: 'Deploy Microservice Mesh',
    command: 'tantriks deploy --mesh=autonomous-v4 --nodes=4',
    steps: [
      'Decomposing schema into typed interfaces...',
      'Synthesizing gRPC service stubs with unit test harness...',
      'Running formal verification against API contracts...',
      'Warm-deploying binaries across 240 edge points of presence.',
    ],
  },
  {
    id: 'security',
    name: 'Execute Zero-Trust Audit',
    command: 'tantriks audit --level=strict --redact-pii=true',
    steps: [
      'Scanning prompt inputs for indirect injection vectors...',
      'Anonymizing sensitive customer entity attributes in flight...',
      'Enforcing hardware cryptographic token verification...',
      'Audit log sealed with SHA-256 tamper-proof hash.',
    ],
  },
  {
    id: 'optimization',
    name: 'Optimize Token Latency',
    command: 'tantriks optimize --speculative=true --prune-depth=3',
    steps: [
      'Analyzing token attention weights across prompt tree...',
      'Speculatively pruning low-probability semantic branches...',
      'Prefetching high-confidence response fragments into cache...',
      'Latency reduced from 340ms to 4.2ms cold start.',
    ],
  },
];

export function InteractiveDemoPlayground() {
  const [selectedPreset, setSelectedPreset] = useState<SimulationPreset>(PRESETS[0]);
  const [isRunning, setIsRunning] = useState(false);
  const [currentStepIndex, setCurrentStepIndex] = useState(-1);
  const [concurrency, setConcurrency] = useState(1200);
  const [completed, setCompleted] = useState(false);

  const runSimulation = (preset = selectedPreset) => {
    if (isRunning) return;
    setIsRunning(true);
    setCurrentStepIndex(0);
    setCompleted(false);

    let step = 0;
    const interval = setInterval(() => {
      step++;
      if (step < preset.steps.length) {
        setCurrentStepIndex(step);
      } else {
        clearInterval(interval);
        setIsRunning(false);
        setCompleted(true);
        // Trigger subtle celebration
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.7 },
          colors: ['#00F2FE', '#06B6D4', '#38BDF8'],
        });
      }
    }, 700);
  };

  const handleSelectPreset = (preset: SimulationPreset) => {
    setSelectedPreset(preset);
    setCurrentStepIndex(-1);
    setCompleted(false);
  };

  // Calculated reactive metrics based on slider
  const calculatedTokens = Math.floor(concurrency * 118.5);
  const calculatedLatency = Math.max(2.1, Number((12 - concurrency / 1200).toFixed(1)));


  return (
    <section id="demo" className="relative py-24 md:py-36 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header (No eyebrow per eyebrow restraint rule) */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold font-display tracking-tight text-white mb-6">
            Test the Living Engine.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-[65ch] mx-auto">
            Experience real-time autonomous execution. Trigger a workflow simulation, tune distributed concurrency, and inspect live telemetry output.
          </p>
        </div>

        {/* Interactive Console & Playground Container */}
        <div className="glass-panel-elevated rounded-3xl p-6 md:p-10 border border-white/10 shadow-2xl">
          {/* Preset Selector Pills */}
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <span className="text-xs font-mono text-slate-400 mr-2 flex items-center gap-1.5">
              <Sliders className="w-3.5 h-3.5 text-cyan-400" />
              SELECT ACTION:
            </span>
            {PRESETS.map((p) => (
              <button
                key={p.id}
                onClick={() => handleSelectPreset(p)}
                disabled={isRunning}
                className={`px-4 py-2 rounded-full text-xs font-medium font-mono transition-all duration-200 ${
                  selectedPreset.id === p.id
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 shadow-[0_0_15px_rgba(0,242,254,0.2)]'
                    : 'bg-[#0E121E] text-slate-300 border border-white/10 hover:border-white/20'
                }`}
              >
                {p.name}
              </button>
            ))}
          </div>

          {/* Interactive Playground Split View */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* LEFT: Live Terminal Execution Canvas */}
            <div className="lg:col-span-7 rounded-2xl bg-[#06080D] border border-white/10 p-5 md:p-6 flex flex-col justify-between font-mono">
              <div>
                {/* Window header */}
                <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4 text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-cyan-400" />
                    <span>interactive-mesh-terminal</span>
                  </div>
                  <span className="text-[10px] text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">
                    STATUS: READY
                  </span>
                </div>

                {/* Command Line Input */}
                <div className="text-xs sm:text-sm text-cyan-300 mb-6 flex items-center gap-2 bg-[#0C1019] p-3 rounded-lg border border-white/5">
                  <span className="text-emerald-400">›</span>
                  <span className="text-white font-semibold">{selectedPreset.command}</span>
                </div>

                {/* Execution Steps */}
                <div className="space-y-3 min-h-[160px]">
                  {selectedPreset.steps.map((stepText, idx) => {
                    const isDone = currentStepIndex > idx || completed;
                    const isCurrent = currentStepIndex === idx && isRunning;

                    return (
                      <div
                        key={stepText}
                        className={`flex items-start gap-2.5 text-xs transition-opacity duration-300 ${
                          isDone
                            ? 'text-slate-200'
                            : isCurrent
                            ? 'text-cyan-300 font-semibold'
                            : 'text-slate-600 opacity-40'
                        }`}
                      >
                        {isDone ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        ) : isCurrent ? (
                          <Sparkles className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5 animate-spin" />
                        ) : (
                          <div className="w-4 h-4 rounded-full border border-slate-700 shrink-0 mt-0.5" />
                        )}
                        <span>{stepText}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Action Button Bar */}
              <div className="pt-6 border-t border-white/10 flex items-center justify-between gap-4 mt-6">
                <button
                  onClick={() => runSimulation()}
                  disabled={isRunning}
                  className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
                    isRunning
                      ? 'bg-slate-800 text-slate-500 cursor-not-allowed'
                      : 'bg-cyan-400 text-[#07080B] hover:bg-cyan-300 shadow-[0_0_20px_rgba(0,242,254,0.4)]'
                  }`}
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>{isRunning ? 'Executing...' : 'Run Pipeline'}</span>
                </button>

                {completed && (
                  <button
                    onClick={() => runSimulation()}
                    className="text-xs text-slate-400 hover:text-white flex items-center gap-1.5 transition-colors"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Rerun Test</span>
                  </button>
                )}
              </div>
            </div>

            {/* RIGHT: Live Telemetry & Concurrency Parameter Sliders */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-6 p-6 rounded-2xl bg-[#0D1018]/90 border border-white/10">
              {/* Concurrency Controller Slider */}
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-slate-300 mb-2">
                  <span className="flex items-center gap-1.5">
                    <Cpu className="w-4 h-4 text-cyan-400" />
                    CONCURRENCY WORKERS:
                  </span>
                  <span className="text-cyan-300 font-bold text-sm">{concurrency} workers</span>
                </div>
                <input
                  type="range"
                  min={100}
                  max={5000}
                  step={100}
                  value={concurrency}
                  onChange={(e) => setConcurrency(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                />
                <div className="flex justify-between text-[10px] font-mono text-slate-500 mt-1">
                  <span>100 Edge Nodes</span>
                  <span>5,000 Edge Nodes</span>
                </div>
              </div>

              {/* Reactive Telemetry Metrics */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-[#07090F] border border-white/5">
                  <div className="text-[10px] font-mono text-slate-400 uppercase">
                    Calculated Velocity
                  </div>
                  <div className="text-xl font-bold font-mono text-white mt-1">
                    {calculatedTokens.toLocaleString()} <span className="text-xs font-normal text-slate-400">tok/s</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#07090F] border border-white/5">
                  <div className="text-[10px] font-mono text-slate-400 uppercase">
                    Cold Start Latency
                  </div>
                  <div className="text-xl font-bold font-mono text-emerald-400 mt-1">
                    {calculatedLatency}ms
                  </div>
                </div>
              </div>

              {/* Security & Reliability Badge */}
              <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-500/20 flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-cyan-400 shrink-0" />
                <div className="text-xs text-slate-300 leading-relaxed">
                  Hardware-isolated multi-tenant sandbox with zero memory cross-talk and full cryptographic auditing.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
