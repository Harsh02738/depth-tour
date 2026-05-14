"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section
      className="border-arch"
      style={{ background: "#0d0d0d", padding: "8rem 2.5rem" }}
    >
      <div className="max-w-5xl mx-auto">
        <p className="section-label mb-16">Client perspective</p>

        {/* Quote */}
        <div className="relative" style={{ minHeight: "200px" }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {/* Quotation mark */}
              <div
                className="font-display font-light mb-6"
                style={{ fontSize: "6rem", lineHeight: 0.8, color: "rgba(196,168,130,0.15)" }}
              >
                &ldquo;
              </div>

              <blockquote
                className="font-display font-light text-ivory leading-tight mb-10"
                style={{
                  fontSize: "clamp(1.5rem, 4vw, 3rem)",
                  letterSpacing: "-0.02em",
                  maxWidth: "820px",
                }}
              >
                {testimonials[active].quote}
              </blockquote>

              <div className="flex items-center gap-4">
                <div className="arch-divider" />
                <div>
                  <p
                    className="font-body font-light text-sm"
                    style={{ color: "#f5f2ee" }}
                  >
                    {testimonials[active].author}
                  </p>
                  <p className="section-label mt-0.5">
                    {testimonials[active].role} — {testimonials[active].company}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation dots */}
        <div className="flex items-center gap-3 mt-12">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="transition-all duration-300"
              style={{
                width: i === active ? "32px" : "6px",
                height: "1px",
                background: i === active ? "#c4a882" : "rgba(255,255,255,0.2)",
              }}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
