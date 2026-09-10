import type { FeatureChapter, EcosystemModule, TestimonialQuote } from '../types';

export const NAV_ITEMS = [
  { label: 'Platform', href: '#platform' },
  { label: 'Architecture', href: '#architecture' },
  { label: 'Ecosystem', href: '#ecosystem' },
  { label: 'Playground', href: '#demo' },
  { label: 'Metrics', href: '#metrics' },
];

export const FEATURE_CHAPTERS: FeatureChapter[] = [
  {
    id: 'think-faster',
    headline: 'Think faster.',
    tagline: 'Parallel speculative reasoning with sub-millisecond dispatch',
    description: 'Distribute inference across specialized routing tiers. Tantriks pre-evaluates semantic intent and streams tokens with zero cold start overhead.',
    metrics: [
      { label: 'Cold Dispatch', value: '4.2ms' },
      { label: 'Token Velocity', value: '142k/s' },
    ],
    accentColor: '#00F2FE',
  },
  {
    id: 'automate-everything',
    headline: 'Automate everything.',
    tagline: 'Self-healing orchestration loops that test and self-correct',
    description: 'Multi-agent consensus protocols continuously validate outputs, generate unit regressions, and self-patch runtime anomalies before production impact.',
    metrics: [
      { label: 'Self-Correction', value: '99.4%' },
      { label: 'Recovery MTTR', value: '< 1.8s' },
    ],
    accentColor: '#38BDF8',
  },
  {
    id: 'scale-without-friction',
    headline: 'Scale without friction.',
    tagline: 'Global mesh routing across distributed multi-region edge clusters',
    description: 'Stateless execution cells automatically migrate workloads nearest to consumer data boundaries, maintaining SOC2 Type II compliance by default.',
    metrics: [
      { label: 'Global PoPs', value: '240+' },
      { label: 'Uptime SLA', value: '99.99%' },
    ],
    accentColor: '#06B6D4',
  },
];

export const ECOSYSTEM_MODULES: EcosystemModule[] = [
  {
    id: 'neural-router',
    title: 'Neural Router',
    category: 'Core Dispatch',
    description: 'Intelligent request classifier that picks optimal models based on latency and cost boundaries.',
    latency: '1.4ms',
    status: 'operational',
    icon: 'Cpu',
    stats: '1.8B calls/day',
  },
  {
    id: 'vector-fabric',
    title: 'Vector Fabric',
    category: 'Memory Cache',
    description: 'Sub-millisecond semantic retrieval fabric across dynamic hybrid embedding indices.',
    latency: '3.1ms',
    status: 'optimized',
    icon: 'Database',
    stats: '840M embeddings',
  },
  {
    id: 'agent-swarm',
    title: 'Autonomous Swarm',
    category: 'Orchestration',
    description: 'Hierarchical agent teams capable of collaborative planning, peer review, and verification.',
    latency: '8.2ms',
    status: 'operational',
    icon: 'Network',
    stats: '99.8% consensus',
  },
  {
    id: 'edge-mesh',
    title: 'Distributed Edge Mesh',
    category: 'Infrastructure',
    description: 'Instant cold-start execution nodes spread over 240 worldwide edge data centers.',
    latency: '< 10ms global',
    status: 'operational',
    icon: 'Globe',
    stats: '240 PoPs active',
  },
  {
    id: 'observability',
    title: 'Real-Time Telemetry',
    category: 'Monitoring',
    description: 'Granular distributed tracing, token spending audits, and automated regression detection.',
    latency: 'Live streaming',
    status: 'operational',
    icon: 'Activity',
    stats: 'Full fidelity traces',
  },
  {
    id: 'governance',
    title: 'Enterprise Guardrails',
    category: 'Compliance',
    description: 'Hardware security modules, PII redaction filters, and strict role-based access policy tiers.',
    latency: '0.8ms inspection',
    status: 'operational',
    icon: 'ShieldCheck',
    stats: 'SOC2 Type II ready',
  },
];

export const METRIC_HIGHLIGHTS = [
  {
    value: '42%',
    label: 'Less Operational Overhead',
    detail: 'Automated remediation eliminates manual triage for 9 out of 10 system alerts.',
  },
  {
    value: '10x',
    label: 'Faster Workflow Velocity',
    detail: 'From architectural concept to production deployment in minutes instead of weeks.',
  },
  {
    value: '99.99%',
    label: 'Platform Reliability',
    detail: 'Battle-tested multi-region resilience guaranteeing uninterrupted execution.',
  },
];

export const TESTIMONIALS: TestimonialQuote[] = [
  {
    quote: 'Tantriks transformed our pipeline orchestration. What once took a team of eight senior engineers now runs autonomously with sub-millisecond precision.',
    author: 'Devon Vance',
    role: 'VP of Platform Engineering',
    company: 'Nexus Cloud Systems',
    metric: '92% faster deployment cycles',
  },
  {
    quote: 'The speculative reasoning engine cut our inference token cost in half while tripling overall user response speeds. It feels like software from five years in the future.',
    author: 'Elena Rostova',
    role: 'Principal Architect',
    company: 'Aetheria Labs',
    metric: '54% lower token expenditure',
  },
];
