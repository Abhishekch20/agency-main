import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';

export default function CallToAction() {
  return (
    <section data-testid="cta-section" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-6">
            Ready to transform your vision into a digital masterpiece? Let's partner together to create something extraordinary.
          </h2>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <a
              href="#contact"
              data-testid="cta-start-project"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-[15px] font-medium text-white bg-[#635BFF] rounded-full shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 hover:bg-[#5851DF] hover:-translate-y-0.5 transition-all"
            >
              Start Your Project
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              data-testid="cta-schedule-call"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-[15px] font-medium text-slate-700 bg-white border border-slate-200 rounded-full hover:border-slate-300 hover:bg-slate-50 hover:-translate-y-0.5 transition-all"
            >
              <Phone className="w-4 h-4" />
              Schedule a Call
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
