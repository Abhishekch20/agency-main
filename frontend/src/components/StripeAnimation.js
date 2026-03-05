import { useCallback, useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export default function StripeAnimation() {
  const timeoutRefs = useRef([]);
  const [ripples, setRipples] = useState([]);
  const [isPointerActive, setIsPointerActive] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 115, damping: 18, mass: 0.35 });
  const smoothY = useSpring(mouseY, { stiffness: 115, damping: 18, mass: 0.35 });
  const smoothCursorX = useSpring(cursorX, { stiffness: 180, damping: 22, mass: 0.2 });
  const smoothCursorY = useSpring(cursorY, { stiffness: 180, damping: 22, mass: 0.2 });

  const stageRotateX = useTransform(smoothY, [-0.5, 0.5], [4, -4]);
  const stageRotateY = useTransform(smoothX, [-0.5, 0.5], [-7, 7]);

  const leftArcX = useTransform(smoothX, [-0.5, 0.5], [-18, 20]);
  const rightArcX = useTransform(smoothX, [-0.5, 0.5], [18, -20]);
  const centerLightX = useTransform(smoothX, [-0.5, 0.5], [-50, 50]);
  const centerLightY = useTransform(smoothY, [-0.5, 0.5], [-35, 35]);

  const leftWashX = useTransform(smoothX, [-0.5, 0.5], [-16, 16]);
  const rightWashX = useTransform(smoothX, [-0.5, 0.5], [16, -16]);

  const particle1X = useTransform(smoothX, [-0.5, 0.5], [-20, 22]);
  const particle1Y = useTransform(smoothY, [-0.5, 0.5], [-14, 14]);
  const particle2X = useTransform(smoothX, [-0.5, 0.5], [18, -20]);
  const particle2Y = useTransform(smoothY, [-0.5, 0.5], [16, -12]);
  const particle3X = useTransform(smoothX, [-0.5, 0.5], [-16, 18]);
  const particle3Y = useTransform(smoothY, [-0.5, 0.5], [10, -16]);
  const particle4X = useTransform(smoothX, [-0.5, 0.5], [15, -14]);
  const particle4Y = useTransform(smoothY, [-0.5, 0.5], [-13, 15]);

  const cursorHaloX = useTransform(smoothCursorX, (value) => value - 90);
  const cursorHaloY = useTransform(smoothCursorY, (value) => value - 90);
  const cursorDotX = useTransform(smoothCursorX, (value) => value - 8);
  const cursorDotY = useTransform(smoothCursorY, (value) => value - 8);

  useEffect(() => {
    return () => {
      timeoutRefs.current.forEach((id) => clearTimeout(id));
      timeoutRefs.current = [];
    };
  }, []);

  const handleMouseMove = useCallback(
    (event) => {
      const rect = event.currentTarget.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      mouseX.set(x);
      mouseY.set(y);
      cursorX.set(event.clientX - rect.left);
      cursorY.set(event.clientY - rect.top);
      setIsPointerActive(true);
    },
    [mouseX, mouseY, cursorX, cursorY]
  );

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0);
    mouseY.set(0);
    setIsPointerActive(false);
  }, [mouseX, mouseY]);

  const handleMouseEnter = useCallback(() => {
    setIsPointerActive(true);
  }, []);

  const handleClick = useCallback(
    (event) => {
      const rect = event.currentTarget.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;
      const id = `${Date.now()}-${Math.random()}`;

      setRipples((prev) => [...prev, { id, x, y }]);

      const timeoutId = setTimeout(() => {
        setRipples((prev) => prev.filter((item) => item.id !== id));
      }, 900);
      timeoutRefs.current.push(timeoutId);
    },
    []
  );

  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-120px' }}
          transition={{ duration: 0.7 }}
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick}
          className="relative overflow-hidden rounded-3xl border border-slate-200/80 shadow-[0_30px_80px_-35px_rgba(15,23,42,0.5)] h-[290px] md:h-[430px] [perspective:1200px]"
        >
          <motion.div
            className="absolute inset-0"
            style={{ rotateX: stageRotateX, rotateY: stageRotateY, transformStyle: 'preserve-3d' }}
          >
            <div className="absolute inset-0 bg-[linear-gradient(112deg,#9a5a12_0%,#a54643_25%,#6c2e60_44%,#36415b_62%,#4a2f87_80%,#392474_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_16%,rgba(255,255,255,0.14),transparent_36%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(0,0,0,0.24))]" />

            <motion.div
              className="absolute left-[24%] top-[-70%] h-[240%] w-[30%] rounded-[50%] opacity-58"
              style={{
                x: leftArcX,
                background: 'linear-gradient(180deg, rgba(255,220,226,0.25), rgba(255,220,226,0.46), rgba(255,220,226,0.2))',
              }}
              animate={{ x: ['-2%', '2%', '-2%'] }}
              transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute right-[9%] top-[-70%] h-[240%] w-[30%] rounded-[50%] opacity-62"
              style={{
                x: rightArcX,
                background: 'linear-gradient(180deg, rgba(226,205,255,0.2), rgba(226,205,255,0.42), rgba(226,205,255,0.18))',
              }}
              animate={{ x: ['2%', '-2%', '2%'] }}
              transition={{ duration: 8.5, repeat: Infinity, ease: 'easeInOut' }}
            />

            <div className="absolute left-[47%] top-[-8%] h-[116%] w-[14%] bg-gradient-to-b from-[#2f3950]/80 via-[#1f2538]/88 to-[#1d2234]/88 rounded-[999px]" />

            <motion.div
              className="absolute left-1/2 top-1/2 h-64 w-64 rounded-full blur-[60px] pointer-events-none"
              style={{
                x: centerLightX,
                y: centerLightY,
                background:
                  'radial-gradient(circle, rgba(255,255,255,0.23) 0%, rgba(255,255,255,0) 70%)',
              }}
            />

            <motion.div
              className="absolute inset-y-0 left-0 w-[45%]"
              style={{ x: leftWashX }}
              animate={{ opacity: [0.45, 0.62, 0.45] }}
              transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="h-full w-full bg-gradient-to-r from-transparent via-white/14 to-transparent" />
            </motion.div>
            <motion.div
              className="absolute inset-y-0 right-0 w-[45%]"
              style={{ x: rightWashX }}
              animate={{ opacity: [0.34, 0.5, 0.34] }}
              transition={{ duration: 5.1, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="h-full w-full bg-gradient-to-l from-transparent via-white/10 to-transparent" />
            </motion.div>

            <motion.div
              className="absolute inset-y-0 -left-1/4 w-1/4 bg-gradient-to-r from-transparent via-white/35 to-transparent mix-blend-soft-light"
              animate={{ x: ['-20%', '460%'] }}
              transition={{ duration: 6.2, repeat: Infinity, ease: 'easeInOut' }}
            />

            <motion.div
              className="absolute left-[14%] top-[24%] h-3 w-3 rounded-full bg-white/80 shadow-[0_0_24px_rgba(255,255,255,0.9)]"
              style={{ x: particle1X, y: particle1Y }}
            />
            <motion.div
              className="absolute left-[72%] top-[30%] h-2.5 w-2.5 rounded-full bg-sky-200/90 shadow-[0_0_22px_rgba(125,211,252,0.8)]"
              style={{ x: particle2X, y: particle2Y }}
            />
            <motion.div
              className="absolute left-[62%] top-[68%] h-2 w-2 rounded-full bg-amber-200/90 shadow-[0_0_20px_rgba(253,230,138,0.8)]"
              style={{ x: particle3X, y: particle3Y }}
            />
            <motion.div
              className="absolute left-[30%] top-[72%] h-3.5 w-3.5 rounded-full bg-fuchsia-200/80 shadow-[0_0_22px_rgba(244,114,182,0.85)]"
              style={{ x: particle4X, y: particle4Y }}
            />
          </motion.div>

          <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(125deg,rgba(15,23,42,0.08)_0%,rgba(15,23,42,0.46)_75%)]" />

          <motion.div
            className="absolute h-[180px] w-[180px] rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(255,255,255,0.28)_0%,rgba(255,255,255,0)_72%)]"
            style={{ x: cursorHaloX, y: cursorHaloY, opacity: isPointerActive ? 1 : 0 }}
          />
          <motion.div
            className="absolute h-4 w-4 rounded-full pointer-events-none bg-white shadow-[0_0_20px_rgba(255,255,255,0.9)]"
            style={{ x: cursorDotX, y: cursorDotY, opacity: isPointerActive ? 0.9 : 0 }}
          />

          {ripples.map((ripple) => (
            <motion.span
              key={ripple.id}
              className="absolute pointer-events-none block rounded-full border border-white/60"
              style={{ left: `${ripple.x}%`, top: `${ripple.y}%` }}
              initial={{ width: 12, height: 12, x: '-50%', y: '-50%', opacity: 0.7 }}
              animate={{ width: 220, height: 220, x: '-50%', y: '-50%', opacity: 0 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
            />
          ))}

          <div className="absolute left-7 bottom-6 md:left-12 md:bottom-10 text-white">
            <p className="text-xs md:text-[0.95rem] uppercase tracking-[0.24em] text-white/86">
              Momentum Layer
            </p>
            <h3 className="mt-2 text-[2rem] md:text-[3.05rem] leading-none font-semibold tracking-tight">
              Design in Motion
            </h3>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
