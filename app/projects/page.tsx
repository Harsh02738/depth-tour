import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import ProjectsGrid from "@/components/projects/ProjectsGrid";

export const metadata = {
  title: "Projects — DepthTour",
  description:
    "A portfolio of immersive 3D space digitization — luxury villas, resorts, commercial towers, and architectural landmarks.",
};

export default function ProjectsPage() {
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
          <p className="section-label mb-5">Selected work</p>
          <h1
            className="font-display font-light text-ivory leading-none"
            style={{ fontSize: "clamp(3rem, 9vw, 8rem)", letterSpacing: "-0.03em" }}
          >
            Projects
          </h1>
        </section>

        <ProjectsGrid />
      </main>
      <Footer />
    </>
  );
}
