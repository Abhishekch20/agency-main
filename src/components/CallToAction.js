import { ArrowRight, Phone } from 'lucide-react';

export default function CallToAction() {
  return (
    <section data-testid="cta-section" className="py-16 md:py-20 bg-transparent relative overflow-hidden">
      <div className="absolute inset-0 bg-cyber-grid bg-[length:30px_30px] opacity-[0.03] pointer-events-none" />
      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        <div
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-black text-foreground tracking-tight leading-tight mb-4 uppercase">
            Ready to transform your vision into a <span className="text-primary">digital masterpiece?</span>
          </h2>
          <p className="text-muted-foreground font-medium text-base mb-8">
            Let's partner together to create something extraordinary.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a
              href="#contact"
              data-testid="cta-start-project"
              className="group relative inline-flex items-center gap-2.5 px-6 py-3 text-[12px] font-bold text-primary-foreground bg-primary uppercase tracking-widest overflow-hidden transition-all"
              style={{ clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%)' }}
            >
              <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative flex items-center gap-2">
                Start Your Project
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </a>
            <a
              href="#contact"
              data-testid="cta-schedule-call"
              className="inline-flex items-center gap-2.5 px-6 py-3 text-[12px] font-bold text-foreground bg-background/50 border border-border backdrop-blur-md uppercase tracking-widest hover:border-primary transition-all group"
              style={{ clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%)' }}
            >
              <Phone className="w-3.5 h-3.5 group-hover:text-primary transition-colors" />
              Schedule a Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
