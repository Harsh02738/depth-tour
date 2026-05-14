"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What equipment do you use?",
    a: "We use professional mobile equipment to capture every detail of the property. No special setup or hardware is needed from your side — just give us access.",
  },
  {
    q: "How long does a scan take?",
    a: "The on-site capture typically takes 60–90 minutes depending on property size. Your shareable tour link is delivered the same day.",
  },
  {
    q: "Can buyers view it without downloading anything?",
    a: "Yes. The tour opens directly in any modern browser — Safari, Chrome, Firefox. No app download, no account, no headset. Just a link they tap on their phone.",
  },
  {
    q: "How is this different from a 360° photo tour?",
    a: "360° tours are flat panoramic photos you teleport between. Our tours are true 3D spaces — buyers can move freely in any direction, lean around corners, and experience real spatial depth. Far more immersive.",
  },
  {
    q: "Do you travel to properties?",
    a: "Yes. We travel to your listings to do the capture. Just send us the address and preferred time. We cover a reasonable radius — contact us to confirm your area.",
  },
  {
    q: "What happens after 30 days of hosting?",
    a: "Basic scans are hosted for 30 days. Pro scans are hosted for 90 days. After that, the tour link expires. You can extend hosting at any time for a small fee.",
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
