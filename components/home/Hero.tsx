"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

function useScramble(target: string, delay = 600): string {
  const [text, setText] = useState(target.replace(/[^ ]/g, "_"));
  useEffect(() => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$&";
    let frame = 0;
    const total = target.length * 4;
    let raf: number;
    const t = setTimeout(() => {
      const step = () => {
        setText(
          target
            .split("")
            .map((c, i) =>
              c === " "
                ? " "
                : frame / 4 > i
                ? c
                : chars[Math.floor(Math.random() * chars.length)]
            )
            .join("")
        );
        frame++;
        if (frame <= total) raf = requestAnimationFrame(step);
        else setText(target);
      };
      raf = requestAnimationFrame(step);
    }, delay);
    return () => {
      clearTimeout(t);
      cancelAnimationFrame(raf);
    };
  }, [target, delay]);
  return text;
}

export default function Hero() {
  const line1 = useScramble("WE DIGITIZE", 400);
  const line2 = useScramble("SPACE.", 900);
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section
      className="relative full-h flex flex-col justify-end overflow-hidden"
      style={{ background: "#090909", minHeight: "100svh" }}
    >
      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Warm glow — bottom left */}
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "-10%",
          left: "-5%",
          width: "50vw",
          height: "50vw",
          background: "radial-gradient(circle, rgba(196,168,130,0.07) 0%, transparent 65%)",
          filter: "blur(80px)",
        }}
      />

      {/* Main content */}
      <div style={{ padding: "0 2.5rem 6rem" }}>
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex items-center gap-4 mb-8"
        >
          <div className="arch-divider" />
          <span className="section-label">Spatial Visualization Studio</span>
        </motion.div>

        {/* Scramble headline */}
        <h1
          className="font-display font-light text-ivory leading-none tracking-tight"
          style={{ fontSize: "clamp(4rem, 12vw, 11rem)", letterSpacing: "-0.02em" }}
        >
          <span style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>
            {line1}
          </span>
          <br />
          <span
            className="gold-text"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            {line2}
          </span>
        </h1>

        {/* Subtitle row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex flex-col md:flex-row md:items-end justify-between mt-10 gap-6"
        >
          <p
            className="font-body font-light max-w-sm leading-relaxed"
            style={{ color: "#6b6b6b", fontSize: "0.9375rem" }}
          >
            Immersive 3D environments for architecture,
            <br />
            luxury real estate, and future-focused brands.
          </p>

          <div className="flex items-center gap-6">
            <Link
              href="/projects"
              className="font-body text-sm font-light transition-colors duration-300"
              style={{ color: "#c4a882" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#f5f2ee")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#c4a882")}
            >
              View Projects ↗
            </Link>
            <Link
              href="/contact"
              className="font-body text-sm font-light px-6 py-3 border transition-colors duration-300"
              style={{
                color: "#f5f2ee",
                borderColor: "rgba(255,255,255,0.15)",
                letterSpacing: "0.08em",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#c4a882";
                e.currentTarget.style.color = "#c4a882";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
                e.currentTarget.style.color = "#f5f2ee";
              }}
            >
              Book a Consultation
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute right-10 bottom-8 flex flex-col items-center gap-2"
        ref={scrollRef}
      >
        <span className="section-label" style={{ writingMode: "vertical-rl" }}>
          Scroll
        </span>
        <div
          style={{
            width: "1px",
            height: "48px",
            background: "rgba(196,168,130,0.3)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              background: "#c4a882",
              animation: "scrollBar 1.8s ease-in-out infinite",
            }}
          />
        </div>
      </motion.div>

      <style>{`
        @keyframes scrollBar {
          0%   { height: 0%;   top: 0; opacity: 1; }
          50%  { height: 100%; top: 0; opacity: 1; }
          100% { height: 0%;   top: 100%; opacity: 0; }
        }
      `}</style>
    </section>
  );
}
