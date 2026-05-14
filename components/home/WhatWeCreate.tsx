"use client";

import { motion } from "framer-motion";
import { services } from "@/lib/data";

export default function WhatWeCreate() {
  return (
    <section
      className="border-arch"
      style={{ background: "#0d0d0d", padding: "8rem 2.5rem" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
        >
          <div>
            <p className="section-label mb-4">What we create</p>
            <h2
              className="font-display font-light text-ivory leading-none"
              style={{ fontSize: "clamp(2rem, 5vw, 4rem)", letterSpacing: "-0.02em" }}
            >
              The full spectrum
              <br />
              of spatial reality.
            </h2>
          </div>
          <p
            className="font-body text-sm max-w-xs mt-6 md:mt-0 leading-relaxed"
            style={{ color: "#6b6b6b" }}
          >
            From a single villa scan to a complete resort digital twin —
            we capture, reconstruct, and deliver.
          </p>
        </div>

        {/* Services list */}
        <div>
          {services.map((s, i) => (
            <motion.div
              key={s.id}
              className="flex flex-col md:flex-row md:items-start gap-6 md:gap-12 py-8 group"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
            >
              <span
                className="font-body font-light flex-shrink-0 transition-colors duration-300"
                style={{
                  color: "#363636",
                  fontSize: "0.75rem",
                  letterSpacing: "0.15em",
                  minWidth: "2rem",
                  paddingTop: "3px",
                }}
              >
                {s.id}
              </span>
              <h3
                className="font-display font-light flex-shrink-0 text-ivory transition-colors duration-300 group-hover:text-gold"
                style={{
                  fontSize: "clamp(1.25rem, 2.5vw, 1.875rem)",
                  minWidth: "220px",
                  letterSpacing: "-0.01em",
                }}
              >
                {s.title}
              </h3>
              <p
                className="font-body font-light leading-relaxed"
                style={{ color: "#6b6b6b", fontSize: "0.9375rem" }}
              >
                {s.description}
              </p>
              <span
                className="font-body text-xs ml-auto flex-shrink-0 self-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ color: "#c4a882" }}
              >
                →
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
