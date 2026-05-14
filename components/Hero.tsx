"use client";

import { useState, useEffect, useMemo } from "react";
import MagneticBtn from "@/components/MagneticBtn";

function useScramble(target: string, delay = 500): string {
  const [text, setText] = useState(() => target.replace(/[^\s]/g, "_"));

  useEffect(() => {
    const chars = "!@#$%^&*<>?/\\[]{}ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let frame = 0;
    const totalFrames = target.length * 4;
    let raf: number;
    let timer: ReturnType<typeof setTimeout>;

    timer = setTimeout(() => {
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
        if (frame <= totalFrames) raf = requestAnimationFrame(step);
        else setText(target);
      };
      raf = requestAnimationFrame(step);
    }, delay);

    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(raf);
    };
  }, [target, delay]);

  return text;
}

export default function Hero() {
  const headline = useScramble("Walk Through Any Property.", 600);

  const particles = useMemo(
    () =>
      Array.from({ length: 22 }, () => ({
        left: `${Math.random() * 100}%`,
        top:  `${30 + Math.random() * 70}%`,
        delay: `${Math.random() * 10}s`,
        dur:   `${6 + Math.random() * 10}s`,
        size:  `${1.5 + Math.random() * 2}px`,
        hue:   Math.random() > 0.5 ? "rgba(99,102,241,0.55)" : "rgba(139,92,246,0.45)",
      })),
    []
  );

  const dots = useMemo(
    () =>
      Array.from({ length: 72 }, () => ({
        opacity: 0.05 + Math.random() * 0.6,
        delay:   `${Math.random() * 3}s`,
        dur:     `${1.5 + Math.random() * 2}s`,
      })),
    []
  );

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden blueprint-grid"
      style={{ background: "#050505" }}
    >
      {/* Floating particles */}
      {particles.map((p, i) => (
        <div
          key={i}
          className="particle"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            background: p.hue,
            animationDelay: p.delay,
            animationDuration: p.dur,
          }}
        />
      ))}

      {/* Aurora orbs */}
      <div
        className="absolute top-[-15%] left-[-8%] w-[600px] h-[600px] rounded-full pointer-events-none animate-aurora"
        style={{
          background: "radial-gradient(circle, rgba(99,102,241,0.38) 0%, transparent 65%)",
          filter: "blur(70px)",
        }}
      />
      <div
        className="absolute bottom-[-10%] right-[-6%] w-[500px] h-[500px] rounded-full pointer-events-none animate-aurora"
        style={{
          background: "radial-gradient(circle, rgba(139,92,246,0.25) 0%, transparent 65%)",
          filter: "blur(65px)",
          animationDelay: "-7s",
        }}
      />

      {/* Two-column layout */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 pt-24 pb-20">
        <div className="grid md:grid-cols-5 gap-10 md:gap-16 items-center">

          {/* ── Left: Text zone ── */}
          <div className="md:col-span-3 animate-fade-in-up">
            {/* Eyebrow */}
            <div
              className="inline-flex items-center gap-2 text-xs font-medium px-4 py-1.5 rounded-full mb-8"
              style={{
                background: "rgba(99,102,241,0.08)",
                border: "1px solid rgba(99,102,241,0.3)",
                color: "#a5b4fc",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{
                  background: "#818cf8",
                  boxShadow: "0 0 8px rgba(129,140,248,0.9)",
                }}
              />
              Now available in your city
            </div>

            {/* Scramble headline */}
            <h1
              className="font-bold text-[#f5f0e8] leading-[1.05] tracking-tight mb-3"
              style={{ fontSize: "clamp(38px, 5.5vw, 72px)" }}
            >
              <span
                style={{
                  fontFamily: "var(--font-geist-mono), monospace",
                  letterSpacing: "-0.02em",
                }}
              >
                {headline}
              </span>
            </h1>

            {/* Gradient line */}
            <h2
              className="gradient-text font-bold leading-tight mb-6"
              style={{ fontSize: "clamp(38px, 5.5vw, 72px)", lineHeight: 1.05 }}
            >
              Before You&apos;re There.
            </h2>

            <p
              className="text-lg leading-relaxed mb-10 max-w-xl"
              style={{ color: "#666666" }}
            >
              DepthTour turns any property into a fully immersive 3D space your
              buyers can walk through on any device — no app, no headset, just
              one link.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-start gap-4 mb-10">
              <MagneticBtn
                href="#book"
                className="relative bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-8 py-4 rounded-full text-base transition-colors"
                style={{
                  boxShadow:
                    "0 0 32px rgba(99,102,241,0.55), 0 0 64px rgba(99,102,241,0.2)",
                }}
              >
                Book Your First Scan →
              </MagneticBtn>
              <MagneticBtn
                href="#how-it-works"
                className="glass-card text-[#f5f0e8] font-medium px-8 py-4 rounded-full text-base transition-colors hover:border-indigo-500/30"
              >
                See How It Works ↗
              </MagneticBtn>
            </div>

            {/* Social proof pills */}
            <div className="flex flex-wrap gap-3">
              {[
                { icon: "✓", text: "No hardware needed" },
                { icon: "✓", text: "Same-day delivery" },
                { icon: "✓", text: "Any device" },
              ].map((item) => (
                <div
                  key={item.text}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    color: "#777",
                  }}
                >
                  <span style={{ color: "#6366f1" }}>{item.icon}</span>
                  {item.text}
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Holographic tour preview ── */}
          <div
            className="md:col-span-2 relative animate-fade-in-up"
            style={{ animationDelay: "0.25s" }}
          >
            {/* Main card */}
            <div
              className="relative glass-card rounded-3xl overflow-hidden"
              style={{ aspectRatio: "4/5" }}
            >
              {/* Spinning rings — depth visualization */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="absolute w-[200px] h-[200px] rounded-full"
                  style={{
                    border: "1px solid rgba(99,102,241,0.2)",
                    animation: "slowSpin 12s linear infinite",
                  }}
                />
                <div
                  className="absolute w-[140px] h-[140px] rounded-full"
                  style={{
                    border: "1px solid rgba(139,92,246,0.2)",
                    animation: "slowSpinReverse 8s linear infinite",
                  }}
                />
                <div
                  className="absolute w-[80px] h-[80px] rounded-full"
                  style={{
                    border: "1px solid rgba(6,182,212,0.25)",
                    animation: "slowSpin 5s linear infinite",
                  }}
                />
              </div>

              {/* Scan line */}
              <div
                className="absolute left-0 right-0 h-px pointer-events-none"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(99,102,241,0.8), transparent)",
                  animation: "scanLine 3s ease-in-out infinite",
                  top: "10%",
                }}
              />

              {/* Header label */}
              <div className="absolute top-0 left-0 right-0 px-5 pt-5 flex items-center justify-between z-10">
                <span
                  className="text-xs font-mono tracking-widest"
                  style={{ color: "#6366f1" }}
                >
                  DEPTHTOUR 3D
                </span>
                <div className="flex items-center gap-1.5">
                  <div
                    className="w-1.5 h-1.5 rounded-full"
                    style={{
                      background: "#22d3ee",
                      boxShadow: "0 0 6px rgba(34,211,238,0.8)",
                      animation: "dotPulse 2s ease infinite",
                    }}
                  />
                  <span className="text-[10px]" style={{ color: "#22d3ee" }}>
                    LIVE
                  </span>
                </div>
              </div>

              {/* Dot depth map */}
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div
                  className="grid gap-[6px] p-8"
                  style={{
                    gridTemplateColumns: "repeat(9, 1fr)",
                    marginTop: "16px",
                  }}
                >
                  {dots.map((d, i) => (
                    <div
                      key={i}
                      style={{
                        width: "4px",
                        height: "4px",
                        borderRadius: "50%",
                        background: `rgba(99,102,241,${d.opacity})`,
                        animation: `dotPulse ${d.dur} ${d.delay} ease infinite`,
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Bottom label */}
              <div className="absolute bottom-0 left-0 right-0 px-5 pb-5 z-10">
                <div
                  className="rounded-xl px-3 py-2 flex items-center gap-2 text-xs font-mono"
                  style={{
                    background: "rgba(99,102,241,0.12)",
                    border: "1px solid rgba(99,102,241,0.25)",
                    color: "#818cf8",
                  }}
                >
                  <span style={{ color: "#34d399" }}>✓</span>
                  Tour ready · Shareable link generated
                </div>
              </div>
            </div>

            {/* Floating badge — top right */}
            <div
              className="absolute -top-5 -right-4 glass-card rounded-2xl px-4 py-2.5 text-xs font-medium"
              style={{
                border: "1px solid rgba(52,211,153,0.25)",
                color: "#34d399",
                background: "rgba(52,211,153,0.06)",
              }}
            >
              ↑ 42% more viewings
            </div>

            {/* Floating badge — bottom left */}
            <div
              className="absolute -bottom-5 -left-4 glass-card rounded-2xl px-4 py-2.5 text-xs font-medium"
              style={{
                border: "1px solid rgba(99,102,241,0.25)",
                color: "#a5b4fc",
                background: "rgba(99,102,241,0.06)",
              }}
            >
              ⚡ Delivered same day
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
