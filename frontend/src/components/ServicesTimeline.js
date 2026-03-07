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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className="rounded-[14px] border border-[#d6d6d0] bg-[#eeeeec] p-4 md:p-6"
    >
      <div className="flex items-start justify-between gap-4">
        <h3
          className="text-[1.35rem] md:text-[2.65rem] leading-[1.15] text-[#080a1f] font-semibold"
          style={{ fontFamily: '"Manrope", sans-serif', fontSize: 'clamp(1.2rem,1.85vw,2rem)' }}
        >
          {service.title}
        </h3>
        <span className="shrink-0 h-11 w-11 rounded-xl border border-[#ccccc6] bg-[#e8e8e6] flex items-center justify-center shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]">
          <Icon className="h-5 w-5 text-[#1f243f]" strokeWidth={1.9} />
        </span>
      </div>

      <div className="mt-5 md:mt-6 border-t border-dashed border-[#d2d2cc] pt-5 md:pt-6">
        <p
          className="text-[#4f556b] leading-[1.42] max-w-2xl"
          style={{ fontFamily: '"Manrope", sans-serif', fontSize: 'clamp(1rem,1.08vw,1.12rem)' }}
        >
          {service.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2.5">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[#d0d0cb] bg-[#e9e9e7] px-4 py-1.5 text-[11px] md:text-[12px] font-semibold uppercase tracking-[0.16em] text-[#566178]"
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
      className="bg-[#efefed] py-20 md:py-28"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-7 md:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="lg:sticky lg:top-28 h-fit"
          >
            <p className="text-[#7b7b83] uppercase tracking-[0.2em] text-xs md:text-sm font-semibold mb-5 flex items-center gap-2">
              <span className="text-[#b6b6bc]">&#8250;</span>
              What we do
              <span className="text-[#b6b6bc]">&#8249;</span>
            </p>

            <h2
              className="text-[#080a1f] leading-[1.02] font-semibold max-w-[14ch]"
              style={{ fontFamily: '"Manrope", sans-serif', fontSize: 'clamp(2rem,4.4vw,4rem)' }}
            >
              Services built
              <br />
              to drive impact
            </h2>

            <div className="mt-7 md:mt-8">
              <a
                href="#contact"
                data-testid="services-cta"
                className="inline-flex items-center justify-center rounded-full border border-[#d84d1c] bg-[#ff5b1f] text-white px-5 py-2.5 md:px-6 md:py-2.5 text-[1.6rem] font-semibold shadow-[0_8px_16px_-12px_rgba(0,0,0,0.35)] hover:bg-[#ea4f1a] transition-colors"
                style={{ fontFamily: '"Manrope", sans-serif', fontSize: 'clamp(1.05rem,1.25vw,1.9rem)' }}
              >
                Discuss your ideas
              </a>
              <p className="mt-3 ml-6 text-[#f26a36] text-2xl" style={{ fontFamily: '"Caveat", cursive' }}>
                Let&apos;s get started
              </p>
            </div>
          </motion.div>

          <div className="rounded-[20px] border border-[#d2d2cc] bg-[#dfdfdc] p-2.5 md:p-4">
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
