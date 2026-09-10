import React, { useState } from 'react';
import { usePageMetadata } from '../hooks/usePageMetadata';
import {
  KeyRound,
  Mail,
  Lock,
  ArrowLeft,
  CheckCircle2,
  AlertCircle,
  Check,
  Eye,
  EyeOff,
} from 'lucide-react';
import { Link } from '../router/Link';
import { LoadingButton } from '../components/loading/LoadingButton';

type ResetMode = 'REQUEST' | 'TOKEN';
type ResetStatus =
  | 'IDLE'
  | 'LOADING'
  | 'SUCCESS'
  | 'INVALID_EMAIL'
  | 'EXPIRED_TOKEN'
  | 'INVALID_TOKEN'
  | 'PASSWORD_MISMATCH'
  | 'WEAK_PASSWORD'
  | 'SERVER_ERROR';

export function ResetPasswordPage() {
  usePageMetadata(
    'Reset Password',
    "Enter the email address associated with your account and we'll send you a link to reset your password."
  );

  const [mode, setMode] = useState<ResetMode>('REQUEST');
  const [status, setStatus] = useState<ResetStatus>('IDLE');
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // Requirements checks
  const hasMinLength = newPassword.length >= 8;
  const hasUppercase = /[A-Z]/.test(newPassword);
  const hasNumber = /[0-9]/.test(newPassword);
  const hasSpecial = /[^A-Za-z0-9]/.test(newPassword);
  const isStrong = hasMinLength && hasUppercase && hasNumber && hasSpecial;

  const handleRequestSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setStatus('INVALID_EMAIL');
      return;
    }

    setStatus('LOADING');
    setTimeout(() => {
      setStatus('SUCCESS');
    }, 1200);
  };

  const handleTokenSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isStrong) {
      setStatus('WEAK_PASSWORD');
      return;
    }
    if (newPassword !== confirmPassword) {
      setStatus('PASSWORD_MISMATCH');
      return;
    }

    setStatus('LOADING');
    setTimeout(() => {
      setStatus('SUCCESS');
    }, 1200);
  };

  return (
    <div className="pt-32 pb-24 md:pt-40 md:pb-36 bg-[#FFF3D5] text-[#2B3E2C] min-h-screen flex flex-col justify-center relative">
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

        {/* Card Container */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#F4E7C5] border border-[#4D694E]/25 shadow-sm relative overflow-hidden">
          {/* Top Icon Badge */}
          <div className="w-14 h-14 rounded-2xl bg-[#FFF3D5] border border-[#4D694E]/30 flex items-center justify-center text-[#4D694E] shadow-sm mb-6 mx-auto">
            {status === 'SUCCESS' ? (
              <CheckCircle2 className="w-7 h-7 text-[#4D694E]" />
            ) : mode === 'TOKEN' ? (
              <Lock className="w-7 h-7 text-[#4D694E]" />
            ) : (
              <KeyRound className="w-7 h-7 text-[#4D694E]" />
            )}
          </div>

          {/* Mode 1: REQUEST RESET LINK */}
          {mode === 'REQUEST' && (
            <>
              {status === 'SUCCESS' ? (
                <div className="text-center">
                  <h1 className="text-2xl sm:text-3xl font-bold font-display text-[#2B3E2C] mb-3">
                    Check your inbox
                  </h1>
                  <p className="text-sm text-[#2B3E2C]/80 leading-relaxed mb-6">
                    We&apos;ve sent a password reset link to{' '}
                    <span className="font-semibold text-[#2B3E2C]">{email || 'your email address'}</span>.
                  </p>
                  <Link
                    href="/"
                    className="w-full inline-flex items-center justify-center px-6 py-3.5 rounded-full text-xs font-semibold text-[#FFF3D5] bg-[#4D694E] hover:bg-[#364C37] shadow-sm transition-all"
                  >
                    Back to Sign In
                  </Link>
                </div>
              ) : (
                <>
                  <div className="text-center mb-6">
                    <h1 className="text-2xl sm:text-3xl font-bold font-display text-[#2B3E2C] mb-2">
                      Reset your password
                    </h1>
                    <p className="text-sm text-[#2B3E2C]/80 leading-relaxed">
                      Enter the email address associated with your account and we&apos;ll send you a link to reset your password.
                    </p>
                  </div>

                  {status === 'INVALID_EMAIL' && (
                    <div className="mb-4 p-3 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center gap-2 text-xs text-red-900">
                      <AlertCircle className="w-4 h-4 shrink-0 text-red-700" />
                      <span>Please provide a valid email address.</span>
                    </div>
                  )}

                  {status === 'SERVER_ERROR' && (
                    <div className="mb-4 p-3 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center gap-2 text-xs text-red-900">
                      <AlertCircle className="w-4 h-4 shrink-0 text-red-700" />
                      <span>An unexpected server error occurred. Please try again.</span>
                    </div>
                  )}

                  <form onSubmit={handleRequestSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-mono font-medium text-[#2B3E2C]/80 mb-1.5">
                        Email address
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                            if (status === 'INVALID_EMAIL') setStatus('IDLE');
                          }}
                          placeholder="name@company.com"
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#FFF3D5] border border-[#4D694E]/30 text-xs text-[#2B3E2C] placeholder-[#2B3E2C]/40 focus:outline-none focus:ring-2 focus:ring-[#4D694E]"
                        />
                        <Mail className="w-4 h-4 text-[#4D694E] absolute left-3.5 top-1/2 -translate-y-1/2" />
                      </div>
                    </div>

                    <LoadingButton
                      type="submit"
                      isLoading={status === 'LOADING'}
                      loadingText="Sending Reset Link..."
                      className="w-full py-3.5"
                    >
                      <span>Send Reset Link</span>
                    </LoadingButton>
                  </form>
                </>
              )}
            </>
          )}

          {/* Mode 2: TOKEN NEW PASSWORD CREATION */}
          {mode === 'TOKEN' && (
            <>
              {status === 'EXPIRED_TOKEN' ? (
                <div className="text-center">
                  <h1 className="text-2xl font-bold font-display text-[#2B3E2C] mb-2">
                    Reset Link Expired
                  </h1>
                  <p className="text-sm text-[#2B3E2C]/80 leading-relaxed mb-6">
                    This password reset link is invalid or has expired. Please request a new one.
                  </p>
                  <button
                    onClick={() => {
                      setMode('REQUEST');
                      setStatus('IDLE');
                    }}
                    className="w-full inline-flex items-center justify-center px-6 py-3.5 rounded-full text-xs font-semibold text-[#FFF3D5] bg-[#4D694E] hover:bg-[#364C37] shadow-sm transition-all"
                  >
                    Request New Link
                  </button>
                </div>
              ) : status === 'SUCCESS' ? (
                <div className="text-center">
                  <h1 className="text-2xl font-bold font-display text-[#2B3E2C] mb-2">
                    Password Updated!
                  </h1>
                  <p className="text-sm text-[#2B3E2C]/80 leading-relaxed mb-6">
                    Your password has been reset successfully. You can now sign in with your new credentials.
                  </p>
                  <Link
                    href="/"
                    className="w-full inline-flex items-center justify-center px-6 py-3.5 rounded-full text-xs font-semibold text-[#FFF3D5] bg-[#4D694E] hover:bg-[#364C37] shadow-sm transition-all"
                  >
                    Back to Sign In
                  </Link>
                </div>
              ) : (
                <>
                  <div className="text-center mb-6">
                    <h1 className="text-2xl font-bold font-display text-[#2B3E2C] mb-2">
                      Create a new password
                    </h1>
                    <p className="text-sm text-[#2B3E2C]/80 leading-relaxed">
                      Choose a secure password to protect your account.
                    </p>
                  </div>

                  {status === 'PASSWORD_MISMATCH' && (
                    <div className="mb-4 p-3 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center gap-2 text-xs text-red-900">
                      <AlertCircle className="w-4 h-4 shrink-0 text-red-700" />
                      <span>Passwords do not match. Please verify both fields.</span>
                    </div>
                  )}

                  {status === 'WEAK_PASSWORD' && (
                    <div className="mb-4 p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center gap-2 text-xs text-amber-900">
                      <AlertCircle className="w-4 h-4 shrink-0 text-amber-700" />
                      <span>Please meet all password requirements below.</span>
                    </div>
                  )}

                  <form onSubmit={handleTokenSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-mono font-medium text-[#2B3E2C]/80 mb-1.5">
                        New password
                      </label>
                      <div className="relative">
                        <input
                          type={showPassword ? 'text' : 'password'}
                          required
                          value={newPassword}
                          onChange={(e) => setNewPassword(e.target.value)}
                          placeholder="At least 8 characters"
                          className="w-full pl-4 pr-10 py-3 rounded-xl bg-[#FFF3D5] border border-[#4D694E]/30 text-xs text-[#2B3E2C] focus:outline-none focus:ring-2 focus:ring-[#4D694E]"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-[#4D694E]"
                        >
                          {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-medium text-[#2B3E2C]/80 mb-1.5">
                        Confirm new password
                      </label>
                      <input
                        type={showPassword ? 'text' : 'password'}
                        required
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Re-enter your password"
                        className="w-full px-4 py-3 rounded-xl bg-[#FFF3D5] border border-[#4D694E]/30 text-xs text-[#2B3E2C] focus:outline-none focus:ring-2 focus:ring-[#4D694E]"
                      />
                    </div>

                    {/* Password Strength Checklist */}
                    <div className="p-4 rounded-xl bg-[#FFF3D5] border border-[#4D694E]/20 space-y-1.5 text-[11px] font-mono">
                      <div className={`flex items-center gap-1.5 ${hasMinLength ? 'text-[#4D694E] font-semibold' : 'text-[#2B3E2C]/60'}`}>
                        <Check className="w-3.5 h-3.5" />
                        <span>At least 8 characters</span>
                      </div>
                      <div className={`flex items-center gap-1.5 ${hasUppercase ? 'text-[#4D694E] font-semibold' : 'text-[#2B3E2C]/60'}`}>
                        <Check className="w-3.5 h-3.5" />
                        <span>One uppercase letter</span>
                      </div>
                      <div className={`flex items-center gap-1.5 ${hasNumber ? 'text-[#4D694E] font-semibold' : 'text-[#2B3E2C]/60'}`}>
                        <Check className="w-3.5 h-3.5" />
                        <span>One number</span>
                      </div>
                      <div className={`flex items-center gap-1.5 ${hasSpecial ? 'text-[#4D694E] font-semibold' : 'text-[#2B3E2C]/60'}`}>
                        <Check className="w-3.5 h-3.5" />
                        <span>One special symbol</span>
                      </div>
                    </div>

                    <LoadingButton
                      type="submit"
                      isLoading={status === 'LOADING'}
                      loadingText="Updating Password..."
                      className="w-full py-3.5"
                    >
                      <span>Update Password</span>
                    </LoadingButton>
                  </form>
                </>
              )}
            </>
          )}

          {/* QA Mode Switcher Bar */}
          <div className="mt-8 pt-6 border-t border-[#4D694E]/20 text-left">
            <div className="text-[10px] font-mono uppercase tracking-wider text-[#2B3E2C]/60 mb-2">
              Preview Mode &amp; State:
            </div>
            <div className="flex flex-wrap gap-1.5">
              <button
                onClick={() => {
                  setMode('REQUEST');
                  setStatus('IDLE');
                }}
                className={`px-2 py-1 rounded text-[10px] font-mono ${
                  mode === 'REQUEST' ? 'bg-[#4D694E] text-[#FFF3D5]' : 'bg-[#FFF3D5] text-[#2B3E2C]'
                }`}
              >
                Request View
              </button>
              <button
                onClick={() => {
                  setMode('TOKEN');
                  setStatus('IDLE');
                }}
                className={`px-2 py-1 rounded text-[10px] font-mono ${
                  mode === 'TOKEN' ? 'bg-[#4D694E] text-[#FFF3D5]' : 'bg-[#FFF3D5] text-[#2B3E2C]'
                }`}
              >
                Token View
              </button>
              <button
                onClick={() => setStatus('EXPIRED_TOKEN')}
                className="px-2 py-1 rounded text-[10px] font-mono bg-[#FFF3D5] text-[#2B3E2C]"
              >
                Expired
              </button>
              <button
                onClick={() => setStatus('SERVER_ERROR')}
                className="px-2 py-1 rounded text-[10px] font-mono bg-[#FFF3D5] text-[#2B3E2C]"
              >
                Server Error
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
