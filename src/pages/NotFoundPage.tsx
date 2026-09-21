import { usePageMetadata } from '../hooks/usePageMetadata';
import { Compass, ArrowLeft, Home } from 'lucide-react';
import { Link } from '../router/Link';

export function NotFoundPage() {
  usePageMetadata(
    'Page Not Found',
    "The page you're looking for doesn't exist, has moved, or is no longer available."
  );

  const handleGoBack = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      window.location.href = '/';
    }
  };

  return (
    <div className="pt-32 pb-24 md:pt-40 md:pb-36 bg-transparent text-[#2B3E2C] dark:text-[#F4FAF3] min-h-screen flex flex-col justify-center relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#4D694E]/10 dark:bg-[#82D173]/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center relative z-10">
        {/* Abstract Broken Digital AI Pathway Visual */}
        <div className="relative w-28 h-28 mx-auto mb-8 flex items-center justify-center">
          <svg className="w-full h-full text-[#4D694E]" viewBox="0 0 100 100" fill="none">
            {/* Connected valid node line */}
            <path
              d="M20 50 H45 L60 30 H80"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="4 4"
              className="opacity-75"
            />
            {/* Severed / dissolving branch line */}
            <path
              d="M45 50 L60 70 H70"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="2 4"
              className="opacity-30"
            />
            {/* Nodes */}
            <circle cx="20" cy="50" r="4" fill="#4D694E" />
            <circle cx="45" cy="50" r="5" fill="#2B3E2C" />
            <circle cx="60" cy="30" r="4" fill="#4D694E" />
            <circle cx="80" cy="30" r="4" fill="#4D694E" />
            {/* Missing / Dissolved terminal node */}
            <circle cx="70" cy="70" r="4" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <Compass className="w-6 h-6 text-[#4D694E] animate-pulse" />
          </div>
        </div>

        {/* Large 404 Visual */}
        <div className="text-7xl sm:text-9xl font-bold font-mono tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-[#2B3E2C] to-[#4D694E]/40 mb-4 select-none">
          404
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight text-[#2B3E2C] mb-4">
          Looks like you&apos;ve wandered into the unknown.
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg text-[#2B3E2C]/80 leading-relaxed max-w-lg mx-auto mb-10">
          The page you&apos;re looking for doesn&apos;t exist, has moved, or is no longer available.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-semibold text-[#FFF3D5] bg-[#4D694E] hover:bg-[#364C37] shadow-[0_0_25px_rgba(77,105,78,0.35)] transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>

          <button
            onClick={handleGoBack}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-sm font-medium text-[#2B3E2C] bg-[#F4E7C5] hover:bg-[#EBDDB6] border border-[#4D694E]/30 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Go Back</span>
          </button>
        </div>
      </div>
    </div>
  );
}
