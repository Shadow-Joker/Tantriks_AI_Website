import { usePageMetadata } from '../hooks/usePageMetadata';
import { ShieldAlert, Home, LayoutDashboard, LogIn } from 'lucide-react';
import { Link } from '../router/Link';

export function AccessDeniedPage() {
  usePageMetadata(
    'Access Denied',
    "You don't have permission to access this page."
  );

  return (
    <div className="pt-12 pb-20 md:pt-16 md:pb-28 bg-transparent text-[#2B3E2C] dark:text-[#F4FAF3] min-h-screen flex flex-col justify-center relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-[#4D694E]/10 dark:bg-[#82D173]/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center relative z-10">
        {/* Abstract Locked AI System Visual */}
        <div className="relative w-24 h-24 mx-auto mb-8 flex items-center justify-center">
          <div className="w-20 h-20 rounded-3xl bg-[#F4E7C5] border border-[#4D694E]/30 flex items-center justify-center shadow-sm relative">
            <ShieldAlert className="w-10 h-10 text-[#4D694E]" />
            <div className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-[#4D694E] border-2 border-[#FFF3D5]" />
          </div>
        </div>

        {/* Large 403 Visual */}
        <div className="text-7xl sm:text-9xl font-bold font-mono tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-[#2B3E2C] to-[#4D694E]/40 mb-4 select-none">
          403
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight text-[#2B3E2C] mb-4">
          Access denied.
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg text-[#2B3E2C]/80 leading-relaxed max-w-md mx-auto mb-10">
          You don&apos;t have permission to access this page. Your current credentials or organization tier do not grant access to this workspace.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-semibold text-[#FFF3D5] bg-[#4D694E] hover:bg-[#364C37] shadow-[0_0_25px_rgba(77,105,78,0.35)] transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>

          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-sm font-medium text-[#2B3E2C] bg-[#F4E7C5] hover:bg-[#EBDDB6] border border-[#4D694E]/30 transition-all"
          >
            <LayoutDashboard className="w-4 h-4" />
            <span>Go to Dashboard</span>
          </Link>

          <Link
            href="/reset-password"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-sm font-medium text-[#2B3E2C] bg-transparent hover:bg-[#4D694E]/10 border border-[#4D694E]/20 transition-all"
          >
            <LogIn className="w-4 h-4" />
            <span>Sign In</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
