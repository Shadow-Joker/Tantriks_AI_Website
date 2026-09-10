import { useState, useEffect } from 'react';
import { usePageMetadata } from '../hooks/usePageMetadata';
import { Cookie, Check, ArrowLeft, Info, Lock } from 'lucide-react';
import { Link } from '../router/Link';

interface CookieSettings {
  essential: boolean;
  analytics: boolean;
  preferences: boolean;
  marketing: boolean;
}

const STORAGE_KEY = 'tantriks_cookie_preferences';

export function CookiePreferencesPage() {
  usePageMetadata(
    'Cookie Preferences',
    'Choose how Tantriks AI uses cookies and similar technologies to improve your experience.'
  );

  const [settings, setSettings] = useState<CookieSettings>({
    essential: true,
    analytics: true,
    preferences: true,
    marketing: false,
  });

  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        setSettings({
          essential: true,
          analytics: Boolean(parsed.analytics),
          preferences: Boolean(parsed.preferences),
          marketing: Boolean(parsed.marketing),
        });
      }
    } catch {
      // Fallback to defaults
    }
  }, []);

  const saveSettings = (newSettings: CookieSettings, msg = 'Preferences saved successfully.') => {
    setSettings(newSettings);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newSettings));
      window.dispatchEvent(new CustomEvent('tantriks_cookies_updated', { detail: newSettings }));
    } catch {
      // Ignore storage errors
    }
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const handleToggle = (key: keyof CookieSettings) => {
    if (key === 'essential') return; // Essential is always locked
    const updated = { ...settings, [key]: !settings[key] };
    setSettings(updated);
  };

  const handleAcceptAll = () => {
    const allEnabled: CookieSettings = {
      essential: true,
      analytics: true,
      preferences: true,
      marketing: true,
    };
    saveSettings(allEnabled, 'All cookie categories accepted.');
  };

  const handleRejectOptional = () => {
    const minimal: CookieSettings = {
      essential: true,
      analytics: false,
      preferences: false,
      marketing: false,
    };
    saveSettings(minimal, 'Optional cookies rejected.');
  };

  const handleSaveCurrent = () => {
    saveSettings(settings, 'Your custom preferences have been saved.');
  };

  return (
    <div className="pt-32 pb-24 md:pt-40 md:pb-36 bg-[#FFF3D5] text-[#2B3E2C] min-h-screen relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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

        {/* Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#4D694E]/10 border border-[#4D694E]/30 text-xs font-mono text-[#4D694E] uppercase tracking-wider mb-4">
            <Cookie className="w-3.5 h-3.5 text-[#4D694E]" />
            Privacy Controls
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold font-display tracking-tight text-[#2B3E2C] mb-4">
            Cookie Preferences
          </h1>
          <p className="text-base sm:text-lg text-[#2B3E2C]/80 leading-relaxed max-w-2xl">
            Choose how Tantriks AI uses cookies and similar technologies to improve your experience.
          </p>
        </div>

        {/* Global Action Bar */}
        <div className="flex flex-wrap items-center gap-3 p-4 mb-8 rounded-2xl bg-[#F4E7C5] border border-[#4D694E]/25">
          <button
            onClick={handleAcceptAll}
            className="px-5 py-2.5 rounded-full text-xs font-semibold text-[#FFF3D5] bg-[#4D694E] hover:bg-[#364C37] transition-all duration-200 shadow-sm"
          >
            Accept All
          </button>
          <button
            onClick={handleRejectOptional}
            className="px-5 py-2.5 rounded-full text-xs font-medium text-[#2B3E2C] bg-[#FFF3D5] hover:bg-[#EBDDB6] border border-[#4D694E]/30 transition-all duration-200"
          >
            Reject Optional
          </button>
          <button
            onClick={handleSaveCurrent}
            className="px-5 py-2.5 rounded-full text-xs font-medium text-[#2B3E2C] bg-[#4D694E]/15 hover:bg-[#4D694E]/25 border border-[#4D694E]/30 transition-all duration-200 ml-auto"
          >
            Save Preferences
          </button>
        </div>

        {/* Cookie Categories Stack */}
        <div className="space-y-4 mb-10">
          {/* 1. Essential */}
          <div className="p-6 rounded-3xl bg-[#FFF3D5] border border-[#4D694E]/30 shadow-sm">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-mono text-xs font-bold text-[#4D694E] uppercase tracking-wider">
                    Category 01
                  </span>
                  <span className="inline-flex items-center gap-1 text-[10px] font-mono text-[#2B3E2C]/70 bg-[#4D694E]/15 px-2 py-0.5 rounded-full">
                    <Lock className="w-3 h-3 text-[#4D694E]" />
                    Always Enabled
                  </span>
                </div>
                <h3 className="text-xl font-bold font-display text-[#2B3E2C] mb-1">
                  ESSENTIAL
                </h3>
                <p className="text-sm text-[#2B3E2C]/80 leading-relaxed">
                  Required for the website to function properly. These enable core features such as security, session persistence, and network management.
                </p>
              </div>

              {/* Locked Switch */}
              <div className="shrink-0 pt-2">
                <div
                  className="w-12 h-6 flex items-center bg-[#4D694E] rounded-full p-1 cursor-not-allowed opacity-80"
                  title="Essential cookies cannot be disabled"
                >
                  <div className="bg-[#FFF3D5] w-4 h-4 rounded-full shadow-md transform translate-x-6 transition-transform" />
                </div>
              </div>
            </div>
          </div>

          {/* 2. Analytics */}
          <div className="p-6 rounded-3xl bg-[#FFF3D5] border border-[#4D694E]/25 shadow-sm hover:border-[#4D694E]/40 transition-colors">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-mono text-xs font-bold text-[#4D694E] uppercase tracking-wider">
                    Category 02
                  </span>
                  <span className="text-[10px] font-mono text-[#2B3E2C]/70 bg-[#F4E7C5] px-2 py-0.5 rounded-full border border-[#4D694E]/20">
                    Optional
                  </span>
                </div>
                <h3 className="text-xl font-bold font-display text-[#2B3E2C] mb-1">
                  ANALYTICS
                </h3>
                <p className="text-sm text-[#2B3E2C]/80 leading-relaxed">
                  Helps us understand how visitors use our website and improve the experience through anonymized traffic telemetry.
                </p>
              </div>

              {/* Interactive Toggle */}
              <div className="shrink-0 pt-2">
                <button
                  type="button"
                  role="switch"
                  aria-checked={settings.analytics}
                  onClick={() => handleToggle('analytics')}
                  className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4D694E] ${
                    settings.analytics ? 'bg-[#4D694E]' : 'bg-[#EBDDB6]'
                  }`}
                >
                  <div
                    className={`bg-[#FFF3D5] w-4 h-4 rounded-full shadow-md transform transition-transform duration-200 ${
                      settings.analytics ? 'translate-x-6' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* 3. Preferences */}
          <div className="p-6 rounded-3xl bg-[#FFF3D5] border border-[#4D694E]/25 shadow-sm hover:border-[#4D694E]/40 transition-colors">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-mono text-xs font-bold text-[#4D694E] uppercase tracking-wider">
                    Category 03
                  </span>
                  <span className="text-[10px] font-mono text-[#2B3E2C]/70 bg-[#F4E7C5] px-2 py-0.5 rounded-full border border-[#4D694E]/20">
                    Optional
                  </span>
                </div>
                <h3 className="text-xl font-bold font-display text-[#2B3E2C] mb-1">
                  PREFERENCES
                </h3>
                <p className="text-sm text-[#2B3E2C]/80 leading-relaxed">
                  Allows the website to remember choices and preferences such as language, sound effects, or custom workflow simulation parameters.
                </p>
              </div>

              {/* Interactive Toggle */}
              <div className="shrink-0 pt-2">
                <button
                  type="button"
                  role="switch"
                  aria-checked={settings.preferences}
                  onClick={() => handleToggle('preferences')}
                  className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4D694E] ${
                    settings.preferences ? 'bg-[#4D694E]' : 'bg-[#EBDDB6]'
                  }`}
                >
                  <div
                    className={`bg-[#FFF3D5] w-4 h-4 rounded-full shadow-md transform transition-transform duration-200 ${
                      settings.preferences ? 'translate-x-6' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* 4. Marketing */}
          <div className="p-6 rounded-3xl bg-[#FFF3D5] border border-[#4D694E]/25 shadow-sm hover:border-[#4D694E]/40 transition-colors">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-mono text-xs font-bold text-[#4D694E] uppercase tracking-wider">
                    Category 04
                  </span>
                  <span className="text-[10px] font-mono text-[#2B3E2C]/70 bg-[#F4E7C5] px-2 py-0.5 rounded-full border border-[#4D694E]/20">
                    Optional
                  </span>
                </div>
                <h3 className="text-xl font-bold font-display text-[#2B3E2C] mb-1">
                  MARKETING
                </h3>
                <p className="text-sm text-[#2B3E2C]/80 leading-relaxed">
                  Used to support relevant communications and marketing experiences tailored to your business needs across platforms.
                </p>
              </div>

              {/* Interactive Toggle */}
              <div className="shrink-0 pt-2">
                <button
                  type="button"
                  role="switch"
                  aria-checked={settings.marketing}
                  onClick={() => handleToggle('marketing')}
                  className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4D694E] ${
                    settings.marketing ? 'bg-[#4D694E]' : 'bg-[#EBDDB6]'
                  }`}
                >
                  <div
                    className={`bg-[#FFF3D5] w-4 h-4 rounded-full shadow-md transform transition-transform duration-200 ${
                      settings.marketing ? 'translate-x-6' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Explanatory Footer Note */}
        <div className="p-6 rounded-2xl bg-[#F4E7C5]/70 border border-[#4D694E]/20 text-xs text-[#2B3E2C]/80 flex items-start gap-3 leading-relaxed">
          <Info className="w-5 h-5 text-[#4D694E] shrink-0 mt-0.5" />
          <div>
            Disabling optional cookies will never break the core functionality of our website. You can review our full data protection measures in our{' '}
            <Link href="/privacy-policy" className="text-[#4D694E] underline font-semibold">
              Privacy Policy
            </Link>.
          </div>
        </div>

        {/* Floating Toast Alert */}
        {toastMessage && (
          <div className="fixed bottom-8 right-8 z-50 flex items-center gap-2 px-5 py-3 rounded-2xl bg-[#2B3E2C] text-[#FFF3D5] shadow-2xl border border-[#4D694E]/40 font-mono text-xs animate-bounce">
            <Check className="w-4 h-4 text-[#9BB89D]" />
            <span>{toastMessage}</span>
          </div>
        )}
      </div>
    </div>
  );
}
