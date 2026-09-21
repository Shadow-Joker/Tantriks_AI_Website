import { useState, lazy, Suspense } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { CustomCursor } from './components/cursor/CustomCursor';
import { Navbar } from './components/navigation/Navbar';
import { Footer } from './components/footer/Footer';
import { useRouter } from './router/Router';
import { usePageMetadata } from './hooks/usePageMetadata';
import { GlobalLoader } from './components/loading/GlobalLoader';
import { PageSkeleton } from './components/loading/PageSkeleton';

// Home Landing Sections (Eagerly loaded for instant first paint)
import { Hero } from './components/hero/Hero';
import { ProblemChaosToStructure } from './components/sections/ProblemChaosToStructure';
import { ProductRevealStudio } from './components/sections/ProductRevealStudio';
import { FeatureStorySticky } from './components/sections/FeatureStorySticky';
import { EcosystemSpatial } from './components/sections/EcosystemSpatial';
import { MetricsSocialProof } from './components/sections/MetricsSocialProof';
import { FinalCTAClimax } from './components/sections/FinalCTAClimax';

// Newly Created Pages (Code-split for lightweight bundles)
const NotFoundPage = lazy(() => import('./pages/NotFoundPage').then((m) => ({ default: m.NotFoundPage })));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage').then((m) => ({ default: m.PrivacyPolicyPage })));
const TermsConditionsPage = lazy(() => import('./pages/TermsConditionsPage').then((m) => ({ default: m.TermsConditionsPage })));
const CookiePreferencesPage = lazy(() => import('./pages/CookiePreferencesPage').then((m) => ({ default: m.CookiePreferencesPage })));
const VerifyEmailPage = lazy(() => import('./pages/VerifyEmailPage').then((m) => ({ default: m.VerifyEmailPage })));
const ResetPasswordPage = lazy(() => import('./pages/ResetPasswordPage').then((m) => ({ default: m.ResetPasswordPage })));
const AccessDeniedPage = lazy(() => import('./pages/AccessDeniedPage').then((m) => ({ default: m.AccessDeniedPage })));
const MaintenancePage = lazy(() => import('./pages/MaintenancePage').then((m) => ({ default: m.MaintenancePage })));
const SupportPage = lazy(() => import('./pages/SupportPage').then((m) => ({ default: m.SupportPage })));
const RefundCancellationPage = lazy(() => import('./pages/RefundCancellationPage').then((m) => ({ default: m.RefundCancellationPage })));
const PaymentFailedPage = lazy(() => import('./pages/PaymentFailedPage').then((m) => ({ default: m.PaymentFailedPage })));

function LandingPage() {
  usePageMetadata(
    "Tantriks AI | We don't just build AI — we craft magic",
    'Tantriks AI builds custom AI systems, intelligent automation, AI agents, and enterprise software designed around unique workflows.'
  );

  return (
    <>
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

      {/* Section 05: Why Tantriks AI (Differentiators, Mission & Vision) */}
      <MetricsSocialProof />

      {/* Section 07: Final CTA Climax */}
      <FinalCTAClimax />
    </>
  );
}

export default function App() {
  const { pathname } = useRouter();
  const [showBootLoader, setShowBootLoader] = useState(() => {
    try {
      return !sessionStorage.getItem('tantriks_booted');
    } catch {
      return true;
    }
  });

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const handleBootComplete = () => {
    try {
      sessionStorage.setItem('tantriks_booted', 'true');
    } catch {
      // Ignore storage errors
    }
    setShowBootLoader(false);
  };

  const renderCurrentPage = () => {
    switch (pathname) {
      case '/':
        return <LandingPage />;
      case '/privacy-policy':
        return <PrivacyPolicyPage />;
      case '/terms-and-conditions':
        return <TermsConditionsPage />;
      case '/cookie-preferences':
        return <CookiePreferencesPage />;
      case '/verify-email':
        return <VerifyEmailPage />;
      case '/reset-password':
        return <ResetPasswordPage />;
      case '/access-denied':
        return <AccessDeniedPage />;
      case '/maintenance':
        return <MaintenancePage />;
      case '/support':
        return <SupportPage />;
      case '/refund-cancellation':
        return <RefundCancellationPage />;
      case '/payment-failed':
        return <PaymentFailedPage />;
      case '/404':
      default:
        return <NotFoundPage />;
    }
  };

  return (
    <div className="relative min-h-[100dvh] bg-[#FFF3D5] dark:bg-[#0F0A0A] text-[#2B3E2C] dark:text-[#F4FAF3] selection:bg-[#4D694E] selection:text-[#FFF3D5] dark:selection:bg-[#82D173] dark:selection:text-[#0F0A0A]">
      {/* Global Ambient Background Layer (Technical grid + soft radial illumination) */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
        {/* Crisp Geometric Grid Pattern across entire viewport */}
        <div className="absolute inset-0 bg-grid-pattern" />
        {/* Soft Radial Gradient Glow */}
        <div className="absolute inset-0 bg-radial-gradient" />
        {/* Subtle Ambient Atmosphere Glow Orbs */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[900px] h-[450px] bg-gradient-to-r from-[#4D694E]/12 via-[#6E8F6F]/8 to-[#4D694E]/12 dark:from-[#82D173]/12 dark:via-[#9DE48F]/8 dark:to-[#82D173]/12 blur-[130px] rounded-full pointer-events-none" />
      </div>

      {/* Initial Global Boot Loader */}
      {showBootLoader && <GlobalLoader onComplete={handleBootComplete} />}

      {/* Viewport Scroll Progress Bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#4D694E] via-[#2B3E2C] to-[#1F2D20] origin-left z-50 shadow-[0_0_8px_rgba(77,105,78,0.4)]"
      />

      {/* Desktop Custom Cursor */}
      <CustomCursor />

      {/* Primary Sticky Translucent Navigation */}
      <Navbar />

      {/* Main Content Flow with Contextual Skeleton Fallback */}
      <main id="main-content" className="relative z-10">
        <Suspense fallback={<PageSkeleton />}>
          {renderCurrentPage()}
        </Suspense>
      </main>

      {/* Structured Footer */}
      <Footer />
    </div>
  );
}
