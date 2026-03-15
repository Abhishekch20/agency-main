import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setError('Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      const subject = encodeURIComponent(`New project inquiry from ${formData.name}`);
      const body = encodeURIComponent(
        [
          `Name: ${formData.name}`,
          `Email: ${formData.email}`,
          `Phone: ${formData.phone}`,
          `Company: ${formData.company || 'Not provided'}`,
          '',
          'Message:',
          formData.message,
        ].join('\n')
      );

      window.location.href = `mailto:support@example.com?subject=${subject}&body=${body}`;
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', company: '', message: '' });
    } catch (err) {
      setError('Unable to open your email app. Please email us directly at support@example.com.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" data-testid="contact-section" className="py-16 md:py-20 bg-[#efefed]">
      <div className="max-w-5xl mx-auto px-4 md:px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.45 }}
          className="rounded-[16px] border border-[#d4d4cf] bg-[#e8e8e6] p-3 md:p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.35)]"
        >
          {isSubmitted ? (
            <div
              data-testid="contact-success"
              className="rounded-xl border border-[#d8d8d3] bg-[#efefed] p-10 md:p-14 text-center"
            >
              <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-green-500" />
              </div>
              <h3
                className="text-3xl md:text-4xl font-bold text-[#0b0b1f] mb-3"
                style={{ fontFamily: '"Manrope", sans-serif' }}
              >
                Message sent!
              </h3>
              <p className="text-neutral-600 mb-6 text-base md:text-lg" style={{ fontFamily: '"Manrope", sans-serif' }}>
                Your email app has been opened with your message ready to send.
              </p>
              <button
                data-testid="send-another-message"
                onClick={() => setIsSubmitted(false)}
                className="inline-flex items-center px-5 py-2.5 rounded-full bg-[#F97316] text-white text-sm font-semibold hover:bg-[#EA580C] transition-colors"
                style={{ fontFamily: '"Manrope", sans-serif' }}
              >
                Send another message
              </button>
            </div>
          ) : (
            <div className="rounded-xl border border-[#d8d8d3] bg-[#efefed] overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="px-5 md:px-6 py-5 md:py-6 border-b lg:border-b-0 lg:border-r border-[#d2d2cd] flex flex-col min-h-[480px]">
                  <div>
                    <h3
                      className="text-[1.9rem] md:text-[2rem] text-[#0b0b1f] font-semibold mb-6"
                      style={{ fontFamily: '"Manrope", sans-serif' }}
                    >
                      Start a Conversation
                    </h3>
                    <div className="space-y-5">
                      <div className="flex flex-wrap items-start gap-3">
                        <span className="text-neutral-500 uppercase tracking-[0.16em] text-[0.82rem] font-semibold min-w-[96px]" style={{ fontFamily: '"Manrope", sans-serif' }}>
                          Call on:
                        </span>
                        <span className="text-[#161625] leading-tight font-medium" style={{ fontFamily: '"Manrope", sans-serif', fontSize: 'clamp(1rem,1.1vw,1.25rem)' }}>
                          +1 (234) 567-89-01
                        </span>
                      </div>
                      <div className="flex flex-wrap items-start gap-3">
                        <span className="text-neutral-500 uppercase tracking-[0.16em] text-[0.82rem] font-semibold min-w-[96px]" style={{ fontFamily: '"Manrope", sans-serif' }}>
                          Email on:
                        </span>
                        <span className="text-[#161625] leading-tight font-medium" style={{ fontFamily: '"Manrope", sans-serif', fontSize: 'clamp(1rem,1.1vw,1.25rem)' }}>
                          support@example.com
                        </span>
                      </div>
                      <div className="flex flex-wrap items-start gap-3">
                        <span className="text-neutral-500 uppercase tracking-[0.16em] text-[0.82rem] font-semibold min-w-[96px]" style={{ fontFamily: '"Manrope", sans-serif' }}>
                          Address:
                        </span>
                        <span className="text-[#161625] leading-[1.3] font-medium max-w-xl" style={{ fontFamily: '"Manrope", sans-serif', fontSize: 'clamp(1rem,1.05vw,1.22rem)' }}>
                          1238 Echo Ridge Blvd, Suite 400, San Francisco, CA 94103, United States
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-auto pt-8">
                    <div className="h-px w-full bg-[#d2d2cd] mb-6" />
                    <p
                      className="text-neutral-600 leading-[1.35] mb-4"
                      style={{ fontFamily: '"Manrope", sans-serif', fontWeight: 600, fontSize: 'clamp(0.92rem,0.92vw,1.1rem)' }}
                    >
                      Their attention to detail and commitment to quality set them apart. The new dashboard improved both usability and client satisfaction.
                    </p>
                    <p className="text-[#0b0b1f] uppercase tracking-[0.15em] font-semibold text-xs md:text-sm" style={{ fontFamily: '"Manrope", sans-serif' }}>
                      Ethan Lewis
                      <span className="text-neutral-500 font-semibold"> - Founder, UrbanPay</span>
                    </p>
                  </div>
                </div>

                <form
                  onSubmit={handleSubmit}
                  data-testid="contact-form"
                  className="px-5 md:px-6 py-5 md:py-6"
                >
                  <div className="space-y-4">
                    <div>
                      <label className="block text-[0.82rem] uppercase tracking-[0.14em] font-semibold text-[#181827] mb-2.5" style={{ fontFamily: '"Manrope", sans-serif' }}>
                        Name*
                      </label>
                      <input
                        type="text"
                        name="name"
                        data-testid="contact-name-input"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Dennis Barrett"
                        className="w-full rounded-xl border border-[#ccccc7] bg-[#e5e5e3] px-4 py-3 text-[#181827] placeholder:text-neutral-500 leading-tight focus:outline-none focus:border-[#a7a7a1] transition-colors"
                        style={{ fontFamily: '"Manrope", sans-serif', fontSize: 'clamp(0.92rem,0.85vw,1.05rem)' }}
                      />
                    </div>

                    <div>
                      <label className="block text-[0.82rem] uppercase tracking-[0.14em] font-semibold text-[#181827] mb-2.5" style={{ fontFamily: '"Manrope", sans-serif' }}>
                        Email*
                      </label>
                      <input
                        type="email"
                        name="email"
                        data-testid="contact-email-input"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="dannis@company.com"
                        className="w-full rounded-xl border border-[#ccccc7] bg-[#e5e5e3] px-4 py-3 text-[#181827] placeholder:text-neutral-500 leading-tight focus:outline-none focus:border-[#a7a7a1] transition-colors"
                        style={{ fontFamily: '"Manrope", sans-serif', fontSize: 'clamp(0.92rem,0.85vw,1.05rem)' }}
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[0.82rem] uppercase tracking-[0.14em] font-semibold text-[#181827] mb-2.5" style={{ fontFamily: '"Manrope", sans-serif' }}>
                          Phone*
                        </label>
                        <input
                          type="text"
                          name="phone"
                          data-testid="contact-phone-input"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+44 7480 734898"
                          className="w-full rounded-xl border border-[#ccccc7] bg-[#e5e5e3] px-4 py-3 text-[#181827] placeholder:text-neutral-500 leading-tight focus:outline-none focus:border-[#a7a7a1] transition-colors"
                          style={{ fontFamily: '"Manrope", sans-serif', fontSize: 'clamp(0.92rem,0.85vw,1.05rem)' }}
                        />
                      </div>
                      <div>
                        <label className="block text-[0.82rem] uppercase tracking-[0.14em] font-semibold text-[#181827] mb-2.5" style={{ fontFamily: '"Manrope", sans-serif' }}>
                          Company
                        </label>
                        <input
                          type="text"
                          name="company"
                          data-testid="contact-company-input"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Webflow"
                          className="w-full rounded-xl border border-[#ccccc7] bg-[#e5e5e3] px-4 py-3 text-[#181827] placeholder:text-neutral-500 leading-tight focus:outline-none focus:border-[#a7a7a1] transition-colors"
                          style={{ fontFamily: '"Manrope", sans-serif', fontSize: 'clamp(0.92rem,0.85vw,1.05rem)' }}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[0.82rem] uppercase tracking-[0.14em] font-semibold text-[#181827] mb-2.5" style={{ fontFamily: '"Manrope", sans-serif' }}>
                        Message
                      </label>
                      <textarea
                        name="message"
                        data-testid="contact-message-input"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Write what's on your mind"
                        className="w-full rounded-xl border border-[#ccccc7] bg-[#e5e5e3] px-4 py-3.5 text-[#181827] placeholder:text-neutral-500 leading-tight focus:outline-none focus:border-[#a7a7a1] transition-colors resize-none"
                        style={{ fontFamily: '"Manrope", sans-serif', fontSize: 'clamp(0.9rem,0.82vw,1.02rem)' }}
                      />
                    </div>

                    {error && (
                      <p data-testid="contact-error" className="text-sm text-red-600" style={{ fontFamily: '"Manrope", sans-serif' }}>
                        {error}
                      </p>
                    )}

                    <button
                      type="submit"
                      data-testid="contact-submit-button"
                      disabled={isSubmitting}
                      className="inline-flex items-center justify-center min-w-[180px] px-5 py-2.5 rounded-full bg-[#F97316] text-white text-[0.95rem] font-semibold hover:bg-[#EA580C] disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
                      style={{ fontFamily: '"Manrope", sans-serif' }}
                    >
                      {isSubmitting ? 'Sending...' : 'Send a message'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
