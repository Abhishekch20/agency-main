import { useEffect, useRef, useState } from 'react';
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
  const [showNav, setShowNav] = useState(true);
  const lastScrollY = useRef(0);
  const primaryLinks = navLinks.filter((link) => link.label !== 'Contact');
  const contactLink = navLinks.find((link) => link.label === 'Contact');
  const updateHoverGradient = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mx', `${x}px`);
    e.currentTarget.style.setProperty('--my', `${y}px`);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY <= 24) {
        setShowNav(true);
      } else if (currentY > lastScrollY.current) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 px-3 md:px-5 pt-3 md:pt-4 transition-transform duration-300 ${showNav ? 'translate-y-0' : '-translate-y-[120%]'}`}>
      <nav
        data-testid="navbar"
        className="max-w-7xl mx-auto rounded-[2rem] transition-all duration-500 ease-out bg-white/75 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-white/50"
      >
        <div className="px-6 md:px-10">
          <div className="relative flex items-center justify-between h-14 md:h-16">
            <a href="/" data-testid="navbar-logo" className="shrink-0">
              <span className="text-xl md:text-2xl font-extrabold text-[#0b0b1f] tracking-[-0.02em]" style={{ fontFamily: '"Manrope", sans-serif' }}>
                Syntrix
              </span>
            </a>

            <div className="hidden md:flex items-center gap-2 absolute left-1/2 -translate-x-1/2">
              {primaryLinks.map((link, index) => {
                const showDot = hoveredIndex === null ? link.label === 'Home' : hoveredIndex === index;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    data-testid={`nav-link-${link.label.toLowerCase()}`}
                    className="relative flex items-center gap-1.5 px-4 py-2 text-[15px] text-neutral-700 font-semibold rounded-lg transition-all duration-300 bg-transparent hover:text-[#19101f] hover:shadow-[0_8px_16px_-12px_rgba(241,89,42,0.55)]"
                    style={{ fontFamily: '"Manrope", sans-serif' }}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    onMouseMove={updateHoverGradient}
                    onFocus={updateHoverGradient}
                  >
                    <span
                      className="pointer-events-none absolute inset-0 rounded-lg opacity-0 transition-opacity duration-300"
                      style={{
                        opacity: hoveredIndex === index ? 1 : 0,
                        backgroundImage:
                          'radial-gradient(120px circle at var(--mx, 50%) var(--my, 50%), rgba(241,89,42,0.32), rgba(241,89,42,0.12) 45%, rgba(255,176,120,0.08) 65%, transparent 80%)',
                      }}
                    />
                    <span
                      className="transition-all duration-300 ease-out relative z-[1]"
                      style={{
                        opacity: showDot ? 1 : 0,
                        transform: showDot ? 'scale(1)' : 'scale(0)',
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg,#7c4dff,#f1592a)',
                        display: 'inline-block',
                        flexShrink: 0,
                      }}
                    />
                    <span className="relative z-[1]">{link.label}</span>
                  </a>
                );
              })}
            </div>

            <div className="hidden md:flex items-center">
              <a
                href={contactLink?.href || '#contact'}
                data-testid="nav-link-contact"
                className="relative flex items-center gap-1.5 px-4 py-1.5 text-[14px] text-neutral-700 hover:text-black font-semibold transition-colors rounded-full border border-black"
                style={{ fontFamily: '"Manrope", sans-serif' }}
              >
                <span
                  className="transition-all duration-300 ease-out"
                  style={{
                    opacity: 1,
                    transform: 'scale(1)',
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg,#7c4dff,#5d3fe8)',
                    display: 'inline-block',
                    flexShrink: 0,
                  }}
                />
                Contact
              </a>
            </div>

            <button
              data-testid="mobile-menu-button"
              className="md:hidden p-1.5 text-neutral-700 hover:text-black rounded-full border border-neutral-300"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div data-testid="mobile-menu" className="md:hidden border-t border-neutral-200 px-6 pb-5 pt-2 bg-white/90 backdrop-blur-xl rounded-b-xl">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  data-testid={`mobile-nav-${link.label.toLowerCase()}`}
                  className="flex items-center gap-2 py-2.5 text-[15px] text-neutral-700 hover:text-black font-semibold"
                  style={{ fontFamily: '"Manrope", sans-serif' }}
                  onClick={() => setMobileOpen(false)}
                >
                  <span className="w-1 h-1 rounded-full bg-black" />
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