"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What phone do you capture with?",
    a: "We use an iPhone for all captures. Modern iPhones shoot 4K video and have excellent cameras that produce high-quality Gaussian Splatting results without any special hardware.",
  },
  {
    q: "How long does a scan take?",
    a: "The capture walkthrough typically takes 60–90 minutes on-site, depending on property size. Processing happens off-site and your shareable link is ready the same day.",
  },
  {
    q: "Can buyers view it without downloading anything?",
    a: "Yes. The tour opens directly in any modern browser — Safari, Chrome, Firefox. No app download, no account, no headset. Just a link they can tap on their phone.",
  },
  {
    q: "How is this different from a 360° photo tour?",
    a: "360° tours are flat panoramic photos you teleport between. Gaussian Splatting is a true 3D scene — buyers can move freely in any direction, lean around corners, and experience real spatial depth. It&apos;s significantly more immersive.",
  },
  {
    q: "Do you travel to properties?",
    a: "Yes. We travel to your listings to do the capture. Just send us the address and preferred time. We cover a reasonable radius from our base — contact us to confirm your area.",
  },
  {
    q: "What happens after 30 days of hosting?",
    a: "Basic scans are hosted for 30 days. Pro scans are hosted for 90 days. After that, the tour link expires. You can extend hosting at any time for a small fee, or upgrade to the Monthly plan for ongoing hosting.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="py-28 px-6"
      style={{ background: "#0a0a0a", borderTop: "1px solid #1a1a1a" }}
    >
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-indigo-400 text-sm font-medium tracking-widest uppercase mb-4">
            FAQ
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#f5f0e8] tracking-tight">
            Questions answered.
          </h2>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-xl border overflow-hidden"
              style={{ borderColor: "#222222" }}
            >
              <button
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 transition-colors"
                style={{ background: open === i ? "#161616" : "#111111" }}
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="text-[#f5f0e8] font-medium text-sm">
                  {faq.q}
                </span>
                <span
                  className="text-[#555555] flex-shrink-0 transition-transform duration-200"
                  style={{ transform: open === i ? "rotate(45deg)" : "none" }}
                >
                  +
                </span>
              </button>
              {open === i && (
                <div
                  className="px-6 py-4 text-sm leading-relaxed"
                  style={{
                    color: "#888888",
                    background: "#111111",
                    borderTop: "1px solid #1e1e1e",
                  }}
                  dangerouslySetInnerHTML={{ __html: faq.a }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
