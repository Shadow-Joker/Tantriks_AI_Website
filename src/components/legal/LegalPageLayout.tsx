import { useState, useEffect } from 'react';
import { Mail, ChevronDown, ListFilter, ArrowLeft } from 'lucide-react';
import { Link } from '../../router/Link';

export interface LegalSection {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface LegalPageLayoutProps {
  title: string;
  lastUpdated: string;
  intro: string;
  sections: LegalSection[];
}

export function LegalPageLayout({
  title,
  lastUpdated,
  intro,
  sections,
}: LegalPageLayoutProps) {
  const [activeSection, setActiveSection] = useState<string>(sections[0]?.id || '');
  const [mobileTocOpen, setMobileTocOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-100px 0px -60% 0px' }
    );

    sections.forEach((sec) => {
      const el = document.getElementById(sec.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMobileTocOpen(false);
    }
  };

  return (
    <div className="pt-12 pb-20 md:pt-16 md:pb-28 bg-transparent text-[#2B3E2C] dark:text-[#F4FAF3] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Breadcrumb / Back Link */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-[#4D694E] hover:text-[#2B3E2C] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-block px-3 py-1 rounded-full bg-[#4D694E]/10 border border-[#4D694E]/30 text-xs font-mono text-[#4D694E] uppercase tracking-wider mb-4">
            Legal &amp; Compliance
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-display tracking-tight text-[#2B3E2C] mb-4">
            {title}
          </h1>
          <p className="text-xs font-mono text-[#2B3E2C]/70 mb-6">
            Last Updated: {lastUpdated}
          </p>
          <p className="text-base sm:text-lg text-[#2B3E2C]/85 leading-relaxed bg-[#F4E7C5]/80 p-5 rounded-2xl border border-[#4D694E]/20">
            {intro}
          </p>
        </div>

        {/* Mobile Collapsible Table of Contents */}
        <div className="lg:hidden mb-8">
          <button
            onClick={() => setMobileTocOpen(!mobileTocOpen)}
            className="w-full flex items-center justify-between p-4 rounded-xl bg-[#F4E7C5] border border-[#4D694E]/25 text-xs font-mono font-semibold text-[#2B3E2C]"
            aria-expanded={mobileTocOpen}
          >
            <span className="flex items-center gap-2">
              <ListFilter className="w-4 h-4 text-[#4D694E]" />
              Table of Contents ({sections.length} sections)
            </span>
            <ChevronDown
              className={`w-4 h-4 text-[#4D694E] transition-transform duration-200 ${
                mobileTocOpen ? 'rotate-180' : ''
              }`}
            />
          </button>
          {mobileTocOpen && (
            <div className="mt-2 p-4 rounded-xl bg-[#FFF3D5] border border-[#4D694E]/25 space-y-2 max-h-72 overflow-y-auto">
              {sections.map((sec, idx) => (
                <button
                  key={sec.id}
                  onClick={() => scrollToSection(sec.id)}
                  className={`block w-full text-left text-xs py-1.5 px-2 rounded font-sans transition-colors ${
                    activeSection === sec.id
                      ? 'bg-[#4D694E] text-[#FFF3D5] font-semibold'
                      : 'text-[#2B3E2C]/80 hover:bg-[#F4E7C5]'
                  }`}
                >
                  <span className="font-mono text-[10px] mr-1.5 opacity-70">
                    {String(idx + 1).padStart(2, '0')}.
                  </span>
                  {sec.title}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Grid: Sticky Left TOC (Desktop) + Right Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* LEFT: Desktop Sticky Table of Contents */}
          <aside className="hidden lg:block lg:col-span-4 sticky top-28 space-y-4">
            <div className="p-6 rounded-3xl bg-[#F4E7C5]/90 border border-[#4D694E]/25 shadow-sm">
              <div className="text-xs font-mono font-bold uppercase tracking-widest text-[#4D694E] mb-4 flex items-center gap-2">
                <ListFilter className="w-4 h-4" />
                Table of Contents
              </div>
              <nav className="space-y-1 max-h-[calc(100vh-280px)] overflow-y-auto pr-2" aria-label="Legal Sections Navigation">
                {sections.map((sec, idx) => {
                  const isActive = activeSection === sec.id;
                  return (
                    <button
                      key={sec.id}
                      onClick={() => scrollToSection(sec.id)}
                      className={`w-full text-left text-xs py-2 px-3 rounded-xl transition-all duration-200 flex items-start gap-2 ${
                        isActive
                          ? 'bg-[#4D694E] text-[#FFF3D5] font-semibold shadow-sm'
                          : 'text-[#2B3E2C]/80 hover:bg-[#FFF3D5] hover:text-[#2B3E2C]'
                      }`}
                    >
                      <span className="font-mono text-[10px] shrink-0 opacity-70 mt-0.5">
                        {String(idx + 1).padStart(2, '0')}.
                      </span>
                      <span className="line-clamp-2">{sec.title}</span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </aside>

          {/* RIGHT: Document Content */}
          <main className="lg:col-span-8 space-y-12">
            {sections.map((sec, idx) => (
              <section
                key={sec.id}
                id={sec.id}
                className="scroll-mt-32 p-6 sm:p-8 rounded-3xl bg-[#FFF3D5] border border-[#4D694E]/25 shadow-sm hover:border-[#4D694E]/40 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-xs font-bold text-[#FFF3D5] bg-[#4D694E] px-2.5 py-1 rounded-full">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold font-display text-[#2B3E2C]">
                    {sec.title}
                  </h2>
                </div>
                <div className="text-sm sm:text-base text-[#2B3E2C]/85 leading-relaxed space-y-4">
                  {sec.content}
                </div>
              </section>
            ))}

            {/* Bottom Contact Card */}
            <div className="p-8 rounded-3xl bg-[#F4E7C5] border border-[#4D694E]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-sm">
              <div>
                <h3 className="text-lg font-bold font-display text-[#2B3E2C] mb-1">
                  Questions regarding this document?
                </h3>
                <p className="text-xs text-[#2B3E2C]/75">
                  Reach out to the Tantriks AI governance and legal support team directly.
                </p>
              </div>
              <a
                href="mailto:tantriksai2026@gmail.com"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs font-semibold text-[#FFF3D5] bg-[#4D694E] hover:bg-[#364C37] transition-colors shadow-sm"
              >
                <Mail className="w-4 h-4" />
                <span>tantriksai2026@gmail.com</span>
              </a>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
