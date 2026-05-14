"use client";

import { useState } from "react";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

const projectTypes = [
  "Luxury Villa / Residence",
  "Hospitality / Resort",
  "Commercial Space",
  "Apartment Development",
  "Architectural Heritage",
  "Other",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    type: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setSubmitted(true);
    } catch {
      setLoading(false);
    }
  };

  const inputStyle = {
    width: "100%",
    background: "transparent",
    border: "none",
    borderBottom: "1px solid rgba(255,255,255,0.1)",
    color: "#f5f2ee",
    fontSize: "0.9375rem",
    fontFamily: "var(--font-inter), system-ui, sans-serif",
    fontWeight: 300,
    padding: "0.875rem 0",
    outline: "none",
    transition: "border-color 0.3s ease",
  } as const;

  return (
    <>
      <Navigation />
      <main>
        {/* Page hero */}
        <section
          style={{
            background: "#090909",
            padding: "14rem 2.5rem 6rem",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <p className="section-label mb-5">Reach out</p>
          <h1
            className="font-display font-light text-ivory leading-none"
            style={{ fontSize: "clamp(3rem, 9vw, 8rem)", letterSpacing: "-0.03em" }}
          >
            Contact
          </h1>
        </section>

        <section style={{ background: "#090909", padding: "7rem 2.5rem 10rem" }}>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
            {/* Left — context */}
            <div>
              <p
                className="font-display font-light text-ivory leading-tight mb-8"
                style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", letterSpacing: "-0.02em" }}
              >
                Ready to turn your space into an experience?
              </p>
              <p
                className="font-body font-light text-sm leading-relaxed mb-12"
                style={{ color: "#6b6b6b" }}
              >
                Tell us about your project. We respond within one business day.
              </p>

              <div className="flex flex-col gap-6">
                {[
                  { label: "Email", value: "hello@depthtour.com" },
                  { label: "Response time", value: "Within 24 hours" },
                  { label: "Offices", value: "London · Dubai · Los Angeles" },
                ].map((item) => (
                  <div
                    key={item.label}
                    style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "1rem" }}
                  >
                    <p className="section-label mb-1.5">{item.label}</p>
                    <p
                      className="font-body font-light text-sm"
                      style={{ color: "#b8b8b8" }}
                    >
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — form */}
            <div>
              {submitted ? (
                <div className="flex flex-col gap-6 py-8">
                  <div className="arch-divider" />
                  <h2
                    className="font-display font-light text-ivory"
                    style={{ fontSize: "2rem", letterSpacing: "-0.02em" }}
                  >
                    Message received.
                  </h2>
                  <p
                    className="font-body font-light text-sm leading-relaxed"
                    style={{ color: "#6b6b6b" }}
                  >
                    Thank you for reaching out. We&apos;ll be in touch within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                  <div>
                    <label className="section-label block mb-2">Full name *</label>
                    <input
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      style={inputStyle}
                      placeholder="Your name"
                      onFocus={(e) => (e.target.style.borderColor = "#c4a882")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="section-label block mb-2">Email *</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        style={inputStyle}
                        placeholder="email@company.com"
                        onFocus={(e) => (e.target.style.borderColor = "#c4a882")}
                        onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                      />
                    </div>
                    <div>
                      <label className="section-label block mb-2">Company</label>
                      <input
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        style={inputStyle}
                        placeholder="Your firm"
                        onFocus={(e) => (e.target.style.borderColor = "#c4a882")}
                        onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="section-label block mb-2">Project type</label>
                    <select
                      value={form.type}
                      onChange={(e) => setForm({ ...form, type: e.target.value })}
                      style={{ ...inputStyle, cursor: "pointer" }}
                    >
                      <option value="" style={{ background: "#090909" }}>Select...</option>
                      {projectTypes.map((t) => (
                        <option key={t} value={t} style={{ background: "#090909" }}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="section-label block mb-2">Tell us about your project</label>
                    <textarea
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      rows={5}
                      style={{ ...inputStyle, resize: "none", lineHeight: 1.7 }}
                      placeholder="Location, size, timeline, anything relevant..."
                      onFocus={(e) => (e.target.style.borderColor = "#c4a882")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="font-body text-sm font-light px-10 py-4 transition-all duration-300 self-start"
                    style={{
                      background: "#c4a882",
                      color: "#090909",
                      letterSpacing: "0.1em",
                      opacity: loading ? 0.6 : 1,
                    }}
                    onMouseEnter={(e) => {
                      if (!loading) (e.currentTarget as HTMLButtonElement).style.background = "#f5f2ee";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.background = "#c4a882";
                    }}
                  >
                    {loading ? "SENDING..." : "SEND MESSAGE →"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
