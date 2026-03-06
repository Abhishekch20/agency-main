import React, { useRef } from "react";
import { cn } from "@/lib/utils";
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  useAnimationFrame,
} from "framer-motion";

export const Component = ({ className = "" }) => {
  const containerRef = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  const gridOffsetX = useMotionValue(0);
  const gridOffsetY = useMotionValue(0);

  const speedX = 0.5;
  const speedY = 0.5;

  useAnimationFrame(() => {
    const currentX = gridOffsetX.get();
    const currentY = gridOffsetY.get();
    gridOffsetX.set((currentX + speedX) % 40);
    gridOffsetY.set((currentY + speedY) % 40);
  });

  const maskImage = useMotionTemplate`radial-gradient(300px circle at ${mouseX}px ${mouseY}px, black, transparent)`;

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className={cn(
        "relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-background",
        className
      )}
    >
      <div className="absolute inset-0 z-0 opacity-[0.05]">
        <GridPattern offsetX={gridOffsetX} offsetY={gridOffsetY} />
      </div>
      <motion.div
        className="absolute inset-0 z-0 opacity-40"
        style={{ maskImage, WebkitMaskImage: maskImage }}
      >
        <GridPattern offsetX={gridOffsetX} offsetY={gridOffsetY} />
      </motion.div>

      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute right-[-20%] top-[-20%] w-[40%] h-[40%] rounded-full bg-orange-500/40 dark:bg-orange-600/20 blur-[120px]" />
        <div className="absolute right-[10%] top-[-10%] w-[20%] h-[20%] rounded-full bg-primary/30 blur-[100px]" />
        <div className="absolute left-[-10%] bottom-[-20%] w-[40%] h-[40%] rounded-full bg-blue-500/40 dark:bg-blue-600/20 blur-[120px]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pointer-events-none">
        <div className="max-w-4xl md:max-w-3xl space-y-5">
          <p className="inline-flex items-center text-xs md:text-sm font-semibold text-neutral-500 tracking-[0.16em] uppercase border border-neutral-300 bg-white/65 px-4 py-2 rounded-md">
            Digital Agency
          </p>

          <h1
            className="text-[2.8rem] sm:text-[4.2rem] lg:text-[7rem] font-bold text-[#0b0b1f] tracking-[-0.03em] leading-[0.96]"
            style={{ fontFamily: '"Manrope", sans-serif' }}
          >
            We design brands
            <br />
            that move <span className="text-[#f1592a]">people</span>
          </h1>

          <p
            className="text-[1.1rem] md:text-[2.65rem] text-neutral-600 leading-relaxed max-w-4xl"
            style={{ fontFamily: '"Manrope", sans-serif', fontWeight: 500 }}
          >
            We combine strategy, design, and technology to help ambitious brands stand out and create meaningful digital experiences.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-4 pointer-events-auto">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3 text-[16px] font-semibold text-white bg-[#f1592a] rounded-full shadow-[0_10px_24px_-12px_rgba(241,89,42,0.75)] hover:bg-[#df4c1f] hover:-translate-y-0.5 transition-all"
            style={{ fontFamily: '"Manrope", sans-serif' }}
          >
            Discuss your ideas
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 px-7 py-3 text-[16px] font-semibold text-white bg-[#0b0b1f] border border-[#0b0b1f] rounded-full shadow-[0_10px_24px_-12px_rgba(11,11,31,0.65)] hover:bg-[#16163a] hover:-translate-y-0.5 transition-all"
            style={{ fontFamily: '"Manrope", sans-serif' }}
          >
            View services
          </a>
        </div>

        <p
          className="mt-4 text-[#d67856] text-2xl md:text-[2.25rem] md:pl-1"
          style={{ fontFamily: '"Caveat", cursive' }}
        >
          Schedule a free call now
        </p>
      </div>
    </div>
  );
};

const GridPattern = ({ offsetX, offsetY }) => {
  return (
    <svg className="w-full h-full">
      <defs>
        <motion.pattern
          id="grid-pattern"
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
            className="text-muted-foreground"
          />
        </motion.pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid-pattern)" />
    </svg>
  );
};
