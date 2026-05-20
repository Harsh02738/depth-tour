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
          svgRef.current?.querySelectorAll("circle").forEach((c) => {
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
        background: "#090909",
        borderTop: "1px solid rgba(196,168,130,0.07)",
      }}
    >
      {/* Warm aurora orbs */}
      <div
        className="absolute top-[-20%] left-[-5%] w-[600px] h-[600px] rounded-full pointer-events-none animate-aurora"
        style={{
          background: "radial-gradient(circle, rgba(196,168,130,0.12) 0%, transparent 65%)",
          filter: "blur(70px)",
        }}
      />
      <div
        className="absolute bottom-[-20%] right-[-5%] w-[500px] h-[500px] rounded-full pointer-events-none animate-aurora"
        style={{
          background: "radial-gradient(circle, rgba(196,168,130,0.08) 0%, transparent 65%)",
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
              stroke="rgba(196,168,130,0.1)"
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
          style={{ color: "#c4a882" }}
        >
          The window is open — for now.
        </p>

        <h2
          className="font-display font-light text-[#f5f2ee] tracking-tight mb-6 leading-tight"
          style={{ fontSize: "clamp(40px, 5.5vw, 72px)" }}
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
          Right now, there is not a single operator in India offering Gaussian
          Splatting tours commercially. That window closes in 12 months. The
          first agent or builder who uses this owns their market.
        </p>

        <MagneticBtn
          href="#book"
          className="relative inline-block font-medium px-14 py-5 rounded-full text-lg transition-all"
          style={{
            background: "#c4a882",
            color: "#090909",
            boxShadow: "0 0 40px rgba(196,168,130,0.4), 0 0 80px rgba(196,168,130,0.15)",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.background = "#d4bc9a";
            (e.currentTarget as HTMLElement).style.boxShadow = "0 0 50px rgba(196,168,130,0.55), 0 0 100px rgba(196,168,130,0.2)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.background = "#c4a882";
            (e.currentTarget as HTMLElement).style.boxShadow = "0 0 40px rgba(196,168,130,0.4), 0 0 80px rgba(196,168,130,0.15)";
          }}
        >
          Book Your First Scan →
        </MagneticBtn>

        <p className="text-sm mt-6" style={{ color: "#3d3b38" }}>
          First scan at half price for new clients.
        </p>
      </div>
    </section>
  );
}
