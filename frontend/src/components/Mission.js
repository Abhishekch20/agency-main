import { motion } from 'framer-motion';

const logos = [
  'Stripe', 'Shopify', 'Notion', 'Figma', 'Vercel', 'Slack',
];

export default function Mission() {
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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-[2.6rem] font-black text-white uppercase leading-[1.15] tracking-tight"
          >
            We're UI/UX designers focused on creating user-centered digital products that are functional, accessible, and visually engaging. From mobile apps to complex dashboards, we turn ideas into intuitive, enjoyable experiences.
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
