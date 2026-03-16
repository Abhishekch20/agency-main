"use client";

import { useEffect, useRef } from 'react';
import { useInView, motion, animate, useMotionValue, useTransform } from 'framer-motion';

const stats = [
  {
    title: 'Client Satisfaction',
    description: 'Recognized for reliable, scalable, and impactful digital work.',
    value: 98,
    suffix: '%',
    activeDot: 0,
  },
  {
    title: 'Successful Projects',
    description: 'Driven by clarity, quality, and a strong execution process.',
    value: 25,
    suffix: '+',
    activeDot: 1,
  },
  {
    title: 'Years of Experience',
    description: 'Built on years of refined skills and proven industry knowledge.',
    value: 5,
    suffix: '+',
    activeDot: 2,
  },
];

function RollingNumber({ value, suffix }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    if (hasAnimatedRef.current) return;
    if (!isInView && typeof IntersectionObserver !== 'undefined') return;

    hasAnimatedRef.current = true;
    if (value === 0) return;

      const controls = animate(count, value, {
        duration: 2,
        ease: [0.16, 1, 0.3, 1], // easeOutQuart
      });
      return () => controls.stop();
  }, [isInView, count, value]);

  return (
    <span ref={ref} className="inline-flex items-baseline whitespace-nowrap tabular-nums">
      <motion.span className="whitespace-nowrap">{rounded}</motion.span>
      <span className="whitespace-nowrap">{suffix}</span>
    </span>
  );
}

export default function ImpactStats() {
  return (
    <section data-testid="impact-section" data-theme="light" className="py-16 md:py-24 bg-white relative overflow-hidden transition-colors duration-500">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-cyber-grid-light pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-10 relative z-10">
        <div className="mb-10 md:mb-12 flex flex-col items-center md:items-start text-center md:text-left">
          <p className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-blue-800 font-bold mb-3">
            TELEMETRY DATA
          </p>
          <h2 className="text-[1.8rem] md:text-[2.2rem] leading-[0.95] tracking-widest text-slate-900 font-black uppercase">
            SYSTEM IMPACT
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {stats.map((item) => (
            <article
              key={item.title}
              data-testid={`stat-${item.title.toLowerCase().replace(/\s/g, '-')}`}
              className="group rounded-xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-lg hover:shadow-slate-200/40 transition-all duration-300 px-7 pt-8 pb-6 min-h-[220px] flex flex-col relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <h3 className="text-[1.1rem] md:text-[1.25rem] leading-[1.1] text-slate-900 font-bold mb-4 uppercase tracking-wider group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-500 leading-relaxed font-medium text-[13px] md:text-[14px]">
                {item.description}
              </p>

              <div className="mt-auto pt-6 relative z-10">
                <div className="h-px w-full bg-slate-200 mb-6" />
                <div className="flex items-end justify-between gap-4">
                  <span className="font-black tracking-tighter leading-none text-slate-900 group-hover:text-primary transition-colors text-3xl md:text-4xl whitespace-nowrap tabular-nums">
                    <RollingNumber value={item.value} suffix={item.suffix} />
                  </span>
                  <div className="flex shrink-0 items-center gap-2 pb-2">
                    {[0, 1, 2].map((dot) => (
                      <span
                        key={dot}
                        className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${dot === item.activeDot
                          ? 'bg-primary scale-125'
                          : 'bg-slate-200 group-hover:bg-slate-300'
                          }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
