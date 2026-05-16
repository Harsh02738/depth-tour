"use client";

import { useEffect, useRef } from "react";
import MagneticBtn from "@/components/MagneticBtn";

export default function CTABanner() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          svgRef.current?.querySelectorAll("circle").forEach((c, i) => {
            c.style.animationPlayState = "running";
          });
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(svgRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="cta"
      className="py-36 px-6 relative overflow-hidden"
      style={{
        background: "#050505",
        borderTop: "1px solid rgba(255,255,255,0.04)",
      }}
    >
      {/* Aurora orbs */}
      <div
        className="absolute top-[-20%] left-[-5%] w-[600px] h-[600px] rounded-full pointer-events-none animate-aurora"
        style={{
          background: "radial-gradient(circle, rgba(99,102,241,0.32) 0%, transparent 65%)",
          filter: "blur(70px)",
        }}
      />
      <div
        className="absolute bottom-[-20%] right-[-5%] w-[500px] h-[500px] rounded-full pointer-events-none animate-aurora"
        style={{
          background: "radial-gradient(circle, rgba(139,92,246,0.25) 0%, transparent 65%)",
          filter: "blur(65px)",
          animationDelay: "-6s",
        }}
      />

      {/* SVG concentric circles — draw on scroll */}
      <svg
        ref={svgRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 900 500"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden={true}
      >
        {[80, 160, 240, 320, 400].map((r, i) => {
          const circumference = 2 * Math.PI * r;
          return (
            <circle
              key={r}
              cx="450"
              cy="250"
              r={r}
              fill="none"
              stroke="rgba(99,102,241,0.1)"
              strokeWidth="1"
              strokeDasharray={circumference}
              strokeDashoffset={circumference}
              style={{
                animation: `drawCircle 1.8s ${i * 0.28}s ease forwards`,
                animationPlayState: "paused",
              }}
            />
          );
        })}
      </svg>

      <div className="relative z-10 max-w-3xl mx-auto text-center reveal">
        <p
          className="text-xs font-semibold tracking-[0.22em] uppercase mb-6"
          style={{ color: "#6366f1" }}
        >
          The window is open — for now.
        </p>

        <h2
          className="font-bold text-[#f5f0e8] tracking-tight mb-6 leading-tight"
          style={{ fontSize: "clamp(36px, 5.5vw, 68px)" }}
        >
          Be the first agent
          <br />
          in your market{" "}
          <span className="gradient-text">with this.</span>
        </h2>

        <p
          className="text-lg mb-12 max-w-xl mx-auto leading-relaxed"
          style={{ color: "#555555" }}
        >
          Right now, your market probably has zero operators offering Gaussian
          Splatting tours. That changes in 12 months. First mover wins the
          referral loop.
        </p>

        <MagneticBtn
          href="#book"
          className="relative inline-block bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-14 py-5 rounded-full text-lg transition-colors"
          style={{
            boxShadow:
              "0 0 40px rgba(99,102,241,0.6), 0 0 80px rgba(99,102,241,0.25)",
          }}
        >
          Book Your First Scan →
        </MagneticBtn>

        <p className="text-sm mt-6" style={{ color: "#2a2a2a" }}>
          First scan at half price for new clients.
        </p>
      </div>
    </section>
  );
}
