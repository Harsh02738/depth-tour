"use client";

import { useEffect, useState } from "react";
import MagneticBtn from "@/components/MagneticBtn";

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
        scrolled ? "glass-card border-b" : "bg-transparent"
      }`}
      style={
        scrolled
          ? { borderColor: "rgba(255,255,255,0.06)" }
          : { borderColor: "transparent" }
      }
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-bold text-xl tracking-tight gradient-text">
          DepthTour
        </a>

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
              style={{ color: "#555" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "#f5f0e8")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "#555")
              }
            >
              {link.label}
            </a>
          ))}
        </div>

        <MagneticBtn
          href="#book"
          className="bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium px-5 py-2.5 rounded-full transition-colors"
          style={{ boxShadow: "0 0 20px rgba(99,102,241,0.45)" }}
        >
          Book a Scan →
        </MagneticBtn>
      </div>
    </nav>
  );
}
