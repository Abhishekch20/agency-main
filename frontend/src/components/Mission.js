import { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

const logos = [
  'Stripe', 'Shopify', 'Notion', 'Figma', 'Vercel', 'Slack',
];

const aboutText =
  "We're UI/UX designers focused on creating user-centered digital products that are functional, accessible, and visually engaging. From mobile apps to complex dashboards, we turn ideas into intuitive, enjoyable experiences.";
const words = aboutText.split(' ');

function RevealWord({ children, progress, range }) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <span className="relative inline-block mr-[0.2em] mb-[0.1em]">
      <span className="absolute left-0 top-0 text-white/10 select-none">{children}</span>
      <motion.span style={{ opacity }} className="relative text-white">
        {children}
      </motion.span>
    </span>
  );
}

export default function Mission() {
  const textContainerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: textContainerRef,
    offset: ['start 0.85', 'end 0.25'],
  });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    mass: 0.45,
  });

  return (
    <section id="about" data-testid="mission-section" className="bg-[#0a0a0a] py-24 md:py-32">
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
            <span className="text-sm font-bold text-white uppercase tracking-widest flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
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
            className="text-2xl sm:text-3xl md:text-[2.6rem] font-bold text-white uppercase leading-[1.15] tracking-tight"
          >
            {words.map((word, index) => {
              const start = index / words.length;
              const end = (index + 1) / words.length;
              return (
                <RevealWord key={`${word}-${index}`} progress={smoothProgress} range={[start, end]}>
                  {word}
                </RevealWord>
              );
            })}
          </motion.p>
        </div>

        {/* Logo Strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-between gap-8 md:gap-4 border-t border-neutral-800 pt-10"
        >
          {logos.map((name) => (
            <span
              key={name}
              data-testid={`partner-logo-${name.toLowerCase()}`}
              className="text-sm md:text-base font-semibold text-neutral-500 tracking-wide opacity-60 hover:opacity-100 transition-opacity"
            >
              {name}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
