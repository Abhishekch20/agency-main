import { motion } from 'framer-motion';

const stats = [
  {
    title: 'Client Satisfaction',
    description: 'Recognized for reliable, scalable, and impactful digital work.',
    value: '98%',
    activeDot: 0,
  },
  {
    title: 'Successful Projects',
    description: 'Driven by clarity, quality, and a strong execution process.',
    value: '25+',
    activeDot: 1,
  },
  {
    title: 'Years of Experience',
    description: 'Built on years of refined skills and proven industry knowledge.',
    value: '5+',
    activeDot: 2,
  },
];

export default function ImpactStats() {
  return (
    <section data-testid="impact-section" className="py-24 md:py-28 bg-transparent relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(37,99,235,0.03),transparent_50%)] pointer-events-none" />
      <div className="absolute top-0 right-0 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-secondary/20 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.45 }}
          className="mb-10 md:mb-12 flex flex-col items-center md:items-start text-center md:text-left"
        >
          <p
            className="text-xs md:text-sm uppercase tracking-[0.25em] text-primary font-bold mb-4 drop-shadow-[0_0_8px_rgba(37,99,235,0.3)]"
            style={{ fontFamily: '"Manrope", sans-serif' }}
          >
            TELEMETRY DATA
          </p>
          <h2
            className="text-[2.4rem] md:text-[4.25rem] leading-[0.95] tracking-widest text-foreground font-black uppercase"
            style={{ fontFamily: '"Manrope", sans-serif', textShadow: '0 0 20px rgba(var(--foreground),0.1)' }}
          >
            SYSTEM IMPACT
          </h2>
        </motion.div>

        <div className="rounded-sm border border-border bg-card/50 backdrop-blur-xl p-4 md:p-6 shadow-[0_0_40px_rgba(0,0,0,0.1)] dark:shadow-[0_0_40px_rgba(0,0,0,0.6)]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {stats.map((item, index) => (
              <motion.article
                key={item.title}
                data-testid={`stat-${item.title.toLowerCase().replace(/\s/g, '-')}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group rounded-sm border border-border bg-muted/20 hover:bg-muted/30 transition-colors backdrop-blur-md px-6 md:px-7 pt-7 pb-5 min-h-[300px] md:min-h-[320px] flex flex-col relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-brand-cyan-glow" />

                <h3
                  className="text-[1.8rem] leading-[1.08] text-foreground font-bold mb-4 uppercase tracking-wider group-hover:text-primary transition-colors"
                  style={{ fontFamily: '"Manrope", sans-serif', fontSize: 'clamp(1.4rem,1.45vw,2rem)' }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-muted-foreground leading-[1.4] max-w-[95%] font-medium"
                  style={{ fontFamily: '"Manrope", sans-serif', fontSize: 'clamp(0.95rem,1vw,1.1rem)' }}
                >
                  {item.description}
                </p>

                <div className="mt-auto pt-10 relative z-10">
                  <div className="h-px w-full bg-border mb-6" />
                  <div className="flex items-end justify-between">
                    <span
                      className="font-black tracking-widest leading-none text-transparent bg-clip-text bg-gradient-to-r from-foreground to-muted-foreground/50 group-hover:from-primary group-hover:to-secondary transition-all duration-300 drop-shadow-[0_0_15px_rgba(37,99,235,0.2)]"
                      style={{ fontFamily: '"Manrope", sans-serif', fontSize: 'clamp(3rem,4vw,5rem)' }}
                    >
                      {item.value}
                    </span>
                    <div className="flex items-center gap-3 pb-3">
                      {[0, 1, 2].map((dot) => (
                        <span
                          key={dot}
                          className={`w-2 h-2 rounded-sm transform rotate-45 transition-all duration-500 ${dot === item.activeDot
                            ? 'bg-primary shadow-brand-cyan-glow scale-125'
                            : 'bg-muted-foreground/20 border border-muted-foreground/30 group-hover:bg-muted-foreground/40'
                            }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
