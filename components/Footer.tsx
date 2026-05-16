"use client";

export default function Footer() {
  return (
    <footer
      className="px-6 py-14"
      style={{
        background: "#050505",
        borderTop: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <p className="font-bold text-xl mb-2 gradient-text">DepthTour</p>
            <p className="text-sm leading-relaxed" style={{ color: "#444444" }}>
              Photoreal 3D tours. Just a link.
            </p>
          </div>

          {/* Navigate */}
          <div className="flex flex-col gap-3">
            <p
              className="text-xs font-semibold tracking-[0.15em] uppercase mb-1"
              style={{ color: "#2a2a2a" }}
            >
              Navigate
            </p>
            {[
              { label: "How it works", href: "#how-it-works" },
              { label: "Pricing",      href: "#pricing" },
              { label: "Book a Scan",  href: "#book" },
              { label: "FAQ",          href: "#faq" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm transition-colors"
                style={{ color: "#444444" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#f5f0e8")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#444444")}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <p
              className="text-xs font-semibold tracking-[0.15em] uppercase mb-1"
              style={{ color: "#2a2a2a" }}
            >
              Contact Us
            </p>
            <a
              href="mailto:harshshah1012004@gmail.com"
              className="text-sm transition-colors break-all"
              style={{ color: "#444444" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#f5f0e8")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#444444")}
            >
              harshshah1012004@gmail.com
            </a>
            <a
              href="#"
              className="text-sm transition-colors"
              style={{ color: "#444444" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#f5f0e8")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#444444")}
            >
              Instagram ↗
            </a>
            <a
              href="#"
              className="text-sm transition-colors"
              style={{ color: "#444444" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#f5f0e8")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#444444")}
            >
              LinkedIn ↗
            </a>
          </div>
        </div>

        <div
          className="border-t pt-6 text-xs"
          style={{ borderColor: "rgba(255,255,255,0.04)", color: "#2a2a2a" }}
        >
          © 2026 DepthTour. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
