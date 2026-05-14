"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function HomeCTA() {
  return (
    <section
      className="border-arch relative overflow-hidden"
      style={{ background: "#090909", padding: "10rem 2.5rem" }}
    >
      {/* Warm glow center */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 50% at 50% 60%, rgba(196,168,130,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-5xl mx-auto text-center">
        <motion.p
          className="section-label mb-6"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Ready to begin
        </motion.p>

        <motion.h2
          className="font-display font-light text-ivory leading-none mb-14"
          style={{ fontSize: "clamp(2.5rem, 8vw, 7rem)", letterSpacing: "-0.03em" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Let&apos;s build
          <br />
          <em style={{ fontStyle: "italic" }}>the future</em>
          <br />
          of real estate.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/contact"
            className="font-body text-sm font-light px-10 py-4 transition-all duration-300 group relative overflow-hidden"
            style={{
              background: "#c4a882",
              color: "#090909",
              letterSpacing: "0.1em",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "#f5f2ee";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "#c4a882";
            }}
          >
            GET IN TOUCH →
          </Link>
          <Link
            href="/projects"
            className="font-body text-sm font-light px-10 py-4 border transition-all duration-300"
            style={{
              color: "#6b6b6b",
              borderColor: "rgba(255,255,255,0.1)",
              letterSpacing: "0.1em",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)";
              e.currentTarget.style.color = "#f5f2ee";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
              e.currentTarget.style.color = "#6b6b6b";
            }}
          >
            VIEW OUR WORK
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
