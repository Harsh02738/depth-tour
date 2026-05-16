const plans = [
  {
    name: "Basic",
    price: "₹9,999",
    priceSub: "/scan",
    description: "For individual flats and apartment listings.",
    features: [
      "1 property scan (up to 1,500 sq ft)",
      "Gaussian Splatting tour link",
      "30-day hosted tour",
      "Mobile & desktop ready",
      "Same-day delivery",
    ],
    highlight: false,
    cta: "Book Basic",
  },
  {
    name: "Pro",
    price: "₹24,999",
    priceSub: "/scan",
    description: "For agents and premium properties.",
    features: [
      "Full property (up to 5,000 sq ft)",
      "Everything in Basic",
      "MP4 walkthrough video",
      "Branded embed code",
      "90-day hosted tour",
      "Priority turnaround",
    ],
    highlight: true,
    cta: "Book Pro",
  },
  {
    name: "Builder",
    price: "₹74,999",
    priceSub: "/project",
    description: "For developers launching new projects.",
    features: [
      "Up to 5 units scanned",
      "Everything in Pro",
      "1-year hosted tour",
      "White-label tour links",
      "WhatsApp delivery to your team",
      "Dedicated support contact",
    ],
    highlight: false,
    cta: "Book Builder",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-28 px-6" style={{ background: "#080808" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-indigo-400 text-sm font-medium tracking-widest uppercase mb-4">
            Pricing
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#f5f0e8] tracking-tight">
            Simple pricing.
            <br />
            No surprises.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="rounded-2xl p-8 flex flex-col border relative"
              style={{
                background: "#111111",
                borderColor: plan.highlight ? "#6366f1" : "#222222",
              }}
            >
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <p className="text-[#888888] text-sm font-medium mb-1">
                  {plan.name}
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-[#f5f0e8]">
                    {plan.price}
                  </span>
                  {plan.priceSub && (
                    <span className="text-[#888888] text-sm">{plan.priceSub}</span>
                  )}
                </div>
                <p className="text-[#555555] text-sm mt-2">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-[#888888]">
                    <span className="text-indigo-400 mt-0.5 flex-shrink-0">✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#cta"
                className={`text-center font-medium py-3 rounded-full text-sm transition-colors ${
                  plan.highlight
                    ? "bg-indigo-600 hover:bg-indigo-500 text-white"
                    : "border border-white/20 hover:border-white/40 text-[#f5f0e8]"
                }`}
              >
                {plan.cta} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
