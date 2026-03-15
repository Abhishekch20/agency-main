import { useCallback, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    quote:
      'It was easy working with them; they understood our vision immediately and delivered a digital experience that represents our brand perfectly.',
    name: 'Jackson Carter',
    role: 'Founder',
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80',
  },
  {
    quote:
      'From concept to execution, they made everything effortless and created a digital experience that genuinely aligns with who we are.',
    name: 'Olivia Bennett',
    role: 'Manager',
    avatar:
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=120&q=80',
  },
  {
    quote:
      'They kept the whole process smooth from start to finish, and they translated our values and identity into a digital presence that feels authentic.',
    name: 'Ethan Russell',
    role: 'Data Science Consultant',
    avatar:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80',
  },
  {
    quote:
      'The team delivered a polished result with clear communication throughout. Every milestone felt controlled, intentional, and quality-driven.',
    name: 'Sophia Reed',
    role: 'Product Lead',
    avatar:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&q=80',
  },
];

const getIndex = (index, offset, total) => (index + offset + total) % total;

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  const orderedCards = useMemo(
    () => [
      testimonials[getIndex(current, -1, testimonials.length)],
      testimonials[current],
      testimonials[getIndex(current, 1, testimonials.length)],
    ],
    [current]
  );

  return (
    <section data-testid="testimonials-section" className="py-24 md:py-32 bg-transparent overflow-hidden relative">
      <div className="absolute inset-0 bg-cyber-grid bg-[length:40px_40px] opacity-[0.05] dark:opacity-[0.03] pointer-events-none mix-blend-screen" />
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none -translate-y-1/2" />

      <div className="max-w-[1220px] mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-14"
        >
          <p
            className="text-xs md:text-sm uppercase tracking-[0.25em] text-primary font-bold mb-4 drop-shadow-[0_0_8px_rgba(37,99,235,0.3)]"
            style={{ fontFamily: '"Manrope", sans-serif' }}
          >
            USER LOGS
          </p>
          <h2
            className="text-[2.2rem] md:text-[4rem] font-black text-foreground uppercase tracking-widest leading-[0.95]"
            style={{ fontFamily: '"Manrope", sans-serif', textShadow: '0 0 20px rgba(var(--foreground),0.1)' }}
          >
            System Feedback
          </h2>
        </motion.div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 items-stretch">
            {orderedCards.map((item, idx) => {
              const isActive = idx === 1;
              return (
                <motion.article
                  key={`${item.name}-${idx}`}
                  data-testid={`testimonial-card-${idx}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.05 }}
                  className={`rounded-sm border transition-all duration-300 h-full ${isActive
                    ? 'bg-primary/5 border-primary/50 shadow-brand-cyan-glow z-10 scale-105'
                    : 'bg-background/20 border-border/50 opacity-50 backdrop-blur-sm'
                    }`}
                >
                  <div className="p-1 h-full">
                    <div className={`rounded-sm border ${isActive ? 'border-primary/30 bg-background/80 backdrop-blur-xl' : 'border-border bg-background/50'} p-6 md:p-7 min-h-[330px] md:min-h-[360px] flex flex-col h-full relative overflow-hidden`}>
                      {isActive && <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent shadow-brand-cyan-glow" />}
                      <blockquote
                        className={`text-2xl leading-[1.4] italic ${isActive ? 'text-foreground' : 'text-muted-foreground'
                          }`}
                        style={{ fontFamily: '"Manrope", sans-serif', fontSize: 'clamp(1.05rem,1.35vw,1.4rem)', fontWeight: 500 }}
                      >
                        "{item.quote}"
                      </blockquote>

                      <div className="mt-auto flex items-end justify-between pt-8">
                        <div className="flex items-center gap-4 min-w-0">
                          <div className={`p-0.5 rounded-sm ${isActive ? 'bg-gradient-to-tr from-primary to-secondary shadow-brand-cyan-glow' : 'bg-muted'}`}>
                            <img
                              src={item.avatar}
                              alt={item.name}
                              className="w-12 h-12 rounded-sm object-cover border-2 border-background"
                            />
                          </div>
                          <p
                            className={`text-sm md:text-[1.02rem] leading-tight flex flex-col ${isActive ? 'text-foreground' : 'text-muted-foreground'
                              }`}
                            style={{ fontFamily: '"Manrope", sans-serif' }}
                          >
                            <span className="font-bold tracking-wider uppercase">{item.name}</span>
                            <span className={`text-xs mt-1 uppercase tracking-widest ${isActive ? 'text-primary' : 'text-muted-foreground/60'}`}>{item.role}</span>
                          </p>
                        </div>

                        <div className={`flex items-center gap-1 pl-3 shrink-0 ${isActive ? 'text-primary drop-shadow-[0_0_5px_rgba(37,99,235,0.5)]' : 'text-muted-foreground/40'}`}>
                          {Array.from({ length: 5 }).map((_, starIdx) => (
                            <Star key={starIdx} className="w-4 h-4 fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>

          <div className="mt-14 flex items-center justify-center gap-6 relative z-10">
            <button
              data-testid="testimonial-prev"
              onClick={prev}
              className="w-12 h-12 rounded-sm border border-primary/30 bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground hover:shadow-brand-cyan-glow transition-all flex items-center justify-center group active:scale-95"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <div key={idx} className={`w-2 h-2 rounded-sm transform rotate-45 transition-all ${idx === current ? 'bg-primary shadow-brand-cyan-glow scale-125' : 'bg-border'}`} />
              ))}
            </div>
            <button
              data-testid="testimonial-next"
              onClick={next}
              className="w-12 h-12 rounded-sm border border-primary/30 bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground hover:shadow-brand-cyan-glow transition-all flex items-center justify-center group active:scale-95"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
