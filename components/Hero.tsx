export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden"
      style={{ background: "#080808" }}
    >
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(99,102,241,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto animate-fade-in-up">
        {/* Eyebrow pill */}
        <div className="inline-flex items-center gap-2 border border-indigo-500/40 text-indigo-400 text-xs font-medium px-4 py-1.5 rounded-full mb-8">
          <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full" />
          Now available in your city
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-bold text-[#f5f0e8] leading-tight tracking-tight mb-6">
          Walk Through Any Property.
          <br />
          <span className="text-indigo-400">Before You&apos;re There.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-[#888888] leading-relaxed max-w-2xl mx-auto mb-10">
          DepthTour turns a phone walkthrough into a browser-based 3D tour your
          buyers can explore on any device. No app. No headset. Just a link.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center mb-10">
          <a
            href="#cta"
            className="bg-indigo-600 hover:bg-indigo-500 text-white font-medium px-7 py-3.5 rounded-full transition-colors text-base"
          >
            Book Your First Scan →
          </a>
          <a
            href="#how-it-works"
            className="border border-white/20 hover:border-white/40 text-[#f5f0e8] font-medium px-7 py-3.5 rounded-full transition-colors text-base"
          >
            See How It Works ↗
          </a>
        </div>

        {/* Social proof */}
        <p className="text-sm text-[#888888] flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
          <span>✓ No hardware needed</span>
          <span>✓ Delivered same day</span>
          <span>✓ Works on every phone</span>
        </p>
      </div>
    </section>
  );
}
