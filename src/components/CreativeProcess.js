const steps = [
  {
    number: '01',
    title: 'Research & Define',
    description:
      'We begin by understanding the problem, the users, and the business goals from start to finish.',
  },
  {
    number: '02',
    title: 'Ideate & Design',
    description:
      'We craft clear, user-friendly flows and high-fidelity interfaces.',
  },
  {
    number: '03',
    title: 'Test & Implement',
    description:
      'Refining the final solution, testing usability, and handing off assets for development.',
  },
];

export default function CreativeProcess() {
  return (
    <section
      id="process"
      data-testid="creative-process-section"
      className="relative overflow-hidden bg-[#020617] py-16 md:py-20 font-sans transition-colors duration-500"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(37,99,235,0.05),transparent_40%)]" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-foreground to-muted-foreground/50 uppercase leading-[0.9] tracking-widest drop-shadow-[0_0_10px_rgba(var(--foreground),0.05)]"
          >
            Execution<br />Protocol
          </h2>
          <p
            className="text-sm md:text-base text-muted-foreground max-w-xs leading-relaxed font-medium"
          >
            Observe the deterministic sequence we employ to transmute abstract directives into high-fidelity digital reality.
          </p>
        </div>

        <div className="rounded-[2px] border border-border bg-card/50 backdrop-blur-md p-3 md:p-4 shadow-[inset_0_1px_0_rgba(var(--foreground),0.05),0_0_20px_rgba(0,0,0,0.1)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_0_20px_rgba(0,0,0,0.5)]">
          <div className="relative mb-6 h-[1.5px] overflow-hidden rounded-full bg-white/10">
            <div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary via-foreground to-secondary shadow-brand-cyan-glow w-full"
            />
          </div>

          <div className="grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-4">
            <article
              data-testid="process-step-01"
              className="group glass-card px-5 md:px-6 pt-6 pb-4 min-h-[200px] md:min-h-[220px] flex flex-col relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 blur-[40px] rounded-full translate-x-1/2 -translate-y-1/2 group-hover:bg-primary/20 transition-colors duration-500" />
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-sm bg-primary/20 border border-primary/50 text-xs font-bold text-primary shadow-brand-cyan-glow">
                01
              </span>
              <div className="mt-auto pt-6 relative z-10">
                <div className="mb-4 h-px w-full bg-white/20" />
                <h3 className="mb-2 text-[1.1rem] md:text-[1.2rem] leading-[1.08] font-bold text-foreground uppercase tracking-wider">
                  {steps[0].title}
                </h3>
                <p className="max-w-[95%] text-xs md:text-sm text-muted-foreground leading-[1.4] font-medium">
                  {steps[0].description}
                </p>
              </div>
            </article>

            <article
              data-testid="process-step-02"
              className="group glass-card px-5 md:px-6 pt-6 pb-4 min-h-[200px] md:min-h-[220px] flex flex-col relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-foreground/10 blur-[40px] rounded-full translate-x-1/2 -translate-y-1/2 group-hover:bg-foreground/20 transition-colors duration-500" />
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-sm bg-foreground/20 border border-foreground/50 text-xs font-bold text-foreground shadow-sm">
                02
              </span>
              <div className="mt-auto pt-6 relative z-10">
                <div className="mb-4 h-px w-full bg-white/20" />
                <h3 className="mb-2 text-[1.1rem] md:text-[1.2rem] leading-[1.08] font-bold text-foreground uppercase tracking-wider">
                  {steps[1].title}
                </h3>
                <p className="max-w-[95%] text-xs md:text-sm text-muted-foreground leading-[1.4] font-medium">
                  {steps[1].description}
                </p>
              </div>
            </article>

            <article
              data-testid="process-step-03"
              className="group glass-card px-5 md:px-6 pt-6 pb-4 min-h-[200px] md:min-h-[220px] flex flex-col relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/10 blur-[40px] rounded-full translate-x-1/2 -translate-y-1/2 group-hover:bg-secondary/20 transition-colors duration-500" />
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-sm bg-secondary/20 border border-secondary/50 text-xs font-bold text-secondary shadow-brand-purple-glow">
                03
              </span>
              <div className="mt-auto pt-6 relative z-10">
                <div className="mb-4 h-px w-full bg-white/20" />
                <h3 className="mb-2 text-[1.1rem] md:text-[1.2rem] leading-[1.08] font-bold text-foreground uppercase tracking-wider">
                  {steps[2].title}
                </h3>
                <p className="max-w-[95%] text-xs md:text-sm text-muted-foreground leading-[1.4] font-medium">
                  {steps[2].description}
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
