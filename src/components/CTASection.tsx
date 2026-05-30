"use client";

import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/motion/FadeIn";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { Phone } from "lucide-react";

export function CTASection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden flex items-center justify-center section-padding"
      style={{ minHeight: "60vh" }}
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-car-interior.webp"
          alt="Luxury car interior"
          fill
          className="object-cover"
          sizes="100vw"
          style={{ opacity: 0.15 }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, var(--color-bg-primary) 0%, rgba(10,10,10,0.85) 50%, var(--color-bg-primary) 100%)",
          }}
        />
      </div>

      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(200,169,107,0.05) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 w-full">
        <div className="container-luxury">
          {/* Main CTA Content */}
          <div className="text-center max-w-3xl mx-auto">
            <FadeIn>
              <span className="label-luxury mb-8 block">Begin Your Journey</span>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h2
                className="heading-display mb-8"
                style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
              >
                Find Your{" "}
                <span className="heading-editorial" style={{ color: "var(--color-accent-gold)" }}>
                  Perfect Match.
                </span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="gold-line-center mb-12" />
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                <MagneticButton>
                  <a href="tel:+919876543210" className="btn-primary">
                    <Phone size={16} />
                    <span>Book a Visit</span>
                  </a>
                </MagneticButton>
                <MagneticButton>
                  <Link href="/cars" className="btn-secondary">
                    Explore Collection
                  </Link>
                </MagneticButton>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
