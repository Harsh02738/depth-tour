"use client";

import TiltCard from "@/components/TiltCard";

const segments = [
  {
    emoji: "🏗️",
    tag: "Real Estate Builders",
    headline: "Launch your project before the first brick is laid.",
    body: "Walk buyers through model apartments before construction begins. Works for large launches or independent developers — send one link, sell multiple units.",
    accent: "#818cf8",
    accentBg: "rgba(129,140,248,0.07)",
    accentBorder: "rgba(129,140,248,0.2)",
  },
  {
    emoji: "🤝",
    tag: "Real Estate Agents",
    headline: "Close NRI buyers without a single site visit.",
    body: "Send a link. Buyers in Dubai, Singapore, or London walk through every room before they fly in. More deals, less back-and-forth.",
    accent: "#22d3ee",
    accentBg: "rgba(34,211,238,0.07)",
    accentBorder: "rgba(34,211,238,0.2)",
  },
  {
    emoji: "🌴",
    tag: "Airbnb & Holiday Homes",
    headline: "Your Goa villa needs to look better than the next listing.",
    body: "Guests know exactly what they're booking. Higher conversion, fewer questions, better reviews. Works for Goa, Kerala, Himachal, and anywhere people book without visiting first.",
    accent: "#34d399",
    accentBg: "rgba(52,211,153,0.07)",
    accentBorder: "rgba(52,211,153,0.2)",
  },
  {
    emoji: "🏢",
    tag: "Commercial & Office",
    headline: "Let tenants tour your space from any city.",
    body: "Offices, co-working spaces, retail units — no wasted site visits. Send the link before the meeting and walk in with a warm prospect.",
    accent: "#f472b6",
    accentBg: "rgba(244,114,182,0.07)",
    accentBorder: "rgba(244,114,182,0.2)",
  },
];

export default function WhoWeServe() {
  return (
    <section
      className="py-32 px-6 relative"
      style={{
        background: "#050505",
        borderTop: "1px solid rgba(255,255,255,0.04)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20 reveal">
          <p
            className="text-xs font-semibold tracking-[0.22em] uppercase mb-4"
            style={{ color: "#6366f1" }}
          >
            Who it&apos;s for
          </p>
          <h2
            className="font-bold text-[#f5f0e8] tracking-tight leading-tight"
            style={{ fontSize: "clamp(32px, 4.5vw, 54px)" }}
          >
            Built for every part of
            <br />
            <span className="gradient-text">Indian real estate.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {segments.map((seg, i) => (
            <TiltCard key={seg.tag} className={`reveal reveal-delay-${i + 1}`}>
              <div
                className="glass-card rounded-2xl p-8 h-full transition-all duration-300"
                style={{ borderColor: "rgba(255,255,255,0.06)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = seg.accentBorder;
                  (e.currentTarget as HTMLDivElement).style.background = seg.accentBg;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.06)";
                  (e.currentTarget as HTMLDivElement).style.background = "";
                }}
              >
                <div
                  className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-6 text-3xl"
                  style={{
                    background: seg.accentBg,
                    border: `1px solid ${seg.accentBorder}`,
                  }}
                >
                  {seg.emoji}
                </div>

                <p
                  className="text-xs font-semibold tracking-[0.18em] uppercase mb-3"
                  style={{ color: seg.accent }}
                >
                  {seg.tag}
                </p>

                <h3 className="text-xl font-bold text-[#f5f0e8] mb-3 tracking-tight leading-snug">
                  {seg.headline}
                </h3>

                <p className="text-sm leading-relaxed" style={{ color: "#555" }}>
                  {seg.body}
                </p>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
