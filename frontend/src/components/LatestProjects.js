import { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

const projects = [
  {
    category: 'E-Commerce',
    year: '//2026',
    title: 'Urban Psychotic',
    subtitle: 'Streetwear Fashion Store & Shopify Experience',
    image: '/urban-psychotic.png',
    href: 'https://urbanpsychotic.com',
  },
  {
    category: 'Development',
    year: '//2025',
    title: 'Nuvora',
    subtitle: 'E-Commerce Platform Redesign',
    image: 'https://images.unsplash.com/photo-1745357996530-f7f6b41129e0?auto=format&fit=crop&w=1200&q=80',
    href: '#',
  },
  {
    category: 'UI/UX Design',
    year: '//2024',
    title: 'Eclipso',
    subtitle: 'SaaS Dashboard & Analytics',
    image: 'https://images.unsplash.com/photo-1745357996554-538f89cbd64e?auto=format&fit=crop&w=1200&q=80',
    href: '#',
  },
  {
    category: 'App Design',
    year: '//2024',
    title: 'Lumino',
    subtitle: 'Mobile Fitness Application',
    image: 'https://images.unsplash.com/photo-1769285157133-7cd39d6649a0?auto=format&fit=crop&w=1200&q=80',
    href: '#',
  },
];

export default function LatestProjects() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 75,
    damping: 24,
    mass: 0.5,
  });

  // Smooth continuous track movement for better scroll feel.
  const stackY = useTransform(
    smoothProgress,
    [0, 0.33, 0.66, 1],
    ['0vh', '-72vh', '-144vh', '-216vh']
  );

  return (
    <section
      id="projects"
      ref={sectionRef}
      data-testid="latest-projects-section"
      className="bg-[#efefed] relative"
      style={{ height: `${projects.length * 95}vh` }}
    >
      <div className="sticky top-0 h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-14">
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black text-[#0b0b1f] uppercase leading-[0.9] tracking-tighter">
              Latest<br />Projects
            </h2>
            <p className="text-sm text-[#5e6579] italic max-w-xs leading-relaxed">
              A thoughtfully curated portfolio demonstrating our commitment to simplicity and purposeful design.
            </p>
          </div>

          {/* Pinned Project Track */}
          <div className="h-[72vh] overflow-hidden">
            <motion.div style={{ y: stackY, willChange: 'transform' }} className="space-y-4">
              {projects.map((project, index) => (
                <a
                  key={project.title}
                  data-testid={`project-card-${index}`}
                  className="relative rounded-lg overflow-hidden group cursor-pointer h-[70vh] block"
                  href={project.href}
                  target={project.href.startsWith('http') ? '_blank' : undefined}
                  rel={project.href.startsWith('http') ? 'noreferrer' : undefined}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-500" />

                  <span className="absolute top-5 left-5 bg-white text-black text-[11px] font-bold uppercase tracking-widest px-3 py-1.5">
                    {project.category}
                  </span>
                  <span className="absolute top-6 right-6 text-white text-sm font-medium italic">
                    {project.year}
                  </span>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-3xl sm:text-4xl md:text-6xl font-black text-white uppercase tracking-tight">
                      {project.title}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 bg-gradient-to-t from-black/60 to-transparent">
                    <p className="text-sm text-neutral-300 font-medium">
                      {project.subtitle}
                    </p>
                  </div>
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
