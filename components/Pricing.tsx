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
    <section id="pricing" className="py-28 px-6" style={{ background: "#0a0908" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 reveal">
          <p
            className="text-xs font-semibold tracking-[0.22em] uppercase mb-4"
            style={{ color: "#c4a882" }}
          >
            Pricing
          </p>
          <h2
            className="font-display font-light text-[#f5f2ee] tracking-tight"
            style={{ fontSize: "clamp(36px, 4.5vw, 60px)" }}
          >
            Simple pricing.
            <br />
            No surprises.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="rounded-2xl p-8 flex flex-col border relative reveal"
              style={{
                background: "#111110",
                borderColor: plan.highlight
                  ? "rgba(196,168,130,0.55)"
                  : "rgba(196,168,130,0.1)",
              }}
            >
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span
                    className="text-xs font-semibold px-3 py-1 rounded-full"
                    style={{ background: "#c4a882", color: "#090909" }}
                  >
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <p className="text-[#8a8580] text-sm font-medium mb-1">{plan.name}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-[#f5f2ee]">{plan.price}</span>
                  {plan.priceSub && (
                    <span className="text-[#8a8580] text-sm">{plan.priceSub}</span>
                  )}
                </div>
                <p className="text-[#555] text-sm mt-2">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-[#8a8580]">
                    <span className="mt-0.5 flex-shrink-0" style={{ color: "#c4a882" }}>
                      ✓
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#book"
                className="text-center font-medium py-3 rounded-full text-sm transition-all"
                style={
                  plan.highlight
                    ? { background: "#c4a882", color: "#090909" }
                    : {
                        border: "1px solid rgba(196,168,130,0.25)",
                        color: "#f5f2ee",
                        background: "transparent",
                      }
                }
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
