const rows = [
  {
    feature: "Hardware required",
    us: "Your iPhone",
    them: "$6,000 scanner",
  },
  {
    feature: "Monthly subscription",
    us: "None",
    them: "$69–$309/mo",
  },
  {
    feature: "App download for viewers",
    us: "No",
    them: "No",
  },
  {
    feature: "Delivery time",
    us: "Same day",
    them: "1–3 days",
  },
  {
    feature: "Price per scan",
    us: "$299–$499",
    them: "$350+",
  },
  {
    feature: "Technology",
    us: "Gaussian Splatting",
    them: "Standard 3D",
  },
];

export default function WhyUs() {
  return (
    <section
      className="py-28 px-6"
      style={{ background: "#0a0a0a", borderTop: "1px solid #1a1a1a" }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-indigo-400 text-sm font-medium tracking-widest uppercase mb-4">
            Comparison
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#f5f0e8] tracking-tight">
            Everything Matterport offers.
            <br />
            Nothing it requires.
          </h2>
        </div>

        <div
          className="rounded-2xl overflow-hidden border"
          style={{ borderColor: "#222222" }}
        >
          {/* Header */}
          <div
            className="grid grid-cols-3 px-6 py-4 text-xs font-semibold tracking-widest uppercase"
            style={{ background: "#111111", borderBottom: "1px solid #222222" }}
          >
            <span style={{ color: "#555555" }}>Feature</span>
            <span className="text-indigo-400">DepthTour</span>
            <span style={{ color: "#555555" }}>Matterport</span>
          </div>

          {rows.map((row, i) => (
            <div
              key={row.feature}
              className="grid grid-cols-3 px-6 py-5 text-sm items-center"
              style={{
                background: i % 2 === 0 ? "#0d0d0d" : "#111111",
                borderBottom: i < rows.length - 1 ? "1px solid #1a1a1a" : "none",
              }}
            >
              <span style={{ color: "#888888" }}>{row.feature}</span>
              <span className="font-medium text-[#f5f0e8]">{row.us}</span>
              <span style={{ color: "#555555" }}>{row.them}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
