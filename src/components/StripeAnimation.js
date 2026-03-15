import { motion } from 'framer-motion';

const leftItems = [
  'Slow, unclear timelines',
  'Extra charges for changes',
  'No clear process',
  'Designs break in dev',
  'Complex, hard builds',
];

const rightItems = [
  'Clear weekly updates',
  'Transparent pricing',
  'Documented workflow',
  'Design-dev alignment',
  'Clean, scalable builds',
];

export default function StripeAnimation() {
  return (
    <section className="py-8 md:py-10 bg-transparent relative overflow-hidden">
      <div className="absolute inset-0 bg-cyber-grid bg-[length:40px_40px] opacity-[0.03] pointer-events-none mix-blend-screen" />
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-120px' }}
          transition={{ duration: 0.55 }}
          className="glass-card p-5 md:p-7 relative z-10"
        >
          <div className="max-w-3xl">
            <h3 className="text-[1.5rem] md:text-[2.35rem] leading-[1.12] font-semibold text-foreground">
              We know choosing the right agency is hard because few{' '}
              <span className="text-primary">truly deliver</span>.
            </h3>

            <p className="mt-4 text-[1.5rem] md:text-[2.35rem] leading-[1.12] font-semibold text-foreground">
              So we made it simple <span className="text-primary">to compare</span>{' '}
              how we work{' '}
              <span className="inline-flex w-8 h-5 rounded-full bg-primary align-middle mx-1.5 shadow-brand-cyan-glow">
                <span className="w-4 h-4 bg-primary-foreground rounded-full my-auto ml-0.5" />
              </span>
              versus what you usually get <span className="text-primary">in the market.</span>
            </p>
          </div>

          <div className="mt-7 grid grid-cols-1 md:grid-cols-2 gap-0 rounded-xl overflow-hidden border border-border">
            <div className="bg-muted/10">
              <div className="px-5 md:px-6 py-4 border-b border-border">
                <p className="text-[1.7rem] md:text-[2rem] font-medium text-foreground opacity-60">Other agencies</p>
              </div>
              {leftItems.map((item) => (
                <div key={item} className="px-5 md:px-6 py-4 border-b border-border last:border-b-0 flex items-center gap-3">
                  <span className="text-muted-foreground/40 text-lg font-bold">{'>'}</span>
                  <span className="text-muted-foreground text-[1.28rem] md:text-[1.55rem] font-medium opacity-50">{item}</span>
                </div>
              ))}
            </div>

            <div className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-secondary">

              <div className="relative px-5 md:px-6 py-4 border-b border-primary-foreground/10 bg-white/5">
                <p className="text-[1.7rem] md:text-[2rem] font-black text-primary-foreground tracking-tight uppercase">Syntrix agency</p>
              </div>
              {rightItems.map((item) => (
                <div key={item} className="relative px-5 md:px-6 py-4 flex items-center gap-3 border-b border-primary-foreground/5 last:border-b-0 group">
                  <span className="text-primary-foreground text-lg font-bold group-hover:translate-x-1 transition-transform">{'>'}</span>
                  <span className="text-primary-foreground font-bold text-[1.28rem] md:text-[1.55rem] tracking-tight">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
