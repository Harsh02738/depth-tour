const steps = [
  {
    number: "01",
    title: "Book a Visit",
    description:
      "Pick a date. We come to your listing — no setup, no preparation needed on your end. Just unlock the door.",
  },
  {
    number: "02",
    title: "We Handle Everything",
    description:
      "Our team spends time at the property and has your 3D tour ready within hours. No back-and-forth, no waiting days.",
  },
  {
    number: "03",
    title: "Share. Impress. Win.",
    description:
      "Send your buyers one link. They walk through every room in full depth — on any device, before they've set foot inside.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-28 px-6" style={{ background: "#080808" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-indigo-400 text-sm font-medium tracking-widest uppercase mb-4">
            How it works
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#f5f0e8] tracking-tight">
            From booking to published tour.
            <br />
            Same day.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-2xl p-8 border"
              style={{ background: "#111111", borderColor: "#222222" }}
            >
              <span
                className="block text-6xl font-bold mb-6"
                style={{ color: "#1e1e1e" }}
              >
                {step.number}
              </span>
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
