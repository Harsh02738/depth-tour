export default function Footer() {
  return (
    <footer
      className="border-t px-6 py-12"
      style={{ borderColor: "#1a1a1a", background: "#080808" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <p className="text-[#f5f0e8] font-bold text-lg mb-2">DepthTour</p>
            <p className="text-[#555555] text-sm mb-4">
              Photoreal 3D tours. Just a link.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: "#333333" }}>
              Navigate
            </p>
            <a href="#how-it-works" className="text-[#555555] hover:text-[#f5f0e8] text-sm transition-colors">How it works</a>
            <a href="#book" className="text-[#555555] hover:text-[#f5f0e8] text-sm transition-colors">Book a Scan</a>
            <a href="#faq" className="text-[#555555] hover:text-[#f5f0e8] text-sm transition-colors">FAQ</a>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: "#333333" }}>
              Contact Us
            </p>
            <a
              href="mailto:harshshah1012004@gmail.com"
              className="text-[#555555] hover:text-[#f5f0e8] text-sm transition-colors break-all"
            >
              harshshah1012004@gmail.com
            </a>
            <a
              href="tel:+918849248513"
              className="text-[#555555] hover:text-[#f5f0e8] text-sm transition-colors"
            >
              +91 88492 48513
            </a>
            <a href="#" className="text-[#555555] hover:text-[#f5f0e8] text-sm transition-colors">Instagram ↗</a>
            <a href="#" className="text-[#555555] hover:text-[#f5f0e8] text-sm transition-colors">LinkedIn ↗</a>
          </div>
        </div>

        <div
          className="border-t pt-6 text-xs"
          style={{ borderColor: "#1a1a1a", color: "#333333" }}
        >
          © 2026 DepthTour. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
