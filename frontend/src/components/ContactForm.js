import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
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
    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill in all required fields.');
      return;
    }
    setIsSubmitting(true);
    setError('');
    try {
      await axios.post(`${BACKEND_URL}/api/contact`, formData);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', company: '', message: '' });
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" data-testid="contact-section" className="py-24 md:py-32 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-medium text-[#635BFF] tracking-wide uppercase mb-4">
              Get in touch
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight mb-6">
              Let's Build Something Extraordinary
            </h2>
            <p className="text-base md:text-lg text-slate-500 leading-relaxed mb-8">
              Ready to transform your digital presence? Tell us about your project
              and we'll get back to you within 24 hours.
            </p>
            <div className="space-y-4">
              {[
                'Free initial consultation',
                'Custom project proposal',
                'Transparent pricing',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#635BFF]" />
                  <span className="text-slate-600 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {isSubmitted ? (
              <div
                data-testid="contact-success"
                className="bg-white rounded-2xl border border-slate-100 p-8 md:p-10 text-center shadow-sm"
              >
                <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  Message Sent!
                </h3>
                <p className="text-slate-500 mb-6">
                  Thanks for reaching out. We'll get back to you within 24 hours.
                </p>
                <button
                  data-testid="send-another-message"
                  onClick={() => setIsSubmitted(false)}
                  className="text-[#635BFF] font-medium hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                data-testid="contact-form"
                className="bg-white rounded-2xl border border-slate-100 p-8 md:p-10 shadow-sm space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      data-testid="contact-name-input"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#635BFF]/20 focus:border-[#635BFF] transition-shadow"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Email <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      data-testid="contact-email-input"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#635BFF]/20 focus:border-[#635BFF] transition-shadow"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    data-testid="contact-company-input"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#635BFF]/20 focus:border-[#635BFF] transition-shadow"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    Message <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    name="message"
                    data-testid="contact-message-input"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#635BFF]/20 focus:border-[#635BFF] transition-shadow resize-none"
                  />
                </div>
                {error && (
                  <p data-testid="contact-error" className="text-sm text-red-500">
                    {error}
                  </p>
                )}
                <button
                  type="submit"
                  data-testid="contact-submit-button"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 text-[15px] font-medium text-white bg-[#635BFF] rounded-full shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 hover:bg-[#5851DF] disabled:opacity-60 disabled:cursor-not-allowed transition-all hover:-translate-y-0.5"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
