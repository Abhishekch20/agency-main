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
      setError('Unable to open your email app. Please email us directly at info@syntrix.com.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" data-testid="contact-section" className="py-16 md:py-24 bg-transparent relative overflow-hidden">
      <div className="absolute inset-0 bg-cyber-grid bg-[length:40px_40px] opacity-[0.05] dark:opacity-[0.03] pointer-events-none mix-blend-screen" />

      <div className="max-w-6xl mx-auto px-4 md:px-5 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.45 }}
          className="rounded-sm border border-border bg-card/10 backdrop-blur-xl p-3 md:p-4 shadow-[0_0_50px_rgba(0,0,0,0.1)] dark:shadow-[0_0_50px_rgba(0,0,0,0.5)]"
        >
          {isSubmitted ? (
            <div
              data-testid="contact-success"
              className="rounded-sm border border-primary/30 bg-background/80 p-10 md:p-14 text-center relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent shadow-brand-cyan-glow pulse-glow" />
              <div className="w-16 h-16 rounded-sm bg-primary/10 border border-primary/50 flex items-center justify-center mx-auto mb-6 shadow-brand-cyan-glow">
                <CheckCircle className="w-8 h-8 text-primary" />
              </div>
              <h3
                className="text-3xl md:text-4xl font-black text-foreground uppercase tracking-widest mb-3 text-shadow-glow"
                style={{ fontFamily: '"Manrope", sans-serif' }}
              >
                Transmission Sent
              </h3>
              <p className="text-primary mb-8 text-base md:text-lg tracking-widest font-medium" style={{ fontFamily: '"Manrope", sans-serif' }}>
                Signal established. Awaiting response.
              </p>
              <button
                data-testid="send-another-message"
                onClick={() => setIsSubmitted(false)}
                className="group relative inline-flex items-center gap-3 px-8 py-3 text-[13px] font-bold text-primary-foreground bg-primary uppercase tracking-widest overflow-hidden transition-all hover:scale-105"
                style={{ clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%)' }}
              >
                <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative">INITIATE NEW PING</span>
              </button>
            </div>
          ) : (
            <div className="glass-card overflow-hidden relative">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-secondary" />
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="px-6 md:px-8 py-8 md:py-10 border-b lg:border-b-0 lg:border-r border-border flex flex-col min-h-[480px] bg-background/30">
                  <div>
                    <h3
                      className="text-[1.9rem] md:text-[2.2rem] text-foreground font-black uppercase tracking-widest mb-8"
                      style={{ fontFamily: '"Manrope", sans-serif', textShadow: '0 0 15px rgba(var(--foreground),0.1)' }}
                    >
                      Establish Link
                    </h3>
                    <div className="space-y-6">
                      <div className="flex flex-wrap items-start gap-4 p-4 border border-border bg-muted/20 rounded-sm">
                        <span className="text-primary uppercase tracking-[0.2em] text-[0.82rem] font-bold min-w-[96px]" style={{ fontFamily: '"Manrope", sans-serif' }}>
                          COMM LINK:
                        </span>
                        <span className="text-foreground leading-tight font-bold tracking-wider" style={{ fontFamily: '"Manrope", sans-serif', fontSize: 'clamp(1rem,1.1vw,1.25rem)' }}>
                          +1 (234) 567-89-01
                        </span>
                      </div>
                      <div className="flex flex-wrap items-start gap-4 p-4 border border-border bg-muted/20 rounded-sm">
                        <span className="text-primary uppercase tracking-[0.2em] text-[0.82rem] font-bold min-w-[96px]" style={{ fontFamily: '"Manrope", sans-serif' }}>
                          DATA PORT:
                        </span>
                        <span className="text-foreground leading-tight font-bold tracking-wider" style={{ fontFamily: '"Manrope", sans-serif', fontSize: 'clamp(1rem,1.1vw,1.25rem)' }}>
                          info@syntrix.com
                        </span>
                      </div>
                      <div className="flex flex-wrap items-start gap-4 p-4 border border-border bg-muted/20 rounded-sm">
                        <span className="text-primary uppercase tracking-[0.2em] text-[0.82rem] font-bold min-w-[96px]" style={{ fontFamily: '"Manrope", sans-serif' }}>
                          BASE HDR:
                        </span>
                        <span className="text-muted-foreground leading-[1.4] font-medium max-w-xl text-sm md:text-base border-l-2 border-secondary pl-3">
                          1238 Echo Ridge Blvd, Suite 400<br />San Francisco, CA 94103, Node 42
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-auto pt-10">
                    <div className="p-4 border border-border bg-muted/40 rounded-sm relative">
                      <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-primary" />
                      <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-primary" />
                      <p
                        className="text-muted-foreground leading-[1.5] mb-3 italic font-medium"
                        style={{ fontFamily: '"Manrope", sans-serif', fontSize: 'clamp(0.92rem,0.92vw,1.1rem)' }}
                      >
                        "Their attention to detail and commitment to quality redefine the digital landscape. The new architecture drastically improved system integration."
                      </p>
                      <p className="text-foreground uppercase tracking-[0.2em] font-bold text-xs" style={{ fontFamily: '"Manrope", sans-serif' }}>
                        USER // ETHAN LEWIS
                        <span className="text-primary font-semibold ml-2"> [CORE_FOUNDER_URBAN]</span>
                      </p>
                    </div>
                  </div>
                </div>

                <form
                  onSubmit={handleSubmit}
                  data-testid="contact-form"
                  className="px-6 md:px-8 py-8 md:py-10 bg-muted/30 dark:bg-black/20 backdrop-blur-sm"
                >
                  <div className="space-y-6">
                    <div>
                      <label className="block text-[0.75rem] uppercase tracking-[0.2em] font-bold text-primary mb-2" style={{ fontFamily: '"Manrope", sans-serif' }}>
                        ID_NAME <span className="text-destructive">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        data-testid="contact-name-input"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="ENTER NAME"
                        className="w-full rounded-sm border border-border bg-background/50 dark:bg-muted/20 px-4 py-3.5 text-foreground placeholder:text-muted-foreground/30 font-medium uppercase tracking-wider focus:outline-none focus:border-primary focus:bg-primary/5 transition-all shadow-sm dark:shadow-[inset_0_2px_10px_rgba(0,0,0,0.5)]"
                        style={{ fontFamily: '"Manrope", sans-serif', fontSize: 'clamp(0.92rem,0.85vw,1.05rem)' }}
                      />
                    </div>

                    <div>
                      <label className="block text-[0.75rem] uppercase tracking-[0.2em] font-bold text-primary mb-2" style={{ fontFamily: '"Manrope", sans-serif' }}>
                        AUTH_EMAIL <span className="text-destructive">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        data-testid="contact-email-input"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="USER@NETWORK.COM"
                        className="w-full rounded-sm border border-border bg-background/50 dark:bg-muted/20 px-4 py-3.5 text-foreground placeholder:text-muted-foreground/30 font-medium uppercase tracking-wider focus:outline-none focus:border-primary focus:bg-primary/5 transition-all shadow-sm dark:shadow-[inset_0_2px_10px_rgba(0,0,0,0.5)]"
                        style={{ fontFamily: '"Manrope", sans-serif', fontSize: 'clamp(0.92rem,0.85vw,1.05rem)' }}
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-[0.75rem] uppercase tracking-[0.2em] font-bold text-primary mb-2" style={{ fontFamily: '"Manrope", sans-serif' }}>
                          COMM_FREQ <span className="text-destructive">*</span>
                        </label>
                        <input
                          type="text"
                          name="phone"
                          data-testid="contact-phone-input"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+00 0000 000000"
                          className="w-full rounded-sm border border-border bg-background/50 dark:bg-muted/20 px-4 py-3.5 text-foreground placeholder:text-muted-foreground/30 font-medium uppercase tracking-wider focus:outline-none focus:border-primary focus:bg-primary/5 transition-all shadow-sm dark:shadow-[inset_0_2px_10px_rgba(0,0,0,0.5)]"
                          style={{ fontFamily: '"Manrope", sans-serif', fontSize: 'clamp(0.92rem,0.85vw,1.05rem)' }}
                        />
                      </div>
                      <div>
                        <label className="block text-[0.75rem] uppercase tracking-[0.2em] font-bold text-primary mb-2" style={{ fontFamily: '"Manrope", sans-serif' }}>
                          FACTION
                        </label>
                        <input
                          type="text"
                          name="company"
                          data-testid="contact-company-input"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="ORG NAME"
                          className="w-full rounded-sm border border-border bg-background/50 dark:bg-muted/20 px-4 py-3.5 text-foreground placeholder:text-muted-foreground/30 font-medium uppercase tracking-wider focus:outline-none focus:border-primary focus:bg-primary/5 transition-all shadow-sm dark:shadow-[inset_0_2px_10px_rgba(0,0,0,0.5)]"
                          style={{ fontFamily: '"Manrope", sans-serif', fontSize: 'clamp(0.92rem,0.85vw,1.05rem)' }}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[0.75rem] uppercase tracking-[0.2em] font-bold text-primary mb-2" style={{ fontFamily: '"Manrope", sans-serif' }}>
                        PAYLOAD_DATA
                      </label>
                      <textarea
                        name="message"
                        data-testid="contact-message-input"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="INPUT TRANSMISSION DETAILS..."
                        className="w-full rounded-sm border border-border bg-background/50 dark:bg-muted/20 px-4 py-3.5 text-foreground placeholder:text-muted-foreground/30 font-medium tracking-wide focus:outline-none focus:border-primary focus:bg-primary/5 transition-all resize-none shadow-sm dark:shadow-[inset_0_2px_10px_rgba(0,0,0,0.5)]"
                        style={{ fontFamily: '"Courier New", Courier, monospace', fontSize: 'clamp(0.9rem,0.82vw,1.02rem)' }}
                      />
                    </div>

                    {error && (
                      <p data-testid="contact-error" className="text-sm text-destructive font-bold tracking-widest uppercase border-l-2 border-destructive pl-2 bg-destructive/10 py-1" style={{ fontFamily: '"Manrope", sans-serif' }}>
                        ERR: {error}
                      </p>
                    )}

                    <button
                      type="submit"
                      data-testid="contact-submit-button"
                      disabled={isSubmitting}
                      className="group relative w-full inline-flex items-center justify-center px-5 py-4 text-[14px] font-bold text-primary-foreground bg-primary uppercase tracking-widest overflow-hidden transition-all hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                      style={{ clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%)' }}
                    >
                      <span className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                      <span className="relative flex items-center gap-2">
                        {isSubmitting ? 'TRANSMITTING...' : 'INITIALIZE TRANSMISSION'}
                        {!isSubmitting && <span className="w-2 h-2 bg-primary-foreground rounded-sm animate-pulse" />}
                      </span>
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
