import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import HomeCTA from "@/components/home/HomeCTA";
import { services } from "@/lib/data";

export const metadata = {
  title: "Services — DepthTour",
  description:
    "Gaussian Splatting, drone photogrammetry, digital twins, and interactive real estate tours — the full spectrum of spatial digitization.",
};

const deliverables = [
  { label: "Turnaround", value: "24 hours from capture" },
  { label: "Format", value: "Browser-native — any device" },
  { label: "Hardware from you", value: "None required" },
  { label: "Monthly commitment", value: "Pay per project" },
];

export default function ServicesPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Page hero */}
        <section
          style={{
            background: "#090909",
            padding: "14rem 2.5rem 6rem",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <p className="section-label mb-5">What we offer</p>
          <h1
            className="font-display font-light text-ivory leading-none"
            style={{ fontSize: "clamp(3rem, 9vw, 8rem)", letterSpacing: "-0.03em" }}
          >
            Services
          </h1>
          <p
            className="font-body font-light mt-8 max-w-lg leading-relaxed"
            style={{ color: "#6b6b6b", fontSize: "1rem" }}
          >
            Every service we offer starts and ends with one question:
            <em> does this make the space unforgettable?</em>
          </p>
        </section>

        {/* Services detail */}
        <section style={{ background: "#090909", padding: "6rem 2.5rem 8rem" }}>
          <div className="max-w-6xl mx-auto">
            {services.map((s, i) => (
              <div
                key={s.id}
                className="grid md:grid-cols-12 gap-6 md:gap-12 py-12"
                style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
              >
                <div className="md:col-span-1">
                  <span className="section-label">{s.id}</span>
                </div>
                <div className="md:col-span-4">
                  <h2
                    className="font-display font-light text-ivory"
                    style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", letterSpacing: "-0.015em" }}
                  >
                    {s.title}
                  </h2>
                </div>
                <div className="md:col-span-7">
                  <p
                    className="font-body font-light leading-relaxed"
                    style={{ color: "#6b6b6b", fontSize: "0.9375rem", maxWidth: "480px" }}
                  >
                    {s.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Deliverables */}
        <section
          style={{
            background: "#0d0d0d",
            padding: "6rem 2.5rem",
            borderTop: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <div className="max-w-6xl mx-auto">
            <p className="section-label mb-12">Every project includes</p>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-0">
              {deliverables.map((d, i) => (
                <div
                  key={d.label}
                  className="py-8"
                  style={{
                    borderLeft: i > 0 ? "1px solid rgba(255,255,255,0.06)" : "none",
                    paddingLeft: i > 0 ? "2rem" : 0,
                  }}
                >
                  <p className="section-label mb-3">{d.label}</p>
                  <p
                    className="font-display font-light text-ivory"
                    style={{ fontSize: "1.125rem" }}
                  >
                    {d.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <HomeCTA />
      </main>
      <Footer />
    </>
  );
}
