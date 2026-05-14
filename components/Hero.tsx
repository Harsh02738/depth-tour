export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden blueprint-grid"
      style={{ background: "#050505" }}
    >
      {/* Aurora orb 1 — indigo top-left */}
      <div
        className="absolute top-[-15%] left-[-8%] w-[650px] h-[650px] rounded-full pointer-events-none animate-aurora"
        style={{
          background: "radial-gradient(circle, rgba(99,102,241,0.38) 0%, transparent 65%)",
          filter: "blur(70px)",
        }}
      />
      {/* Aurora orb 2 — violet center-right */}
      <div
        className="absolute top-[25%] right-[-6%] w-[500px] h-[500px] rounded-full pointer-events-none animate-aurora"
        style={{
          background: "radial-gradient(circle, rgba(139,92,246,0.28) 0%, transparent 65%)",
          filter: "blur(65px)",
          animationDelay: "-5s",
        }}
      />
      {/* Aurora orb 3 — cyan bottom */}
      <div
        className="absolute bottom-[-12%] left-[28%] w-[550px] h-[550px] rounded-full pointer-events-none animate-aurora"
        style={{
          background: "radial-gradient(circle, rgba(6,182,212,0.18) 0%, transparent 65%)",
          filter: "blur(80px)",
          animationDelay: "-9s",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto animate-fade-in-up">
        {/* Eyebrow pill */}
        <div
          className="inline-flex items-center gap-2 text-xs font-medium px-4 py-1.5 rounded-full mb-8"
          style={{
            background: "rgba(99,102,241,0.1)",
            border: "1px solid rgba(99,102,241,0.35)",
            color: "#a5b4fc",
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{
              background: "#818cf8",
              boxShadow: "0 0 6px rgba(129,140,248,0.8)",
            }}
          />
          Now available in your city
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-bold text-[#f5f0e8] leading-tight tracking-tight mb-6">
          Walk Through Any Property.
          <br />
          <span className="gradient-text">Before You&apos;re There.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10" style={{ color: "#777777" }}>
          DepthTour turns any property into a browser-based 3D tour your
          buyers can explore on any device. No app. No headset. Just a link.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center mb-12">
          <a
            href="#book"
            className="relative bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-8 py-4 rounded-full transition-all text-base"
            style={{
              boxShadow: "0 0 30px rgba(99,102,241,0.5), 0 0 60px rgba(99,102,241,0.2)",
            }}
          >
            Book Your First Scan →
          </a>
          <a
            href="#how-it-works"
            className="text-[#f5f0e8] font-medium px-8 py-4 rounded-full transition-all text-base glass-card"
          >
            See How It Works ↗
          </a>
        </div>

        {/* Social proof */}
        <div
          className="inline-flex flex-wrap items-center justify-center gap-x-6 gap-y-3 px-6 py-3 rounded-full glass-card"
        >
          {["No hardware needed", "Delivered same day", "Works on every device"].map((t) => (
            <span key={t} className="text-sm flex items-center gap-2" style={{ color: "#888888" }}>
              <span style={{ color: "#6366f1" }}>✓</span>
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
