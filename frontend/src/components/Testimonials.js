import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    quote:
      'An investment in Syntrix is an investment that returns ten-fold for your brand. Absolutely exceptional work.',
    name: 'Robert Martinez',
    title: 'CEO of Future Solutions',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80',
  },
  {
    quote:
      'Transformed our entire digital presence. The team at Syntrix delivered beyond our expectations with incredible attention to detail.',
    name: 'Sarah Johnson',
    title: 'CTO at InnovateTech',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80',
  },
  {
    quote:
      'Their strategic approach and technical excellence helped us achieve a 300% increase in online conversions within 6 months.',
    name: 'Michael Chen',
    title: 'Founder of GrowthLab',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80',
  },
  {
    quote:
      'Working with Syntrix was a game-changer for our startup. They understood our vision and brought it to life beautifully.',
    name: 'Emily Park',
    title: 'VP Product at Nexus AI',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  return (
    <section data-testid="testimonials-section" className="py-24 md:py-32 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-[#635BFF] tracking-wide uppercase mb-4">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
            What Our Clients Say
          </h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Card */}
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-2xl border border-slate-100 p-8 md:p-12 shadow-sm"
            data-testid="testimonial-card"
          >
            <Quote className="w-10 h-10 text-[#635BFF]/20 mb-6" />
            <blockquote className="text-xl md:text-2xl font-medium text-slate-800 leading-relaxed mb-8">
              "{testimonials[current].quote}"
            </blockquote>
            <div className="flex items-center gap-4">
              <img
                src={testimonials[current].avatar}
                alt={testimonials[current].name}
                className="w-12 h-12 rounded-full object-cover ring-2 ring-slate-100"
              />
              <div>
                <p className="text-base font-semibold text-slate-900">
                  {testimonials[current].name}
                </p>
                <p className="text-sm text-slate-500">{testimonials[current].title}</p>
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              data-testid="testimonial-prev"
              onClick={prev}
              className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-900 hover:border-slate-300 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  data-testid={`testimonial-dot-${i}`}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    i === current ? 'bg-[#635BFF]' : 'bg-slate-200 hover:bg-slate-300'
                  }`}
                />
              ))}
            </div>
            <button
              data-testid="testimonial-next"
              onClick={next}
              className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-900 hover:border-slate-300 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
