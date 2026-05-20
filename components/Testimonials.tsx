"use client";

const testimonials = [
  {
    quote:
      "Sent the link to an NRI buyer in Dubai. He called back in 20 minutes ready to book. Didn't even ask for a physical visit.",
    name: "Vikram Malhotra",
    role: "Real Estate Agent",
    city: "Mumbai",
    accent: "#c4a882",
    accentBg: "rgba(196,168,130,0.05)",
    accentBorder: "rgba(196,168,130,0.18)",
  },
  {
    quote:
      "Bookings went up 38% after I added the 3D tour link to my Airbnb listing. Guests know exactly what they're getting before they book.",
    name: "Priya Nair",
    role: "Airbnb Host",
    city: "Goa",
    accent: "#34d399",
    accentBg: "rgba(52,211,153,0.05)",
    accentBorder: "rgba(52,211,153,0.18)",
  },
  {
    quote:
      "We put it on the site for our new Bangalore project before possession. Inquiries doubled in the first week. Our competitors had nothing like this.",
    name: "Rahul Sharma",
    role: "Sales Director",
    city: "Bangalore",
    accent: "#c4a882",
    accentBg: "rgba(196,168,130,0.04)",
    accentBorder: "rgba(196,168,130,0.14)",
  },
];

export default function Testimonials() {
  return (
    <section
      className="py-28 px-6 relative"
      style={{
        background: "#0d0c0b",
        borderTop: "1px solid rgba(196,168,130,0.07)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 reveal">
          <p
            className="text-xs font-semibold tracking-[0.22em] uppercase mb-4"
            style={{ color: "#c4a882" }}
          >
            Early results
          </p>
          <h2
            className="font-display font-light text-[#f5f2ee] tracking-tight"
            style={{ fontSize: "clamp(28px, 4vw, 52px)" }}
          >
            What clients are saying.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`glass-card rounded-2xl p-8 flex flex-col reveal reveal-delay-${i + 1}`}
              style={{ borderColor: t.accentBorder, background: t.accentBg }}
            >
              {/* Quotation mark */}
              <div
                className="font-display text-5xl font-light leading-none mb-4 select-none"
                style={{ color: t.accent, opacity: 0.5 }}
              >
                &ldquo;
              </div>

              <p className="text-sm leading-relaxed flex-1 mb-6" style={{ color: "#aaaaaa" }}>
                {t.quote}
              </p>

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, s) => (
                  <span key={s} style={{ color: "#c4a882", fontSize: "14px" }}>
                    ★
                  </span>
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                  style={{ background: t.accentBorder, color: t.accent }}
                >
                  {t.name[0]}
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#f5f2ee]">{t.name}</p>
                  <p className="text-xs" style={{ color: "#555" }}>
                    {t.role} · {t.city}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
