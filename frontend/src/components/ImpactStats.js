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
    <section data-testid="impact-section" className="py-24 md:py-28 bg-[#efefed]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.45 }}
          className="mb-10 md:mb-12"
        >
          <p
            className="text-xs md:text-sm uppercase tracking-[0.18em] text-neutral-500 font-semibold mb-4"
            style={{ fontFamily: '"Manrope", sans-serif' }}
          >
            STATS
          </p>
          <h2
            className="text-[2.4rem] md:text-[4.25rem] leading-[0.95] tracking-[-0.03em] text-[#0b0b1f] font-extrabold"
            style={{ fontFamily: '"Manrope", sans-serif' }}
          >
            Impact in numbers
          </h2>
        </motion.div>

        <div className="rounded-[18px] border border-[#d4d4cf] bg-[#e8e8e6] p-4 md:p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.35)]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {stats.map((item, index) => (
              <motion.article
                key={item.title}
                data-testid={`stat-${item.title.toLowerCase().replace(/\s/g, '-')}`}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="rounded-xl border border-[#dbdbd6] bg-[#efefed] px-6 md:px-7 pt-7 pb-5 min-h-[300px] md:min-h-[320px] flex flex-col"
              >
                <h3
                  className="text-[2rem] leading-[1.08] text-[#0b0b1f] font-semibold mb-4"
                  style={{ fontFamily: '"Manrope", sans-serif', fontSize: 'clamp(1.4rem,1.45vw,2.1rem)' }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-neutral-600 leading-[1.35] max-w-[95%]"
                  style={{ fontFamily: '"Manrope", sans-serif', fontWeight: 600, fontSize: 'clamp(1rem,1.04vw,1.9rem)' }}
                >
                  {item.description}
                </p>

                <div className="mt-auto pt-10">
                  <div className="h-px w-full bg-[#d7d7d2] mb-6" />
                  <div className="flex items-end justify-between">
                    <span
                      className="text-[#0b0b1f] font-semibold tracking-[-0.03em] leading-none"
                      style={{ fontFamily: '"Manrope", sans-serif', fontSize: 'clamp(2.2rem,3.4vw,4.3rem)' }}
                    >
                      {item.value}
                    </span>
                    <div className="flex items-center gap-2 pb-2">
                      {[0, 1, 2].map((dot) => (
                        <span
                          key={dot}
                          className={`w-2.5 h-2.5 rounded-full ${
                            dot === item.activeDot
                              ? 'bg-[#f1592a] shadow-[0_0_0_2px_rgba(241,89,42,0.16)]'
                              : 'bg-[#d2d2cd] border border-[#c6c6c2]'
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
