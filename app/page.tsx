import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Features } from "@/components/Features";
import { SyncBand } from "@/components/SyncBand";
import { Downloads } from "@/components/Downloads";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Header />
      <Hero />
      <HowItWorks />
      <Features />
      <SyncBand />
      <Downloads />
      <Faq />
      <Footer />
    </main>
  );
}
