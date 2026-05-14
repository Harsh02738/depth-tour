"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/lib/data";

const categories = ["All", "Villas", "Hospitality", "Commercial", "Luxury Apartments", "Architecture"];

export default function ProjectsGrid() {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section style={{ background: "#090909", padding: "5rem 2.5rem 8rem" }}>
      {/* Filter tabs */}
      <div
        className="flex flex-wrap gap-0 mb-14 overflow-x-auto"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className="font-body text-xs font-light px-5 py-3 transition-all duration-300 flex-shrink-0"
            style={{
              letterSpacing: "0.12em",
              color: active === cat ? "#f5f2ee" : "#363636",
              borderBottom: active === cat ? "1px solid #c4a882" : "1px solid transparent",
              marginBottom: "-1px",
            }}
          >
            {cat.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3" layout>
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <Link href={`/projects/${project.slug}`} className="block group">
                <div
                  className="img-grayscale relative overflow-hidden"
                  style={{ aspectRatio: "3/4" }}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center"
                    style={{ background: "rgba(9,9,9,0.4)" }}
                  >
                    <span
                      className="font-body text-xs border px-5 py-2"
                      style={{
                        color: "#f5f2ee",
                        borderColor: "rgba(245,242,238,0.3)",
                        letterSpacing: "0.15em",
                      }}
                    >
                      VIEW PROJECT
                    </span>
                  </div>
                </div>
                <div className="pt-4 pb-6">
                  <p className="section-label mb-1.5" style={{ color: "#363636" }}>
                    {project.category} — {project.location}
                  </p>
                  <h3
                    className="font-display font-light text-ivory group-hover:text-gold transition-colors duration-300"
                    style={{ fontSize: "1.375rem", letterSpacing: "-0.01em" }}
                  >
                    {project.title}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <div className="text-center py-24">
          <p className="section-label">No projects in this category yet.</p>
        </div>
      )}
    </section>
  );
}
