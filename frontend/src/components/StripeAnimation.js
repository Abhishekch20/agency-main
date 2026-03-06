import { motion } from 'framer-motion';

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
    <section className="py-8 md:py-10 bg-[#efefed]">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-120px' }}
          transition={{ duration: 0.55 }}
          className="rounded-2xl bg-[#efefed] border border-neutral-300 p-5 md:p-7"
        >
          <div className="max-w-3xl">
            <h3 className="text-[1.5rem] md:text-[2.35rem] leading-[1.12] font-semibold text-[#0b0b1f]">
              We know choosing the right agency is hard because few{' '}
              <span className="text-[#f1592a]">truly deliver</span>.
            </h3>

            <p className="mt-4 text-[1.5rem] md:text-[2.35rem] leading-[1.12] font-semibold text-[#0b0b1f]">
              So we made it simple <span className="text-[#f1592a]">to compare</span>{' '}
              how we work{' '}
              <span className="inline-flex w-8 h-5 rounded-full bg-[#f1592a] align-middle mx-1.5">
                <span className="w-4 h-4 bg-white rounded-full my-auto ml-0.5" />
              </span>
              versus what you usually get <span className="text-[#f1592a]">in the market.</span>
            </p>
          </div>

          <div className="mt-7 grid grid-cols-1 md:grid-cols-2 gap-0 rounded-xl overflow-hidden border border-neutral-300">
            <div className="bg-[#f3f3f3]">
              <div className="px-5 md:px-6 py-4 border-b border-neutral-300">
                <p className="text-[1.7rem] md:text-[2rem] font-medium text-[#0b0b1f]">Other agencies</p>
              </div>
              {leftItems.map((item) => (
                <div key={item} className="px-5 md:px-6 py-4 border-b border-neutral-300 last:border-b-0 flex items-center gap-3">
                  <span className="text-neutral-500 text-lg">{'>'}</span>
                  <span className="text-neutral-600 text-[1.28rem] md:text-[1.55rem]">{item}</span>
                </div>
              ))}
            </div>

            <div className="bg-[#f7a456]">
              <div className="px-5 md:px-6 py-4 border-b border-[#e79a50]">
                <p className="text-[1.7rem] md:text-[2rem] font-medium text-[#0b0b1f]">Agnos agency</p>
              </div>
              {rightItems.map((item) => (
                <div key={item} className="px-5 md:px-6 py-4 border-b border-[#e79a50] last:border-b-0 flex items-center gap-3">
                  <span className="text-[#0b0b1f] text-lg">{'>'}</span>
                  <span className="text-[#0b0b1f] text-[1.28rem] md:text-[1.55rem]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
