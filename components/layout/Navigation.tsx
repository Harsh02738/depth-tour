"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const menuLinks = [
  { label: "Projects", href: "/projects", sub: "Our work" },
  { label: "Services", href: "/services", sub: "What we create" },
  { label: "About", href: "/about", sub: "Who we are" },
  { label: "Contact", href: "/contact", sub: "Get in touch" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {/* ── Fixed Nav Bar ── */}
      <nav
        className="fixed top-0 left-0 right-0 z-[9000] transition-all duration-700"
        style={{
          background: scrolled ? "rgba(9,9,9,0.88)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.05)" : "1px solid transparent",
        }}
      >
        <div
          className="flex items-center justify-between"
          style={{ padding: "1.25rem 2.5rem" }}
        >
          {/* Logo */}
          <Link
            href="/"
            className="font-display font-light tracking-[0.18em] text-ivory uppercase"
            style={{ fontSize: "1.05rem", letterSpacing: "0.2em" }}
            onClick={() => setOpen(false)}
          >
            Depth Tour
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="section-label transition-colors duration-300"
                style={{ color: "#6b6b6b" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#f5f2ee")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#6b6b6b")}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="flex flex-col justify-center gap-[5px] w-8 h-8 focus:outline-none relative z-[9100]"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <span
              className="block h-px bg-ivory transition-all duration-500 origin-center"
              style={{
                width: "28px",
                transform: open ? "translateY(6px) rotate(45deg)" : "none",
              }}
            />
            <span
              className="block h-px bg-ivory transition-all duration-300"
              style={{ width: "20px", opacity: open ? 0 : 1 }}
            />
            <span
              className="block h-px bg-ivory transition-all duration-500 origin-center"
              style={{
                width: "28px",
                transform: open ? "translateY(-6px) rotate(-45deg)" : "none",
              }}
            />
          </button>
        </div>
      </nav>

      {/* ── Full-Screen Menu Overlay ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[8999] flex flex-col"
            style={{ background: "#090909" }}
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          >
            {/* Content */}
            <div
              className="flex-1 flex flex-col justify-center"
              style={{ padding: "6rem 2.5rem 2rem" }}
            >
              <nav>
                {menuLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.1 + i * 0.07,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                    className="border-t border-stone"
                    style={{ borderColor: "rgba(255,255,255,0.06)" }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="flex items-baseline justify-between py-6 group"
                    >
                      <span
                        className="font-display font-light text-ivory transition-colors duration-300 group-hover:text-gold"
                        style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)", lineHeight: 1.1 }}
                      >
                        {link.label}
                      </span>
                      <span className="section-label hidden md:block">{link.sub}</span>
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </div>

            {/* Footer row */}
            <motion.div
              className="flex items-center justify-between section-label"
              style={{ padding: "1.5rem 2.5rem", borderTop: "1px solid rgba(255,255,255,0.06)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45, duration: 0.4 }}
            >
              <span>© 2026 DepthTour</span>
              <Link href="/contact" onClick={() => setOpen(false)}>
                Book a consultation →
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
