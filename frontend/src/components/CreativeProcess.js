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
      className="relative overflow-hidden bg-[#0a0a0a] py-24 md:py-32"
    >
      <motion.div
        className="pointer-events-none absolute -top-24 h-64 w-64 rounded-full blur-3xl bg-orange-500/30"
        style={{ left: accentX }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(255,255,255,0.09),transparent_40%)]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="text-5xl sm:text-6xl lg:text-8xl font-black text-white uppercase leading-[0.9] tracking-tighter"
          >
            Work<br />Process
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-base md:text-lg text-neutral-400 max-w-sm leading-relaxed"
          >
            See how our proven process transforms your brand with custom design solutions that deliver measurable impact from day one.
          </motion.p>
        </div>

        {/* Scroll Progress Rail */}
        <div className="relative mb-10 md:mb-12 h-[2px] bg-white/10 overflow-hidden rounded-full">
          <motion.div
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-orange-300 via-orange-400 to-orange-500 origin-left"
            style={{ scaleX: lineScale, opacity: lineGlow, width: '100%' }}
          />
        </div>

        {/* Horizontal Card Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {/* Card 01 */}
          <motion.div
            data-testid="process-step-01"
            style={{ y: card1Y, opacity: card1Opacity, scale: card1Scale }}
            className="md:col-start-1 md:row-start-1 border border-neutral-700/60 rounded-lg p-8 md:p-10 flex flex-col justify-between min-h-[280px] bg-white/[0.02] backdrop-blur-[1px]"
          >
            <span className="inline-flex items-center justify-center w-10 h-10 bg-white text-black text-sm font-bold rounded-sm mb-8">
              01
            </span>
            <div>
              <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight mb-3">
                Research & Define
              </h3>
              <p className="text-sm md:text-base text-neutral-400 leading-relaxed">
                {steps[0].description}
              </p>
            </div>
          </motion.div>

          {/* Card 02 */}
          <motion.div
            data-testid="process-step-02"
            style={{ y: card2Y, opacity: card2Opacity, scale: card2Scale }}
            className="md:col-start-2 md:row-start-1 border border-neutral-700/60 rounded-lg p-8 md:p-10 flex flex-col justify-between min-h-[280px] bg-white/[0.02] backdrop-blur-[1px]"
          >
            <span className="inline-flex items-center justify-center w-10 h-10 bg-white text-black text-sm font-bold rounded-sm mb-8">
              02
            </span>
            <div className="mt-0 pb-5">
              <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight mb-3">
                Ideate & Design
              </h3>
              <p className="text-sm md:text-base text-neutral-400 leading-relaxed">
                {steps[1].description}
              </p>
            </div>
          </motion.div>

          {/* Card 03 */}
          <motion.div
            data-testid="process-step-03"
            style={{ y: card3Y, opacity: card3Opacity, scale: card3Scale }}
            className="md:col-start-3 md:row-start-1 border border-neutral-700/60 rounded-lg p-8 md:p-10 flex flex-col justify-between min-h-[280px] bg-white/[0.02] backdrop-blur-[1px]"
          >
            <span className="inline-flex items-center justify-center w-10 h-10 bg-white text-black text-sm font-bold rounded-sm mb-8">
              03
            </span>
            <div>
              <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight mb-3">
                Test & Implement
              </h3>
              <p className="text-sm md:text-base text-neutral-400 leading-relaxed">
                {steps[2].description}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
