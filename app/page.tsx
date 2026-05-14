import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import HowItWorks from "@/components/HowItWorks";
import WhyUs from "@/components/WhyUs";
import BookingForm from "@/components/BookingForm";
import FAQ from "@/components/FAQ";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Page() {
  return (
    <>
      <ScrollReveal />
      <Nav />
      <main>
        <Hero />
        <Ticker />
        <HowItWorks />
        <WhyUs />
        <BookingForm />
        <FAQ />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
