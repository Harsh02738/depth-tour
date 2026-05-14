"use client";

export default function CTABanner() {
  return (
    <section
      id="cta"
      className="py-36 px-6 relative overflow-hidden"
      style={{ background: "#050505", borderTop: "1px solid rgba(255,255,255,0.04)" }}
    >
      {/* Aurora orb 1 */}
      <div
        className="absolute top-[-20%] left-[-5%] w-[600px] h-[600px] rounded-full pointer-events-none animate-aurora"
        style={{
          background: "radial-gradient(circle, rgba(99,102,241,0.3) 0%, transparent 65%)",
          filter: "blur(70px)",
        }}
      />
      {/* Aurora orb 2 */}
      <div
        className="absolute bottom-[-20%] right-[-5%] w-[500px] h-[500px] rounded-full pointer-events-none animate-aurora"
        style={{
          background: "radial-gradient(circle, rgba(139,92,246,0.25) 0%, transparent 65%)",
          filter: "blur(65px)",
          animationDelay: "-6s",
        }}
      />
      {/* Aurora orb 3 */}
      <div
        className="absolute top-[30%] right-[20%] w-[400px] h-[400px] rounded-full pointer-events-none animate-aurora"
        style={{
          background: "radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 65%)",
          filter: "blur(60px)",
          animationDelay: "-11s",
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto text-center reveal">
        <p
          className="text-xs font-semibold tracking-[0.2em] uppercase mb-6"
          style={{ color: "#6366f1" }}
        >
          Ready to stand out?
        </p>
        <h2 className="text-4xl md:text-6xl font-bold text-[#f5f0e8] tracking-tight mb-6 leading-tight">
          Be the first agent in your
          <br />
          <span className="gradient-text">market with this.</span>
        </h2>
        <p className="text-lg mb-12 max-w-xl mx-auto leading-relaxed" style={{ color: "#666666" }}>
          Ten outreach messages gets you one client. One client gets you the
          next three.
        </p>

        <a
          href="#book"
          className="relative inline-block bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-12 py-5 rounded-full text-lg transition-all"
          style={{
            boxShadow: "0 0 40px rgba(99,102,241,0.55), 0 0 80px rgba(99,102,241,0.2)",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.boxShadow =
              "0 0 60px rgba(99,102,241,0.75), 0 0 100px rgba(99,102,241,0.3)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.boxShadow =
              "0 0 40px rgba(99,102,241,0.55), 0 0 80px rgba(99,102,241,0.2)")
          }
        >
          Book a Scan Today →
        </a>

        <p className="text-sm mt-6" style={{ color: "#333333" }}>
          First scan at half price for new clients.
        </p>
      </div>
    </section>
  );
}
