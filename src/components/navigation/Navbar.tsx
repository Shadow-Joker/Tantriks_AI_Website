import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { NAV_ITEMS } from '../../lib/constants';
import { useMagnetic } from '../../hooks/useMagnetic';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import tantriksLogo from '../../assets/tantriks-hub-mark.svg';
import { useRouter } from '../../router/Router';
import { ThemeToggle } from './ThemeToggle';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('About');
  const { pathname, navigate } = useRouter();

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

  const handleNavClick = (href: string, label?: string) => {
    if (label) setActiveTab(label);
    setMobileMenuOpen(false);

    if (href.startsWith('#')) {
      if (pathname !== '/') {
        navigate('/' + href);
      } else {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(href);
    }
  };

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
              ? 'bg-[#FFF3D5]/90 backdrop-blur-xl border border-[#4D694E]/25 shadow-[0_8px_32px_rgba(43,62,44,0.12)] rounded-full px-5 py-2.5 max-w-5xl mx-auto'
              : 'bg-transparent px-2 py-2'
          }`}
          aria-label="Main Navigation"
        >
          {/* Brand Logo */}
          <button
            onClick={() => handleNavClick('/')}
            className="flex items-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4D694E] rounded-lg py-1 px-1 text-left"
          >
            <img
              src={tantriksLogo}
              alt="Tantriks AI Logo"
              className="w-7 h-7 sm:w-8 sm:h-8 object-contain transform group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_8px_rgba(77,105,78,0.25)] dark:drop-shadow-[0_0_12px_rgba(130,209,115,0.45)]"
            />
            <div className="flex items-baseline gap-1.5">
              <span className="font-display font-bold text-lg tracking-tight text-[#2B3E2C]">
                Tantriks
              </span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#FFF3D5] bg-[#4D694E] border border-[#4D694E]/30 px-1.5 py-0.5 rounded font-bold">
                AI
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 bg-[#4D694E]/10 border border-[#4D694E]/20 rounded-full p-1">
            {NAV_ITEMS.map((item) => {
              const isActive = activeTab === item.label && pathname === '/';
              return (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href, item.label)}
                  className={`relative px-4 py-1.5 text-xs font-medium rounded-full transition-colors duration-200 ${
                    isActive ? 'text-[#2B3E2C] font-bold' : 'text-[#2B3E2C]/80 hover:text-[#4D694E]'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavTab"
                      className="absolute inset-0 bg-[#FFF3D5] rounded-full border border-[#4D694E]/30 shadow-sm"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </button>
              );
            })}
          </div>
          {/* Desktop Right CTA */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />

            <button
              onClick={() => handleNavClick('#contact')}
              className="text-xs font-medium text-[#2B3E2C]/80 hover:text-[#4D694E] transition-colors duration-150 px-2 py-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#4D694E] rounded"
            >
              Contact
            </button>

            <div
              ref={ctaRef}
              onMouseMove={handleCtaMove}
              onMouseLeave={handleCtaLeave}
              className="relative"
            >
              <motion.button
                onClick={() => handleNavClick('#contact')}
                animate={{ x: ctaPos.x, y: ctaPos.y }}
                transition={{ type: 'spring', stiffness: 200, damping: 15, mass: 0.1 }}
                className="relative inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold text-[#FFF3D5] bg-gradient-to-r from-[#4D694E] to-[#364C37] hover:from-[#364C37] hover:to-[#2B3E2C] rounded-full shadow-[0_0_15px_rgba(77,105,78,0.35)] hover:shadow-[0_0_25px_rgba(77,105,78,0.45)] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#4D694E]"
              >
                <span>Partner With Us</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#FFF3D5]" />
              </motion.button>
            </div>
          </div>

          {/* Mobile Right Controls */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="p-2 text-[#2B3E2C] hover:text-[#4D694E] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4D694E] rounded-lg"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
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
            className="md:hidden mx-4 mt-2 p-4 rounded-2xl bg-[#FFF3D5]/95 border border-[#4D694E]/30 backdrop-blur-2xl shadow-2xl flex flex-col gap-3"
          >
            {NAV_ITEMS.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href, item.label)}
                className="w-full text-left px-3 py-2 text-sm font-medium text-[#2B3E2C] hover:text-[#4D694E] hover:bg-[#4D694E]/10 rounded-lg transition-colors"
              >
                {item.label}
              </button>
            ))}
            <div className="flex items-center justify-between px-3 py-2 rounded-lg bg-[#4D694E]/5 border border-[#4D694E]/10">
              <span className="text-xs font-mono text-[#2B3E2C] uppercase tracking-wider font-semibold">Theme</span>
              <ThemeToggle />
            </div>
            <div className="h-px bg-[#4D694E]/20 my-1" />
            <div className="flex items-center justify-between gap-3 pt-1">
              <button
                onClick={() => handleNavClick('#contact')}
                className="w-1/2 py-2 text-center text-xs font-medium text-[#2B3E2C] hover:text-[#4D694E] border border-[#4D694E]/30 rounded-full"
              >
                Contact
              </button>
              <button
                onClick={() => handleNavClick('#contact')}
                className="w-1/2 py-2 text-center text-xs font-semibold text-[#FFF3D5] bg-gradient-to-r from-[#4D694E] to-[#364C37] rounded-full flex items-center justify-center gap-1 shadow-[0_0_12px_rgba(77,105,78,0.35)]"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#FFF3D5]" />
                <span>Partner With Us</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
}
