export default function Footer() {
  return (
    <footer
      className="border-t px-6 py-12"
      style={{ borderColor: "#1a1a1a", background: "#080808" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <p className="text-[#f5f0e8] font-bold text-lg mb-2">DepthTour</p>
            <p className="text-[#555555] text-sm">
              Photoreal 3D tours. Just a link.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-3">
            <a
              href="#how-it-works"
              className="text-[#555555] hover:text-[#f5f0e8] text-sm transition-colors"
            >
              How it works
            </a>
            <a
              href="#pricing"
              className="text-[#555555] hover:text-[#f5f0e8] text-sm transition-colors"
            >
              Pricing
            </a>
            <a
              href="#faq"
              className="text-[#555555] hover:text-[#f5f0e8] text-sm transition-colors"
            >
              FAQ
            </a>
            <a
              href="mailto:contact@depthtour.com"
              className="text-[#555555] hover:text-[#f5f0e8] text-sm transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Social */}
          <div className="flex flex-col gap-3">
            <a
              href="#"
              className="text-[#555555] hover:text-[#f5f0e8] text-sm transition-colors"
            >
              Instagram ↗
            </a>
            <a
              href="#"
              className="text-[#555555] hover:text-[#f5f0e8] text-sm transition-colors"
            >
              LinkedIn ↗
            </a>
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
