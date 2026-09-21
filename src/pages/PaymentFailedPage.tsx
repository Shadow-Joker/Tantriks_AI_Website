import { useState } from 'react';
import { usePageMetadata } from '../hooks/usePageMetadata';
import { AlertOctagon, RotateCcw, Mail, ArrowLeft, Shield } from 'lucide-react';
import { Link } from '../router/Link';
import { LoadingButton } from '../components/loading/LoadingButton';

type PaymentErrorReason =
  | 'FAILED'
  | 'DECLINED'
  | 'NETWORK_ERROR'
  | 'SESSION_EXPIRED'
  | 'CANCELLED';

const REASON_DETAILS: Record<
  PaymentErrorReason,
  { title: string; hint: string; code: string }
> = {
  FAILED: {
    title: "Payment couldn't be completed.",
    hint: 'We were unable to process this transaction with your payment provider.',
    code: 'ERR_TX_PROCESS_FAILED',
  },
  DECLINED: {
    title: 'Payment declined.',
    hint: 'Your financial institution declined the transaction. Please verify card limits or authorization settings.',
    code: 'ERR_CARD_DECLINED',
  },
  NETWORK_ERROR: {
    title: 'Network timeout.',
    hint: 'Communication with the secure payment gateway timed out before completion.',
    code: 'ERR_GATEWAY_TIMEOUT',
  },
  SESSION_EXPIRED: {
    title: 'Checkout session expired.',
    hint: 'The secure transaction window has timed out for security reasons.',
    code: 'ERR_SESSION_TIMEOUT',
  },
  CANCELLED: {
    title: 'Transaction cancelled.',
    hint: 'The checkout request was cancelled before payment capture.',
    code: 'ERR_TX_USER_CANCELLED',
  },
};

export function PaymentFailedPage() {
  usePageMetadata(
    'Payment Failed',
    "We couldn't process your payment. Please check your payment details and try again."
  );

  const [reason, setReason] = useState<PaymentErrorReason>('FAILED');
  const [retrying, setRetrying] = useState(false);

  const handleRetry = () => {
    setRetrying(true);
    setTimeout(() => {
      setRetrying(false);
      alert('Redirecting to the secure checkout portal...');
    }, 1200);
  };

  const current = REASON_DETAILS[reason];

  return (
    <div className="pt-12 pb-20 md:pt-16 md:pb-28 bg-transparent text-[#2B3E2C] dark:text-[#F4FAF3] min-h-screen flex flex-col justify-center relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#4D694E]/15 dark:bg-[#82D173]/15 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-xl mx-auto px-4 sm:px-6 text-center relative z-10 w-full">
        {/* Back Link */}
        <div className="mb-8 text-left">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-[#4D694E] hover:text-[#2B3E2C] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Card Container */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#F4E7C5] border border-[#4D694E]/30 shadow-sm relative">
          {/* Large Geometric '!' Visual */}
          <div className="relative w-24 h-24 mx-auto mb-6 flex items-center justify-center">
            <div className="w-20 h-20 rounded-3xl bg-[#FFF3D5] border border-[#4D694E]/30 flex items-center justify-center text-[#4D694E] shadow-sm relative">
              <span className="text-4xl font-mono font-bold text-[#4D694E]">!</span>
            </div>
            <div className="absolute -bottom-1 -right-1 p-1 rounded-full bg-[#2B3E2C] text-[#FFF3D5]">
              <AlertOctagon className="w-4 h-4 text-[#FFF3D5]" />
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-2xl sm:text-3xl font-bold font-display tracking-tight text-[#2B3E2C] mb-3">
            {current.title}
          </h1>

          {/* Description */}
          <p className="text-sm sm:text-base text-[#2B3E2C]/80 leading-relaxed mb-4">
            We couldn&apos;t process your payment. Please check your payment details and try again.
          </p>

          <p className="text-xs text-[#2B3E2C]/70 mb-6 bg-[#FFF3D5] p-3 rounded-xl border border-[#4D694E]/20">
            {current.hint}
          </p>

          {/* Transaction Metadata Box (Zero sensitive card numbers) */}
          <div className="p-4 rounded-xl bg-[#FFF3D5] border border-[#4D694E]/25 text-left mb-6 font-mono text-xs text-[#2B3E2C]/80 space-y-1.5">
            <div className="flex justify-between">
              <span className="text-[#2B3E2C]/60">Error Code:</span>
              <span className="font-semibold text-[#4D694E]">{current.code}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#2B3E2C]/60">Status:</span>
              <span className="text-amber-800 font-semibold">Declined / Uncaptured</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#2B3E2C]/60">Reference ID:</span>
              <span>TX-{Math.floor(100000 + Math.random() * 900000)}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
            <LoadingButton
              onClick={handleRetry}
              isLoading={retrying}
              loadingText="Connecting..."
              className="w-full sm:w-auto flex-1 py-3.5"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Try Again</span>
            </LoadingButton>

            <a
              href="mailto:tantriksai2026@gmail.com"
              className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs font-medium text-[#2B3E2C] bg-[#FFF3D5] hover:bg-[#EBDDB6] border border-[#4D694E]/30 transition-all"
            >
              <Mail className="w-3.5 h-3.5 text-[#4D694E]" />
              <span>Contact Support</span>
            </a>
          </div>

          {/* Support Reassurance Statement */}
          <p className="text-xs text-[#2B3E2C]/75 leading-relaxed">
            If the problem continues, please contact our support team at{' '}
            <a href="mailto:tantriksai2026@gmail.com" className="text-[#4D694E] underline font-semibold">
              tantriksai2026@gmail.com
            </a>
            . No funds were debited for this attempt.
          </p>

          {/* Safe Privacy Assurance */}
          <div className="mt-6 pt-4 border-t border-[#4D694E]/15 flex items-center justify-center gap-2 text-[11px] font-mono text-[#2B3E2C]/60">
            <Shield className="w-3.5 h-3.5 text-[#4D694E]" />
            <span>Encrypted payment transmission &bull; Zero credentials stored</span>
          </div>

          {/* QA State Switcher Bar */}
          <div className="mt-6 pt-4 border-t border-[#4D694E]/15 text-left">
            <div className="text-[10px] font-mono uppercase tracking-wider text-[#2B3E2C]/60 mb-2">
              Preview Error Reason:
            </div>
            <div className="flex flex-wrap gap-1">
              {(['FAILED', 'DECLINED', 'NETWORK_ERROR', 'SESSION_EXPIRED', 'CANCELLED'] as PaymentErrorReason[]).map(
                (r) => (
                  <button
                    key={r}
                    onClick={() => setReason(r)}
                    className={`px-2 py-1 rounded text-[10px] font-mono ${
                      reason === r
                        ? 'bg-[#4D694E] text-[#FFF3D5] font-bold'
                        : 'bg-[#FFF3D5] text-[#2B3E2C]/70 hover:bg-[#EBDDB6]'
                    }`}
                  >
                    {r.toLowerCase()}
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
