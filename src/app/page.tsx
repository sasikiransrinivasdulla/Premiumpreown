"use client";

import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { TrustSection } from "@/components/TrustSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { CuratedSection } from "@/components/CuratedSection";
import { BrandPhilosophy } from "@/components/BrandPhilosophy";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

export default function Home() {
  useSmoothScroll();

  return (
    <main>
      <Navigation />
      <HeroSection />
      <TrustSection />
      <ExperienceSection />
      <CuratedSection />
      <BrandPhilosophy />
      <CTASection />
      <Footer />
    </main>
  );
}
