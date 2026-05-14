"use client";

import TiltCard from "@/components/TiltCard";

const features = [
  {
    id: "delivery",
    span: "col-span-2",
    accent: "#818cf8",
    accentBg: "rgba(129,140,248,0.07)",
    accentBorder: "rgba(129,140,248,0.2)",
    stat: "< 2h",
    label: "Delivery Time",
    desc: "We capture, process, and deliver your shareable tour link — all the same day.",
    emoji: "⚡",
  },
  {
    id: "hardware",
    span: "row-span-2",
    accent: "#a78bfa",
    accentBg: "rgba(167,139,250,0.07)",
    accentBorder: "rgba(167,139,250,0.2)",
    stat: "$0",
    label: "Hardware From You",
    desc: "We bring everything. No scanner, no iPhone, no tripod — just a door to unlock.",
    emoji: "🔑",
  },
  {
    id: "fee",
    span: "",
    accent: "#34d399",
    accentBg: "rgba(52,211,153,0.07)",
    accentBorder: "rgba(52,211,153,0.2)",
    stat: "$0/mo",
    label: "Monthly Fee",
    desc: "No subscription. Pay per scan only.",
    emoji: "💳",
  },
  {
    id: "device",
    span: "",
    accent: "#22d3ee",
    accentBg: "rgba(34,211,238,0.07)",
    accentBorder: "rgba(34,211,238,0.2)",
    stat: "100%",
    label: "Browser-Based",
    desc: "Buyers open it on any device — iPhone, Android, laptop. No app to download.",
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
    desc: "New clients get their first scan at half price. No code needed — just mention it when you book.",
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
        style={{ borderColor: "rgba(255,255,255,0.06)" }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLDivElement).style.borderColor = f.accentBorder;
          (e.currentTarget as HTMLDivElement).style.background = f.accentBg;
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.06)";
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
        background: "#080808",
        borderTop: "1px solid rgba(255,255,255,0.04)",
      }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20 reveal">
          <p
            className="text-xs font-semibold tracking-[0.22em] uppercase mb-4"
            style={{ color: "#6366f1" }}
          >
            Why DepthTour
          </p>
          <h2
            className="font-bold text-[#f5f0e8] tracking-tight leading-tight"
            style={{ fontSize: "clamp(32px, 4.5vw, 54px)" }}
          >
            Everything Matterport offers.
            <br />
            <span className="gradient-text">Nothing it requires.</span>
          </h2>
        </div>

        {/* Bento grid */}
        <div
          className="grid gap-3 reveal"
          style={{
            gridTemplateColumns: "repeat(3, 1fr)",
            gridTemplateRows: "auto auto auto",
            gridTemplateAreas:
              '"delivery delivery hardware" "fee device hardware" "offer offer offer"',
          }}
        >
          <div style={{ gridArea: "delivery" }}>
            <BentoCard f={features[0]} />
          </div>
          <div style={{ gridArea: "hardware" }}>
            <BentoCard f={features[1]} isRowSpan />
          </div>
          <div style={{ gridArea: "fee" }}>
            <BentoCard f={features[2]} />
          </div>
          <div style={{ gridArea: "device" }}>
            <BentoCard f={features[3]} />
          </div>
          <div style={{ gridArea: "offer" }}>
            <BentoCard f={features[4]} />
          </div>
        </div>

        {/* Mobile fallback grid */}
        <div className="md:hidden grid grid-cols-1 gap-3 mt-3">
          {features.map((f) => (
            <BentoCard key={f.id} f={f} />
          ))}
        </div>
      </div>
    </section>
  );
}
