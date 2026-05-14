"use client";

import Link from "next/link";

const footerLinks = [
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: "#090909", borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      {/* Top row */}
      <div
        className="flex flex-col md:flex-row md:items-end justify-between gap-10"
        style={{ padding: "5rem 2.5rem 4rem" }}
      >
        <div>
          <p className="section-label mb-3">Navigation</p>
          <div className="flex flex-col gap-2">
            {footerLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="font-body text-sm transition-colors duration-300"
                style={{ color: "#6b6b6b" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#f5f2ee")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#6b6b6b")}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="section-label mb-3">Contact</p>
          <a
            href="mailto:hello@depthtour.com"
            className="font-body text-sm transition-colors duration-300"
            style={{ color: "#6b6b6b" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#f5f2ee")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#6b6b6b")}
          >
            hello@depthtour.com
          </a>
        </div>

        <div>
          <p className="section-label mb-3">Based in</p>
          <p className="font-body text-sm" style={{ color: "#6b6b6b" }}>
            London · Dubai · Los Angeles
          </p>
        </div>
      </div>

      {/* Massive wordmark */}
      <div
        className="overflow-hidden select-none"
        style={{ padding: "0 1.5rem 1.5rem" }}
      >
        <p
          className="font-display font-light leading-none tracking-tight"
          style={{
            fontSize: "clamp(4rem, 15vw, 14rem)",
            color: "rgba(255,255,255,0.04)",
            letterSpacing: "-0.03em",
          }}
        >
          DEPTH TOUR
        </p>
      </div>

      {/* Bottom bar */}
      <div
        className="flex items-center justify-between section-label"
        style={{
          padding: "1.25rem 2.5rem",
          borderTop: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <span>© 2026 DepthTour. All rights reserved.</span>
        <span>We Digitize Space.</span>
      </div>
    </footer>
  );
}
