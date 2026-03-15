import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

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
  return (
    <section
      id="projects"
      data-testid="latest-projects-section"
      className="bg-transparent relative font-sans py-24 md:py-40 overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute inset-0 bg-cyber-grid bg-[length:40px_40px] opacity-[0.05] dark:opacity-[0.03] pointer-events-none mix-blend-screen" />
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-10 mb-24 md:mb-40"
        >
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <span className="w-12 h-px bg-primary/40" />
              <p className="text-xs md:text-sm font-black text-primary uppercase tracking-[0.5em] shadow-brand-cyan-glow">
                Project Archives
              </p>
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-foreground uppercase leading-[0.9] tracking-tighter">
              Latest <br /> <span className="text-primary italic">Deployments</span>
            </h2>
          </div>
          <div className="max-w-[380px] space-y-6 border-l-2 border-primary/20 pl-10 py-2">
            <p className="text-xs md:text-base font-semibold text-muted-foreground tracking-widest uppercase leading-relaxed">
              A curated log of high-performance system integrations and structural re-designs.
            </p>
            <div className="flex items-center gap-3 text-primary font-black text-[11px] tracking-[0.2em] uppercase">
              <CheckCircle2 className="w-4 h-4" />
              Authenticity Verified
            </div>
          </div>
        </motion.div>

        {/* Fly-in Grid Pairs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-24 md:gap-y-40">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      initial={{
        x: isLeft ? -180 : 180,
        opacity: 0,
        rotate: 0,
        scale: 0.95
      }}
      whileInView={{
        x: 0,
        opacity: 1,
        rotate: 0,
        scale: 1
      }}
      viewport={{ once: false, margin: "-10%" }}
      transition={{
        type: 'spring',
        stiffness: 40,
        damping: 18,
        mass: 1,
        delay: index % 2 === 0 ? 0 : 0.1
      }}
      className={`relative group flex ${isLeft ? 'justify-end' : 'justify-start'}`}
    >
      <a
        href={project.href}
        target={project.href.startsWith('http') ? '_blank' : undefined}
        rel={project.href.startsWith('http') ? 'noreferrer' : undefined}
        className="block glass-card backdrop-blur-3xl overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_80px_rgba(0,0,0,0.4)] transition-all duration-700 hover:shadow-primary/20 border-border/10 hover:border-primary/50 w-full md:max-w-[500px]"
      >
        <div className="relative aspect-[4/5] overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 brightness-75 group-hover:brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />

          {/* Card Meta Top */}
          <div className="absolute top-8 left-8 right-8 flex justify-between items-start z-20">
            <span className="px-4 py-2 bg-primary/20 backdrop-blur-xl border border-primary/50 text-white text-[10px] md:text-xs font-black uppercase tracking-[0.2em] shadow-brand-cyan-glow">
              {project.category}
            </span>
            <span className="text-white/40 font-mono text-sm tracking-widest font-bold">
              {project.year}
            </span>
          </div>

          {/* Card Info Bottom */}
          <div className="absolute bottom-10 left-10 right-10 z-20">
            <div className="space-y-4">
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tighter leading-[0.9] group-hover:italic transition-all duration-500">
                {project.title}
              </h3>
              <p className="text-sm md:text-base text-primary font-bold tracking-[0.1em] uppercase opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                {project.subtitle}
              </p>
            </div>
          </div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white scale-0 group-hover:scale-100 transition-transform duration-500 ease-out z-30 shadow-brand-cyan-glow">
            <ArrowUpRight className="w-8 h-8" />
          </div>
        </div>
      </a>

      <div className={`mt-8 flex items-center gap-6 ${isLeft ? 'justify-start' : 'justify-end md:justify-start'}`}>
        <span className="text-xs font-black text-primary/40 tracking-[0.4em]">{(index + 1).toString().padStart(2, '0')}</span>
        <div className="flex-1 h-px bg-gradient-to-r from-primary/20 to-transparent" />
      </div>
    </motion.div>
  );
}
