export default function CTABanner() {
  return (
    <section
      id="cta"
      className="py-28 px-6 relative overflow-hidden"
      style={{ background: "#080808", borderTop: "1px solid #1a1a1a" }}
    >
      {/* Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 50% 100%, rgba(99,102,241,0.15) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-[#f5f0e8] tracking-tight mb-6 leading-tight">
          Be the first agent in your
          <br />
          market with this.
        </h2>
        <p className="text-[#888888] text-lg mb-10 max-w-xl mx-auto leading-relaxed">
          Ten outreach messages gets you one client. One client gets you the
          next three.
        </p>

        <a
          href="#book"
          className="inline-block bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-10 py-4 rounded-full text-lg transition-colors"
        >
          Book a Scan Today →
        </a>

        <p className="text-[#555555] text-sm mt-6">
          First scan at half price for new clients.
        </p>
      </div>
    </section>
  );
}
