"use client";

import { useState } from 'react';
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
      setError('Unable to open your email app. Please email us directly at info@syntrix.com.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" data-testid="contact-section" className="py-16 md:py-24 bg-[#020617] relative overflow-hidden transition-colors duration-500">
      <div className="absolute inset-0 bg-cyber-grid bg-[length:30px_30px] opacity-[0.05] dark:opacity-[0.03] pointer-events-none mix-blend-screen" />

      <div className="max-w-5xl mx-auto px-4 md:px-5 relative z-10">
        <div
          className="rounded-sm border border-border bg-card/10 backdrop-blur-xl p-2.5 md:p-3 shadow-[0_0_40px_rgba(0,0,0,0.1)] dark:shadow-[0_0_40px_rgba(0,0,0,0.5)]"
        >
          {isSubmitted ? (
            <div
              data-testid="contact-success"
              className="rounded-sm border border-primary/30 bg-background/80 p-8 md:p-10 text-center relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent shadow-brand-cyan-glow" />
              <div className="w-12 h-12 rounded-sm bg-primary/10 border border-primary/50 flex items-center justify-center mx-auto mb-4 shadow-brand-cyan-glow">
                <CheckCircle className="w-6 h-6 text-primary" />
              </div>
              <h3
                className="text-2xl md:text-3xl font-black text-foreground uppercase tracking-widest mb-2 text-shadow-glow"
                style={{ fontFamily: '"Manrope", sans-serif' }}
              >
                Transmission Sent
              </h3>
              <p className="text-primary mb-6 text-sm md:text-base tracking-widest font-medium" style={{ fontFamily: '"Manrope", sans-serif' }}>
                Signal established. Awaiting response.
              </p>
              <button
                data-testid="send-another-message"
                onClick={() => setIsSubmitted(false)}
                className="group relative inline-flex items-center gap-2.5 px-6 py-2.5 text-[11px] font-bold text-primary-foreground bg-primary uppercase tracking-widest overflow-hidden transition-all"
                style={{ clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%)' }}
              >
                <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative">INITIATE NEW PING</span>
              </button>
            </div>
          ) : (
            <div className="glass-card overflow-hidden relative">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-secondary" />
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="px-5 md:px-6 py-6 md:py-8 border-b lg:border-b-0 lg:border-r border-border flex flex-col min-h-[400px] bg-background/30">
                  <div>
                    <h3
                      className="text-[1.4rem] md:text-[1.6rem] text-foreground font-black uppercase tracking-widest mb-6"
                      style={{ fontFamily: '"Manrope", sans-serif', textShadow: '0 0 10px rgba(var(--foreground),0.05)' }}
                    >
                      Establish Link
                    </h3>
                    <div className="space-y-4">
                      <div className="flex flex-wrap items-start gap-3 p-3 border border-border bg-muted/20 rounded-sm">
                        <span className="text-primary uppercase tracking-[0.2em] text-[0.7rem] font-bold min-w-[80px]" style={{ fontFamily: '"Manrope", sans-serif' }}>
                          COMM LINK:
                        </span>
                        <span className="text-foreground leading-tight font-bold tracking-wider" style={{ fontFamily: '"Manrope", sans-serif', fontSize: 'clamp(0.85rem,1vw,1rem)' }}>
                          +1 (234) 567-89-01
                        </span>
                      </div>
                      <div className="flex flex-wrap items-start gap-3 p-3 border border-border bg-muted/20 rounded-sm">
                        <span className="text-primary uppercase tracking-[0.2em] text-[0.7rem] font-bold min-w-[80px]" style={{ fontFamily: '"Manrope", sans-serif' }}>
                          DATA PORT:
                        </span>
                        <span className="text-foreground leading-tight font-bold tracking-wider" style={{ fontFamily: '"Manrope", sans-serif', fontSize: 'clamp(0.85rem,1vw,1rem)' }}>
                          info@syntrix.com
                        </span>
                      </div>
                      <div className="flex flex-wrap items-start gap-3 p-3 border border-border bg-muted/20 rounded-sm">
                        <span className="text-primary uppercase tracking-[0.2em] text-[0.7rem] font-bold min-w-[80px]" style={{ fontFamily: '"Manrope", sans-serif' }}>
                          BASE HDR:
                        </span>
                        <span className="text-muted-foreground leading-[1.4] font-medium max-w-xl text-[12px] md:text-[13px] border-l-2 border-secondary pl-2.5">
                          1238 Echo Ridge Blvd, Suite 400<br />San Francisco, CA 94103, Node 42
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-auto pt-8">
                    <div className="p-3 border border-border bg-muted/40 rounded-sm relative">
                      <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t-2 border-l-2 border-primary" />
                      <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b-2 border-r-2 border-primary" />
                      <p
                        className="text-muted-foreground leading-[1.5] mb-2 italic font-medium"
                        style={{ fontFamily: '"Manrope", sans-serif', fontSize: 'clamp(0.8rem,0.8vw,0.92rem)' }}
                      >
                        "Their attention to detail and commitment to quality redefine the digital landscape. The new architecture drastically improved system integration."
                      </p>
                      <p className="text-foreground uppercase tracking-[0.2em] font-bold text-[10px]" style={{ fontFamily: '"Manrope", sans-serif' }}>
                        USER // ETHAN LEWIS
                        <span className="text-primary font-semibold ml-2"> [CORE_FOUNDER_URBAN]</span>
                      </p>
                    </div>
                  </div>
                </div>

                <form
                  onSubmit={handleSubmit}
                  data-testid="contact-form"
                  className="px-5 md:px-6 py-6 md:py-8 bg-muted/30 dark:bg-black/20 backdrop-blur-sm"
                >
                  <div className="space-y-4">
                    <div>
                      <label className="block text-[0.65rem] uppercase tracking-[0.2em] font-bold text-primary mb-1.5" style={{ fontFamily: '"Manrope", sans-serif' }}>
                        ID_NAME <span className="text-destructive">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        data-testid="contact-name-input"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="ENTER NAME"
                        className="w-full rounded-sm border border-border bg-background/50 dark:bg-muted/20 px-3 py-2.5 text-foreground placeholder:text-muted-foreground/30 font-medium uppercase tracking-wider focus:outline-none focus:border-primary focus:bg-primary/5 transition-all shadow-sm dark:shadow-[inset_0_2px_10px_rgba(0,0,0,0.5)]"
                        style={{ fontFamily: '"Manrope", sans-serif', fontSize: 'clamp(0.8rem,0.8vw,0.92rem)' }}
                      />
                    </div>

                    <div>
                      <label className="block text-[0.65rem] uppercase tracking-[0.2em] font-bold text-primary mb-1.5" style={{ fontFamily: '"Manrope", sans-serif' }}>
                        AUTH_EMAIL <span className="text-destructive">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        data-testid="contact-email-input"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="USER@NETWORK.COM"
                        className="w-full rounded-sm border border-border bg-background/50 dark:bg-muted/20 px-3 py-2.5 text-foreground placeholder:text-muted-foreground/30 font-medium uppercase tracking-wider focus:outline-none focus:border-primary focus:bg-primary/5 transition-all shadow-sm dark:shadow-[inset_0_2px_10px_rgba(0,0,0,0.5)]"
                        style={{ fontFamily: '"Manrope", sans-serif', fontSize: 'clamp(0.8rem,0.8vw,0.92rem)' }}
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[0.65rem] uppercase tracking-[0.2em] font-bold text-primary mb-1.5" style={{ fontFamily: '"Manrope", sans-serif' }}>
                          COMM_FREQ <span className="text-destructive">*</span>
                        </label>
                        <input
                          type="text"
                          name="phone"
                          data-testid="contact-phone-input"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+00 0000 000000"
                          className="w-full rounded-sm border border-border bg-background/50 dark:bg-muted/20 px-3 py-2.5 text-foreground placeholder:text-muted-foreground/30 font-medium uppercase tracking-wider focus:outline-none focus:border-primary focus:bg-primary/5 transition-all shadow-sm dark:shadow-[inset_0_2px_10px_rgba(0,0,0,0.5)]"
                          style={{ fontFamily: '"Manrope", sans-serif', fontSize: 'clamp(0.8rem,0.8vw,0.92rem)' }}
                        />
                      </div>
                      <div>
                        <label className="block text-[0.65rem] uppercase tracking-[0.2em] font-bold text-primary mb-1.5" style={{ fontFamily: '"Manrope", sans-serif' }}>
                          FACTION
                        </label>
                        <input
                          type="text"
                          name="company"
                          data-testid="contact-company-input"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="ORG NAME"
                          className="w-full rounded-sm border border-border bg-background/50 dark:bg-muted/20 px-3 py-2.5 text-foreground placeholder:text-muted-foreground/30 font-medium uppercase tracking-wider focus:outline-none focus:border-primary focus:bg-primary/5 transition-all shadow-sm dark:shadow-[inset_0_2px_10px_rgba(0,0,0,0.5)]"
                          style={{ fontFamily: '"Manrope", sans-serif', fontSize: 'clamp(0.8rem,0.8vw,0.92rem)' }}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[0.65rem] uppercase tracking-[0.2em] font-bold text-primary mb-1.5" style={{ fontFamily: '"Manrope", sans-serif' }}>
                        PAYLOAD_DATA
                      </label>
                      <textarea
                        name="message"
                        data-testid="contact-message-input"
                        rows={3}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="INPUT TRANSMISSION DETAILS..."
                        className="w-full rounded-sm border border-border bg-background/50 dark:bg-muted/20 px-3 py-2.5 text-foreground placeholder:text-muted-foreground/30 font-medium tracking-wide focus:outline-none focus:border-primary focus:bg-primary/5 transition-all resize-none shadow-sm dark:shadow-[inset_0_2px_10_rgba(0,0,0,0.5)]"
                        style={{ fontFamily: '"Courier New", Courier, monospace', fontSize: 'clamp(0.78rem,0.78vw,0.88rem)' }}
                      />
                    </div>

                    {error && (
                      <p data-testid="contact-error" className="text-[11px] text-destructive font-bold tracking-widest uppercase border-l-2 border-destructive pl-2 bg-destructive/10 py-1" style={{ fontFamily: '"Manrope", sans-serif' }}>
                        ERR: {error}
                      </p>
                    )}

                    <button
                      type="submit"
                      data-testid="contact-submit-button"
                      disabled={isSubmitting}
                      className="group relative w-full inline-flex items-center justify-center px-4 py-3 text-[12px] font-bold text-primary-foreground bg-primary uppercase tracking-widest overflow-hidden transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                      style={{ clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%)' }}
                    >
                      <span className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                      <span className="relative flex items-center gap-2">
                        {isSubmitting ? 'TRANSMITTING...' : 'INITIALIZE TRANSMISSION'}
                        {!isSubmitting && <span className="w-1.5 h-1.5 bg-primary-foreground rounded-sm" />}
                      </span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
