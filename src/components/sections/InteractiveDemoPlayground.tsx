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
    id: 'voice',
    name: 'Voice Verification',
    command: 'tantriks voice --action=verification --workflow=operations',
    steps: [
      'Initiating intelligent voice assistant pipeline...',
      'Handling routine customer communication and data collection...',
      'Verifying details against internal operational records...',
      'Verification workflow complete with automated system sync.',
    ],
  },
  {
    id: 'n8n',
    name: 'n8n Workflow Automation',
    command: 'tantriks n8n --connect=tools,apis --automate=true',
    steps: [
      'Connecting business tools, services, and APIs...',
      'Automating multi-step workflow logic and data routing...',
      'Eliminating manual data transfer between disconnected platforms...',
      'Intelligent workflow execution complete across systems.',
    ],
  },
  {
    id: 'document',
    name: 'Document Understanding',
    command: 'tantriks document --extract=structured-data --classify=auto',
    steps: [
      'Ingesting unstructured enterprise documents and files...',
      'Extracting, understanding, and classifying key information...',
      'Validating structured outputs against business schemas...',
      'Information extracted and structured with zero manual effort.',
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
          colors: ['#4D694E', '#2B3E2C', '#6E8F6F', '#FFF3D5'],
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
    <section id="demo" className="relative py-24 md:py-36 border-t border-[#4D694E]/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold font-display tracking-tight text-[#2B3E2C] mb-6">
            Experience Intelligent Automation.
          </h2>
          <p className="text-base sm:text-lg text-[#2B3E2C]/80 leading-relaxed max-w-[65ch] mx-auto">
            See how Tantriks AI orchestrates voice assistants, automated n8n workflows, and document understanding directly within business operations.
          </p>
        </div>

        {/* Interactive Console & Playground Container */}
        <div className="bg-[#F4E7C5]/90 rounded-3xl p-6 md:p-10 border border-[#4D694E]/25 shadow-sm">
          {/* Preset Selector Pills */}
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <span className="text-xs font-mono text-[#2B3E2C]/70 mr-2 flex items-center gap-1.5">
              <Sliders className="w-3.5 h-3.5 text-[#4D694E]" />
              SELECT ACTION:
            </span>
            {PRESETS.map((p) => (
              <button
                key={p.id}
                onClick={() => handleSelectPreset(p)}
                disabled={isRunning}
                className={`px-4 py-2 rounded-full text-xs font-medium font-mono transition-all duration-200 ${
                  selectedPreset.id === p.id
                    ? 'bg-[#4D694E] text-[#FFF3D5] shadow-md border border-[#4D694E]'
                    : 'bg-[#FFF3D5] text-[#2B3E2C]/80 border border-[#4D694E]/20 hover:border-[#4D694E]/40'
                }`}
              >
                {p.name}
              </button>
            ))}
          </div>

          {/* Interactive Playground Split View */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* LEFT: Live Terminal Execution Canvas */}
            <div className="lg:col-span-7 rounded-2xl bg-[#1F2D20] border border-[#4D694E]/30 p-5 md:p-6 flex flex-col justify-between font-mono">
              <div>
                {/* Window header */}
                <div className="flex items-center justify-between pb-3 border-b border-[#4D694E]/30 mb-4 text-xs text-[#FFF3D5]/80">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-[#FFF3D5]" />
                    <span>interactive-mesh-terminal</span>
                  </div>
                  <span className="text-[10px] text-[#FFF3D5] bg-[#4D694E]/40 px-2 py-0.5 rounded border border-[#FFF3D5]/30">
                    STATUS: READY
                  </span>
                </div>

                {/* Command Line Input */}
                <div className="text-xs sm:text-sm text-[#FFF3D5]/90 mb-6 flex items-center gap-2 bg-[#152016] p-3 rounded-lg border border-[#4D694E]/30">
                  <span className="text-[#9BB89D]">›</span>
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
                            ? 'text-[#FFF3D5]'
                            : isCurrent
                            ? 'text-[#FFF3D5] font-semibold'
                            : 'text-[#FFF3D5]/40'
                        }`}
                      >
                        {isDone ? (
                          <CheckCircle2 className="w-4 h-4 text-[#9BB89D] shrink-0 mt-0.5" />
                        ) : isCurrent ? (
                          <Sparkles className="w-4 h-4 text-[#FFF3D5] shrink-0 mt-0.5 animate-spin" />
                        ) : (
                          <div className="w-4 h-4 rounded-full border border-[#FFF3D5]/30 shrink-0 mt-0.5" />
                        )}
                        <span>{stepText}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Action Button Bar */}
              <div className="pt-6 border-t border-[#4D694E]/20 flex items-center justify-between gap-4 mt-6">
                <button
                  onClick={() => runSimulation()}
                  disabled={isRunning}
                  className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
                    isRunning
                      ? 'bg-[#2B3E2C] text-[#FFF3D5]/50 cursor-not-allowed'
                      : 'bg-[#4D694E] text-[#FFF3D5] hover:bg-[#364C37] shadow-[0_0_20px_rgba(77,105,78,0.4)]'
                  }`}
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>{isRunning ? 'Executing...' : 'Run Pipeline'}</span>
                </button>

                {completed && (
                  <button
                    onClick={() => runSimulation()}
                    className="text-xs text-[#FFF3D5]/80 hover:text-white flex items-center gap-1.5 transition-colors"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Rerun Test</span>
                  </button>
                )}
              </div>
            </div>

            {/* RIGHT: Live Telemetry & Concurrency Parameter Sliders */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-6 p-6 rounded-2xl bg-[#FFF3D5] border border-[#4D694E]/25">
              {/* Concurrency Controller Slider */}
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-[#2B3E2C]/80 mb-2">
                  <span className="flex items-center gap-1.5">
                    <Cpu className="w-4 h-4 text-[#4D694E]" />
                    CONCURRENCY WORKERS:
                  </span>
                  <span className="text-[#4D694E] font-bold text-sm">{concurrency} workers</span>
                </div>
                <input
                  type="range"
                  min={100}
                  max={5000}
                  step={100}
                  value={concurrency}
                  onChange={(e) => setConcurrency(Number(e.target.value))}
                  className="w-full h-1.5 bg-[#EBDDB6] rounded-lg appearance-none cursor-pointer accent-[#4D694E]"
                />
                <div className="flex justify-between text-[10px] font-mono text-[#2B3E2C]/60 mt-1">
                  <span>100 Workflows</span>
                  <span>5,000 Workflows</span>
                </div>
              </div>

              {/* Reactive Telemetry Metrics */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-[#F4E7C5] border border-[#4D694E]/20">
                  <div className="text-[10px] font-mono text-[#2B3E2C]/70 uppercase">
                    Workflow Throughput
                  </div>
                  <div className="text-xl font-bold font-mono text-[#2B3E2C] mt-1">
                    {calculatedTokens.toLocaleString()} <span className="text-xs font-normal text-[#2B3E2C]/60">ops/m</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#F4E7C5] border border-[#4D694E]/20">
                  <div className="text-[10px] font-mono text-[#2B3E2C]/70 uppercase">
                    System Latency
                  </div>
                  <div className="text-xl font-bold font-mono text-[#4D694E] mt-1">
                    {calculatedLatency}ms
                  </div>
                </div>
              </div>

              {/* Security & Reliability Badge */}
              <div className="p-4 rounded-xl bg-[#4D694E]/10 border border-[#4D694E]/30 flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-[#4D694E] shrink-0" />
                <div className="text-xs text-[#2B3E2C]/85 leading-relaxed">
                  Bespoke intelligent systems engineered around your organization&apos;s unique operational workflows.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
