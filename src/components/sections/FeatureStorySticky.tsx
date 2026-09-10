import { useState, useEffect, useRef } from 'react';
import { FEATURE_CHAPTERS } from '../../lib/constants';

export function FeatureStorySticky() {
  const [activeChapterIndex, setActiveChapterIndex] = useState(0);
  const chapterRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const viewportCenter = window.innerHeight / 2;

      chapterRefs.current.forEach((el, index) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.top <= viewportCenter && rect.bottom >= viewportCenter) {
          setActiveChapterIndex(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const activeChapter = FEATURE_CHAPTERS[activeChapterIndex] || FEATURE_CHAPTERS[0];

  return (
    <section id="process" className="relative py-24 md:py-36 border-t border-[#4D694E]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#4D694E]/10 border border-[#4D694E]/30 text-[#2B3E2C] font-semibold text-xs font-mono uppercase tracking-widest mb-4">
            Our Process
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold font-display tracking-tight text-[#2B3E2C] mb-6">
            From Idea to Intelligent System.
          </h2>
          <p className="text-base sm:text-lg text-[#2B3E2C]/85 leading-relaxed max-w-[65ch] mx-auto">
            A disciplined, human-centered engineering approach designed to deliver custom AI systems that fit naturally into your organization.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* LEFT: Large Sticky Product Visualization Stage */}
          <div className="lg:col-span-6 lg:sticky lg:top-32 h-[440px] md:h-[540px] self-start">
            <div className="w-full h-full bg-[#FFF3D5] rounded-3xl p-6 md:p-8 border border-[#4D694E]/25 flex flex-col justify-between relative overflow-hidden shadow-2xl">
              {/* Dynamic Ambient Background Glow */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full blur-[100px] pointer-events-none transition-colors duration-500 bg-[#4D694E]/15"
              />

              {/* Stage Top Bar */}
              <div className="flex items-center justify-between z-10 border-b border-[#4D694E]/20 pb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#4D694E] animate-pulse" />
                  <span className="text-xs font-mono uppercase tracking-wider text-[#2B3E2C]/85">
                    Stage {activeChapterIndex + 1}: {activeChapter.headline}
                  </span>
                </div>
                <span className="text-xs font-mono text-[#FFF3D5] bg-[#4D694E] px-2.5 py-1 rounded-full border border-[#4D694E]/40 font-bold">
                  Step 0{activeChapterIndex + 1} of 05
                </span>
              </div>

              {/* Core Message Visual Storytelling Moment */}
              <div className="relative flex-1 flex flex-col items-center justify-center my-4 z-10 text-center px-4">
                <div className="w-full p-6 rounded-2xl bg-[#F4E7C5] border border-[#4D694E]/30 space-y-4 shadow-sm text-left">
                  <div className="text-[11px] font-mono text-[#4D694E] font-bold uppercase tracking-wider">
                    CORE PHILOSOPHY
                  </div>
                  <div className="font-display text-lg sm:text-xl font-bold text-[#2B3E2C] leading-snug space-y-1">
                    <p>&ldquo;Technology should adapt to people.</p>
                    <p className="text-[#4D694E]">AI should adapt to businesses.</p>
                    <p>And software should work the way you do.&rdquo;</p>
                  </div>
                  <div className="pt-3 border-t border-[#4D694E]/20 flex items-center justify-between text-xs font-mono text-[#2B3E2C]/80">
                    <span>Tantriks Principle</span>
                    <span className="text-[#4D694E] font-semibold">Human-Centered</span>
                  </div>
                </div>
              </div>

              {/* Stage Bottom Benchmark Metrics */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#4D694E]/20 z-10">
                {activeChapter.metrics.map((m) => (
                  <div key={m.label}>
                    <div className="text-[10px] font-mono uppercase text-[#2B3E2C]/70">{m.label}</div>
                    <div className="text-lg font-bold font-mono text-[#2B3E2C]">{m.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: Feature Narratives (Sticky Scroll Driven) */}
          <div className="lg:col-span-6 space-y-28 lg:py-16">
            {FEATURE_CHAPTERS.map((chapter, i) => (
              <div
                key={chapter.id}
                ref={(el) => {
                  chapterRefs.current[i] = el;
                }}
                className={`transition-opacity duration-300 ${
                  activeChapterIndex === i ? 'opacity-100' : 'opacity-40'
                }`}
              >
                <div className="text-xs font-mono uppercase tracking-widest text-[#4D694E] font-bold mb-3">
                  0{i + 1} // METHODOLOGY
                </div>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight text-[#2B3E2C] mb-3">
                  {chapter.headline}
                </h3>
                <h4 className="text-base font-semibold text-[#4D694E] mb-3">{chapter.tagline}</h4>
                <p className="text-base text-[#2B3E2C]/80 leading-relaxed max-w-[55ch] mb-6">
                  {chapter.description}
                </p>
                <div className="flex items-center gap-6 pt-2">
                  {chapter.metrics.map((m) => (
                    <div key={m.label} className="border-l-2 border-[#4D694E]/50 pl-3">
                      <div className="text-xs font-mono text-[#2B3E2C]/70">{m.label}</div>
                      <div className="text-base font-bold font-mono text-[#2B3E2C]">{m.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
