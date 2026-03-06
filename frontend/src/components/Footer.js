import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const socialLinks = [
  { label: 'Facebook', href: '#' },
  { label: 'Instagram', href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'Twitter', href: '#' },
];

const siteLinks = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#' },
  { label: 'Service', href: '#services' },
  { label: 'Project', href: '#process' },
];

export default function Footer() {
  const [email, setEmail] = useState('');

  return (
    <footer data-testid="footer" className="bg-[#0a0a0a] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-20 md:pt-28 pb-14 md:pb-20">
        {/* Top: CTA + Email */}
        <div className="text-center mb-24 md:mb-32">
          <p className="text-sm md:text-base text-neutral-400 italic mb-6">
            Reach out if you're ready to make something amazing together.
          </p>
          <a
            href="mailto:info@syntrix.com"
            data-testid="footer-email-link"
            className="text-4xl sm:text-6xl md:text-8xl font-black uppercase tracking-tighter text-white hover:text-neutral-300 transition-colors"
          >
            info@syntrix.com
          </a>
        </div>

        {/* Bottom: 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Social Links */}
          <div className="space-y-5">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                data-testid={`social-${link.label.toLowerCase()}`}
                className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-white hover:text-neutral-400 transition-colors"
              >
                {link.label}
                <ArrowUpRight className="w-4 h-4" />
              </a>
            ))}
          </div>

          {/* Site Links */}
          <div className="space-y-5">
            {siteLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                data-testid={`footer-link-${link.label.toLowerCase()}`}
                className="block text-sm font-bold uppercase tracking-widest text-white hover:text-neutral-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Newsletter */}
          <div>
            <p className="text-sm text-neutral-400 italic leading-relaxed mb-10">
              Sign up for our newsletter to get latest insights and updates
            </p>
            <form
              data-testid="newsletter-form"
              onSubmit={(e) => { e.preventDefault(); setEmail(''); }}
              className="flex items-center gap-3"
            >
              <div className="flex-1 border-b border-neutral-600">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email address"
                  data-testid="newsletter-email-input"
                  className="w-full bg-transparent text-sm text-white placeholder:text-neutral-500 italic py-3 focus:outline-none"
                />
              </div>
              <button
                type="submit"
                data-testid="newsletter-subscribe-button"
                className="flex items-center gap-1.5 px-4 py-2 bg-white text-black text-xs font-medium rounded-full hover:bg-neutral-200 transition-colors shrink-0"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-black" />
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}
