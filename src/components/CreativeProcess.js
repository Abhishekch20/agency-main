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
      className="relative overflow-hidden bg-[#efefed] py-24 md:py-32"
    >
      <motion.div
        className="pointer-events-none absolute -top-24 h-64 w-64 rounded-full blur-3xl bg-[#F97316]/30"
        style={{ left: accentX }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(255,255,255,0.5),transparent_40%)]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="text-5xl sm:text-6xl lg:text-8xl font-black text-[#0b0b1f] uppercase leading-[0.9] tracking-tighter"
          >
            Work<br />Process
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-base md:text-lg text-[#586075] max-w-sm leading-relaxed"
          >
            See how our proven process transforms your brand with custom design solutions that deliver measurable impact from day one.
          </motion.p>
        </div>

        <div className="rounded-[18px] border border-[#d4d4cf] bg-[#e8e8e6] p-4 md:p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.35)]">
          <div className="relative mb-8 h-[2px] overflow-hidden rounded-full bg-[#d7d7d2]">
            <motion.div
              className="absolute inset-y-0 left-0 origin-left bg-gradient-to-r from-[#FDBA74] via-[#FB923C] to-[#F97316]"
              style={{ scaleX: lineScale, opacity: lineGlow, width: '100%' }}
            />
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
            <motion.article
              data-testid="process-step-01"
              style={{ y: card1Y, opacity: card1Opacity, scale: card1Scale }}
              className="rounded-xl border border-[#dbdbd6] bg-[#efefed] px-6 md:px-7 pt-7 pb-5 min-h-[300px] md:min-h-[320px] flex flex-col"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-sm bg-white text-sm font-bold text-[#0b0b1f]">
                01
              </span>
              <div className="mt-auto pt-10">
                <div className="mb-6 h-px w-full bg-[#d7d7d2]" />
                <h3 className="mb-4 text-[2rem] leading-[1.08] font-semibold text-[#0b0b1f]" style={{ fontFamily: '"Manrope", sans-serif', fontSize: 'clamp(1.4rem,1.45vw,2.1rem)' }}>
                  {steps[0].title}
                </h3>
                <p className="max-w-[95%] text-neutral-600 leading-[1.35]" style={{ fontFamily: '"Manrope", sans-serif', fontWeight: 600, fontSize: 'clamp(1rem,1.04vw,1.9rem)' }}>
                  {steps[0].description}
                </p>
              </div>
            </motion.article>

            <motion.article
              data-testid="process-step-02"
              style={{ y: card2Y, opacity: card2Opacity, scale: card2Scale }}
              className="rounded-xl border border-[#dbdbd6] bg-[#efefed] px-6 md:px-7 pt-7 pb-5 min-h-[300px] md:min-h-[320px] flex flex-col"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-sm bg-white text-sm font-bold text-[#0b0b1f]">
                02
              </span>
              <div className="mt-auto pt-10">
                <div className="mb-6 h-px w-full bg-[#d7d7d2]" />
                <h3 className="mb-4 text-[2rem] leading-[1.08] font-semibold text-[#0b0b1f]" style={{ fontFamily: '"Manrope", sans-serif', fontSize: 'clamp(1.4rem,1.45vw,2.1rem)' }}>
                  {steps[1].title}
                </h3>
                <p className="max-w-[95%] text-neutral-600 leading-[1.35]" style={{ fontFamily: '"Manrope", sans-serif', fontWeight: 600, fontSize: 'clamp(1rem,1.04vw,1.9rem)' }}>
                  {steps[1].description}
                </p>
              </div>
            </motion.article>

            <motion.article
              data-testid="process-step-03"
              style={{ y: card3Y, opacity: card3Opacity, scale: card3Scale }}
              className="rounded-xl border border-[#dbdbd6] bg-[#efefed] px-6 md:px-7 pt-7 pb-5 min-h-[300px] md:min-h-[320px] flex flex-col"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-sm bg-white text-sm font-bold text-[#0b0b1f]">
                03
              </span>
              <div className="mt-auto pt-10">
                <div className="mb-6 h-px w-full bg-[#d7d7d2]" />
                <h3 className="mb-4 text-[2rem] leading-[1.08] font-semibold text-[#0b0b1f]" style={{ fontFamily: '"Manrope", sans-serif', fontSize: 'clamp(1.4rem,1.45vw,2.1rem)' }}>
                  {steps[2].title}
                </h3>
                <p className="max-w-[95%] text-neutral-600 leading-[1.35]" style={{ fontFamily: '"Manrope", sans-serif', fontWeight: 600, fontSize: 'clamp(1rem,1.04vw,1.9rem)' }}>
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
