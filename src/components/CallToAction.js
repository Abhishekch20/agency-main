import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';

export default function CallToAction() {
  return (
    <section data-testid="cta-section" className="py-24 md:py-32 bg-transparent relative overflow-hidden">
      <div className="absolute inset-0 bg-cyber-grid bg-[length:40px_40px] opacity-[0.03] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-black text-foreground tracking-tight leading-tight mb-6 uppercase">
            Ready to transform your vision into a <span className="text-primary">digital masterpiece?</span>
          </h2>
          <p className="text-muted-foreground font-medium text-lg mb-10">
            Let's partner together to create something extraordinary.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-10">
            <a
              href="#contact"
              data-testid="cta-start-project"
              className="group relative inline-flex items-center gap-3 px-8 py-4 text-[14px] font-bold text-primary-foreground bg-primary uppercase tracking-widest overflow-hidden transition-all hover:scale-105"
              style={{ clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%)' }}
            >
              <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative flex items-center gap-2">
                Start Your Project
                <ArrowRight className="w-4 h-4" />
              </span>
            </a>
            <a
              href="#contact"
              data-testid="cta-schedule-call"
              className="inline-flex items-center gap-3 px-8 py-4 text-[14px] font-bold text-foreground bg-background/50 border border-border backdrop-blur-md uppercase tracking-widest hover:border-primary transition-all group"
              style={{ clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%)' }}
            >
              <Phone className="w-4 h-4 group-hover:text-primary transition-colors" />
              Schedule a Call
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
