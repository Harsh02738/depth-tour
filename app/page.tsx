import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import Stats from "@/components/Stats";
import HowItWorks from "@/components/HowItWorks";
import WhyUs from "@/components/WhyUs";
import Pricing from "@/components/Pricing";
import BookingForm from "@/components/BookingForm";
import FAQ from "@/components/FAQ";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import Cursor from "@/components/Cursor";
import GrainOverlay from "@/components/GrainOverlay";

export default function Page() {
  return (
    <>
      <Cursor />
      <GrainOverlay />
      <ScrollReveal />
      <Nav />
      <main>
        <Hero />
        <Ticker />
        <Stats />
        <HowItWorks />
        <WhyUs />
        <Pricing />
        <BookingForm />
        <FAQ />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
