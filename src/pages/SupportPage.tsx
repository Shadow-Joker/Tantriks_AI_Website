import { useState, useMemo } from 'react';
import { usePageMetadata } from '../hooks/usePageMetadata';
import {
  Search,
  ChevronDown,
  Mail,
  HelpCircle,
  ArrowLeft,
  Sparkles,
  Rocket,
  KeyRound,
  Bot,
  CreditCard,
  Wrench,
} from 'lucide-react';
import { Link } from '../router/Link';

interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Getting Started',
    question: 'How do I get started with Tantriks AI?',
    answer:
      'Getting started begins with an initial workflow discovery. Reach out through our contact page or email us directly at tantriksai2026@gmail.com. We analyze your existing operational bottlenecks, design a tailored architecture, and construct an intelligent agent or software prototype tailored specifically to your business.',
  },
  {
    id: 'faq-2',
    category: 'Getting Started',
    question: 'How can I contact support?',
    answer:
      'You can reach our support and client services team directly by emailing tantriksai2026@gmail.com. We prioritize production incident reports and inquiries from active client deployments.',
  },
  {
    id: 'faq-3',
    category: 'Account & Access',
    question: 'How do I reset my password?',
    answer:
      'If you have client portal access, navigate to our Password Reset page (/reset-password), submit your registered business email address, and follow the secure verification link sent to your inbox to establish a new password.',
  },
  {
    id: 'faq-4',
    category: 'Account & Access',
    question: 'How can I manage my account?',
    answer:
      'Account configurations, API keys, and workspace credentials can be managed through your custom-deployed Tantriks AI administrative dashboard. If you need administrative permission adjustments, contact your dedicated account lead or email support.',
  },
  {
    id: 'faq-5',
    category: 'Account & Access',
    question: 'How do I manage my cookie preferences?',
    answer:
      'You can adjust or revoke your cookie settings at any time by visiting our dedicated Cookie Preferences portal (/cookie-preferences). Choices are persisted directly in your browser without interrupting site usage.',
  },
  {
    id: 'faq-6',
    category: 'Billing & Payments',
    question: 'How do refunds and cancellations work?',
    answer:
      'Refunds and cancellations are handled in accordance with our Refund & Cancellation Policy (/refund-cancellation). Because custom engineering projects require allocated technical resources, evaluations are made based on milestone progress and contract terms.',
  },
  {
    id: 'faq-7',
    category: 'AI & Automation',
    question: 'What types of AI agents does Tantriks AI build?',
    answer:
      'We build voice assistants and receptionists, conversational chatbots, automated verification callers, agricultural helplines, lead qualification engines, n8n multi-system workflows, document understanding pipelines, and enterprise software systems.',
  },
  {
    id: 'faq-8',
    category: 'AI & Automation',
    question: 'Can Tantriks AI integrate with our existing ERP or CRM?',
    answer:
      'Yes. Our bespoke systems are engineered specifically around your current software stack, connecting seamlessly with legacy databases, custom APIs, webhooks, and third-party SaaS tools.',
  },
  {
    id: 'faq-9',
    category: 'Technical Support',
    question: 'How does Tantriks AI handle system uptime and latency?',
    answer:
      'Our solutions are engineered with redundancy, multi-model fallbacks, and high-concurrency execution layers to maintain consistent low-latency response times for mission-critical operations.',
  },
  {
    id: 'faq-10',
    category: 'General Questions',
    question: 'Is Tantriks AI a generic AI wrapper?',
    answer:
      'No. Tantriks AI creates bespoke systems, intelligent automation pipelines, and custom software architectures designed specifically around the problems and workflows unique to your business.',
  },
];

const CATEGORIES = [
  { name: 'All Categories', icon: HelpCircle },
  { name: 'Getting Started', icon: Rocket },
  { name: 'Account & Access', icon: KeyRound },
  { name: 'AI & Automation', icon: Bot },
  { name: 'Billing & Payments', icon: CreditCard },
  { name: 'Technical Support', icon: Wrench },
  { name: 'General Questions', icon: Sparkles },
];

export function SupportPage() {
  usePageMetadata(
    'Support',
    'Find answers, get support, or talk to the Tantriks AI team.'
  );

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [expandedId, setExpandedId] = useState<string | null>(FAQ_DATA[0].id);

  const filteredFaqs = useMemo(() => {
    return FAQ_DATA.filter((item) => {
      const matchesCategory =
        selectedCategory === 'All Categories' || item.category === selectedCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        item.question.toLowerCase().includes(query) ||
        item.answer.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const toggleAccordion = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="pt-12 pb-20 md:pt-16 md:pb-28 bg-transparent text-[#2B3E2C] dark:text-[#F4FAF3] min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-[#4D694E] hover:text-[#2B3E2C] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Hero Section */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#4D694E]/10 border border-[#4D694E]/30 text-xs font-mono text-[#4D694E] uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            Support Center
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-display tracking-tight text-[#2B3E2C] mb-4">
            How can we help?
          </h1>
          <p className="text-base sm:text-lg text-[#2B3E2C]/80 leading-relaxed">
            Find answers, get support, or talk to the Tantriks AI team.
          </p>

          {/* Search Input */}
          <div className="relative mt-8 max-w-xl mx-auto">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#4D694E]">
              <Search className="w-5 h-5" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for help..."
              className="w-full pl-12 pr-4 py-4 rounded-full bg-[#F4E7C5] border border-[#4D694E]/30 text-sm text-[#2B3E2C] placeholder-[#2B3E2C]/50 focus:outline-none focus:ring-2 focus:ring-[#4D694E] shadow-sm transition-all"
            />
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            const isSelected = selectedCategory === cat.name;
            return (
              <button
                key={cat.name}
                onClick={() => setSelectedCategory(cat.name)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 ${
                  isSelected
                    ? 'bg-[#4D694E] text-[#FFF3D5] shadow-md border border-[#4D694E]'
                    : 'bg-[#F4E7C5] text-[#2B3E2C]/80 hover:bg-[#EBDDB6] border border-[#4D694E]/20'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* FAQs Accordions */}
        <div className="space-y-4 mb-16">
          {filteredFaqs.length === 0 ? (
            <div className="p-12 text-center rounded-3xl bg-[#F4E7C5]/50 border border-[#4D694E]/20">
              <p className="text-sm font-mono text-[#2B3E2C]/70 mb-2">
                No matching answers found for &ldquo;{searchQuery}&rdquo;.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All Categories');
                }}
                className="text-xs font-semibold text-[#4D694E] underline hover:text-[#2B3E2C]"
              >
                Clear search filters
              </button>
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = expandedId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="rounded-3xl bg-[#FFF3D5] border border-[#4D694E]/25 overflow-hidden transition-colors shadow-sm"
                >
                  <button
                    onClick={() => toggleAccordion(faq.id)}
                    aria-expanded={isOpen}
                    className="w-full text-left p-6 flex items-center justify-between gap-4 focus:outline-none focus-visible:bg-[#F4E7C5]"
                  >
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#4D694E] font-semibold">
                        {faq.category}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold font-display text-[#2B3E2C]">
                        {faq.question}
                      </h3>
                    </div>
                    <div
                      className={`p-2 rounded-full bg-[#F4E7C5] text-[#4D694E] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 text-sm text-[#2B3E2C]/85 leading-relaxed border-t border-[#4D694E]/15 bg-[#F4E7C5]/40">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Bottom CTA Card */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#F4E7C5] border border-[#4D694E]/30 text-center shadow-sm max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#2B3E2C] mb-2">
            Still need help?
          </h2>
          <p className="text-sm text-[#2B3E2C]/80 mb-6">
            Talk to our support team. We&apos;re here to assist with any custom engineering or platform questions.
          </p>
          <a
            href="mailto:tantriksai2026@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold text-[#FFF3D5] bg-[#4D694E] hover:bg-[#364C37] transition-all shadow-[0_0_25px_rgba(77,105,78,0.3)] hover:shadow-[0_0_35px_rgba(77,105,78,0.5)]"
          >
            <Mail className="w-4 h-4" />
            <span>Contact Support</span>
          </a>
        </div>
      </div>
    </div>
  );
}
