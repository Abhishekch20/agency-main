import { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

const offeredServices = [
  { name: 'UI/UX Design', color: 'text-blue-400 border-blue-400/20 bg-blue-400/5' },
  { name: 'Web Development', color: 'text-indigo-400 border-indigo-400/20 bg-indigo-400/5' },
  { name: 'Website & Store Development', color: 'text-blue-500 border-blue-500/20 bg-blue-500/5' },
  { name: 'App Development', color: 'text-sky-400 border-sky-400/20 bg-sky-400/5' },
  { name: 'Automation & AI Solutions', color: 'text-indigo-500 border-indigo-500/20 bg-indigo-500/5' },
  { name: 'SEO & Organic Growth', color: 'text-blue-600 border-blue-600/20 bg-blue-600/5' },
  { name: 'Creative & Media Services', color: 'text-indigo-600 border-indigo-600/20 bg-indigo-600/5' },
  { name: 'Branding & Identity', color: 'text-slate-400 border-slate-400/20 bg-slate-400/5' },
  { name: 'Sales Growth Services', color: 'text-blue-700 border-blue-700/20 bg-blue-700/5' },
];

const aboutText =
  "We help businesses scale with precision. From high-performing digital systems to AI-driven automation, we design scalable solutions that transform ideas into measurable growth and efficiency.";
const words = aboutText.split(' ');

function RevealWord({ children, progress, range }) {
  const opacity = useTransform(progress, range, [0.05, 1]);
  return (
    <span className="relative inline-block mr-[0.2em] mb-[0.1em]">
      <span className="absolute left-0 top-0 text-foreground/[0.03] select-none">{children}</span>
      <motion.span style={{ opacity }} className="relative text-foreground font-medium">
        {children}
      </motion.span>
    </span>
  );
}

export default function Mission() {
  const textContainerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: textContainerRef,
    offset: ['start 0.5', 'end 0.15'],
  });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    mass: 0.45,
  });
  const revealProgress = useTransform(smoothProgress, [0, 0.38], [0, 1], { clamp: true });

  return (
    <section id="about" data-testid="mission-section" className="bg-transparent py-24 md:py-32 relative overflow-hidden">
      {/* Decorative cyber grid background */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none mix-blend-screen bg-cyber-grid bg-[length:40px_40px]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* About + Description */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-20 mb-28 md:mb-36">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="shrink-0"
          >
            <span className="text-sm font-bold text-primary uppercase tracking-widest flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-primary shadow-brand-cyan-glow animate-pulse-glow" />
              SYSTEM DIRECTIVE
            </span>
          </motion.div>

          {/* Big text */}
          <motion.p
            ref={textContainerRef}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[1.35rem] sm:text-[1.65rem] md:text-[2rem] font-bold text-foreground leading-[1.4] tracking-wide uppercase"
          >
            {words.map((word, index) => {
              const start = index / words.length;
              const end = (index + 1) / words.length;
              return (
                <RevealWord key={`${word}-${index}`} progress={revealProgress} range={[start, end]}>
                  {word}
                </RevealWord>
              );
            })}
          </motion.p>
        </div>

        {/* Tech Stack Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative pt-8 overflow-hidden"
        >
          {/* Glowing border top */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50 shadow-brand-cyan-glow" />

          <motion.div
            className="flex w-max items-center gap-4 md:gap-6 pt-4"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 30, ease: 'linear', repeat: Infinity }}
          >
            {[...offeredServices, ...offeredServices].map((service, index) => (
              <span
                key={`${service.name}-${index}`}
                data-testid={`offered-service-${service.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                className={`inline-flex items-center rounded-full border backdrop-blur-sm px-6 py-3 text-[10px] md:text-xs font-black tracking-[0.2em] uppercase whitespace-nowrap transition-all cursor-crosshair shadow-sm hover:scale-105 ${service.color}`}
              >
                <div className={`w-1 h-1 rounded-full mr-3 animate-pulse bg-current`} />
                {service.name}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
