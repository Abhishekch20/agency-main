import { motion } from 'framer-motion';
import {
  HandMetal,
  PenTool,
  Code2,
  LineChart,
  Bot,
  Search,
  Clapperboard,
  Smartphone,
} from 'lucide-react';

const services = [
  {
    title: 'UI/UX Design',
    description:
      'Crafting intuitive, user-centered interfaces that blend clarity, beauty, and effortless interaction.',
    tags: ['Web', 'Product', 'App'],
    Icon: PenTool,
  },
  {
    title: 'Web Development, Website & Store Development',
    description:
      'We build fast, scalable and fully responsive websites, online stores, and landing pages that perform beautifully across every device.',
    tags: ['Business Sites', 'Shopify/Woo', 'Landing Pages', 'Web Apps', 'Maintenance'],
    Icon: Code2,
  },
  {
    title: 'App development',
    description:
      'We design and develop native and cross-platform mobile applications that are fast, reliable, and built for excellent user experience.',
    tags: ['iOS', 'Android', 'Cross Platform', 'App UX'],
    Icon: Smartphone,
  },
  {
    title: 'Automation & AI Solutions',
    description:
      'We automate repetitive workflows and implement AI-powered tools so your team can save time, respond faster, and scale operations efficiently.',
    tags: ['AI Chatbots', 'Zapier/Make/n8n', 'CRM Automation', 'Auto Reports', 'Custom AI'],
    Icon: Bot,
  },
  {
    title: 'SEO & Organic Growth',
    description:
      'We improve search visibility and sustainable inbound growth with technical optimization, content strategy, and performance tracking.',
    tags: ['On-Page SEO', 'Technical SEO', 'Keywords', 'Blog Strategy', 'Analytics'],
    Icon: Search,
  },
  {
    title: 'Creative & Media Services',
    description:
      'We produce visual assets that elevate your brand experience across digital campaigns, product showcases, and social content.',
    tags: ['Graphic Design', 'Video Editing', 'Motion Graphics', 'Product Photos'],
    Icon: Clapperboard,
  },
  {
    title: 'Branding & Identity',
    description:
      'From concept to prototype, we create user-centered interfaces that balance beauty with performance, ensuring every interaction feels effortless.',
    tags: ['Identity', 'Positioning', 'Voice'],
    Icon: HandMetal,
  },
  {
    title: 'Sales Growth Services',
    description:
      'We build complete sales systems to help you generate qualified leads, nurture prospects, and increase conversions across paid and owned channels.',
    tags: ['Paid Ads', 'Lead Gen', 'Funnels', 'Email/SMS', 'CRM Automation'],
    Icon: LineChart,
  },
];

function ServiceCard({ service, index }) {
  const Icon = service.Icon;

  return (
    <motion.article
      data-testid={`service-card-${index + 1}`}
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className="group rounded-sm border border-border bg-card/50 backdrop-blur-md hover:bg-muted/30 transition-colors p-4 md:p-6"
    >
      <div className="flex items-start justify-between gap-4">
        <h3
          className="text-[1.35rem] md:text-[2.2rem] leading-[1.15] text-foreground font-bold tracking-wide uppercase group-hover:text-primary transition-colors"
          style={{ fontFamily: '"Manrope", sans-serif', fontSize: 'clamp(1.2rem,1.85vw,2rem)' }}
        >
          {service.title}
        </h3>
        <span className="shrink-0 h-11 w-11 rounded-sm border border-primary/30 bg-primary/10 flex items-center justify-center shadow-brand-cyan-glow">
          <Icon className="h-5 w-5 text-primary" strokeWidth={2} />
        </span>
      </div>

      <div className="mt-5 md:mt-6 border-t border-dashed border-border pt-5 md:pt-6">
        <p
          className="text-muted-foreground leading-[1.42] max-w-2xl font-medium"
          style={{ fontFamily: '"Manrope", sans-serif', fontSize: 'clamp(1rem,1.08vw,1.12rem)' }}
        >
          {service.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2.5">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-sm border border-primary/20 bg-primary/5 px-4 py-1.5 text-[11px] md:text-[12px] font-bold uppercase tracking-[0.16em] text-primary shadow-sm"
              style={{ fontFamily: '"Manrope", sans-serif' }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export default function ServicesTimeline() {
  return (
    <section
      id="services"
      data-testid="services-timeline-section"
      className="bg-background py-20 md:py-28 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-7 md:gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="lg:sticky lg:top-28 h-fit"
          >
            <p className="text-primary uppercase tracking-[0.2em] text-xs md:text-sm font-bold mb-5 flex items-center gap-2 drop-shadow-[0_0_8px_rgba(37,99,235,0.3)]">
              <span className="text-primary/50">&#8250;</span>
              CORE MODULES
              <span className="text-primary/50">&#8249;</span>
            </p>

            <h2
              className="text-foreground leading-[1.02] font-black max-w-[14ch] uppercase tracking-wider"
              style={{ fontFamily: '"Manrope", sans-serif', fontSize: 'clamp(2rem,4.4vw,4rem)', textShadow: '0 0 20px rgba(var(--foreground),0.1)' }}
            >
              Systems built
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">to drive impact</span>
            </h2>

            <div className="mt-7 md:mt-10">
              <a
                href="#contact"
                data-testid="services-cta"
                className="group relative inline-flex items-center gap-3 px-8 py-3.5 text-[14px] font-bold text-primary-foreground bg-primary uppercase tracking-widest overflow-hidden transition-all hover:scale-105"
                style={{ clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%)' }}
              >
                <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative">INITIATE REQUEST</span>
              </a>
              <p className="mt-4 ml-2 text-secondary font-medium text-lg tracking-widest uppercase text-sm shadow-brand-purple-glow">
                AWAITING INPUT
              </p>
            </div>
          </motion.div>

          <div className="glass-card p-2.5 md:p-4">
            <div className="space-y-2.5 md:space-y-4">
              {services.map((service, index) => (
                <ServiceCard key={service.title} service={service} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
