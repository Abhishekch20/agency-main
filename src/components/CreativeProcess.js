import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Research & Define',
    description:
      'We begin by understanding the problem, the users, and the business goals from start to finish.',
  },
  {
    number: '02',
    title: 'Ideate & Design',
    description:
      'We craft clear, user-friendly flows and high-fidelity interfaces.',
  },
  {
    number: '03',
    title: 'Test & Implement',
    description:
      'Refining the final solution, testing usability, and handing off assets for development.',
  },
];

export default function CreativeProcess() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const lineScale = useTransform(scrollYProgress, [0.12, 0.88], [0, 1]);
  const lineGlow = useTransform(scrollYProgress, [0, 1], [0.3, 0.8]);

  const card1Y = useTransform(scrollYProgress, [0.06, 0.26], [36, 0]);
  const card1Opacity = useTransform(scrollYProgress, [0.06, 0.24], [0.35, 1]);
  const card1Scale = useTransform(scrollYProgress, [0.06, 0.26], [0.96, 1]);

  const card2Y = useTransform(scrollYProgress, [0.06, 0.26], [36, 0]);
  const card2Opacity = useTransform(scrollYProgress, [0.06, 0.24], [0.35, 1]);
  const card2Scale = useTransform(scrollYProgress, [0.06, 0.26], [0.96, 1]);

  const card3Y = useTransform(scrollYProgress, [0.36, 0.6], [48, 0]);
  const card3Opacity = useTransform(scrollYProgress, [0.36, 0.58], [0.2, 1]);
  const card3Scale = useTransform(scrollYProgress, [0.36, 0.6], [0.95, 1]);

  const accentX = useTransform(scrollYProgress, [0, 1], ['8%', '88%']);

  return (
    <section
      id="process"
      ref={sectionRef}
      data-testid="creative-process-section"
      className="relative overflow-hidden bg-transparent py-24 md:py-32 font-sans"
    >
      <motion.div
        className="pointer-events-none absolute -top-24 h-64 w-64 rounded-full blur-[100px] bg-indigo-500/20"
        style={{ left: accentX }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(37,99,235,0.05),transparent_40%)]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="text-5xl sm:text-6xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-br from-foreground to-muted-foreground/50 uppercase leading-[0.9] tracking-widest drop-shadow-[0_0_15px_rgba(var(--foreground),0.1)]"
          >
            Execution<br />Protocol
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-base md:text-lg text-muted-foreground max-w-sm leading-relaxed font-medium"
          >
            Observe the deterministic sequence we employ to transmute abstract directives into high-fidelity digital reality.
          </motion.p>
        </div>

        <div className="rounded-[4px] border border-border bg-card/50 backdrop-blur-md p-4 md:p-6 shadow-[inset_0_1px_0_rgba(var(--foreground),0.05),0_0_30px_rgba(0,0,0,0.1)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_0_30px_rgba(0,0,0,0.5)]">
          <div className="relative mb-8 h-[2px] overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="absolute inset-y-0 left-0 origin-left bg-gradient-to-r from-primary via-foreground to-secondary shadow-brand-cyan-glow"
              style={{ scaleX: lineScale, opacity: lineGlow, width: '100%' }}
            />
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
            <motion.article
              data-testid="process-step-01"
              style={{ y: card1Y, opacity: card1Opacity, scale: card1Scale }}
              className="group glass-card px-6 md:px-7 pt-7 pb-5 min-h-[300px] md:min-h-[320px] flex flex-col relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[50px] rounded-full translate-x-1/2 -translate-y-1/2 group-hover:bg-primary/20 transition-colors duration-500" />
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-sm bg-primary/20 border border-primary/50 text-sm font-bold text-primary shadow-brand-cyan-glow">
                01
              </span>
              <div className="mt-auto pt-10 relative z-10">
                <div className="mb-6 h-px w-full bg-white/20" />
                <h3 className="mb-4 text-[1.8rem] leading-[1.08] font-bold text-foreground uppercase tracking-wider">
                  {steps[0].title}
                </h3>
                <p className="max-w-[95%] text-muted-foreground leading-[1.4] font-medium">
                  {steps[0].description}
                </p>
              </div>
            </motion.article>

            <motion.article
              data-testid="process-step-02"
              style={{ y: card2Y, opacity: card2Opacity, scale: card2Scale }}
              className="group glass-card px-6 md:px-7 pt-7 pb-5 min-h-[300px] md:min-h-[320px] flex flex-col relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-foreground/10 blur-[50px] rounded-full translate-x-1/2 -translate-y-1/2 group-hover:bg-foreground/20 transition-colors duration-500" />
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-sm bg-foreground/20 border border-foreground/50 text-sm font-bold text-foreground shadow-sm">
                02
              </span>
              <div className="mt-auto pt-10 relative z-10">
                <div className="mb-6 h-px w-full bg-white/20" />
                <h3 className="mb-4 text-[1.8rem] leading-[1.08] font-bold text-foreground uppercase tracking-wider">
                  {steps[1].title}
                </h3>
                <p className="max-w-[95%] text-muted-foreground leading-[1.4] font-medium">
                  {steps[1].description}
                </p>
              </div>
            </motion.article>

            <motion.article
              data-testid="process-step-03"
              style={{ y: card3Y, opacity: card3Opacity, scale: card3Scale }}
              className="group glass-card px-6 md:px-7 pt-7 pb-5 min-h-[300px] md:min-h-[320px] flex flex-col relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 blur-[50px] rounded-full translate-x-1/2 -translate-y-1/2 group-hover:bg-secondary/20 transition-colors duration-500" />
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-sm bg-secondary/20 border border-secondary/50 text-sm font-bold text-secondary shadow-brand-purple-glow">
                03
              </span>
              <div className="mt-auto pt-10 relative z-10">
                <div className="mb-6 h-px w-full bg-white/20" />
                <h3 className="mb-4 text-[1.8rem] leading-[1.08] font-bold text-foreground uppercase tracking-wider">
                  {steps[2].title}
                </h3>
                <p className="max-w-[95%] text-muted-foreground leading-[1.4] font-medium">
                  {steps[2].description}
                </p>
              </div>
            </motion.article>
          </div>
        </div>
      </div>
    </section>
  );
}
