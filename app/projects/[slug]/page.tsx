import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { projects } from "@/lib/data";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  return {
    title: project ? `${project.title} — DepthTour` : "Project — DepthTour",
  };
}

export default async function ProjectDetail({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const others = projects.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <>
      <Navigation />
      <main>
        {/* Fullscreen Hero */}
        <section className="relative full-h" style={{ minHeight: "100svh" }}>
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(9,9,9,0.2) 0%, rgba(9,9,9,0.7) 100%)",
            }}
          />
          <div
            className="absolute bottom-0 left-0 right-0"
            style={{ padding: "0 2.5rem 5rem" }}
          >
            <p className="section-label mb-4" style={{ color: "#c4a882" }}>
              {project.category} — {project.location}
            </p>
            <h1
              className="font-display font-light text-ivory leading-none"
              style={{ fontSize: "clamp(3rem, 8vw, 7rem)", letterSpacing: "-0.03em" }}
            >
              {project.title}
            </h1>
          </div>
        </section>

        {/* Overview */}
        <section
          style={{
            background: "#090909",
            padding: "7rem 2.5rem",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
            {/* Description */}
            <div className="md:col-span-2">
              <p className="section-label mb-6">Project Overview</p>
              <p
                className="font-display font-light text-ivory leading-relaxed"
                style={{ fontSize: "clamp(1.25rem, 2.5vw, 1.875rem)", letterSpacing: "-0.01em" }}
              >
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-8">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-body text-xs px-3 py-1.5"
                    style={{
                      color: "#6b6b6b",
                      border: "1px solid rgba(255,255,255,0.08)",
                      letterSpacing: "0.08em",
                    }}
                  >
                    {tag.toUpperCase()}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats sidebar */}
            <div className="flex flex-col gap-8">
              {[
                { label: "Location", value: project.location },
                { label: "Category", value: project.category },
                { label: "Area", value: project.area },
                { label: "Year", value: project.year },
              ].map((stat) => (
                <div
                  key={stat.label}
                  style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "1rem" }}
                >
                  <p className="section-label mb-1.5">{stat.label}</p>
                  <p
                    className="font-display font-light text-ivory"
                    style={{ fontSize: "1.125rem" }}
                  >
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery */}
        {project.gallery.length > 0 && (
          <section style={{ background: "#0d0d0d", padding: "2rem 2.5rem 7rem" }}>
            <div className="max-w-6xl mx-auto">
              <p className="section-label mb-8 mt-6">Gallery</p>
              <div className="flex flex-col gap-3">
                {project.gallery.map((src, i) => (
                  <div
                    key={i}
                    className="img-zoom relative"
                    style={{ aspectRatio: i % 2 === 0 ? "16/7" : "16/9" }}
                  >
                    <Image
                      src={src}
                      alt={`${project.title} — image ${i + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 85vw"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* What we delivered */}
        <section
          style={{
            background: "#090909",
            padding: "6rem 2.5rem",
            borderTop: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            {[
              { label: "Capture Method", value: "Gaussian Splatting + Photogrammetry" },
              { label: "Delivery", value: "Browser-native — no app required" },
              { label: "Turnaround", value: "Within 24 hours of capture" },
            ].map((item) => (
              <div
                key={item.label}
                className="py-6"
                style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
              >
                <p className="section-label mb-3">{item.label}</p>
                <p
                  className="font-display font-light text-ivory"
                  style={{ fontSize: "1.125rem" }}
                >
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Next projects */}
        <section
          style={{
            background: "#090909",
            padding: "4rem 2.5rem 8rem",
            borderTop: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <div className="max-w-6xl mx-auto">
            <p className="section-label mb-8">More projects</p>
            <div className="grid md:grid-cols-2 gap-3">
              {others.map((p) => (
                <Link key={p.slug} href={`/projects/${p.slug}`} className="block group">
                  <div className="img-grayscale relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
                    <Image src={p.image} alt={p.title} fill className="object-cover" sizes="50vw" />
                  </div>
                  <div className="pt-4">
                    <p className="section-label mb-1" style={{ color: "#363636" }}>
                      {p.category}
                    </p>
                    <h3
                      className="font-display font-light text-ivory group-hover:text-gold transition-colors duration-300"
                      style={{ fontSize: "1.5rem" }}
                    >
                      {p.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
