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
      className="py-28 px-6"
      style={{ background: "#0a0a0a", borderTop: "1px solid #1a1a1a" }}
    >
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-indigo-400 text-sm font-medium tracking-widest uppercase mb-4">
            Get Started
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#f5f0e8] tracking-tight mb-4">
            Book a Scan.
          </h2>
          <p className="text-[#888888] text-lg">
            Leave your details and we&apos;ll reach out within 24 hours to schedule
            your first tour.
          </p>
        </div>

        {status === "success" ? (
          <div
            className="rounded-2xl p-10 text-center border"
            style={{ background: "#111111", borderColor: "#222222" }}
          >
            <div className="text-4xl mb-4">✓</div>
            <h3 className="text-xl font-semibold text-[#f5f0e8] mb-2">
              We&apos;ll be in touch soon.
            </h3>
            <p className="text-[#888888] text-sm">
              Expect a message from us within 24 hours.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl p-8 border space-y-5"
            style={{ background: "#111111", borderColor: "#222222" }}
          >
            <div>
              <label className="block text-xs font-medium tracking-widest uppercase mb-2" style={{ color: "#555555" }}>
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Harsh Shah"
                className="w-full rounded-xl px-4 py-3 text-sm text-[#f5f0e8] outline-none transition-colors"
                style={{
                  background: "#0d0d0d",
                  border: "1px solid #2a2a2a",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#6366f1")}
                onBlur={(e) => (e.target.style.borderColor = "#2a2a2a")}
              />
            </div>

            <div>
              <label className="block text-xs font-medium tracking-widest uppercase mb-2" style={{ color: "#555555" }}>
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="you@example.com"
                className="w-full rounded-xl px-4 py-3 text-sm text-[#f5f0e8] outline-none transition-colors"
                style={{
                  background: "#0d0d0d",
                  border: "1px solid #2a2a2a",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#6366f1")}
                onBlur={(e) => (e.target.style.borderColor = "#2a2a2a")}
              />
            </div>

            <div>
              <label className="block text-xs font-medium tracking-widest uppercase mb-2" style={{ color: "#555555" }}>
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
                placeholder="+91 98765 43210"
                className="w-full rounded-xl px-4 py-3 text-sm text-[#f5f0e8] outline-none transition-colors"
                style={{
                  background: "#0d0d0d",
                  border: "1px solid #2a2a2a",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#6366f1")}
                onBlur={(e) => (e.target.style.borderColor = "#2a2a2a")}
              />
            </div>

            {status === "error" && (
              <p className="text-red-400 text-sm">
                Something went wrong. Email us directly at harshshah1012004@gmail.com
              </p>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white font-semibold py-3.5 rounded-full transition-colors"
            >
              {status === "loading" ? "Sending…" : "Book My Scan →"}
            </button>

            <p className="text-center text-xs" style={{ color: "#444444" }}>
              First scan at half price for new clients.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
