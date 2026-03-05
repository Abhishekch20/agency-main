import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section
      data-testid="hero-section"
      className="relative min-h-[85vh] flex items-center"
    >
      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm md:text-base font-medium text-[#635BFF] tracking-wide mb-6"
          >
            The future of digital transformation
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-[4.2rem] font-bold text-slate-900 tracking-tight leading-[1.08] mb-8"
          >
            Transform Your Vision Into{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#635BFF] to-[#a855f7]">
              Digital Reality
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg text-slate-500 leading-relaxed mb-10 max-w-lg"
          >
            We craft exceptional digital experiences that elevate your business,
            drive engagement, and accelerate growth through innovative technology
            solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#contact"
              data-testid="hero-cta-primary"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-[15px] font-medium text-white bg-[#635BFF] rounded-full shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:bg-[#5851DF] hover:-translate-y-0.5 transition-all"
            >
              Start Your Project
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#services"
              data-testid="hero-cta-secondary"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-[15px] font-medium text-slate-700 bg-white border border-slate-200 rounded-full hover:border-slate-300 hover:bg-slate-50 hover:-translate-y-0.5 transition-all"
            >
              Explore Services
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
