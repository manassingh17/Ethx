import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import MarketplacePreview from "@/components/MarketplacePreview";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import Partners from "@/components/Partners";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <MarketplacePreview />
      <Stats />
      <Testimonials />
      <Partners />
      <CTA />
      <Footer />
    </main>
  );
}
