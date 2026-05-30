"use client";

import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { CuratedSection } from "@/components/CuratedSection";
import { EthosSection } from "@/components/EthosSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

export default function Home() {
  useSmoothScroll();

  return (
    <main>
      <Navigation />
      <HeroSection />
      <CuratedSection />
      <EthosSection />
      <CTASection />
      <Footer />
    </main>
  );
}
