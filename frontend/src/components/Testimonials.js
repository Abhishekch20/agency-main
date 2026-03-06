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
    <section data-testid="testimonials-section" className="py-24 md:py-32 bg-[#efefed] overflow-hidden">
      <div className="max-w-[1220px] mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-14"
        >
          <p
            className="text-xs md:text-sm uppercase tracking-[0.2em] text-neutral-500 font-semibold mb-4"
            style={{ fontFamily: '"Manrope", sans-serif' }}
          >
            TESTIMONIALS
          </p>
          <h2
            className="text-[2.2rem] md:text-[4rem] font-extrabold text-[#0b0b1f] tracking-[-0.03em] leading-[0.95]"
            style={{ fontFamily: '"Manrope", sans-serif' }}
          >
            What clients say
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
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.05 }}
                  className={`rounded-[10px] border transition-all duration-300 h-full ${
                    isActive
                      ? 'bg-[#e9e9e7] border-[#d0d0cc] shadow-[0_10px_20px_rgba(0,0,0,0.06)]'
                      : 'bg-[#ececea] border-[#e1e1dd] opacity-45'
                  }`}
                >
                  <div className="p-3 md:p-4 h-full">
                    <div className={`rounded-[8px] border ${isActive ? 'border-[#d6d6d1] bg-[#f3f3f1]' : 'border-[#e4e4df] bg-[#f0f0ee]'} p-6 md:p-7 min-h-[330px] md:min-h-[360px] flex flex-col h-full`}>
                      <blockquote
                        className={`text-3xl leading-[1.28] ${
                          isActive ? 'text-[#0b0b1f]' : 'text-neutral-500'
                        }`}
                        style={{ fontFamily: '"Manrope", sans-serif', fontSize: 'clamp(1.05rem,1.35vw,1.7rem)', fontWeight: 500 }}
                      >
                        {item.quote}
                      </blockquote>

                      <div className="mt-auto flex items-end justify-between pt-8">
                        <div className="flex items-center gap-3 min-w-0">
                          <img
                            src={item.avatar}
                            alt={item.name}
                            className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
                          />
                          <p
                            className={`text-sm md:text-[1.02rem] leading-tight ${
                              isActive ? 'text-[#0b0b1f]' : 'text-neutral-500'
                            }`}
                            style={{ fontFamily: '"Manrope", sans-serif' }}
                          >
                            <span className="font-semibold">{item.name}</span>
                            <span className="mx-2 opacity-70">-</span>
                            <span>{item.role}</span>
                          </p>
                        </div>

                        <div className={`flex items-center gap-0.5 pl-3 shrink-0 ${isActive ? 'text-[#ff5a1f]' : 'text-[#edc0ad]'}`}>
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

          <div className="mt-10 flex items-center justify-center gap-5">
            <button
              data-testid="testimonial-prev"
              onClick={prev}
              className="w-10 h-10 rounded-full border border-[#d7d7d2] bg-[#f6f6f4] text-neutral-500 hover:text-neutral-800 hover:border-[#c9c9c3] transition-colors flex items-center justify-center"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              data-testid="testimonial-next"
              onClick={next}
              className="w-10 h-10 rounded-full border border-[#d7d7d2] bg-[#f6f6f4] text-neutral-500 hover:text-neutral-800 hover:border-[#c9c9c3] transition-colors flex items-center justify-center"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
