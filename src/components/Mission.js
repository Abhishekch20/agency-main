"use client";

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, Cpu, Globe, Terminal } from 'lucide-react';


const aboutText =
  "We help businesses scale with precision. From high-performing digital systems to AI-driven automation, we design scalable solutions that transform ideas into measurable growth and efficiency.";

export default function Mission() {
  const textContainerRef = useRef(null);

  return (
    <section id="about" data-testid="mission-section" data-theme="light" className="bg-white py-16 md:py-24 relative overflow-hidden transition-colors duration-500">
      {/* Subtle light grid */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-cyber-grid-light" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        {/* About + Description */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 mb-16 md:mb-20">
          {/* Label */}
          <div className="shrink-0">
            <span className="text-[11px] font-bold text-primary uppercase tracking-widest flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              SYSTEM DIRECTIVE
            </span>
          </div>

          {/* Big text */}
          <p
            ref={textContainerRef}
            className="text-[0.95rem] sm:text-[1.1rem] md:text-[1.3rem] font-bold text-slate-900 leading-[1.4] tracking-wide uppercase"
          >
            {aboutText}
          </p>
        </div>

        {/* Operational Pillars */}
        <div className="relative pt-10 mb-20 md:mb-24">
          {/* Border top */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
            <div className="flex flex-col gap-3">
              <span className="text-[9px] font-black text-primary tracking-[0.3em] uppercase">PARTNERSHIP / STRATEGY //</span>
              <h4 className="text-lg font-bold text-slate-900 uppercase tracking-tight">Aligned Growth Strategy</h4>
              <p className="text-[13px] text-slate-500 font-medium leading-relaxed">
                We are more than a vendor. We act as your dedicated technical partners, ensuring every digital decision aligns with your long-term business objectives.
              </p>
            </div>
            <div className="flex flex-col gap-3 border-l border-slate-100 md:pl-8">
              <span className="text-[9px] font-black text-primary tracking-[0.3em] uppercase">TECHNOLOGY / SOVEREIGNTY //</span>
              <h4 className="text-lg font-bold text-slate-900 uppercase tracking-tight">Future-Proof Tech Stack</h4>
              <p className="text-[13px] text-slate-500 font-medium leading-relaxed">
                We leverage the world's most advanced, industry-proven tech stacks—from AI to Cloud-Native—to give your business a permanent competitive edge.
              </p>
            </div>
            <div className="flex flex-col gap-3 border-l border-slate-100 md:pl-8">
              <span className="text-[9px] font-black text-primary tracking-[0.3em] uppercase">ROI / IMPACT //</span>
              <h4 className="text-lg font-bold text-slate-900 uppercase tracking-tight">Measured Revenue Impact</h4>
              <p className="text-[13px] text-slate-500 font-medium leading-relaxed">
                Profitability is our primary metric. Every line of code and user interface we build is engineered to accelerate your revenue and operational efficiency.
              </p>
            </div>
          </div>
        </div>

        {/* INTEGRATED: Visual System Arena (Light Theme) */}
        <div className="flex flex-col items-center">
          {/* Visual Header */}
          <div className="mb-16 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block px-3 py-1 rounded-full bg-slate-100 border border-slate-200 mb-5 font-black text-[9px] tracking-[0.3em] text-primary uppercase"
            >
              System Performance Diagnostic
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-slate-900 text-2xl md:text-3xl font-black uppercase tracking-tight italic leading-none"
            >
              Operational Infrastructure
            </motion.h2>
          </div>

          {/* Orbiting Diagram */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="flex relative aspect-square max-w-[240px] md:max-w-[340px] lg:max-w-[380px] w-full items-center justify-center"
          >
            {/* Concentric Rotating Rings */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="w-[90%] h-[90%] border border-slate-200 rounded-full border-dashed p-5 md:p-8"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="absolute w-[70%] h-[70%] border border-slate-100 rounded-full p-3 md:p-5"
              />
            </div>

            {/* Central Core */}
            <div className="relative z-20 w-20 h-20 md:w-28 md:h-28 bg-white border border-slate-200 rounded-[2rem] flex items-center justify-center shadow-lg overflow-hidden group hover:border-primary/40 transition-colors">
              <div className="absolute inset-0 bg-primary/5 animate-pulse" />
              <Cpu className="text-primary w-8 h-8 md:w-12 md:h-12 relative z-10" />
            </div>

            {/* Orbiting System Container */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 z-10 will-change-transform transform-gpu"
            >
              {[
                { label: '⚡ Performance', val: 'Optimized', icon: Zap, color: 'blue-600', pos: 'top-1/2 left-full' },
                { label: '🔒 Security', val: 'Enterprise', icon: Shield, color: 'primary', pos: 'top-[93%] left-[75%]' },
                { label: '🤖 AI', val: 'Automation', icon: Cpu, color: 'indigo-600', pos: 'top-[93%] left-[25%]' },
                { label: '📊 Uptime', val: '99.9% LIVE', icon: null, color: 'emerald-600', pos: 'top-1/2 left-0' },
                { label: '🌍 Deployments', val: 'Global', icon: Globe, color: 'blue-700', pos: 'top-[7%] left-[25%]' },
                { label: '⚙️ Logic', val: 'Deterministic', icon: Terminal, color: 'amber-600', pos: 'top-[7%] left-[75%]' }
              ].map((node, i) => (
                <div key={i} className={`absolute ${node.pos} -translate-x-1/2 -translate-y-1/2`}>
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
                    className="p-2.5 md:p-3 bg-white/95 border border-slate-200 rounded-xl flex items-center gap-3 md:gap-4 shadow-[0_8px_20px_rgba(0,0,0,0.04)] whitespace-nowrap will-change-transform transform-gpu"
                  >
                    <div className={`w-7 h-7 md:w-9 md:h-9 rounded-lg bg-slate-50 flex items-center justify-center text-${node.color}`}>
                      {node.icon ? <node.icon size={16} /> : <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />}
                    </div>
                    <div className="flex flex-col">
                      <div className="text-[7px] md:text-[9px] text-slate-400 font-bold uppercase tracking-[0.2em] mb-0.5">{node.label}</div>
                      <div className="text-[11px] md:text-[13px] font-black text-slate-900 leading-none tracking-tight">{node.val}</div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>

            {/* Soft Ambient Glow */}
            <div className="absolute inset-0 bg-primary/[0.02] blur-[80px] md:blur-[120px] rounded-full pointer-events-none z-0" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
