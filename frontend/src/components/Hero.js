import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useAnimationFrame, useMotionTemplate, useMotionValue } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const ROTATING_WORDS = ['growth', 'automation', 'sales', 'scale', 'results'];
const TYPE_DELAY = 150;
const DELETE_DELAY = 100;
const HOLD_DELAY = 850;
const NEXT_WORD_DELAY = 280;

export default function Hero() {
  const heroRef = useRef(null);
  const [badgeIndex, setBadgeIndex] = useState(0);
  const [activeWordIndex, setActiveWordIndex] = useState(0);
  const [typedWord, setTypedWord] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const badgePhrases = ['Digital Agency', 'Brand Studio', 'Product Design', 'Growth Partner'];
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const gridOffsetX = useMotionValue(0);
  const gridOffsetY = useMotionValue(0);
  const maskImage = useMotionTemplate`radial-gradient(320px circle at ${mouseX}px ${mouseY}px, black, transparent)`;

  const handleHeroMouseMove = (e) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setBadgeIndex((prev) => (prev + 1) % badgePhrases.length);
    }, 2200);
    return () => clearInterval(timer);
  }, [badgePhrases.length]);

  useEffect(() => {
    const currentWord = ROTATING_WORDS[activeWordIndex];
    let timeoutId;

    if (!isDeleting && typedWord === currentWord) {
      timeoutId = setTimeout(() => setIsDeleting(true), HOLD_DELAY);
    } else if (isDeleting && typedWord === '') {
      timeoutId = setTimeout(() => {
        setIsDeleting(false);
        setActiveWordIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
      }, NEXT_WORD_DELAY);
    } else {
      const nextText = isDeleting
        ? currentWord.slice(0, typedWord.length - 1)
        : currentWord.slice(0, typedWord.length + 1);
      timeoutId = setTimeout(() => setTypedWord(nextText), isDeleting ? DELETE_DELAY : TYPE_DELAY);
    }

    return () => clearTimeout(timeoutId);
  }, [typedWord, isDeleting, activeWordIndex]);

  useAnimationFrame(() => {
    gridOffsetX.set((gridOffsetX.get() + 0.5) % 40);
    gridOffsetY.set((gridOffsetY.get() + 0.5) % 40);
  });

  return (
    <section
      ref={heroRef}
      onMouseMove={handleHeroMouseMove}
      data-testid="hero-section"
      className="relative min-h-[96vh] overflow-hidden bg-[#efefed] flex items-center"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(255,255,255,0.72),rgba(239,239,237,0.9)_34%,rgba(239,239,237,1)_72%)]" />
        <div className="absolute -top-24 -right-24 h-[320px] w-[320px] rounded-full bg-[radial-gradient(circle,rgba(241,89,42,0.28)_0%,rgba(241,89,42,0.12)_38%,rgba(241,89,42,0)_72%)] blur-2xl" />
        <div className="absolute -bottom-28 -left-24 h-[340px] w-[340px] rounded-full bg-[radial-gradient(circle,rgba(241,89,42,0.24)_0%,rgba(241,89,42,0.1)_40%,rgba(241,89,42,0)_72%)] blur-2xl" />
        <div className="absolute inset-0 z-0 opacity-[0.08]">
          <GridPattern offsetX={gridOffsetX} offsetY={gridOffsetY} />
        </div>
        <motion.div
          className="absolute inset-0 z-0 opacity-40"
          style={{ maskImage, WebkitMaskImage: maskImage }}
        >
          <GridPattern offsetX={gridOffsetX} offsetY={gridOffsetY} />
        </motion.div>

      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full pt-36 md:pt-32 pb-16 md:pb-20">
        <div className="grid grid-cols-1 items-center">
          <div className="max-w-4xl mx-auto text-center">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="inline-flex items-center text-xs md:text-sm font-semibold text-neutral-600 tracking-[0.16em] uppercase mb-5 border border-neutral-300 bg-white/65 px-3 py-1 rounded-md h-10 overflow-hidden"
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={badgePhrases[badgeIndex]}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                >
                  {badgePhrases[badgeIndex]}
                </motion.span>
              </AnimatePresence>
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.62, delay: 0.1 }}
              className="text-[2rem] sm:text-[3.6rem] lg:text-[4.35rem] font-bold text-[#0b0b1f] tracking-[-0.02em] leading-[1] mb-5"
              style={{ fontFamily: '"Manrope", sans-serif' }}
            >
              We build systems that drive
              <span className="block mt-1.5 min-h-[1.1em] text-[#f1592a]">
                {typedWord}
                <motion.span
                  aria-hidden="true"
                  className="inline-block ml-1 h-[0.9em] w-[2px] bg-[#f1592a] align-[-0.08em]"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
                />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.58, delay: 0.2 }}
              className="text-[0.98rem] md:text-[0.95rem] text-neutral-600 leading-relaxed mb-8 max-w-2xl mx-auto"
              style={{ fontFamily: '"Manrope", sans-serif', fontWeight: 500 }}
            >
              We help businesses grow with high-performance websites,
              automated systems, and scalable digital solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.56, delay: 0.3 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <a
                href="#contact"
                data-testid="hero-cta-primary"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-[14px] font-semibold text-white bg-[#f1592a] rounded-full shadow-[0_10px_24px_-12px_rgba(241,89,42,0.75)] hover:bg-[#df4c1f] hover:-translate-y-0.5 transition-all"
                style={{ fontFamily: '"Manrope", sans-serif' }}
              >
                Discuss your ideas
                <ArrowRight className="w-4 h-4 text-white/90" />
              </a>
              <a
                href="#services"
                data-testid="hero-cta-secondary"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-[14px] font-semibold text-white bg-[#0b0b1f] border border-[#0b0b1f] rounded-full shadow-[0_10px_24px_-12px_rgba(11,11,31,0.65)] hover:bg-[#16163a] hover:-translate-y-0.5 transition-all"
                style={{ fontFamily: '"Manrope", sans-serif' }}
              >
                View services
              </a>
            </motion.div>
            <p className="mt-4 text-[#d67856] text-sm md:text-[1.2rem] md:pl-1" style={{ fontFamily: '"Caveat", cursive' }}>
              Schedule a free call now
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

const GridPattern = ({ offsetX, offsetY }) => {
  return (
    <svg className="w-full h-full">
      <defs>
        <motion.pattern
          id="hero-grid-pattern"
          width="40"
          height="40"
          patternUnits="userSpaceOnUse"
          x={offsetX}
          y={offsetY}
        >
          <path
            d="M 40 0 L 0 0 0 40"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="text-[#0b0b1f]/30"
          />
        </motion.pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#hero-grid-pattern)" />
    </svg>
  );
};
