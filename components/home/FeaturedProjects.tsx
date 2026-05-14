"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "@/lib/data";

const featured = projects.slice(0, 3);

export default function FeaturedProjects() {
  return (
    <section
      className="border-arch"
      style={{ background: "#090909", padding: "8rem 2.5rem" }}
    >
      {/* Section header */}
      <div className="flex items-end justify-between mb-14">
        <div>
          <p className="section-label mb-3">Selected work</p>
          <h2
            className="font-display font-light text-ivory leading-none"
            style={{ fontSize: "clamp(2rem, 5vw, 4rem)", letterSpacing: "-0.02em" }}
          >
            Projects that
            <br />
            redefine presence.
          </h2>
        </div>
        <Link
          href="/projects"
          className="hidden md:block section-label transition-colors duration-300"
          style={{ color: "#6b6b6b" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#c4a882")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#6b6b6b")}
        >
          All projects →
        </Link>
      </div>

      {/* Asymmetric grid — desktop only */}
      <div
        className="hidden md:grid gap-3"
        style={{
          gridTemplateColumns: "repeat(12, 1fr)",
          gridTemplateRows: "auto auto",
        }}
      >
        {/* Large card — left */}
        <motion.div
          className="img-grayscale relative overflow-hidden group"
          style={{ gridColumn: "1 / 8", gridRow: "1 / 2", aspectRatio: "4/3" }}
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0, y: 30 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src={featured[0].image}
            alt={featured[0].title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 55vw"
          />
          <div
            className="absolute inset-0 transition-opacity duration-500"
            style={{ background: "rgba(9,9,9,0.3)" }}
          />
          <div
            className="absolute bottom-0 left-0 right-0 p-7 translate-y-2 group-hover:translate-y-0 transition-transform duration-500"
            style={{ background: "linear-gradient(transparent, rgba(9,9,9,0.85))" }}
          >
            <p className="section-label mb-2" style={{ color: "#c4a882" }}>
              {featured[0].category} — {featured[0].location}
            </p>
            <h3
              className="font-display font-light text-ivory"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}
            >
              <Link href={`/projects/${featured[0].slug}`}>{featured[0].title}</Link>
            </h3>
          </div>
        </motion.div>

        {/* Tall card — right */}
        <motion.div
          className="img-grayscale relative overflow-hidden group"
          style={{ gridColumn: "8 / 13", gridRow: "1 / 3" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.12 }}
        >
          <Image
            src={featured[1].imageTall}
            alt={featured[1].title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 40vw"
          />
          <div
            className="absolute inset-0 transition-opacity duration-500"
            style={{ background: "rgba(9,9,9,0.25)" }}
          />
          <div
            className="absolute bottom-0 left-0 right-0 p-7"
            style={{ background: "linear-gradient(transparent, rgba(9,9,9,0.85))" }}
          >
            <p className="section-label mb-2" style={{ color: "#c4a882" }}>
              {featured[1].category} — {featured[1].location}
            </p>
            <h3
              className="font-display font-light text-ivory"
              style={{ fontSize: "clamp(1.25rem, 2.5vw, 2rem)" }}
            >
              <Link href={`/projects/${featured[1].slug}`}>{featured[1].title}</Link>
            </h3>
          </div>
        </motion.div>

        {/* Wide card — bottom left */}
        <motion.div
          className="img-grayscale relative overflow-hidden group"
          style={{ gridColumn: "1 / 8", gridRow: "2 / 3", aspectRatio: "16/7" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.22 }}
        >
          <Image
            src={featured[2].image}
            alt={featured[2].title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 55vw"
          />
          <div
            className="absolute inset-0"
            style={{ background: "rgba(9,9,9,0.2)" }}
          />
          <div
            className="absolute bottom-0 left-0 right-0 p-7"
            style={{ background: "linear-gradient(transparent, rgba(9,9,9,0.85))" }}
          >
            <p className="section-label mb-2" style={{ color: "#c4a882" }}>
              {featured[2].category} — {featured[2].location}
            </p>
            <h3
              className="font-display font-light text-ivory"
              style={{ fontSize: "clamp(1.25rem, 2.5vw, 2rem)" }}
            >
              <Link href={`/projects/${featured[2].slug}`}>{featured[2].title}</Link>
            </h3>
          </div>
        </motion.div>
      </div>

      {/* Mobile — single column */}
      <div className="md:hidden flex flex-col gap-3 mt-3">
        {featured.map((p, i) => (
          <motion.div
            key={p.slug}
            className="img-grayscale relative overflow-hidden group"
            style={{ aspectRatio: "4/3" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
          >
            <Image src={p.image} alt={p.title} fill className="object-cover" sizes="100vw" />
            <div
              className="absolute bottom-0 left-0 right-0 p-5"
              style={{ background: "linear-gradient(transparent, rgba(9,9,9,0.9))" }}
            >
              <p className="section-label mb-1" style={{ color: "#c4a882" }}>
                {p.category}
              </p>
              <h3 className="font-display font-light text-ivory text-2xl">
                <Link href={`/projects/${p.slug}`}>{p.title}</Link>
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
