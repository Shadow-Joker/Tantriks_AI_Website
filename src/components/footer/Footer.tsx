import tantriksLogo from '../../assets/tantriks-hub-mark.svg';
import { Mail, Phone } from 'lucide-react';
import { Link } from '../../router/Link';
import { ThemeToggle } from '../navigation/ThemeToggle';

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-[#4D694E]/20 bg-[#F4E7C5]/85 dark:bg-[#181313]/85 backdrop-blur-md py-16 text-[#2B3E2C]/80 dark:text-[#F4FAF3]/80 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-16">
          {/* Brand & Mission Column */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <img
                src={tantriksLogo}
                alt="Tantriks AI Logo"
                className="w-8 h-8 sm:w-9 sm:h-9 object-contain drop-shadow-[0_0_10px_rgba(77,105,78,0.25)] dark:drop-shadow-[0_0_12px_rgba(130,209,115,0.4)]"
              />
              <span className="font-display font-bold text-[#2B3E2C] text-base tracking-tight">
                Tantriks AI
              </span>
            </div>

            <p className="font-display italic text-[#4D694E] font-medium text-xs mb-3">
              &ldquo;We don&apos;t just build AI &mdash; we craft magic.&rdquo;
            </p>

            <p className="text-[#2B3E2C]/80 leading-relaxed max-w-sm mb-6">
              Custom AI, intelligent automation, agents, and enterprise software built around your business.
            </p>

            {/* Direct Contact Links */}
            <div className="space-y-2 font-mono text-[11px] text-[#2B3E2C]/80">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#4D694E]" />
                <a href="mailto:tantriksai2026@gmail.com" className="hover:text-[#4D694E] transition-colors">
                  tantriksai2026@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#4D694E]" />
                <a href="tel:+919123555456" className="hover:text-[#4D694E] transition-colors">
                  +91 9123555456
                </a>
              </div>
            </div>
          </div>

          {/* Solutions Column */}
          <div>
            <div className="text-[#2B3E2C] font-bold font-display text-sm mb-4">Solutions</div>
            <ul className="space-y-2.5">
              {[
                { name: 'AI Assistants', href: '/#services' },
                { name: 'AI Agents', href: '/#services' },
                { name: 'Automation', href: '/#services' },
                { name: 'Enterprise Software', href: '/#services' },
                { name: 'Document Understanding', href: '/#services' },
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="hover:text-[#4D694E] transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <div className="text-[#2B3E2C] font-bold font-display text-sm mb-4">Company</div>
            <ul className="space-y-2.5">
              {[
                { name: 'About', href: '/#about' },
                { name: 'Mission', href: '/#why-us' },
                { name: 'Vision', href: '/#why-us' },
                { name: 'Contact', href: '/#contact' },
                { name: 'Support', href: '/support' },
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="hover:text-[#4D694E] transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <div className="text-[#2B3E2C] font-bold font-display text-sm mb-4">Resources</div>
            <ul className="space-y-2.5">
              {[
                { name: 'Services', href: '/#services' },
                { name: 'Industries', href: '/#industries' },
                { name: 'Solutions', href: '/#services' },
                { name: 'Support Center', href: '/support' },
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="hover:text-[#4D694E] transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <div className="text-[#2B3E2C] font-bold font-display text-sm mb-4">Legal</div>
            <ul className="space-y-2.5">
              {[
                { name: 'Privacy Policy', href: '/privacy-policy' },
                { name: 'Terms & Conditions', href: '/terms-and-conditions' },
                { name: 'Cookie Preferences', href: '/cookie-preferences' },
                { name: 'Refund & Cancellation', href: '/refund-cancellation' },
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="hover:text-[#4D694E] transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#4D694E]/20 dark:border-[#82D173]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-[#2B3E2C]/70 dark:text-[#F4FAF3]/70 font-mono text-[11px]">
          <div>
            &copy; {new Date().getFullYear()} Tantriks AI. All rights reserved.
          </div>
          <div className="flex items-center gap-2.5">
            <span className="text-[11px] font-mono text-[#2B3E2C]/70 dark:text-[#F4FAF3]/70 font-semibold uppercase tracking-wider">Mode</span>
            <ThemeToggle />
          </div>
          <div className="text-[#2B3E2C]/80 dark:text-[#F4FAF3]/80">
            Intelligent software, automation, and AI agents.
          </div>
        </div>
      </div>
    </footer>
  );
}
