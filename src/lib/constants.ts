import type { FeatureChapter, EcosystemModule } from '../types';

export const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'How We Work', href: '#process' },
  { label: 'Industries', href: '#industries' },
  { label: 'Why Tantriks', href: '#why-tantriks' },
  { label: 'Contact', href: '#contact' },
];

export const HOW_WE_WORK_STEPS: FeatureChapter[] = [
  {
    id: 'understand',
    headline: 'Understand.',
    tagline: 'Step 01: Deep exploration of your workflows',
    description: 'We learn how your business works, identify bottlenecks, and understand the problems worth solving before writing a single line of code.',
    metrics: [
      { label: 'Approach', value: 'Bespoke' },
      { label: 'Focus', value: 'Workflows' },
    ],
    accentColor: '#4D694E',
  },
  {
    id: 'design',
    headline: 'Design.',
    tagline: 'Step 02: Human-centered architecture',
    description: 'We design an AI or automation system tailored around your specific workflows, team structure, and operational objectives.',
    metrics: [
      { label: 'UX Focus', value: 'Human' },
      { label: 'Structure', value: 'Custom' },
    ],
    accentColor: '#2B3E2C',
  },
  {
    id: 'build',
    headline: 'Build.',
    tagline: 'Step 03: Modern engineering & integration',
    description: 'We engineer and integrate the solution using modern AI, intelligent automation, and robust enterprise software technologies.',
    metrics: [
      { label: 'Stack', value: 'Modern AI' },
      { label: 'Security', value: 'Enterprise' },
    ],
    accentColor: '#4D694E',
  },
  {
    id: 'deploy',
    headline: 'Deploy.',
    tagline: 'Step 04: Seamless environment rollout',
    description: 'We integrate the system into your existing environment, connect your tools, and make it ready for dependable, real-world use.',
    metrics: [
      { label: 'Integration', value: 'Direct' },
      { label: 'Readiness', value: '100%' },
    ],
    accentColor: '#364C37',
  },
  {
    id: 'evolve',
    headline: 'Evolve.',
    tagline: 'Step 05: Continuous improvement & scaling',
    description: 'We continuously improve the system as your requirements, operational workflows, and business grow alongside emerging technology.',
    metrics: [
      { label: 'Adaptability', value: 'Continuous' },
      { label: 'Scale', value: 'Growing' },
    ],
    accentColor: '#4D694E',
  },
];

// Alias for backwards compatibility with FeatureStorySticky imports
export const FEATURE_CHAPTERS = HOW_WE_WORK_STEPS;

export const INDUSTRY_MODULES: EcosystemModule[] = [
  {
    id: 'healthcare',
    title: 'Healthcare',
    category: 'Industry',
    description: 'Intelligent systems for patient assistance, documentation processing, and administrative clinical workflows.',
    latency: 'HIPAA-aware',
    status: 'operational',
    icon: 'Activity',
    stats: 'Workflow AI',
  },
  {
    id: 'enterprise-ops',
    title: 'Enterprise Operations',
    category: 'Industry',
    description: 'Automated document understanding, cross-system data extraction, and scalable custom enterprise software.',
    latency: 'High Scale',
    status: 'operational',
    icon: 'Database',
    stats: 'Core Systems',
  },
  {
    id: 'customer-service',
    title: 'Customer Service',
    category: 'Industry',
    description: 'AI receptionists, intelligent voice assistants, and custom chatbots handling 24/7 client inquiries.',
    latency: 'Real-Time',
    status: 'operational',
    icon: 'Network',
    stats: 'Voice & Chat',
  },
  {
    id: 'business-automation',
    title: 'Business Automation',
    category: 'Industry',
    description: 'n8n workflow pipelines, verification call automation, and intelligent lead qualification systems.',
    latency: 'End-to-End',
    status: 'operational',
    icon: 'ShieldCheck',
    stats: 'n8n & Agents',
  },
];

// Alias for EcosystemSpatial
export const ECOSYSTEM_MODULES = INDUSTRY_MODULES;

export const WHY_TANTRIKS_DIFFERENTIATORS = [
  {
    title: 'Custom-Built',
    description: 'Every system is designed around your unique requirements rather than forcing your business into a generic template.',
    highlight: 'Bespoke Architecture',
  },
  {
    title: 'Human-Centered',
    description: 'Technology should make people\'s work better, not make it harder. We design intelligent systems around real human workflows.',
    highlight: 'Natural Experience',
  },
  {
    title: 'Intelligent Automation',
    description: 'We combine AI with automation to reduce repetitive work and create more efficient operations.',
    highlight: 'Workflow Automation',
  },
  {
    title: 'Enterprise Integration',
    description: 'Our solutions are designed to work with the systems, tools, and workflows your organization already uses.',
    highlight: 'Seamless Sync',
  },
  {
    title: 'Ever-Evolving Technology',
    description: 'AI is constantly changing. We build systems that can evolve alongside your business and emerging technology.',
    highlight: 'Future-Proof',
  },
];

export const TANTRIKS_SERVICES = [
  {
    id: 's01',
    title: 'AI Receptionists & Voice Assistants',
    description: 'Intelligent voice-based assistants that can communicate with customers, handle inquiries, collect information, and automate routine conversations.',
    tag: 'Voice AI',
  },
  {
    id: 's02',
    title: 'AI Chatbots',
    description: 'Custom conversational AI experiences designed around your business, knowledge base, customers, and workflows.',
    tag: 'Conversational',
  },
  {
    id: 's03',
    title: 'AI Farmers Helpline',
    description: 'Intelligent agricultural assistance that helps farmers access useful information and support through AI-powered interactions.',
    tag: 'Agriculture',
  },
  {
    id: 's04',
    title: 'AI Hairstylist & Dresser',
    description: 'AI-powered experiences that help users explore hairstyles, dressing options, and personalized recommendations.',
    tag: 'Personalized AI',
  },
  {
    id: 's05',
    title: 'Verification Call Automation',
    description: 'Automated verification and calling workflows that reduce manual effort and streamline operational processes.',
    tag: 'Voice Operations',
  },
  {
    id: 's06',
    title: 'Lead Generation',
    description: 'AI-powered systems designed to identify, qualify, organize, and manage potential leads more efficiently.',
    tag: 'Growth Automation',
  },
  {
    id: 's07',
    title: 'E-commerce Assistants',
    description: 'Intelligent shopping assistants that help customers discover products, answer questions, and navigate the buying journey.',
    tag: 'E-commerce',
  },
  {
    id: 's08',
    title: 'n8n Workflow Automation',
    description: 'Intelligent workflow automation connecting tools, services, APIs, and business processes into efficient automated systems.',
    tag: 'n8n & APIs',
  },
  {
    id: 's09',
    title: 'Document Understanding',
    description: 'AI systems that extract, understand, classify, and process information from complex business documents.',
    tag: 'Intelligent Extraction',
  },
  {
    id: 's10',
    title: 'Translation',
    description: 'AI-powered translation systems designed to make information and communication more accessible across languages.',
    tag: 'Localization',
  },
  {
    id: 's11',
    title: 'Enterprise AI Agents',
    description: 'Intelligent agents designed to perform specialized tasks, interact with business systems, and support complex organizational workflows.',
    tag: 'Autonomous Agents',
  },
  {
    id: 's12',
    title: 'Enterprise Software',
    description: 'Scalable custom software engineered around your organization\'s specific operational requirements.',
    tag: 'Custom Software',
  },
];
