import { motion, useScroll, useSpring } from 'motion/react';
import { CustomCursor } from './components/cursor/CustomCursor';
import { Navbar } from './components/navigation/Navbar';
import { Hero } from './components/hero/Hero';
import { ProblemChaosToStructure } from './components/sections/ProblemChaosToStructure';
import { ProductRevealStudio } from './components/sections/ProductRevealStudio';
import { FeatureStorySticky } from './components/sections/FeatureStorySticky';
import { EcosystemSpatial } from './components/sections/EcosystemSpatial';
import { InteractiveDemoPlayground } from './components/sections/InteractiveDemoPlayground';
import { MetricsSocialProof } from './components/sections/MetricsSocialProof';
import { FinalCTAClimax } from './components/sections/FinalCTAClimax';
import { Footer } from './components/footer/Footer';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="relative min-h-[100dvh] bg-[#07080B] text-slate-100 selection:bg-cyan-500/20 selection:text-cyan-200">
      {/* Viewport Scroll Progress Bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-500 origin-left z-50 shadow-[0_0_8px_#00F2FE]"
      />

      {/* Desktop Custom Cursor */}
      <CustomCursor />

      {/* Primary Sticky Translucent Navigation */}
      <Navbar />

      {/* Main Content Flow */}
      <main>
        {/* Cinematic Parallax Hero */}
        <Hero />

        {/* Section 01: The Problem (Chaos to Structure) */}
        <ProblemChaosToStructure />

        {/* Section 02: Product Reveal Studio */}
        <ProductRevealStudio />

        {/* Section 03: Feature Storytelling (Sticky Scroll Narrative) */}
        <FeatureStorySticky />

        {/* Section 04: Product Ecosystem (Spatial 3D Grid) */}
        <EcosystemSpatial />

        {/* Section 05: Interactive Playground Console */}
        <InteractiveDemoPlayground />

        {/* Section 06: Metrics & Social Proof */}
        <MetricsSocialProof />

        {/* Section 07: Final CTA Climax */}
        <FinalCTAClimax />
      </main>

      {/* Structured Footer */}
      <Footer />
    </div>
  );
}
