"use client";

import { motion } from "framer-motion";
import { processSteps } from "@/lib/data";

export default function Process() {
  return (
    <section
      className="border-arch"
      style={{ background: "#090909", padding: "8rem 2.5rem" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p className="section-label mb-4">How it works</p>
          <h2
            className="font-display font-light text-ivory leading-none"
            style={{ fontSize: "clamp(2rem, 5vw, 4rem)", letterSpacing: "-0.02em" }}
          >
            From scan to
            <br />
            shareable link.
          </h2>
        </div>

        {/* Desktop timeline */}
        <div className="hidden md:grid grid-cols-5 gap-0">
          {processSteps.map((step, i) => (
            <motion.div
              key={step.number}
              className="relative pr-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
            >
              {/* Connecting line */}
              {i < processSteps.length - 1 && (
                <div
                  className="absolute"
                  style={{
                    top: "1.75rem",
                    right: 0,
                    left: "2.5rem",
                    height: "1px",
                    background: "rgba(255,255,255,0.06)",
                  }}
                />
              )}

              <div
                className="font-display font-light mb-6"
                style={{
                  fontSize: "3rem",
                  lineHeight: 1,
                  color: "rgba(255,255,255,0.08)",
                  letterSpacing: "-0.03em",
                }}
              >
                {step.number}
              </div>

              <div
                className="w-2 h-2 rounded-full mb-6"
                style={{ background: "#c4a882" }}
              />

              <h3
                className="font-display font-light text-ivory mb-3"
                style={{ fontSize: "1.25rem", letterSpacing: "-0.01em" }}
              >
                {step.title}
              </h3>
              <p
                className="font-body font-light leading-relaxed"
                style={{ color: "#6b6b6b", fontSize: "0.875rem" }}
              >
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Mobile vertical */}
        <div className="md:hidden flex flex-col gap-0">
          {processSteps.map((step, i) => (
            <motion.div
              key={step.number}
              className="flex gap-6 relative"
              style={{ paddingBottom: i < processSteps.length - 1 ? "2.5rem" : 0 }}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              {/* Vertical line */}
              {i < processSteps.length - 1 && (
                <div
                  className="absolute"
                  style={{
                    left: "0.45rem",
                    top: "0.8rem",
                    bottom: 0,
                    width: "1px",
                    background: "rgba(255,255,255,0.06)",
                  }}
                />
              )}
              <div
                className="w-2 h-2 rounded-full flex-shrink-0 mt-2"
                style={{ background: "#c4a882" }}
              />
              <div>
                <span
                  className="section-label mb-1 block"
                  style={{ color: "#363636" }}
                >
                  {step.number}
                </span>
                <h3
                  className="font-display font-light text-ivory mb-2"
                  style={{ fontSize: "1.375rem" }}
                >
                  {step.title}
                </h3>
                <p
                  className="font-body font-light text-sm leading-relaxed"
                  style={{ color: "#6b6b6b" }}
                >
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
