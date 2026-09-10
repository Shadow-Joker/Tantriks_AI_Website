import tantriksLogo from '../../assets/tantriks-hub-mark.svg';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050609] py-16 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
          {/* Brand & Mission Column */}
          <div className="col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-7 h-7 rounded-lg bg-[#0C1117] border border-emerald-500/30 flex items-center justify-center p-1 shadow-[0_0_12px_rgba(34,224,107,0.2)]">
                <img
                  src={tantriksLogo}
                  alt="Tantriks AI Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-display font-bold text-white text-base tracking-tight">
                Tantriks AI
              </span>
            </div>

            <p className="text-slate-400 leading-relaxed max-w-sm mb-6">
              Autonomous orchestration engine for modern engineering teams. Turning complex multi-model pipelines into high-reliability software.
            </p>
            {/* Live Operational Status */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0E121B] border border-white/10 text-slate-300 font-mono text-[11px]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>All Systems Operational (99.99%)</span>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <div className="text-white font-semibold font-display text-sm mb-4">Product</div>
            <ul className="space-y-2.5">
              {['Neural Router', 'Vector Fabric', 'Agent Swarm', 'Edge Mesh', 'Observability'].map(
                (item) => (
                  <li key={item}>
                    <a href="#platform" className="hover:text-cyan-300 transition-colors">
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <div className="text-white font-semibold font-display text-sm mb-4">Resources</div>
            <ul className="space-y-2.5">
              {['Documentation', 'API Reference', 'SDK Downloads', 'Architectural Guide', 'Changelog'].map(
                (item) => (
                  <li key={item}>
                    <a href="#demo" className="hover:text-cyan-300 transition-colors">
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Company & Legal */}
          <div>
            <div className="text-white font-semibold font-display text-sm mb-4">Company</div>
            <ul className="space-y-2.5">
              {['About', 'Security (SOC2)', 'Privacy Policy', 'Terms of Service', 'Contact'].map(
                (item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-cyan-300 transition-colors">
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 font-mono text-[11px]">
          <div>
            (c) {new Date().getFullYear()} Tantriks AI Inc. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              GitHub
            </a>
            <a href="https://x.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              X / Twitter
            </a>
            <a href="https://discord.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              Discord
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
