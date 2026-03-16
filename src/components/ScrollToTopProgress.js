"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTopProgress() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setVisible(scrollTop > 180);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "auto" })}
      className="fixed bottom-4 right-4 z-[60] w-[32px] h-[32px] md:w-[38px] md:h-[38px] rounded-full bg-[#0b0b1f] text-white shadow-[0_10px_20px_rgba(11,11,31,0.35)] inline-flex items-center justify-center opacity-100 pointer-events-auto hover:bg-primary transition-colors"
      data-testid="scroll-to-top-progress"
    >
      <ArrowUp className="w-4 h-4" />
    </button>
  );
}
