import { ArrowUpRight, Mail, Phone, MapPin, MessageSquare } from 'lucide-react';

const services = [
  'Website Development',
  'Search Engine Optimization',
  'Social Media Marketing',
  'Graphic Design',
  'AI Video Editing',
  'Mobile App Development',
  'API Integration',
];

const quickLinks = [
  { label: 'Home', href: '#' },
  { label: 'All Services', href: '#services' },
  { label: 'Blog / Articles', href: '#' },
  { label: 'Portfolio', href: '#projects' },
  { label: 'FAQ', href: '#' },
  { label: 'Contact Us', href: '#contact' },
];

export default function Footer() {
  return (
    <footer data-testid="footer" className="bg-transparent text-foreground border-t border-border/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-cyber-grid bg-[length:40px_40px] opacity-[0.05] dark:opacity-10 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-16 md:pt-24 pb-14 md:pb-20 relative z-10">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-sm shadow-brand-cyan-glow">
                <span className="text-white font-black text-xl">S</span>
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tighter italic">
                Syntrix <span className="text-primary italic">Technologies</span>
              </h3>
            </div>
            <p className="text-sm text-muted-foreground font-medium leading-relaxed max-w-xs">
              Digital marketing & technology agency for businesses across Telangana & Andhra Pradesh. Telugu & English support.
            </p>
          </div>

          {/* Services Column */}
          <div className="space-y-6">
            <h4 className="text-xs text-primary font-bold tracking-[0.3em] uppercase">Services</h4>
            <div className="flex flex-col gap-3">
              {services.map((service) => (
                <a
                  key={service}
                  href="#services"
                  className="text-sm font-bold text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wider flex items-center gap-2 group"
                >
                  <span className="w-0 group-hover:w-2 h-px bg-primary transition-all duration-300" />
                  {service}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-6">
            <h4 className="text-xs text-primary font-bold tracking-[0.3em] uppercase">Quick Links</h4>
            <div className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-bold text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wider flex items-center gap-2 group"
                >
                  <span className="w-0 group-hover:w-2 h-px bg-primary transition-all duration-300" />
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Column */}
          <div className="space-y-6">
            <h4 className="text-xs text-primary font-bold tracking-[0.3em] uppercase">Contact</h4>
            <div className="space-y-4">
              <a href="tel:+918688548048" className="flex items-center gap-3 text-sm font-bold text-muted-foreground hover:text-primary transition-colors group">
                <Phone className="w-4 h-4 text-primary/50 group-hover:text-primary" />
                +1 (717) 555‑1234
              </a>
              <a href="mailto:[EMAIL_ADDRESS]" className="flex items-center gap-3 text-sm font-bold text-muted-foreground hover:text-primary transition-colors group">
                <Mail className="w-4 h-4 text-primary/50 group-hover:text-primary" />
                [EMAIL_ADDRESS]
              </a>
              <div className="flex items-start gap-3 text-sm font-bold text-muted-foreground uppercase tracking-wider leading-relaxed">
                <MapPin className="w-4 h-4 text-primary/50 shrink-0 mt-0.5" />
                <span>
                  Harrisburg, PA, USA<br />
                  Hyderabad<br />
                  Warangal
                </span>
              </div>

              <div className="pt-4 flex flex-col gap-3">
                <p className="text-[10px] text-muted-foreground/60 font-black tracking-widest uppercase">LOCATIONS:</p>
                <p className="text-[11px] font-bold text-muted-foreground/80 tracking-wide uppercase leading-relaxed border-l border-border pl-3">
                  Web Development in Warangal<br />
                  IT Agency in Warangal & Hyderabad
                </p>
              </div>

              <div className="pt-4">
                <a
                  href="#contact"
                  className="group relative inline-flex items-center gap-3 px-6 py-3 text-[12px] font-black text-white bg-primary uppercase tracking-widest overflow-hidden transition-all hover:scale-105"
                  style={{ clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%)' }}
                >
                  <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  <span className="relative flex items-center gap-2">
                    Get Free Consultation
                    <MessageSquare className="w-3 h-3" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Very bottom branding */}
        <div className="pt-8 border-t border-border/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-black text-muted-foreground/40 tracking-[0.2em] uppercase">
          <p>© {new Date().getFullYear()} SYNTRIX LTD. ALL PROTOCOLS RESERVED.</p>
          <div className="flex items-center gap-8">
            <p className="flex items-center gap-2">ENGINE_VERSION: <span className="text-primary/60">3.2.0</span></p>
            <p className="flex items-center gap-2">LOC: <span className="text-primary/60">IN_TS_AP</span></p>
          </div>
        </div>
      </div>
    </footer>
  );
}
