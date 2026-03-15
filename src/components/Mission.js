import { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

const offeredServices = [
  'UI/UX Design',
  'Web Development',
  'Website & Store Development',
  'App Development',
  'Automation & AI Solutions',
  'SEO & Organic Growth',
  'Creative & Media Services',
  'Branding & Identity',
  'Sales Growth Services',
];

const aboutText =
  "We help businesses scale through smart digital solutions that drive growth and efficiency. From high-performing websites and online stores to sales funnels, automation, and AI tools, we design systems that attract customers, generate leads, and streamline operations. By combining marketing, technology, and creative design, we turn ideas into powerful digital experiences that deliver measurable results.";
const words = aboutText.split(' ');

function RevealWord({ children, progress, range }) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <span className="relative inline-block mr-[0.2em] mb-[0.1em]">
      <span className="absolute left-0 top-0 text-[#0b0b1f]/10 select-none">{children}</span>
      <motion.span style={{ opacity }} className="relative text-[#0b0b1f]">
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
    <section id="about" data-testid="mission-section" className="bg-[#efefed] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* About + Description */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-20 mb-28 md:mb-36">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="shrink-0"
          >
            <span className="text-sm font-bold text-[#0b0b1f] uppercase tracking-widest flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0b0b1f]" />
              About
            </span>
          </motion.div>

          {/* Big text */}
          <motion.p
            ref={textContainerRef}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl sm:text-[1.95rem] md:text-[2.35rem] font-semibold text-[#0b0b1f] leading-[1.22] tracking-[-0.01em]"
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
          className="border-t border-[#cfcfc9] pt-8 overflow-hidden"
        >
          <motion.div
            className="flex w-max items-center gap-4 md:gap-6"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 24, ease: 'linear', repeat: Infinity }}
          >
            {[...offeredServices, ...offeredServices].map((name, index) => (
              <span
                key={`${name}-${index}`}
                data-testid={`offered-service-${name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                className="inline-flex items-center rounded-full border border-[#cfcfc9] bg-[#efefed] px-4 py-2 text-xs md:text-sm font-semibold text-[#444b5d] tracking-wide whitespace-nowrap"
              >
                {name}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
