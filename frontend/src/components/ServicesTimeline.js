import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, X } from 'lucide-react';

const services = [
  {
    title: 'Strategic Consulting',
    description:
      'Our Strategic Consulting service helps you navigate the digital landscape with data-driven insights and actionable growth strategies.',
    tags: ['Market analysis', 'Digital transformation', 'KPI definition', 'Competitive positioning'],
  },
  {
    title: 'Creative Design',
    description:
      'Our Creative Design service helps you build a distinctive, memorable, and cohesive presence that resonates with your target audience.',
    tags: ['Logo design', 'Typography & color systems', 'Brand guidelines', 'Art Direction'],
  },
  {
    title: 'Full-Stack Development',
    description:
      'End-to-end development solutions using cutting-edge technologies to build scalable, high-performance web applications.',
    tags: ['Custom web apps', 'E-commerce solutions', 'API integration', 'Database design'],
  },
  {
    title: 'Growth Optimization',
    description:
      'Data-driven strategies to optimize your digital presence, improve conversions, and accelerate sustainable business growth.',
    tags: ['SEO & performance', 'A/B testing', 'Analytics dashboards', 'Conversion optimization'],
  },
  {
    title: 'App Development',
    description:
      'Native and cross-platform mobile applications designed for seamless user experiences across all devices and platforms.',
    tags: ['iOS & Android', 'Cross-platform', 'App store optimization', 'Push notifications'],
  },
  {
    title: 'Cloud Services',
    description:
      'Scalable cloud infrastructure and services that power modern businesses with reliability, security, and peak performance.',
    tags: ['Cloud migration', 'DevOps & CI/CD', 'Monitoring', 'Infrastructure as code'],
  },
];

function ServiceItem({ service, index, isOpen, onHoverOpen, onToggle }) {
  return (
    <div
      data-testid={`service-item-${index}`}
      className="border-b border-neutral-800"
      onMouseEnter={onHoverOpen}
    >
      <button
        data-testid={`service-toggle-${index}`}
        onClick={onToggle}
        onFocus={onHoverOpen}
        className="w-full flex items-center justify-between py-8 md:py-10 group text-left"
      >
        <h3 className="text-2xl sm:text-3xl md:text-5xl font-black text-white uppercase tracking-tight group-hover:text-neutral-300 transition-colors">
          {service.title}
        </h3>
        <span className="text-neutral-400 shrink-0 ml-4 group-hover:text-white transition-colors">
          {isOpen ? <X className="w-6 h-6 md:w-7 md:h-7" /> : <Plus className="w-6 h-6 md:w-7 md:h-7" />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-8 md:pb-10">
              <p className="text-sm md:text-base text-neutral-400 leading-relaxed max-w-xl mb-6">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-x-5 gap-y-2">
                {service.tags.map((tag) => (
                  <span key={tag} className="text-xs md:text-sm text-red-400 font-medium flex items-center gap-1.5">
                    <Plus className="w-3 h-3" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ServicesTimeline() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      id="services"
      data-testid="services-timeline-section"
      className="bg-[#0a0a0a] py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="text-sm font-medium text-neutral-400 tracking-wide mb-4 flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-400" />
            Service
          </p>
          <h2 className="text-sm md:text-base font-bold text-white uppercase tracking-widest leading-relaxed max-w-lg mx-auto">
            We create powerful brands, seamless digital experiences, and responsive, device-ready websites.
          </h2>
        </motion.div>

        {/* Accordion List */}
        <div className="border-t border-neutral-800">
          {services.map((service, index) => (
            <ServiceItem
              key={service.title}
              service={service}
              index={index}
              isOpen={openIndex === index}
              onHoverOpen={() => setOpenIndex(index)}
              onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
