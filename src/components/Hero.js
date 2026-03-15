import { useEffect, useId, useRef, useState } from 'react';
import { motion, useAnimationFrame, useMotionTemplate, useMotionValue, useReducedMotion, useTransform } from 'framer-motion';
import { ArrowRight, Terminal, Cpu, Globe, Smartphone, Database, Zap, Share2 } from 'lucide-react';

const ROTATING_WORDS = ['WEB', 'MOBILE', 'AI/ML', 'WEB3', 'DATA', 'CLOUD', 'DEV_OPS', 'API', 'UI/UX', 'SECURITY'];
const TYPE_DELAY = 100;
const DELETE_DELAY = 60;
const HOLD_DELAY = 1200;
const NEXT_WORD_DELAY = 300;

export default function Hero() {
  const heroRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const [activeWordIndex, setActiveWordIndex] = useState(0);
  const [typedWord, setTypedWord] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const gridOffsetX = useMotionValue(0);
  const gridOffsetY = useMotionValue(0);

  // Core Rotation Transforms for Parallax
  const rotateX = useTransform(mouseY, [0, 800], [10, -10]);
  const rotateY = useTransform(mouseX, [0, 1200], [-10, 10]);

  // Neon mask follows the cursor
  const maskImage = useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, rgba(37, 99, 235, 0.4), transparent)`;

  const handleHeroMouseMove = (e) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  useEffect(() => {
    const currentWord = ROTATING_WORDS[activeWordIndex];
    let timeoutId;

    if (prefersReducedMotion) {
      if (typedWord !== currentWord) setTypedWord(currentWord);
      if (isDeleting) setIsDeleting(false);
      return;
    }

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
  }, [typedWord, isDeleting, activeWordIndex, prefersReducedMotion]);

  useAnimationFrame(() => {
    if (prefersReducedMotion) return;
    gridOffsetX.set((gridOffsetX.get() + 0.3) % 40);
    gridOffsetY.set((gridOffsetY.get() + 0.3) % 40);
  });

  return (
    <section
      ref={heroRef}
      onMouseMove={handleHeroMouseMove}
      data-testid="hero-section"
      className="relative min-h-[100vh] overflow-hidden bg-transparent flex items-center justify-center font-sans selection:bg-primary/30 selection:text-primary"
    >
      {/* Dynamic Backgrounds */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.1),transparent_70%)] dark:bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.15),transparent_70%)] transition-colors duration-700" />
        <div className="absolute top-1/4 left-1/4 h-[400px] w-[400px] rounded-full bg-primary/10 blur-[130px]" />
        <div className="absolute bottom-1/4 right-1/4 h-[500px] w-[500px] rounded-full bg-secondary/10 blur-[160px]" />

        {/* Animated Grid Base */}
        <div className="absolute inset-0 z-0 opacity-[0.05] dark:opacity-20">
          <GridPattern offsetX={gridOffsetX} offsetY={gridOffsetY} color="currentColor" className="text-border" />
        </div>

        {/* Cursor tracking neon glow grid layer */}
        <motion.div
          className="absolute inset-0 z-0 mix-blend-screen"
          style={{ maskImage, WebkitMaskImage: maskImage }}
        >
          <GridPattern offsetX={gridOffsetX} offsetY={gridOffsetY} color="#2563eb" strokeWidth={1.5} />
        </motion.div>

        {/* Scanlines effect overlay */}
        <div className="absolute inset-0 z-10 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20 w-full pt-32 sm:pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20">

          {/* Left Column: Content */}
          <div className="text-left order-1 lg:order-1">

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
              className="text-[2.2rem] sm:text-[3.5rem] lg:text-[4.5rem] font-black text-foreground tracking-widest leading-[1.1] mb-6 uppercase"
              style={{ textShadow: '0 0 40px rgba(37,99,235,0.1)' }}
            >
              WE ENGINEER <br />
              <span className="block mt-2 min-h-[1.2em] text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-indigo-500" style={{ filter: 'drop-shadow(0 0 15px rgba(37,99,235,0.3))' }}>
                {typedWord}
                {prefersReducedMotion ? (
                  <span aria-hidden="true" className="inline-block ml-2 h-[0.7em] w-[4px] bg-primary align-[-0.05em] shadow-brand-cyan-glow" />
                ) : (
                  <motion.span
                    aria-hidden="true"
                    className="inline-block ml-2 h-[0.7em] w-[4px] bg-primary align-[-0.05em] shadow-brand-cyan-glow"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                  />
                )}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[1rem] md:text-[1.1rem] text-muted-foreground tracking-wide leading-relaxed mb-10 max-w-xl font-medium"
            >
              Accelerating enterprises into the future through high-performance cyber-infrastructures, neural marketing, and hyper-scalable digital interfaces.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-6 justify-start items-center"
            >
              <a
                href="#contact"
                className="group relative inline-flex items-center gap-3 px-8 py-3.5 text-[14px] font-bold text-primary-foreground bg-primary uppercase tracking-widest overflow-hidden transition-all hover:scale-105"
                style={{ clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%)' }}
              >
                <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative flex items-center gap-2">
                  <Terminal className="w-4 h-4" />
                  INITIALIZE UPLINK
                </span>
              </a>

              <a
                href="#services"
                className="group relative inline-flex items-center gap-3 px-8 py-3.5 text-[14px] font-bold text-foreground dark:text-white border border-secondary/50 bg-secondary/10 uppercase tracking-widest backdrop-blur-sm transition-all hover:bg-secondary/20 hover:border-secondary hover:shadow-brand-purple-glow hover:scale-105"
                style={{ clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%)' }}
              >
                <span className="relative">VIEW SCHEMATICS</span>
                <ArrowRight className="w-4 h-4 text-secondary group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>

          {/* Right Column: Dynamic Service Core */}
          <div className="relative flex items-center justify-center order-2 lg:order-2 h-[500px] lg:h-[700px]">
            <motion.div
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d"
              }}
              className="relative w-full h-full flex items-center justify-center"
            >
              <ServiceDiagram prefersReducedMotion={prefersReducedMotion} />
            </motion.div>
          </div>

        </div>
      </div>
    </section >
  );
}

function ServiceDiagram({ prefersReducedMotion = false }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const scaleFactor = isMobile ? 0.6 : 1;
  const floatAmplitude = prefersReducedMotion ? 0 : 6;

  const nodes = [
    { icon: Globe, label: 'WEB', delay: 0, x: -200 * scaleFactor, y: -120 * scaleFactor, color: 'text-blue-500' },
    { icon: Smartphone, label: 'MOBILE', delay: 0.1, x: 200 * scaleFactor, y: -120 * scaleFactor, color: 'text-indigo-500' },
    { icon: Cpu, label: 'AI/ML', delay: 0.2, x: -200 * scaleFactor, y: 120 * scaleFactor, color: 'text-primary' },
    { icon: Zap, label: 'WEB3', delay: 0.3, x: 200 * scaleFactor, y: 120 * scaleFactor, color: 'text-secondary' },
    { icon: Database, label: 'DATA', delay: 0.4, x: -120 * scaleFactor, y: -200 * scaleFactor, color: 'text-blue-400' },
    { icon: Share2, label: 'CLOUD', delay: 0.5, x: 120 * scaleFactor, y: -200 * scaleFactor, color: 'text-indigo-400' },
    { icon: Terminal, label: 'DEV_OPS', delay: 0.6, x: -120 * scaleFactor, y: 200 * scaleFactor, color: 'text-primary/70' },
    { icon: Database, label: 'API', delay: 0.7, x: 120 * scaleFactor, y: 200 * scaleFactor, color: 'text-secondary/70' },
    { icon: Globe, label: 'UI/UX', delay: 0.8, x: -240 * scaleFactor, y: 0, color: 'text-blue-600' },
    { icon: Smartphone, label: 'SECURITY', delay: 0.9, x: 240 * scaleFactor, y: 0, color: 'text-indigo-600' },
  ];

  return (
    <div className="relative flex items-center justify-center w-full h-full scale-[0.85] sm:scale-100">
      {/* Central Core Engine */}
      <motion.div
        animate={
          prefersReducedMotion
            ? undefined
            : {
              rotate: [0, 360],
              scale: [1, 1.02, 1],
            }
        }
        transition={{
          rotate: { duration: 120, repeat: Infinity, ease: "linear" },
          scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
        }}
        className="relative z-20 w-32 h-32 lg:w-48 lg:h-48 flex items-center justify-center scale-[0.7] lg:scale-100"
      >
        {/* Layered Hexagons / HUD Circles */}
        <div className="absolute inset-0 border-2 border-primary/40 rounded-full animate-pulse blur-[2px]" />
        <div className="absolute inset-4 border border-secondary/30 rounded-full rotate-45" />
        <div className="absolute inset-8 border border-primary/20 rounded-full -rotate-12" />

        {/* Inner Glowing Orb */}
        <div className="w-16 h-16 lg:w-24 lg:h-24 bg-gradient-to-br from-primary via-blue-600 to-indigo-700 rounded-full shadow-[0_0_60px_rgba(37,99,235,0.6)] flex items-center justify-center">
          <Database className="w-8 h-8 lg:w-12 lg:h-12 text-white animate-pulse" />
        </div>

        {/* Outer Orbiting HUD Ring */}
        <motion.div
          animate={prefersReducedMotion ? undefined : { rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute -inset-6 lg:-inset-10 border border-border/10 rounded-full border-dashed"
        />
      </motion.div>

      {/* Connection Lines (SVG) */}
      <svg className="absolute inset-0 w-full h-full z-10 pointer-events-none overflow-visible">
        <defs>
          <linearGradient id="line-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0" className="text-primary" />
            <stop offset="50%" stopColor="currentColor" stopOpacity="0.5" className="text-primary" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0" className="text-primary" />
          </linearGradient>
        </defs>
        {nodes.map((node, i) => (
          <motion.line
            key={i}
            x1="50%"
            y1="50%"
            x2={`calc(50% + ${node.x}px)`}
            y2={`calc(50% + ${node.y}px)`}
            stroke="url(#line-grad)"
            strokeWidth="1.5"
            strokeDasharray="10 5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: [0, 1],
              opacity: [0, 0.25, 0],
              strokeDashoffset: [0, -20]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              delay: node.delay,
              ease: "linear"
            }}
          />
        ))}
      </svg>

      {/* Orbiting Service Nodes */}
      {nodes.map((node, i) => {
        const Icon = node.icon;
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: node.delay + 0.5 }}
            style={{ x: node.x, y: node.y }}
            className="absolute z-30"
          >
            <motion.div
              animate={{
                y: [0, -floatAmplitude, 0],
                rotate: [0, 1, 0]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut"
              }}
              className="flex flex-col items-center gap-2 lg:gap-3"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-20 lg:h-20 bg-card backdrop-blur-xl border border-border rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg group hover:border-primary transition-colors duration-500">
                <Icon className={`w-5 h-5 sm:w-6 sm:h-6 lg:w-9 lg:h-9 ${node.color} group-hover:scale-110 transition-transform duration-500`} />

                {/* Micro HUD Elements per node */}
                <div className="absolute -top-1 -right-1 w-2 sm:w-3 h-2 sm:h-3 bg-primary/20 rounded-full animate-ping" />
              </div>
              <span className="text-[8px] lg:text-[10px] font-black tracking-[0.2em] lg:tracking-[0.3em] uppercase opacity-40 text-foreground text-center">{node.label}</span>
            </motion.div>
          </motion.div>
        );
      })}

      {/* Floating Particle Field */}
      {!prefersReducedMotion && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(isMobile ? 2 : 4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary/30 rounded-full"
              animate={{
                x: [Math.random() * (isMobile ? 260 : 340) - (isMobile ? 130 : 170), Math.random() * (isMobile ? 260 : 340) - (isMobile ? 130 : 170)],
                y: [Math.random() * (isMobile ? 260 : 340) - (isMobile ? 130 : 170), Math.random() * (isMobile ? 260 : 340) - (isMobile ? 130 : 170)],
                opacity: [0, 0.6, 0],
                scale: [0, 1.2, 0]
              }}
              transition={{
                duration: 10 + Math.random() * 6,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

const GridPattern = ({ offsetX, offsetY, color = "currentColor", strokeWidth = 1, className = "" }) => {
  const reactId = useId();
  const patternId = `hero-grid-pattern-${reactId.replace(/:/g, '')}`;

  return (
    <svg className={`h-full w-full ${className}`} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <motion.pattern
          id={patternId}
          width="40"
          height="40"
          patternUnits="userSpaceOnUse"
          x={offsetX}
          y={offsetY}
        >
          <path
            d="M 40 0 L 0 0 0 40"
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
          />
        </motion.pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} />
    </svg>
  );
};
