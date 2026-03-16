"use client";

import { useId } from 'react';
import { ArrowRight, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const logs = [
  "Web Development",
  "UI/UX Design",
  "Mobile App Development",
  "AI Automation",
  "SEO Optimization",
  "E-Commerce Development",
  "Branding & Identity",
  "Sales Funnel Systems",
  "API Integrations",
  "Digital Growth Solutions"
];

export default function Hero() {
  return (
    <>
      <section
        data-testid="hero-section"
        className="relative min-h-[calc(100vh-80px)] min-h-[calc(100svh-80px)] mt-16 sm:mt-20 overflow-hidden bg-[#020617] flex items-center font-sans selection:bg-primary/30 selection:text-white"
      >
        {/* Background Layer with Moving Image */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              x: [0, -20, 0],
              y: [0, -10, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="relative w-full h-full opacity-30 scale-105"
          >
            <Image
              src="/cyber-bg.png"
              alt="Cybernetic Infrastructure"
              fill
              priority
              quality={65}
              fetchPriority="high"
              sizes="(max-width: 768px) 100vw, 1200px"
              className="object-cover"
            />
          </motion.div>

          {/* Overlays for Depth & Readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/90 via-[#020617]/50 to-[#020617]" />
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#020617] to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_40%,rgba(37,99,235,0.1),transparent_70%)]" />
          <div className="absolute inset-0 opacity-[0.05]">
            <GridPattern />
          </div>
        </div>

        <div className="max-w-[1440px] mx-auto px-5 sm:px-6 md:px-12 relative z-20 w-full pt-10 sm:pt-8 pb-16">
          <div className="flex flex-col items-center text-center max-w-6xl mx-auto w-full">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[clamp(1.9rem,7vw,4.5rem)] font-black text-white tracking-tight leading-[0.95] sm:leading-[0.9] lg:leading-[0.85] mb-8 uppercase italic lg:whitespace-nowrap"
            >
              Engineering
              <span className="hidden sm:inline"> </span>
              <br className="sm:hidden" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-primary to-blue-600 drop-shadow-[0_0_40px_rgba(37,99,235,0.4)]">
                Digital Growth
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-[0.95rem] md:text-[1.1rem] text-slate-300 leading-relaxed mb-10 sm:mb-12 max-w-2xl md:max-w-3xl xl:max-w-4xl font-medium"
            >
              High-performance web development, AI automation, and custom software. We transform your vision into robust,
              market-leading production reality.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto"
            >
              <a
                href="#contact"
                className="group relative inline-flex w-full sm:w-auto items-center justify-center gap-3 sm:gap-4 px-6 sm:px-10 py-3.5 sm:py-4 text-[12px] sm:text-[13px] font-bold text-white bg-primary uppercase tracking-[0.12em] sm:tracking-[0.2em] transition-all hover:bg-blue-500 shadow-[0_0_25px_rgba(37,99,235,0.4)]"
                style={{ clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%)' }}
              >
                <Terminal className="w-4 h-4" />
                Start Your Project
              </a>

              <a
                href="#services"
                className="group relative inline-flex w-full sm:w-auto items-center justify-center gap-3 sm:gap-4 px-6 sm:px-10 py-3.5 sm:py-4 text-[12px] sm:text-[13px] font-bold text-slate-400 border border-slate-800 bg-slate-900/50 uppercase tracking-[0.12em] sm:tracking-[0.2em] backdrop-blur transition-all hover:border-slate-600 hover:bg-slate-900 hover:text-white"
                style={{ clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%)' }}
              >
                Explore Services
                <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>
        </div>

        {/* Bottom Scrolling Log Relay */}
        <div className="absolute bottom-0 left-0 right-0 py-3 sm:py-4 bg-primary/5 border-t border-white/5 backdrop-blur-md overflow-hidden">
          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 38, repeat: Infinity, ease: "linear" }}
            className="flex w-max whitespace-nowrap gap-8 sm:gap-12 text-[8px] sm:text-[9px] font-black text-primary/40 tracking-[0.35em] sm:tracking-[0.5em] uppercase"
          >
            {logs.map((log, i) => (
              <span key={i} className="flex items-center gap-3">
                <span className="text-white/20">//</span>
                <span className="text-primary font-black">{log}</span>
              </span>
            ))}
            {logs.map((log, i) => (
              <span key={i + 'duplicate'} className="flex items-center gap-3">
                <span className="text-white/20">//</span>
                <span className="text-primary font-black">{log}</span>
              </span>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}

function GridPattern() {
  const reactId = useId();
  const patternId = `grid-${reactId.replace(/:/g, '')}`;

  return (
    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <pattern id={patternId} width="50" height="50" patternUnits="userSpaceOnUse">
          <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(37,99,235,0.1)" strokeWidth="0.5" />
          <circle cx="0" cy="0" r="1.2" fill="rgba(37,99,235,0.2)" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} />
    </svg>
  );
}
