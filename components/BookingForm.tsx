"use client";

import { useState } from "react";

export default function BookingForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", phone: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="book"
      className="py-32 px-6 relative overflow-hidden"
      style={{ background: "#050505", borderTop: "1px solid rgba(255,255,255,0.04)" }}
    >
      {/* Aurora glow behind form */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(99,102,241,0.18) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="relative z-10 max-w-lg mx-auto">
        <div className="text-center mb-12 reveal">
          <p
            className="text-xs font-semibold tracking-[0.2em] uppercase mb-4"
            style={{ color: "#6366f1" }}
          >
            Get Started
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#f5f0e8] tracking-tight mb-4">
            Book a Scan.
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: "#666666" }}>
            Leave your details and we&apos;ll reach out within 24 hours to
            schedule your first tour.
          </p>
        </div>

        {status === "success" ? (
          <div className="rounded-2xl p-12 text-center glass-card reveal">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center text-2xl mx-auto mb-6"
              style={{
                background: "rgba(99,102,241,0.15)",
                border: "1px solid rgba(99,102,241,0.3)",
                boxShadow: "0 0 30px rgba(99,102,241,0.2)",
              }}
            >
              ✓
            </div>
            <h3 className="text-xl font-semibold text-[#f5f0e8] mb-2">
              We&apos;ll be in touch soon.
            </h3>
            <p className="text-sm" style={{ color: "#666666" }}>
              Expect a message from us within 24 hours.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl p-8 space-y-5 glass-card reveal"
          >
            {[
              { label: "Your Name",     name: "name",  type: "text",  placeholder: "Alex Johnson"       },
              { label: "Email Address", name: "email", type: "email", placeholder: "you@example.com"    },
              { label: "Phone Number",  name: "phone", type: "tel",   placeholder: "+91 98765 43210"    },
            ].map((field) => (
              <div key={field.name}>
                <label
                  className="block text-xs font-semibold tracking-[0.15em] uppercase mb-2"
                  style={{ color: "#444444" }}
                >
                  {field.label}
                </label>
                <input
                  type={field.type}
                  name={field.name}
                  value={form[field.name as keyof typeof form]}
                  onChange={handleChange}
                  required
                  placeholder={field.placeholder}
                  className="w-full rounded-xl px-4 py-3.5 text-sm text-[#f5f0e8] outline-none transition-all"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "rgba(99,102,241,0.6)";
                    e.target.style.boxShadow = "0 0 0 3px rgba(99,102,241,0.12)";
                    e.target.style.background = "rgba(99,102,241,0.05)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "rgba(255,255,255,0.08)";
                    e.target.style.boxShadow = "none";
                    e.target.style.background = "rgba(255,255,255,0.03)";
                  }}
                />
              </div>
            ))}

            {status === "error" && (
              <p className="text-red-400 text-sm">
                Something went wrong. Email us at{" "}
                <a href="mailto:harshshah1012004@gmail.com" className="underline">
                  harshshah1012004@gmail.com
                </a>
              </p>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white font-semibold py-4 rounded-full transition-all mt-2"
              style={{
                boxShadow: "0 0 30px rgba(99,102,241,0.4)",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.boxShadow =
                  "0 0 50px rgba(99,102,241,0.6)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.boxShadow =
                  "0 0 30px rgba(99,102,241,0.4)")
              }
            >
              {status === "loading" ? "Sending…" : "Book My Scan →"}
            </button>

            <p className="text-center text-xs" style={{ color: "#333333" }}>
              First scan at half price for new clients.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
