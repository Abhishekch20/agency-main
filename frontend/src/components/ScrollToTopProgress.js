import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTopProgress() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const nextProgress = docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0;

      setProgress(nextProgress);
      setVisible(scrollTop > 180);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const size = 52;
  const strokeWidth = 4;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - progress);

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-6 right-6 z-[60] w-[52px] h-[52px] rounded-full bg-[#0b0b1f] text-white shadow-[0_14px_26px_rgba(11,11,31,0.35)] transition-all duration-300 hover:-translate-y-0.5 inline-flex items-center justify-center ${
        visible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-3 pointer-events-none"
      }`}
      data-testid="scroll-to-top-progress"
    >
      <svg
        className="absolute inset-0 -rotate-90"
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
      >
        <defs>
          <linearGradient id="scroll-progress-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff7a18" />
            <stop offset="55%" stopColor="#ff5f6d" />
            <stop offset="100%" stopColor="#7b61ff" />
          </linearGradient>
        </defs>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="rgba(255,255,255,0.18)"
          strokeWidth={strokeWidth}
          fill="none"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="url(#scroll-progress-gradient)"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{ transition: "stroke-dashoffset 120ms linear" }}
        />
      </svg>
      <span className="relative z-10 inline-flex items-center justify-center">
        <ArrowUp className="w-5 h-5" />
      </span>
    </button>
  );
}
