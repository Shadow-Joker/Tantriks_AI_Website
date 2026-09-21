import { useState, useEffect } from 'react';
import { usePageMetadata } from '../hooks/usePageMetadata';
import { Mail, CheckCircle2, AlertCircle, RefreshCw, ArrowLeft, Send, Check } from 'lucide-react';
import { Link } from '../router/Link';

type VerifyState = 'DEFAULT' | 'EMAIL_SENT' | 'RESENDING' | 'VERIFIED' | 'EXPIRED' | 'ERROR';

export function VerifyEmailPage() {
  usePageMetadata(
    'Verify Email',
    "We've sent a verification link to your email address. Please check your inbox to continue."
  );

  const [state, setState] = useState<VerifyState>('DEFAULT');
  const [email, setEmail] = useState('team@yourcompany.com');
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [countdown, setCountdown] = useState(30);
  const [canResend, setCanResend] = useState(false);

  useEffect(() => {
    if (countdown > 0 && !canResend) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setCanResend(true);
    }
  }, [countdown, canResend]);

  const handleResend = () => {
    if (!canResend) return;
    setState('RESENDING');
    setTimeout(() => {
      setState('EMAIL_SENT');
      setCountdown(30);
      setCanResend(false);
    }, 1200);
  };

  const handleOpenEmail = () => {
    window.location.href = 'mailto:';
  };

  return (
    <div className="pt-32 pb-24 md:pt-40 md:pb-36 bg-transparent text-[#2B3E2C] dark:text-[#F4FAF3] min-h-screen flex flex-col justify-center relative">
      <div className="max-w-md mx-auto px-4 sm:px-6 w-full">
        {/* Back Link */}
        <div className="mb-8 text-center sm:text-left">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-[#4D694E] hover:text-[#2B3E2C] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Auth Card Container */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#F4E7C5] border border-[#4D694E]/25 shadow-sm text-center relative overflow-hidden">
          {/* Minimal Animated Email / Verification Visual */}
          <div className="relative w-20 h-20 mx-auto mb-6 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-[#4D694E]/15 animate-ping opacity-30" />
            <div className="w-16 h-16 rounded-2xl bg-[#FFF3D5] border border-[#4D694E]/30 flex items-center justify-center text-[#4D694E] shadow-sm relative z-10">
              {state === 'VERIFIED' ? (
                <CheckCircle2 className="w-8 h-8 text-[#4D694E]" />
              ) : state === 'EXPIRED' || state === 'ERROR' ? (
                <AlertCircle className="w-8 h-8 text-[#4D694E]" />
              ) : state === 'RESENDING' ? (
                <RefreshCw className="w-8 h-8 text-[#4D694E] animate-spin" />
              ) : (
                <Mail className="w-8 h-8 text-[#4D694E]" />
              )}
            </div>
          </div>

          {/* Title and Description based on state */}
          {state === 'VERIFIED' ? (
            <>
              <h1 className="text-2xl sm:text-3xl font-bold font-display text-[#2B3E2C] mb-3">
                Email Verified!
              </h1>
              <p className="text-sm text-[#2B3E2C]/80 leading-relaxed mb-8">
                Your email has been successfully verified. You can now access your Tantriks AI workspace.
              </p>
              <Link
                href="/"
                className="w-full inline-flex items-center justify-center px-6 py-3.5 rounded-full text-xs font-semibold text-[#FFF3D5] bg-[#4D694E] hover:bg-[#364C37] shadow-sm transition-all"
              >
                Go to Dashboard
              </Link>
            </>
          ) : state === 'EXPIRED' ? (
            <>
              <h1 className="text-2xl sm:text-3xl font-bold font-display text-[#2B3E2C] mb-3">
                Verification Link Expired
              </h1>
              <p className="text-sm text-[#2B3E2C]/80 leading-relaxed mb-8">
                The verification token has expired for security reasons. Please request a new link to continue.
              </p>
              <button
                onClick={handleResend}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs font-semibold text-[#FFF3D5] bg-[#4D694E] hover:bg-[#364C37] shadow-sm transition-all"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Request New Link</span>
              </button>
            </>
          ) : state === 'ERROR' ? (
            <>
              <h1 className="text-2xl sm:text-3xl font-bold font-display text-[#2B3E2C] mb-3">
                Verification Error
              </h1>
              <p className="text-sm text-[#2B3E2C]/80 leading-relaxed mb-8">
                We were unable to verify this token. Please ensure you clicked the latest link in your email.
              </p>
              <button
                onClick={handleResend}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs font-semibold text-[#FFF3D5] bg-[#4D694E] hover:bg-[#364C37] shadow-sm transition-all"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Try Again</span>
              </button>
            </>
          ) : (
            <>
              <h1 className="text-2xl sm:text-3xl font-bold font-display text-[#2B3E2C] mb-3">
                Verify your email
              </h1>
              <p className="text-sm text-[#2B3E2C]/80 leading-relaxed mb-3">
                We&apos;ve sent a verification link to your email address. Please check your inbox to continue.
              </p>

              {/* Email Address Display / Change */}
              <div className="mb-6">
                {isEditingEmail ? (
                  <div className="flex items-center gap-2">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-[#FFF3D5] border border-[#4D694E]/30 text-xs text-[#2B3E2C] focus:outline-none focus:ring-1 focus:ring-[#4D694E]"
                    />
                    <button
                      onClick={() => {
                        setIsEditingEmail(false);
                        setCountdown(30);
                        setCanResend(false);
                      }}
                      className="px-3 py-2 bg-[#4D694E] text-[#FFF3D5] rounded-xl text-xs font-semibold"
                    >
                      <Check className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ) : (
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#FFF3D5] border border-[#4D694E]/20 text-xs font-mono text-[#2B3E2C]">
                    <span>{email}</span>
                    <button
                      onClick={() => setIsEditingEmail(true)}
                      className="text-[11px] text-[#4D694E] underline hover:text-[#2B3E2C]"
                    >
                      Change
                    </button>
                  </div>
                )}
              </div>

              {/* Primary Action: Open Email */}
              <div className="space-y-3">
                <button
                  onClick={handleOpenEmail}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs font-semibold text-[#FFF3D5] bg-[#4D694E] hover:bg-[#364C37] shadow-sm transition-all"
                >
                  <Mail className="w-4 h-4" />
                  <span>Open Email</span>
                </button>

                {/* Resend Action with Countdown */}
                <button
                  onClick={handleResend}
                  disabled={!canResend || state === 'RESENDING'}
                  className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-medium border transition-all ${
                    canResend
                      ? 'bg-[#FFF3D5] text-[#2B3E2C] border-[#4D694E]/30 hover:border-[#4D694E]'
                      : 'bg-[#FFF3D5]/50 text-[#2B3E2C]/50 border-[#4D694E]/15 cursor-not-allowed'
                  }`}
                >
                  {state === 'RESENDING' ? (
                    <>
                      <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                      <span>Sending link...</span>
                    </>
                  ) : canResend ? (
                    <span>Resend Email</span>
                  ) : (
                    <span>Resend available in {countdown}s</span>
                  )}
                </button>
              </div>
            </>
          )}

          {/* Developer / QA State Previewer Bar */}
          <div className="mt-8 pt-6 border-t border-[#4D694E]/20 text-left">
            <div className="text-[10px] font-mono uppercase tracking-wider text-[#2B3E2C]/60 mb-2">
              Preview UI State:
            </div>
            <div className="flex flex-wrap gap-1.5">
              {(['DEFAULT', 'RESENDING', 'VERIFIED', 'EXPIRED', 'ERROR'] as VerifyState[]).map((s) => (
                <button
                  key={s}
                  onClick={() => setState(s)}
                  className={`px-2 py-1 rounded text-[10px] font-mono transition-colors ${
                    state === s
                      ? 'bg-[#4D694E] text-[#FFF3D5] font-bold'
                      : 'bg-[#FFF3D5] text-[#2B3E2C]/70 hover:bg-[#EBDDB6]'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
