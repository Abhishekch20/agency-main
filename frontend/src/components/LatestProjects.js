import { motion } from 'framer-motion';

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
  return (
    <section id="projects" data-testid="latest-projects-section" className="bg-[#0a0a0a] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="text-5xl sm:text-6xl lg:text-8xl font-black text-white uppercase leading-[0.9] tracking-tighter"
          >
            Latest<br />Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-sm text-neutral-400 italic max-w-xs leading-relaxed"
          >
            A thoughtfully curated portfolio demonstrating our commitment to simplicity and purposeful design.
          </motion.p>
        </div>

        {/* Project Cards */}
        <div className="space-y-5">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              data-testid={`project-card-${index}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative rounded-lg overflow-hidden group cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-[340px] md:h-[480px] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-500" />

                {/* Top-left: Category tag */}
                <span className="absolute top-5 left-5 bg-white text-black text-[11px] font-bold uppercase tracking-widest px-3 py-1.5">
                  {project.category}
                </span>

                {/* Top-right: Year */}
                <span className="absolute top-6 right-6 text-white text-sm font-medium italic">
                  {project.year}
                </span>

                {/* Center: Project title */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-3xl sm:text-4xl md:text-6xl font-black text-white uppercase tracking-tight">
                    {project.title}
                  </span>
                </div>

                {/* Bottom: Subtitle */}
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 bg-gradient-to-t from-black/60 to-transparent">
                  <p className="text-sm text-neutral-300 font-medium">
                    {project.subtitle}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
