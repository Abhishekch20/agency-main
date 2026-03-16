import Image from 'next/image';
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
      className="bg-[#020617] relative font-sans py-16 md:py-24 overflow-hidden transition-colors duration-500"
    >
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] pointer-events-none" />
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16 md:mb-24">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-px bg-primary/40" />
              <p className="text-[10px] md:text-xs font-black text-primary uppercase tracking-[0.5em]">Project Archives</p>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white uppercase leading-[0.9] tracking-tighter">
              Latest <br /> <span className="text-primary italic">Deployments</span>
            </h2>
          </div>
          <div className="max-w-[320px] space-y-4 border-l-2 border-primary/20 pl-8 py-1.5">
            <p className="text-[10px] md:text-[13px] font-semibold text-slate-400 tracking-widest uppercase leading-relaxed">
              A curated log of high-performance system integrations and structural re-designs.
            </p>
            <div className="flex items-center gap-2 text-primary font-black text-[9px] tracking-[0.2em] uppercase">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Authenticity Verified
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 md:gap-y-24">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  const isLeft = index % 2 === 0;

  return (
    <div className={`relative group flex ${isLeft ? 'justify-end' : 'justify-start'}`}>
      <a
        href={project.href}
        target={project.href.startsWith('http') ? '_blank' : undefined}
        rel={project.href.startsWith('http') ? 'noreferrer' : undefined}
        className="block glass-card backdrop-blur-3xl overflow-hidden shadow-[0_15_60px_rgba(0,0,0,0.4)] transition-all duration-700 hover:shadow-primary/20 border-border/10 hover:border-primary/50 w-full md:max-w-[380px]"
      >
        <div className="relative aspect-[4/5] overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 380px"
            className="object-cover transition-transform duration-1000 group-hover:scale-110 brightness-75 group-hover:brightness-90"
            loading={index < 2 ? undefined : "lazy"}
            priority={index < 2}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-60" />

          <div className="absolute top-6 left-6 right-6 flex justify-between items-start z-20">
            <span className="px-3 py-1.5 bg-primary/20 backdrop-blur-xl border border-primary/50 text-white text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em]">
              {project.category}
            </span>
            <span className="text-white/40 font-mono text-[11px] tracking-widest font-bold">
              {project.year}
            </span>
          </div>

          <div className="absolute bottom-8 left-8 right-8 z-20">
            <div className="space-y-3">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-white uppercase tracking-tighter leading-[0.9]">
                {project.title}
              </h3>
              <p className="text-xs md:text-[13px] text-primary font-bold tracking-[0.1em] uppercase opacity-0 group-hover:opacity-100 transform translate-y-3 group-hover:translate-y-0 transition-all duration-500 delay-100">
                {project.subtitle}
              </p>
            </div>
          </div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white scale-0 group-hover:scale-100 transition-transform duration-500 ease-out z-30">
            <ArrowUpRight className="w-6 h-6" />
          </div>
        </div>
      </a>
    </div>
  );
}
