import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { NAV_ITEMS } from '../../lib/constants';
import { useMagnetic } from '../../hooks/useMagnetic';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import tantriksLogo from '../../assets/tantriks-hub-mark.svg';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Platform');

  const {
    ref: ctaRef,
    position: ctaPos,
    handleMouseMove: handleCtaMove,
    handleMouseLeave: handleCtaLeave,
  } = useMagnetic(0.2);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'pt-3 pb-1' : 'pt-6 pb-2'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav
          className={`flex items-center justify-between transition-all duration-300 ${
            scrolled
              ? 'bg-[#0A0C12]/80 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] rounded-full px-5 py-2.5 max-w-5xl mx-auto'
              : 'bg-transparent px-2 py-2'
          }`}
          aria-label="Main Navigation"
        >
          {/* Brand Logo */}
          <a
            href="#"
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-lg p-1"
          >
            <div className="relative w-8 h-8 rounded-lg bg-[#0C1117] border border-emerald-500/30 flex items-center justify-center p-1 shadow-[0_0_15px_rgba(34,224,107,0.25)] group-hover:shadow-[0_0_22px_rgba(34,224,107,0.5)] group-hover:border-emerald-400/60 transition-all duration-300">
              <img
                src={tantriksLogo}
                alt="Tantriks AI Logo"
                className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="font-display font-bold text-lg tracking-tight text-white">
                Tantriks
              </span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 bg-emerald-950/60 border border-emerald-800/40 px-1.5 py-0.5 rounded">
                AI
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 bg-[#10141E]/40 border border-white/5 rounded-full p-1">
            {NAV_ITEMS.map((item) => {
              const isActive = activeTab === item.label;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setActiveTab(item.label)}
                  className={`relative px-4 py-1.5 text-xs font-medium rounded-full transition-colors duration-200 ${
                    isActive ? 'text-white' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavTab"
                      className="absolute inset-0 bg-white/10 rounded-full border border-white/10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </a>
              );
            })}
          </div>

          {/* Desktop Right CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#login"
              className="text-xs font-medium text-slate-300 hover:text-white transition-colors duration-150 px-2 py-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400 rounded"
            >
              Sign In
            </a>

            <div
              ref={ctaRef}
              onMouseMove={handleCtaMove}
              onMouseLeave={handleCtaLeave}
              className="relative"
            >
              <motion.a
                href="#demo"
                animate={{ x: ctaPos.x, y: ctaPos.y }}
                transition={{ type: 'spring', stiffness: 200, damping: 15, mass: 0.1 }}
                className="relative inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold text-[#07080B] bg-gradient-to-r from-cyan-300 via-cyan-400 to-teal-300 rounded-full shadow-[0_0_15px_rgba(0,242,254,0.3)] hover:shadow-[0_0_25px_rgba(0,242,254,0.5)] transition-shadow duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-cyan-400"
              >
                <span>Get Started</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </motion.a>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="md:hidden p-2 text-slate-400 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mx-4 mt-2 p-4 rounded-2xl bg-[#0C0F17]/95 border border-white/10 backdrop-blur-2xl shadow-2xl flex flex-col gap-3"
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="h-px bg-white/10 my-1" />
            <div className="flex items-center justify-between gap-3 pt-1">
              <a
                href="#login"
                onClick={() => setMobileMenuOpen(false)}
                className="w-1/2 py-2 text-center text-xs font-medium text-slate-300 hover:text-white border border-white/10 rounded-full"
              >
                Sign In
              </a>
              <a
                href="#demo"
                onClick={() => setMobileMenuOpen(false)}
                className="w-1/2 py-2 text-center text-xs font-semibold text-[#07080B] bg-cyan-400 rounded-full flex items-center justify-center gap-1"
              >
                <Sparkles className="w-3 h-3" />
                <span>Get Started</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
