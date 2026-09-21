import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { NAV_ITEMS } from '../../lib/constants';
import { Menu, X } from 'lucide-react';
import tantriksLogo from '../../assets/tantriks-hub-mark.svg';
import { useRouter } from '../../router/Router';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('About');
  const { pathname, navigate } = useRouter();

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
    <header className="relative z-40 w-full border-b border-[#4D694E]/15 dark:border-[#82D173]/15 bg-[#FFF3D5]/70 dark:bg-[#0F0A0A]/70 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 sm:py-4">
        <nav
          className="flex items-center justify-between"
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
              className="w-9 h-9 sm:w-10 sm:h-10 object-contain transform group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_10px_rgba(77,105,78,0.3)] dark:drop-shadow-[0_0_14px_rgba(130,209,115,0.5)]"
            />
            <div className="flex items-baseline gap-1.5">
              <span className="font-display font-bold text-lg tracking-tight text-[#2B3E2C] dark:text-[#F4FAF3]">
                Tantriks
              </span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#FFF3D5] bg-[#4D694E] dark:bg-[#82D173] dark:text-[#0F0A0A] border border-[#4D694E]/30 dark:border-[#82D173]/30 px-1.5 py-0.5 rounded font-bold">
                AI
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 bg-[#4D694E]/10 dark:bg-[#82D173]/10 border border-[#4D694E]/20 dark:border-[#82D173]/20 rounded-full p-1">
            {NAV_ITEMS.map((item) => {
              const isActive = activeTab === item.label && pathname === '/';
              return (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href, item.label)}
                  className={`relative px-4 py-1.5 text-xs font-medium rounded-full transition-colors duration-200 ${
                    isActive
                      ? 'text-[#2B3E2C] dark:text-[#F4FAF3] font-bold'
                      : 'text-[#2B3E2C]/80 dark:text-[#F4FAF3]/80 hover:text-[#4D694E] dark:hover:text-[#82D173]'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavTab"
                      className="absolute inset-0 bg-[#FFF3D5] dark:bg-[#1F1919] rounded-full border border-[#4D694E]/30 dark:border-[#82D173]/40 shadow-sm"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="p-2 text-[#2B3E2C] dark:text-[#F4FAF3] hover:text-[#4D694E] dark:hover:text-[#82D173] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4D694E] rounded-lg"
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
            className="md:hidden mx-4 mb-4 p-4 rounded-2xl bg-[#FFF3D5]/95 dark:bg-[#181313]/95 border border-[#4D694E]/30 dark:border-[#82D173]/30 backdrop-blur-2xl shadow-2xl flex flex-col gap-2"
          >
            {NAV_ITEMS.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href, item.label)}
                className="w-full text-left px-3 py-2 text-sm font-medium text-[#2B3E2C] dark:text-[#F4FAF3] hover:text-[#4D694E] dark:hover:text-[#82D173] hover:bg-[#4D694E]/10 dark:hover:bg-[#82D173]/10 rounded-lg transition-colors"
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
