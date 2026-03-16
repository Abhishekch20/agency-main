"use client";

import { useState, useEffect, useCallback } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [isLightSection, setIsLightSection] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  // Memoized scroll logic (only for toggle shadow)
  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    // 1. Scroll Shadow Listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // 2. Intersection Observer for Scroll Spy & Theme Detection
    const observerOptions = {
      root: null,
      rootMargin: '-10% 0px -85% 0px', // Target the top area of the viewport
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          const index = navLinks.findIndex(link => link.href === `#${id || ''}`);

          // Update active link
          if (index !== -1) setActiveIndex(index);
          else if (!id) setActiveIndex(0);

          // Update theme based on section attributes
          const isLight =
            entry.target.classList.contains('bg-white') ||
            entry.target.classList.contains('bg-slate-50') ||
            entry.target.getAttribute('data-theme') === 'light';

          setIsLightSection(isLight);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe sections and footer
    const targets = document.querySelectorAll('section, footer');
    targets.forEach(t => observer.observe(t));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, [handleScroll]);

  const primaryLinks = navLinks.filter(l => l.label !== 'Contact');
  const contactLink = navLinks.find(l => l.label === 'Contact');
  const accentGradient = 'linear-gradient(135deg, #2563eb, #4f46e5)';

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] px-3 md:px-5 pt-3 pointer-events-none">
      <div className="max-w-6xl mx-auto w-full relative pointer-events-auto">
        <nav
          data-testid="navbar"
          aria-label="Main Navigation"
          className={`w-full transition-all duration-500 border overflow-hidden ${isLightSection
            ? 'bg-white/80 backdrop-blur-2xl border-slate-200'
            : 'bg-slate-950/40 backdrop-blur-2xl border-white/10'
            } ${scrolled ? 'shadow-lg shadow-black/5' : 'shadow-none'
            } ${mobileOpen ? 'rounded-xl' : 'rounded-[20px] md:rounded-[28px]'
            }`}
          style={{
            animation: 'nav-in 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
            opacity: 0,
            transform: 'translateY(-10px)'
          }}
        >
          <div className="px-5 md:px-7 h-10 md:h-12 flex items-center justify-between">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2 group">
              <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(37,99,235,0.6)] group-hover:scale-125 transition-transform duration-300" />
              <span className={`text-base md:text-lg font-black uppercase tracking-tighter transition-colors duration-300 ${isLightSection ? 'text-slate-950' : 'text-white'
                }`}>
                Syntrix
              </span>
            </a>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
              {primaryLinks.map((link, idx) => {
                const isActive = hoveredIndex === null ? activeIndex === idx : hoveredIndex === idx;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className={`relative px-4 py-1.5 text-[11px] font-bold uppercase tracking-wide transition-all duration-300 ${isLightSection ? 'text-slate-600 hover:text-primary' : 'text-slate-400 hover:text-white'
                      }`}
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <span className="relative z-10">{link.label}</span>
                    <span className={`absolute bottom-0 left-4 right-4 h-[1.5px] rounded-full transition-transform duration-300 origin-left ${isActive ? 'scale-x-100' : 'scale-x-0'
                      }`} style={{ background: accentGradient }} />
                  </a>
                );
              })}
            </div>

            {/* CTA & Mobile Toggle */}
            <div className="flex items-center gap-3">
              <a
                href={contactLink?.href}
                className={`hidden md:flex items-center gap-1.5 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest rounded-full border transition-all duration-300 ${isLightSection
                  ? 'border-slate-200 text-slate-950 hover:border-primary hover:bg-slate-50'
                  : 'border-white/10 text-white hover:border-primary hover:shadow-[0_0_12px_rgba(37,99,235,0.3)]'
                  }`}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                {contactLink?.label}
              </a>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
                className={`md:hidden p-1.5 rounded-full border transition-colors ${isLightSection ? 'border-slate-200 text-slate-950' : 'border-white/10 text-white'
                  }`}
              >
                {mobileOpen ? <X size={16} /> : <Menu size={16} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden border-t transition-all duration-500 ease-in-out overflow-hidden ${mobileOpen ? 'max-h-[300px] opacity-100 py-4' : 'max-h-0 opacity-0 py-0'
            } ${isLightSection ? 'border-slate-100 bg-white/50' : 'border-white/5 bg-slate-950/20'}`}>
            <div className="flex flex-col gap-0.5 px-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center gap-2 py-2 text-[11px] font-bold uppercase tracking-wider transition-colors ${isLightSection ? 'text-slate-600' : 'text-slate-400'
                    } hover:text-primary`}
                >
                  <div className={`w-1 h-1 rounded-full bg-primary transition-transform ${activeIndex === navLinks.indexOf(link) ? 'scale-150' : 'scale-100 opacity-30'
                    }`} />
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </nav>
      </div>

      <style jsx global>{`
        @keyframes nav-in {
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
