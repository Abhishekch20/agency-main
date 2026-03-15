import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

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
  const primaryLinks = navLinks.filter((link) => link.label !== 'Contact');
  const contactLink = navLinks.find((link) => link.label === 'Contact');
  const gradientAccent = 'linear-gradient(135deg,#2563eb,#4f46e5)';

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-3 md:px-5 pt-3 md:pt-4">
      <div className="max-w-7xl mx-auto w-full relative">
        {/* Realistic Falling Drop */}
        <motion.div
          className="absolute left-1/2 -ml-2 top-0 w-4 h-6 bg-primary rounded-full shadow-brand-cyan-glow z-30 pointer-events-none"
          initial={{ y: -300, scaleX: 0.8, scaleY: 1.2, opacity: 0 }}
          animate={{
            y: [-300, 32, 32],
            scaleX: [0.8, 1, 1.8, 0],
            scaleY: [1.2, 1, 0.4, 0],
            opacity: [0, 1, 1, 0]
          }}
          transition={{
            duration: 0.8,
            times: [0, 0.6, 0.8, 1],
            ease: "easeIn"
          }}
        />

        <motion.nav
          initial={{ clipPath: 'circle(0px at 50% 50%)', opacity: 0 }}
          animate={{ clipPath: 'circle(1500px at 50% 50%)', opacity: 1 }}
          transition={{
            delay: 0.6,
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1]
          }}
          data-testid="navbar"
          className="rounded-[2rem] bg-background/40 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.2)] border border-border/20 w-full"
        >
          <div className="px-6 md:px-10">
            <div className="relative flex items-center justify-between h-14 md:h-16">
              <a href="/" data-testid="navbar-logo" className="shrink-0 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow shadow-brand-cyan-glow" />
                <span className="text-xl md:text-2xl font-black text-foreground tracking-widest uppercase">
                  Syntrix
                </span>
              </a>

              <div className="hidden md:flex items-center gap-2 absolute left-1/2 -translate-x-1/2">
                {primaryLinks.map((link, index) => {
                  const showUnderline = hoveredIndex === null ? link.label === 'Home' : hoveredIndex === index;
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      data-testid={`nav-link-${link.label.toLowerCase()}`}
                      className="relative flex items-center gap-1.5 px-4 py-2 text-[15px] text-muted-foreground font-bold tracking-wide uppercase rounded-lg transition-all duration-300 hover:text-foreground hover:text-shadow-glow"
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      <span className="relative z-[1]">{link.label}</span>
                      <span
                        className="absolute bottom-[7px] left-4 right-4 h-[2px] origin-left rounded-full transition-transform duration-300 ease-out"
                        style={{
                          transform: showUnderline ? 'scaleX(1)' : 'scaleX(0)',
                          backgroundImage: gradientAccent,
                          boxShadow: '0 0 10px rgba(37,99,235,0.7)',
                        }}
                      />
                    </a>
                  );
                })}
              </div>

              <div className="hidden md:flex items-center gap-4">
                <ThemeToggle />
                <a
                  href={contactLink?.href || '#contact'}
                  data-testid="nav-link-contact"
                  className="relative flex items-center gap-1.5 px-6 py-2 text-[14px] text-foreground dark:text-white hover:text-primary font-bold tracking-wider uppercase transition-colors rounded-full border border-border dark:border-primary/50 hover:border-primary hover:shadow-brand-cyan-glow bg-muted/50 dark:bg-background/50 backdrop-blur"
                >
                  <span
                    className="transition-all duration-300 ease-out"
                    style={{
                      opacity: 1,
                      transform: 'scale(1)',
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: gradientAccent,
                      display: 'inline-block',
                      flexShrink: 0,
                    }}
                  />
                  Contact
                </a>
              </div>

              <button
                data-testid="mobile-menu-button"
                className="md:hidden p-1.5 text-foreground hover:text-primary rounded-full border border-border transition-colors animate-fade-in"
                onClick={() => setMobileOpen(!mobileOpen)}
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {mobileOpen && (
            <motion.div
              data-testid="mobile-menu"
              className="md:hidden border-t border-border dark:border-white/10 px-6 pb-6 pt-4 bg-background/95 dark:bg-background/95 backdrop-blur-3xl rounded-b-[2rem] shadow-brand-cyan-glow"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between pb-2 border-b border-border/50 dark:border-white/5">
                  <span className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Theme Mode</span>
                  <ThemeToggle />
                </div>
                <div className="flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      data-testid={`mobile-nav-${link.label.toLowerCase()}`}
                      className="flex items-center gap-3 py-3 text-[15px] text-muted-foreground hover:text-foreground dark:hover:text-primary font-bold uppercase tracking-wider transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shadow-brand-cyan-glow" />
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </motion.nav>
      </div>
    </div>
  );
}
