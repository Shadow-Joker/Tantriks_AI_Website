import { motion } from 'motion/react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className = '' }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={`relative inline-flex items-center h-8 w-14 rounded-full p-1 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#82D173] cursor-pointer ${
        isDark
          ? 'bg-[#181313] border border-[#82D173]/40 shadow-[0_0_12px_rgba(130,209,115,0.25)]'
          : 'bg-[#4D694E]/10 border border-[#4D694E]/30 shadow-inner'
      } ${className}`}
    >
      {/* Visual background icons */}
      <span className="sr-only">Toggle theme</span>
      <div className="absolute inset-0 flex items-center justify-between px-2 pointer-events-none text-xs">
        <Sun
          className={`w-3.5 h-3.5 transition-opacity duration-200 ${
            isDark ? 'opacity-30 text-[#A9BBA6]' : 'opacity-80 text-[#4D694E]'
          }`}
        />
        <Moon
          className={`w-3.5 h-3.5 transition-opacity duration-200 ${
            isDark ? 'opacity-90 text-[#82D173]' : 'opacity-30 text-[#2B3E2C]'
          }`}
        />
      </div>

      {/* Sliding knob */}
      <motion.span
        layout
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        className={`relative z-10 flex items-center justify-center w-6 h-6 rounded-full shadow-md transition-colors duration-200 ${
          isDark
            ? 'ml-auto bg-[#82D173] text-[#0F0A0A]'
            : 'mr-auto bg-[#FFF3D5] text-[#4D694E] border border-[#4D694E]/20'
        }`}
      >
        {isDark ? (
          <Moon className="w-3.5 h-3.5 fill-[#0F0A0A] stroke-[#0F0A0A]" />
        ) : (
          <Sun className="w-3.5 h-3.5 stroke-[#4D694E]" />
        )}
      </motion.span>
    </button>
  );
}
