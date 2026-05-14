const steps = [
  {
    number: "01",
    emoji: "📅",
    color: "rgba(99,102,241,0.15)",
    borderColor: "rgba(99,102,241,0.25)",
    title: "Book a Visit",
    description:
      "Pick a date. We come to your listing — no setup, no preparation needed on your end. Just unlock the door.",
  },
  {
    number: "02",
    emoji: "⚡",
    color: "rgba(139,92,246,0.15)",
    borderColor: "rgba(139,92,246,0.25)",
    title: "We Handle Everything",
    description:
      "Our team spends time at the property and has your 3D tour ready within hours. No back-and-forth, no waiting days.",
  },
  {
    number: "03",
    emoji: "🔗",
    color: "rgba(6,182,212,0.15)",
    borderColor: "rgba(6,182,212,0.25)",
    title: "Share. Impress. Win.",
    description:
      "Send your buyers one link. They walk through every room in full depth — on any device, before they've set foot inside.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-32 px-6 relative" style={{ background: "#050505" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20 reveal">
          <p
            className="text-xs font-semibold tracking-[0.2em] uppercase mb-4"
            style={{ color: "#6366f1" }}
          >
            How it works
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#f5f0e8] tracking-tight leading-tight">
            From booking to published tour.
            <br />
            <span className="gradient-text">Same day.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`relative rounded-2xl p-8 overflow-hidden glass-card glass-card-hover reveal reveal-delay-${i + 1}`}
            >
              {/* Ghost step number watermark */}
              <span
                className="absolute top-4 right-6 font-bold select-none pointer-events-none"
                style={{
                  fontSize: "clamp(80px, 12vw, 130px)",
                  lineHeight: 1,
                  color: "rgba(255,255,255,0.03)",
                  letterSpacing: "-0.05em",
                }}
              >
                {step.number}
              </span>

              {/* Icon badge */}
              <div
                className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-6 text-2xl"
                style={{
                  background: step.color,
                  border: `1px solid ${step.borderColor}`,
                }}
              >
                {step.emoji}
              </div>

              <h3 className="text-lg font-semibold text-[#f5f0e8] mb-3 tracking-tight">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#666666" }}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
