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
    <footer data-testid="footer" className="bg-[#020617] text-white border-t border-white/5 relative overflow-hidden transition-colors duration-500">
      <div className="absolute inset-0 bg-cyber-grid bg-[length:30px_30px] opacity-[0.05] dark:opacity-10 pointer-events-none" />
      <div className="max-w-6xl mx-auto px-6 md:px-12 pt-12 md:pt-16 pb-10 md:pb-14 relative z-10">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary flex items-center justify-center rounded-sm shadow-brand-cyan-glow">
                <span className="text-white font-black text-base">S</span>
              </div>
              <h3 className="text-lg font-black uppercase tracking-tighter italic">
                Syntrix <span className="text-primary italic">Technologies</span>
              </h3>
            </div>
            <p className="text-xs text-muted-foreground font-medium leading-relaxed max-w-xs">
              Digital marketing & technology agency for businesses across Telangana & Andhra Pradesh. Telugu & English support.
            </p>
          </div>

          {/* Services Column */}
          <div className="space-y-4">
            <h4 className="text-[10px] text-primary font-bold tracking-[0.3em] uppercase">Services</h4>
            <div className="flex flex-col gap-2">
              {services.map((service) => (
                <a
                  key={service}
                  href="#services"
                  className="text-xs font-bold text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wider flex items-center gap-2 group"
                >
                  <span className="w-0 group-hover:w-2 h-px bg-primary transition-all duration-300" />
                  {service}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-4">
            <h4 className="text-[10px] text-primary font-bold tracking-[0.3em] uppercase">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-xs font-bold text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wider flex items-center gap-2 group"
                >
                  <span className="w-0 group-hover:w-2 h-px bg-primary transition-all duration-300" />
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Column */}
          <div className="space-y-4">
            <h4 className="text-[10px] text-primary font-bold tracking-[0.3em] uppercase">Contact</h4>
            <div className="space-y-3">
              <a href="tel:+918688548048" className="flex items-center gap-2 text-xs font-bold text-muted-foreground hover:text-primary transition-colors group">
                <Phone className="w-3.5 h-3.5 text-primary/50 group-hover:text-primary" />
                +1 (717) 555‑1234
              </a>
              <a href="mailto:[EMAIL_ADDRESS]" className="flex items-center gap-2 text-xs font-bold text-muted-foreground hover:text-primary transition-colors group">
                <Mail className="w-3.5 h-3.5 text-primary/50 group-hover:text-primary" />
                [EMAIL_ADDRESS]
              </a>
              <div className="flex items-start gap-2 text-xs font-bold text-muted-foreground uppercase tracking-wider leading-relaxed">
                <MapPin className="w-3.5 h-3.5 text-primary/50 shrink-0 mt-0.5" />
                <span>
                  Harrisburg, PA, USA<br />
                  Hyderabad<br />
                  Warangal
                </span>
              </div>


              <div className="pt-2">
                <a
                  href="#contact"
                  className="group relative inline-flex items-center gap-2.5 px-5 py-2.5 text-[11px] font-black text-white bg-primary uppercase tracking-widest overflow-hidden transition-all hover:scale-105"
                  style={{ clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%)' }}
                >
                  <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  <span className="relative flex items-center gap-2">
                    Get Free Consultation
                    <MessageSquare className="w-2.5 h-2.5" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Very bottom branding */}
        <div className="pt-6 border-t border-border/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] font-black text-muted-foreground/40 tracking-[0.2em] uppercase">
          <p>© {new Date().getFullYear()} SYNTRIX LTD. ALL PROTOCOLS RESERVED.</p>
          <div className="flex items-center gap-6">
            <p className="flex items-center gap-2">ENGINE_VERSION: <span className="text-primary/60">3.2.0</span></p>
            <p className="flex items-center gap-2">LOC: <span className="text-primary/60">IN_TS_AP</span></p>
          </div>
        </div>
      </div>
    </footer>
  );
}
