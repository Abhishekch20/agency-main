const leftItems = [
  'Slow, unclear timelines',
  'Extra charges for changes',
  'No clear process',
  'Designs break in dev',
  'Complex, hard builds',
];

const rightItems = [
  'Clear weekly updates',
  'Transparent pricing',
  'Documented workflow',
  'Design-dev alignment',
  'Clean, scalable builds',
];

export default function StripeAnimation() {
  return (
    <section data-theme="light" className="py-12 md:py-16 bg-slate-50 relative overflow-hidden transition-colors duration-500">
      <div className="absolute inset-0 bg-cyber-grid-light pointer-events-none" />
      <div className="max-w-5xl mx-auto px-5 md:px-8">
        <div
          className="bg-white border border-slate-200 rounded-xl p-4 md:p-7 relative z-10 shadow-lg shadow-slate-200/50"
        >
          <div className="max-w-2xl">
            <h3 className="text-[1.1rem] md:text-[1.55rem] leading-[1.12] font-semibold text-slate-900">
              We know choosing the right agency is hard because few{' '}
              <span className="text-primary">truly deliver</span>.
            </h3>

            <p className="mt-3 text-[1.1rem] md:text-[1.55rem] leading-[1.12] font-semibold text-slate-900">
              So we made it simple <span className="text-primary">to compare</span>{' '}
              how we work{' '}
              <span className="inline-flex w-6 h-3.5 rounded-full bg-primary align-middle mx-1">
                <span className="w-2.5 h-2.5 bg-white rounded-full my-auto ml-0.5" />
              </span>
              versus what you usually get <span className="text-primary">in the market.</span>
            </p>
          </div>

          <div className="mt-7 grid grid-cols-1 md:grid-cols-2 gap-0 rounded-xl overflow-hidden border border-slate-200 shadow-md">
            <div className="bg-slate-50">
              <div className="px-5 md:px-6 py-3.5 border-b border-slate-200">
                <p className="text-[0.85rem] md:text-[1.05rem] font-bold text-slate-600 uppercase tracking-widest">Other agencies</p>
              </div>
              {leftItems.map((item) => (
                <div key={item} className="px-5 md:px-6 py-3 border-b border-slate-100 last:border-b-0 flex items-center gap-3">
                  <span className="text-red-500 text-base font-bold">×</span>
                  <span className="text-slate-600 text-[0.8rem] md:text-[0.95rem] font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="relative overflow-hidden bg-primary">
              <div className="relative px-5 md:px-6 py-3.5 border-b border-white/20 bg-white/10">
                <p className="text-[0.85rem] md:text-[1.05rem] font-black text-white tracking-widest uppercase">Syntrix agency</p>
              </div>
              {rightItems.map((item) => (
                <div key={item} className="relative px-5 md:px-6 py-3 flex items-center gap-3 border-b border-white/5 last:border-b-0 group">
                  <span className="text-white text-base font-bold group-hover:translate-x-1 transition-transform">✓</span>
                  <span className="text-white font-bold text-[0.8rem] md:text-[0.95rem] tracking-tight">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
