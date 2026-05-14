"use client";

import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/90 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="text-[#f5f0e8] font-bold text-xl tracking-tight">
          DepthTour
        </span>

        <div className="hidden md:flex items-center gap-8">
          <a
            href="#how-it-works"
            className="text-[#888888] hover:text-[#f5f0e8] text-sm transition-colors"
          >
            How it works
          </a>
          <a
            href="#pricing"
            className="text-[#888888] hover:text-[#f5f0e8] text-sm transition-colors"
          >
            Pricing
          </a>
          <a
            href="#faq"
            className="text-[#888888] hover:text-[#f5f0e8] text-sm transition-colors"
          >
            FAQ
          </a>
        </div>

        <a
          href="#cta"
          className="bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium px-4 py-2 rounded-full transition-colors"
        >
          Book a Scan →
        </a>
      </div>
    </nav>
  );
}
