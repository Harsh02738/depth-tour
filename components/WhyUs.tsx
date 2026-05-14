"use client";

const rows = [
  { feature: "Equipment from you",     us: "None — we bring everything", them: "$6,000 scanner required" },
  { feature: "Monthly subscription",   us: "None",                        them: "$69–$309/mo"             },
  { feature: "App download for viewers", us: "No",                        them: "No"                      },
  { feature: "Delivery time",           us: "Same day",                   them: "1–3 days"                },
  { feature: "Price per scan",          us: "Contact us",                 them: "$350+"                   },
  { feature: "Visual quality",          us: "Photorealistic 3D",          them: "Standard 3D"             },
];

export default function WhyUs() {
  return (
    <section
      className="py-32 px-6 relative"
      style={{ background: "#080808", borderTop: "1px solid rgba(255,255,255,0.04)" }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20 reveal">
          <p
            className="text-xs font-semibold tracking-[0.2em] uppercase mb-4"
            style={{ color: "#6366f1" }}
          >
            Comparison
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#f5f0e8] tracking-tight leading-tight">
            Everything Matterport offers.
            <br />
            <span className="gradient-text">Nothing it requires.</span>
          </h2>
        </div>

        <div className="rounded-2xl overflow-hidden glass-card reveal">
          {/* Header */}
          <div
            className="grid grid-cols-3 px-6 py-4 text-xs font-semibold tracking-[0.15em] uppercase"
            style={{
              background: "rgba(255,255,255,0.03)",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <span style={{ color: "#444444" }}>Feature</span>
            <span
              className="gradient-text font-bold"
              style={{ fontSize: "11px" }}
            >
              DepthTour
            </span>
            <span style={{ color: "#444444" }}>Matterport</span>
          </div>

          {rows.map((row, i) => (
            <div
              key={row.feature}
              className="grid grid-cols-3 px-6 py-5 text-sm items-center transition-colors"
              style={{
                background: i % 2 === 0 ? "rgba(255,255,255,0.01)" : "transparent",
                borderBottom:
                  i < rows.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "rgba(99,102,241,0.04)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background =
                  i % 2 === 0 ? "rgba(255,255,255,0.01)" : "transparent")
              }
            >
              <span style={{ color: "#666666" }}>{row.feature}</span>
              <span
                className="font-medium text-[#f5f0e8] flex items-center gap-2"
                style={{ borderLeft: "2px solid rgba(99,102,241,0.5)", paddingLeft: "12px" }}
              >
                {row.us}
              </span>
              <span style={{ color: "#3a3a3a" }}>{row.them}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
