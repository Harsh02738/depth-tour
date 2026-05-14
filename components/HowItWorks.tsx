const steps = [
  {
    number: "01",
    icon: "📸",
    title: "Capture",
    description:
      "We walk your property with an iPhone and capture 200–500 photos or 4K video. Takes 60–90 minutes per property.",
  },
  {
    number: "02",
    icon: "⚡",
    title: "Process",
    description:
      "AI converts your photos into millions of 3D light blobs — a photorealistic, navigable space buyers can explore in their browser.",
  },
  {
    number: "03",
    icon: "🔗",
    title: "Deliver",
    description:
      "You get a shareable link. Buyers open it on their phone, no app download required, and walk the property in full 3D.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-28 px-6" style={{ background: "#080808" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-indigo-400 text-sm font-medium tracking-widest uppercase mb-4">
            Process
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#f5f0e8] tracking-tight">
            From phone to published link
            <br />
            in under 2 hours.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-2xl p-8 border"
              style={{ background: "#111111", borderColor: "#222222" }}
            >
              <div className="flex items-start justify-between mb-6">
                <span className="text-3xl">{step.icon}</span>
                <span
                  className="text-5xl font-bold"
                  style={{ color: "#1e1e1e" }}
                >
                  {step.number}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-[#f5f0e8] mb-3">
                {step.title}
              </h3>
              <p className="text-[#888888] leading-relaxed text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
