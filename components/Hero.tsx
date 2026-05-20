"use client";

import { useState, useEffect } from "react";
import MagneticBtn from "@/components/MagneticBtn";

function useScramble(target: string, delay = 500): string {
  const [text, setText] = useState(() => target.replace(/[^\s]/g, "_"));

  useEffect(() => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*<>?/[]{}";
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
  const headline = useScramble("Real estate photos just became flip phones.", 800);
  const [videoReady, setVideoReady] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "#090909" }}
    >
      {/* ── Video background (all devices) ── */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/poster.jpg"
        onCanPlay={() => setVideoReady(true)}
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          opacity: videoReady ? 1 : 0,
          transition: "opacity 0.8s ease",
        }}
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>

      {/* ── Gradient scrim ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: [
            "linear-gradient(to right, rgba(9,9,9,0.88) 0%, rgba(9,9,9,0.55) 50%, rgba(9,9,9,0.18) 100%)",
            "linear-gradient(to bottom, rgba(9,9,9,0.45) 0%, transparent 25%, transparent 65%, rgba(9,9,9,0.75) 100%)",
          ].join(", "),
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 pt-32 pb-28">
        <div className="grid md:grid-cols-5 gap-10 md:gap-16 items-center">

          {/* Left: text zone */}
          <div className="md:col-span-3">

            {/* Eyebrow */}
            <div
              className="inline-flex items-center gap-2 text-xs font-medium px-4 py-1.5 rounded-full mb-8 animate-fade-in-up"
              style={{
                animationDelay: "0.1s",
                background: "rgba(196,168,130,0.06)",
                border: "1px solid rgba(196,168,130,0.28)",
                color: "#c4a882",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{
                  background: "#c4a882",
                  boxShadow: "0 0 8px rgba(196,168,130,0.8)",
                }}
              />
              Gaussian Splatting · Now in India
            </div>

            {/* Scramble headline */}
            <h1
              className="font-display animate-fade-in-up"
              style={{
                animationDelay: "0.3s",
                fontSize: "clamp(40px, 5.5vw, 80px)",
                fontWeight: 300,
                lineHeight: 1.04,
                letterSpacing: "-0.02em",
                color: "#f5f2ee",
                marginBottom: "12px",
              }}
            >
              {headline}
            </h1>

            {/* Gold gradient line */}
            <div className="animate-fade-in-up" style={{ animationDelay: "0.45s", marginBottom: "28px" }}>
              <h2
                className="gradient-text font-display"
                style={{
                  fontSize: "clamp(40px, 5.5vw, 80px)",
                  fontWeight: 300,
                  lineHeight: 1.04,
                  letterSpacing: "-0.02em",
                }}
              >
                The upgrade is called Gaussian Splatting.
              </h2>
            </div>

            <p
              className="text-lg leading-relaxed mb-10 max-w-xl animate-fade-in-up"
              style={{
                animationDelay: "0.6s",
                color: "#6b6560",
              }}
            >
              DepthTour turns any property into a photoreal, navigable 3D space
              your buyers walk through in a browser — no headset, no app, no
              hardware from you. Just one link.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-col sm:flex-row items-start gap-4 mb-10 animate-fade-in-up"
              style={{ animationDelay: "0.75s" }}
            >
              <MagneticBtn
                href="#book"
                className="relative text-[#f5f2ee] font-medium px-8 py-4 rounded-full text-base transition-all"
                style={{
                  border: "1px solid rgba(196,168,130,0.55)",
                  background: "transparent",
                  boxShadow: "inset 0 0 20px rgba(196,168,130,0.04)",
                }}
                onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(196,168,130,0.95)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "inset 0 0 24px rgba(196,168,130,0.08), 0 0 28px rgba(196,168,130,0.14)";
                }}
                onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(196,168,130,0.55)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "inset 0 0 20px rgba(196,168,130,0.04)";
                }}
              >
                Book Your First Scan →
              </MagneticBtn>

              <MagneticBtn
                href="#how-it-works"
                className="font-medium px-8 py-4 text-base transition-colors"
                style={{ color: "#8a8580" }}
                onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
                  (e.currentTarget as HTMLElement).style.color = "#f5f2ee";
                }}
                onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
                  (e.currentTarget as HTMLElement).style.color = "#8a8580";
                }}
              >
                See How It Works ↗
              </MagneticBtn>
            </div>

            {/* Social proof pills */}
            <div
              className="flex flex-wrap gap-3 animate-fade-in-up"
              style={{ animationDelay: "0.9s" }}
            >
              {[
                "✦  Photoreal depth",
                "✦  Same-day delivery",
                "✦  Mumbai · Delhi · Bangalore",
              ].map((item) => (
                <div
                  key={item}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs"
                  style={{
                    background: "rgba(196,168,130,0.04)",
                    border: "1px solid rgba(196,168,130,0.12)",
                    color: "#6b6560",
                  }}
                >
                  <span style={{ color: "#c4a882" }}>{item.split("  ")[0]}</span>
                  {item.split("  ")[1]}
                </div>
              ))}
            </div>
          </div>

          {/* Right col: intentionally empty — video shows through */}
          <div className="md:col-span-2" />
        </div>
      </div>

      {/* ── Scroll hint ── */}
      <div
        className="absolute bottom-10 left-1/2 animate-scroll-bounce font-display"
        style={{
          opacity: scrolled ? 0 : 0.5,
          transition: "opacity 0.5s ease",
          color: "#c4a882",
          fontSize: "20px",
          fontStyle: "italic",
          letterSpacing: "0.05em",
          pointerEvents: "none",
        }}
      >
        ↓
      </div>
    </section>
  );
}
