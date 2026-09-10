export interface NavItem {
  label: string;
  href: string;
  badge?: string;
}

export interface MetricItem {
  value: string;
  label: string;
  detail: string;
}

export interface FeatureChapter {
  id: string;
  headline: string;
  tagline: string;
  description: string;
  metrics: { label: string; value: string }[];
  accentColor: string;
}

export interface EcosystemModule {
  id: string;
  title: string;
  category: string;
  description: string;
  latency: string;
  status: 'operational' | 'optimized';
  icon: string;
  stats: string;
}

export interface TestimonialQuote {
  quote: string;
  author: string;
  role: string;
  company: string;
  metric: string;
}

export interface DemoStep {
  title: string;
  status: 'idle' | 'running' | 'completed';
  latency: string;
  tokens: string;
}
