import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, ThumbsUp, Users } from 'lucide-react';

const stats = [
  {
    value: 250,
    suffix: '+',
    label: 'Projects Delivered',
    sublabel: 'Successfully completed across industries',
    icon: Briefcase,
  },
  {
    value: 98,
    suffix: '%',
    label: 'Satisfaction Rate',
    sublabel: 'Client satisfaction and retention rate',
    icon: ThumbsUp,
  },
  {
    value: 180,
    suffix: '',
    label: 'Team Members',
    sublabel: 'Talented experts worldwide',
    icon: Users,
  },
];

function Counter({ target, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref} className="text-5xl md:text-6xl font-bold text-[#635BFF] tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

export default function ImpactStats() {
  return (
    <section data-testid="impact-section" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">
            Our Impact
          </h2>
          <p className="text-base md:text-lg text-slate-500 max-w-xl mx-auto">
            Numbers that reflect our commitment to excellence and client success
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              data-testid={`stat-${stat.label.toLowerCase().replace(/\s/g, '-')}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="text-center p-8 rounded-2xl border border-slate-100 bg-white hover:shadow-xl hover:shadow-slate-100/50 transition-shadow duration-500 group"
            >
              <div className="w-14 h-14 rounded-full bg-[#635BFF]/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-[#635BFF]/15 transition-colors">
                <stat.icon className="w-6 h-6 text-[#635BFF]" />
              </div>
              <Counter target={stat.value} suffix={stat.suffix} />
              <p className="text-sm font-semibold uppercase tracking-widest text-slate-400 mt-3">
                {stat.label}
              </p>
              <p className="text-sm text-slate-500 mt-1">{stat.sublabel}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
