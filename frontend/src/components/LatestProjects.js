import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const projects = [
  {
    category: 'Branding',
    year: '//2025',
    title: 'Vertex',
    subtitle: 'Brand Identity & Visual System',
    image: 'https://images.unsplash.com/photo-1648134859211-4a1b57575f4e?auto=format&fit=crop&w=1200&q=80',
  },
  {
    category: 'Development',
    year: '//2025',
    title: 'Nuvora',
    subtitle: 'E-Commerce Platform Redesign',
    image: 'https://images.unsplash.com/photo-1745357996530-f7f6b41129e0?auto=format&fit=crop&w=1200&q=80',
  },
  {
    category: 'UI/UX Design',
    year: '//2024',
    title: 'Eclipso',
    subtitle: 'SaaS Dashboard & Analytics',
    image: 'https://images.unsplash.com/photo-1745357996554-538f89cbd64e?auto=format&fit=crop&w=1200&q=80',
  },
  {
    category: 'App Design',
    year: '//2024',
    title: 'Lumino',
    subtitle: 'Mobile Fitness Application',
    image: 'https://images.unsplash.com/photo-1769285157133-7cd39d6649a0?auto=format&fit=crop&w=1200&q=80',
  },
];

export default function LatestProjects() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  // Hold each project for a beat, then move to the next one.
  const stackY = useTransform(
    scrollYProgress,
    [0, 0.14, 0.28, 0.42, 0.56, 0.7, 0.84, 1],
    ['0vh', '0vh', '-72vh', '-72vh', '-144vh', '-144vh', '-216vh', '-216vh']
  );

  return (
    <section
      id="projects"
      ref={sectionRef}
      data-testid="latest-projects-section"
      className="bg-[#0a0a0a] relative"
      style={{ height: `${projects.length * 95}vh` }}
    >
      <div className="sticky top-0 h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-14">
            <h2 className="text-5xl sm:text-6xl lg:text-8xl font-black text-white uppercase leading-[0.9] tracking-tighter">
              Latest<br />Projects
            </h2>
            <p className="text-sm text-neutral-400 italic max-w-xs leading-relaxed">
              A thoughtfully curated portfolio demonstrating our commitment to simplicity and purposeful design.
            </p>
          </div>

          {/* Pinned Project Track */}
          <div className="h-[72vh] overflow-hidden">
            <motion.div style={{ y: stackY }} className="space-y-4">
              {projects.map((project, index) => (
                <div
                  key={project.title}
                  data-testid={`project-card-${index}`}
                  className="relative rounded-lg overflow-hidden group cursor-pointer h-[70vh]"
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
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
