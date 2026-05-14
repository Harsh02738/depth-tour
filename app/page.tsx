import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import Marquee from "@/components/home/Marquee";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import WhatWeCreate from "@/components/home/WhatWeCreate";
import Process from "@/components/home/Process";
import Testimonials from "@/components/home/Testimonials";
import HomeCTA from "@/components/home/HomeCTA";

export default function Page() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Marquee />
        <FeaturedProjects />
        <WhatWeCreate />
        <Process />
        <Testimonials />
        <HomeCTA />
      </main>
      <Footer />
    </>
  );
}
