"use client";

import TiltCard from "@/components/TiltCard";

const features = [
  {
    id: "delivery",
    span: "col-span-2",
    accent: "#c4a882",
    accentBg: "rgba(196,168,130,0.07)",
    accentBorder: "rgba(196,168,130,0.22)",
    stat: "< 2h",
    label: "Delivery Time",
    desc: "We capture, process, and publish. Your shareable link is live the same day we visit.",
    emoji: "⚡",
  },
  {
    id: "hardware",
    span: "row-span-2",
    accent: "#c4a882",
    accentBg: "rgba(196,168,130,0.07)",
    accentBorder: "rgba(196,168,130,0.22)",
    stat: "True 3D",
    label: "Not 360° Photos",
    desc: "Buyers move freely through real spatial depth. Reflections, glass, and glossy floors — Gaussian Splatting captures what every other method breaks on.",
    emoji: "🔮",
  },
  {
    id: "fee",
    span: "",
    accent: "#34d399",
    accentBg: "rgba(52,211,153,0.07)",
    accentBorder: "rgba(52,211,153,0.2)",
    stat: "$0",
    label: "Matterport Equipment",
    desc: "No $40k scanner. No $500/yr subscription. No app for your buyers to install.",
    emoji: "🏠",
  },
  {
    id: "device",
    span: "",
    accent: "#c4a882",
    accentBg: "rgba(196,168,130,0.05)",
    accentBorder: "rgba(196,168,130,0.18)",
    stat: "100%",
    label: "Browser-Based",
    desc: "Safari, Chrome, Firefox. iPhone, Android, laptop. Opens instantly — no account, no headset.",
    emoji: "📱",
  },
  {
    id: "offer",
    span: "col-span-2",
    accent: "#f472b6",
    accentBg: "rgba(244,114,182,0.07)",
    accentBorder: "rgba(244,114,182,0.2)",
    stat: "50% off",
    label: "First Scan Discount",
    desc: "New clients get their first tour at half price. No code needed — just mention it when you book.",
    emoji: "🎁",
  },
];

function BentoCard({
  f,
  isRowSpan = false,
}: {
  f: (typeof features)[number];
  isRowSpan?: boolean;
}) {
  return (
    <TiltCard>
      <div
        className={`relative glass-card rounded-2xl p-7 h-full flex flex-col transition-all duration-300 ${
          isRowSpan ? "justify-between" : ""
        }`}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLDivElement).style.borderColor = f.accentBorder;
          (e.currentTarget as HTMLDivElement).style.background = f.accentBg;
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLDivElement).style.borderColor = "";
          (e.currentTarget as HTMLDivElement).style.background = "";
        }}
      >
        <div>
          <div className="flex items-center justify-between mb-4">
            <span className="text-2xl">{f.emoji}</span>
            <span
              className="text-xs font-mono tracking-widest uppercase px-2 py-1 rounded-full"
              style={{
                background: f.accentBg,
                border: `1px solid ${f.accentBorder}`,
                color: f.accent,
              }}
            >
              {f.label}
            </span>
          </div>

          <p
            className="font-bold mb-2"
            style={{
              fontSize: isRowSpan ? "clamp(42px, 6vw, 64px)" : "clamp(30px, 4vw, 48px)",
              lineHeight: 1,
              background: `linear-gradient(135deg, ${f.accent}, #ffffff66)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {f.stat}
          </p>
        </div>

        <p className="text-sm leading-relaxed mt-3" style={{ color: "#555" }}>
          {f.desc}
        </p>
      </div>
    </TiltCard>
  );
}

export default function WhyUs() {
  return (
    <section
      className="py-32 px-6 relative"
      style={{
        background: "#0a0908",
        borderTop: "1px solid rgba(196,168,130,0.07)",
      }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20 reveal">
          <p
            className="text-xs font-semibold tracking-[0.22em] uppercase mb-4"
            style={{ color: "#c4a882" }}
          >
            Why DepthTour
          </p>
          <h2
            className="font-display font-light text-[#f5f2ee] tracking-tight leading-tight"
            style={{ fontSize: "clamp(32px, 4.5vw, 58px)" }}
          >
            Everything Matterport offers.
            <br />
            <span className="gradient-text">None of what it costs.</span>
          </h2>
        </div>

        {/* Bento grid — desktop */}
        <div
          className="hidden md:grid gap-3 reveal"
          style={{
            gridTemplateColumns: "repeat(3, 1fr)",
            gridTemplateRows: "auto auto auto",
            gridTemplateAreas:
              '"delivery delivery hardware" "fee device hardware" "offer offer offer"',
          }}
        >
          <div style={{ gridArea: "delivery" }}><BentoCard f={features[0]} /></div>
          <div style={{ gridArea: "hardware" }}><BentoCard f={features[1]} isRowSpan /></div>
          <div style={{ gridArea: "fee" }}><BentoCard f={features[2]} /></div>
          <div style={{ gridArea: "device" }}><BentoCard f={features[3]} /></div>
          <div style={{ gridArea: "offer" }}><BentoCard f={features[4]} /></div>
        </div>

        {/* Mobile fallback */}
        <div className="md:hidden grid grid-cols-1 gap-3">
          {features.map((f) => (
            <BentoCard key={f.id} f={f} />
          ))}
        </div>
      </div>
    </section>
  );
}
