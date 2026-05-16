"use client";

import TiltCard from "@/components/TiltCard";

const steps = [
  {
    number: "01",
    emoji: "📅",
    accentColor: "rgba(99,102,241,0.18)",
    accentBorder: "rgba(99,102,241,0.3)",
    glowColor: "rgba(99,102,241,0.08)",
    title: "Book a Scan",
    description:
      "Tell us the address and preferred time. We come to you — no equipment to set up, no prep needed. Just give us access.",
  },
  {
    number: "02",
    emoji: "📸",
    accentColor: "rgba(139,92,246,0.18)",
    accentBorder: "rgba(139,92,246,0.3)",
    glowColor: "rgba(139,92,246,0.08)",
    title: "We Capture. AI Builds It.",
    description:
      "We walk the property with a single phone. 200+ captures feed the Gaussian Splatting AI. Your 3D scene trains in the cloud and is ready within hours.",
  },
  {
    number: "03",
    emoji: "🔗",
    accentColor: "rgba(6,182,212,0.18)",
    accentBorder: "rgba(6,182,212,0.3)",
    glowColor: "rgba(6,182,212,0.08)",
    title: "Share One Link.",
    description:
      "Send your buyers a URL. They walk through every room in full spatial depth — reflections, glass, and all — on any device before they've stepped foot inside.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-32 px-6 relative" style={{ background: "#050505" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20 reveal">
          <p className="text-xs font-semibold tracking-[0.22em] uppercase mb-4" style={{ color: "#6366f1" }}>
            How it works
          </p>
          <h2
            className="font-bold text-[#f5f0e8] tracking-tight leading-tight"
            style={{ fontSize: "clamp(32px, 4.5vw, 54px)" }}
          >
            From your door to their screen.
            <br />
            <span className="gradient-text">Same day.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {steps.map((step, i) => (
            <TiltCard
              key={step.number}
              className={`reveal reveal-delay-${i + 1}`}
            >
              <div
                className="relative rounded-2xl p-8 overflow-hidden glass-card h-full"
                style={{ transition: "border-color 0.3s ease, box-shadow 0.3s ease" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = step.accentBorder;
                  (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 40px ${step.glowColor}`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "";
                }}
              >
                {/* Ghost number watermark */}
                <span
                  className="absolute top-2 right-5 font-bold select-none pointer-events-none"
                  style={{
                    fontSize: "clamp(90px, 14vw, 140px)",
                    lineHeight: 1,
                    color: "rgba(255,255,255,0.025)",
                    letterSpacing: "-0.04em",
                  }}
                >
                  {step.number}
                </span>

                {/* Icon badge */}
                <div
                  className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-6 text-2xl"
                  style={{
                    background: step.accentColor,
                    border: `1px solid ${step.accentBorder}`,
                  }}
                >
                  {step.emoji}
                </div>

                <h3 className="text-lg font-semibold text-[#f5f0e8] mb-3 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#5a5a5a" }}>
                  {step.description}
                </p>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
