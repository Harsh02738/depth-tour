import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import HomeCTA from "@/components/home/HomeCTA";
import Image from "next/image";

export const metadata = {
  title: "About — DepthTour",
  description:
    "We are a spatial visualization studio turning physical spaces into immersive digital experiences for the world's most discerning clients.",
};

const values = [
  {
    label: "Precision",
    description:
      "Every surface, material, and shadow captured with photorealistic accuracy. No approximations.",
  },
  {
    label: "Speed",
    description: "We capture today. You share tomorrow. Every time.",
  },
  {
    label: "Accessibility",
    description:
      "A link. That's all. Any device, anywhere. No apps, no hardware, no friction.",
  },
  {
    label: "Discretion",
    description:
      "Luxury clients trust us with their most valuable assets. We treat every project with absolute confidentiality.",
  },
];

export default function AboutPage() {
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
          <p className="section-label mb-5">Who we are</p>
          <h1
            className="font-display font-light text-ivory leading-none"
            style={{ fontSize: "clamp(3rem, 9vw, 8rem)", letterSpacing: "-0.03em" }}
          >
            About
          </h1>
        </section>

        {/* Mission statement */}
        <section style={{ background: "#090909", padding: "8rem 2.5rem" }}>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="section-label mb-8">Our mission</p>
              <p
                className="font-display font-light text-ivory leading-tight"
                style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)", letterSpacing: "-0.02em" }}
              >
                We turn physical spaces into digital experiences — so the world can walk through them.
              </p>
            </div>
            <div className="flex flex-col gap-6 mt-4 md:mt-16">
              <p
                className="font-body font-light leading-relaxed"
                style={{ color: "#6b6b6b", fontSize: "0.9375rem" }}
              >
                DepthTour was built on a single conviction: geography should never limit a buyer&apos;s ability
                to experience a space. The world&apos;s best properties deserve to be seen by the world&apos;s best buyers — regardless of where those buyers are sitting.
              </p>
              <p
                className="font-body font-light leading-relaxed"
                style={{ color: "#6b6b6b", fontSize: "0.9375rem" }}
              >
                We combine the latest in Gaussian Splatting technology, drone photogrammetry, and cinematic
                capture to create experiences that feel indistinguishable from being there.
              </p>
            </div>
          </div>
        </section>

        {/* Image section */}
        <section style={{ padding: "0 2.5rem", background: "#090909" }}>
          <div
            className="relative"
            style={{ aspectRatio: "21/9", maxHeight: "60vh" }}
          >
            <Image
              src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=2000&q=80&auto=format&fit=crop"
              alt="DepthTour capture team at work"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div
              className="absolute inset-0"
              style={{ background: "rgba(9,9,9,0.35)" }}
            />
          </div>
        </section>

        {/* Values */}
        <section
          style={{
            background: "#0d0d0d",
            padding: "8rem 2.5rem",
            borderTop: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <div className="max-w-6xl mx-auto">
            <p className="section-label mb-12">What we stand for</p>
            <div className="grid md:grid-cols-2 gap-0">
              {values.map((v, i) => (
                <div
                  key={v.label}
                  className="py-8 pr-12"
                  style={{
                    borderTop: "1px solid rgba(255,255,255,0.06)",
                    borderLeft: i % 2 === 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
                    paddingLeft: i % 2 === 1 ? "3rem" : 0,
                  }}
                >
                  <h3
                    className="font-display font-light text-ivory mb-4"
                    style={{ fontSize: "1.5rem" }}
                  >
                    {v.label}
                  </h3>
                  <p
                    className="font-body font-light leading-relaxed text-sm"
                    style={{ color: "#6b6b6b" }}
                  >
                    {v.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Numbers */}
        <section
          style={{
            background: "#090909",
            padding: "6rem 2.5rem",
            borderTop: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-0">
            {[
              { stat: "200+", label: "Spaces digitized" },
              { stat: "24h", label: "Typical turnaround" },
              { stat: "18", label: "Countries served" },
              { stat: "$0", label: "Hardware from you" },
            ].map((item, i) => (
              <div
                key={item.label}
                className="py-8"
                style={{
                  borderLeft: i > 0 ? "1px solid rgba(255,255,255,0.06)" : "none",
                  paddingLeft: i > 0 ? "2rem" : 0,
                }}
              >
                <p
                  className="font-display font-light text-ivory leading-none mb-2"
                  style={{ fontSize: "clamp(2rem, 5vw, 4rem)", letterSpacing: "-0.03em" }}
                >
                  {item.stat}
                </p>
                <p className="section-label">{item.label}</p>
              </div>
            ))}
          </div>
        </section>

        <HomeCTA />
      </main>
      <Footer />
    </>
  );
}
