"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What is Gaussian Splatting?",
    a: "An AI technique that turns hundreds of photos into a real-time 3D environment you can explore in a browser. It handles reflections, glass, and complex surfaces that broke every previous scanning method. Think of it as the leap from DVD to 4K streaming — it just looks fundamentally better.",
  },
  {
    q: "How is this different from Matterport?",
    a: "Matterport requires a $40k+ proprietary scanner and a $500/yr hosting subscription. Your buyers also need to download their app. We use Gaussian Splatting — you get a simple shareable link, nothing to install, nothing to subscribe to.",
  },
  {
    q: "How is this different from a 360° photo tour?",
    a: "360° tours are flat panoramic photos you teleport between. There's no actual depth. Gaussian Splatting creates a true navigable 3D space where buyers move freely in any direction and see real spatial depth, exactly as they would standing in the room.",
  },
  {
    q: "How long does a scan take?",
    a: "On-site capture takes 60–90 minutes depending on property size. Your shareable tour link is delivered the same day we visit.",
  },
  {
    q: "Do you cover cities across India?",
    a: "We currently serve Mumbai, Delhi NCR, Bangalore, Hyderabad, and Pune. Expanding to more cities — message us to check your area.",
  },
  {
    q: "Can NRI buyers view the tour from abroad?",
    a: "Yes. The tour is just a browser link — no download required. Buyers in Dubai, Singapore, London, or the US can walk through any property on any device, any time.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="py-32 px-6"
      style={{ background: "#080808", borderTop: "1px solid rgba(255,255,255,0.04)" }}
    >
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-20 reveal">
          <p
            className="text-xs font-semibold tracking-[0.2em] uppercase mb-4"
            style={{ color: "#6366f1" }}
          >
            FAQ
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#f5f0e8] tracking-tight">
            Questions <span className="gradient-text">answered.</span>
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden glass-card reveal transition-all"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <button
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 transition-colors group"
                style={{ background: "transparent" }}
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="text-[#e0e0e0] font-medium text-sm group-hover:text-white transition-colors">
                  {faq.q}
                </span>
                <span
                  className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs transition-all duration-300"
                  style={{
                    background:
                      open === i
                        ? "rgba(99,102,241,0.2)"
                        : "rgba(255,255,255,0.05)",
                    border: `1px solid ${open === i ? "rgba(99,102,241,0.4)" : "rgba(255,255,255,0.08)"}`,
                    color: open === i ? "#818cf8" : "#555555",
                    transform: open === i ? "rotate(45deg)" : "none",
                  }}
                >
                  +
                </span>
              </button>

              <div
                style={{
                  maxHeight: open === i ? "200px" : "0",
                  overflow: "hidden",
                  transition: "max-height 0.35s ease",
                }}
              >
                <div
                  className="px-6 pb-5 text-sm leading-relaxed"
                  style={{
                    color: "#666666",
                    borderTop: "1px solid rgba(255,255,255,0.05)",
                    paddingTop: "16px",
                  }}
                >
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
