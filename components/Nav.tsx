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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-card border-b" : "bg-transparent border-transparent"
      }`}
      style={scrolled ? { borderColor: "rgba(255,255,255,0.06)" } : {}}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-bold text-xl tracking-tight gradient-text">
          DepthTour
        </span>

        <div className="hidden md:flex items-center gap-8">
          {[
            { label: "How it works", href: "#how-it-works" },
            { label: "Book a Scan",  href: "#book" },
            { label: "FAQ",          href: "#faq" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm transition-colors"
              style={{ color: "#666666" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#f5f0e8")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#666666")}
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#book"
          className="bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium px-5 py-2.5 rounded-full transition-all"
          style={{ boxShadow: "0 0 20px rgba(99,102,241,0.4)" }}
        >
          Book a Scan →
        </a>
      </div>
    </nav>
  );
}
