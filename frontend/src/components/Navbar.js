import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#process' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [navHovered, setNavHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isGlossy = scrolled || navHovered;

  return (
    <div className="sticky top-0 z-50 px-3 md:px-5 pt-3 md:pt-4">
      <nav
        data-testid="navbar"
        onMouseEnter={() => setNavHovered(true)}
        onMouseLeave={() => setNavHovered(false)}
        className={`max-w-7xl mx-auto rounded-xl transition-all duration-500 ease-out ${
          isGlossy
            ? 'bg-white/70 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.08)] border border-white/40'
            : 'bg-transparent shadow-none border border-transparent'
        }`}
      >
        <div className="px-6 md:px-10">
          <div className="flex items-center justify-between h-14 md:h-16">
            {/* Logo */}
            <a href="/" data-testid="navbar-logo" className="shrink-0">
              <span className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                Syntrix
              </span>
            </a>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link, index) => {
                const isContact = link.label === 'Contact';
                const showDot = hoveredIndex === null ? isContact : hoveredIndex === index;

                if (isContact) {
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      data-testid={`nav-link-${link.label.toLowerCase()}`}
                      className="relative flex items-center gap-1.5 px-4 py-2 text-[15px] text-slate-700 hover:text-slate-900 font-medium transition-colors rounded-lg"
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      <span
                        className="transition-all duration-300 ease-out"
                        style={{
                          opacity: showDot ? 1 : 0,
                          transform: showDot ? 'scale(1)' : 'scale(0)',
                          width: '5px',
                          height: '5px',
                          borderRadius: '50%',
                          backgroundColor: '#0f172a',
                          display: 'inline-block',
                          flexShrink: 0,
                        }}
                      />
                      {link.label}
                    </a>
                  );
                }

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    data-testid={`nav-link-${link.label.toLowerCase()}`}
                    className="relative flex items-center gap-1.5 px-4 py-2 text-[15px] text-slate-700 hover:text-slate-900 font-medium transition-colors rounded-lg"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <span
                      className="transition-all duration-300 ease-out"
                      style={{
                        opacity: showDot ? 1 : 0,
                        transform: showDot ? 'scale(1)' : 'scale(0)',
                        width: '5px',
                        height: '5px',
                        borderRadius: '50%',
                        backgroundColor: '#0f172a',
                        display: 'inline-block',
                        flexShrink: 0,
                      }}
                    />
                    {link.label}
                  </a>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <button
              data-testid="mobile-menu-button"
              className="md:hidden p-2 text-slate-600 hover:text-slate-900"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div data-testid="mobile-menu" className="md:hidden border-t border-white/20 px-6 pb-5 pt-2 bg-white/80 backdrop-blur-xl rounded-b-xl">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  data-testid={`mobile-nav-${link.label.toLowerCase()}`}
                  className="flex items-center gap-2 py-2.5 text-[15px] text-slate-700 hover:text-slate-900 font-medium"
                  onClick={() => setMobileOpen(false)}
                >
                  <span className="w-1 h-1 rounded-full bg-slate-900" />
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
