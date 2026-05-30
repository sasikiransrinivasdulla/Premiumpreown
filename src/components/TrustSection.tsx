"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/motion/FadeIn";
import { StaggerChildren, staggerItem } from "@/components/motion/StaggerChildren";
import { CountUp } from "@/components/motion/CountUp";
import { Shield, Award, ThumbsUp, Users } from "lucide-react";

const stats = [
  { icon: Shield, value: 500, suffix: "+", label: "Delivered", description: "Trusted across India" },
  { icon: Award, value: 10, suffix: "+", label: "Years Active", description: "A decade of trust" },
  { icon: ThumbsUp, value: 98, suffix: "%", label: "Satisfaction", description: "Verified happiness" },
  { icon: Users, value: 200, suffix: "+", label: "Happy Families", description: "Growing every day" },
];

const trustBadges = [
  "Certified Quality Check",
  "Complete Documentation",
  "Transparent History",
  "Fair Market Pricing",
  "After-Sales Support",
  "Easy Financing",
];

export function TrustSection() {
  return (
    <section id="trust" className="relative overflow-hidden" style={{ background: "var(--color-bg-secondary)" }}>
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/trusted-dealer.webp"
          alt="Trusted dealer shaking hands with a happy couple at the dealership"
          fill
          className="object-cover"
          style={{ opacity: 0.12 }}
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, var(--color-bg-secondary) 0%, rgba(17,17,17,0.85) 50%, var(--color-bg-secondary) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 section-padding">
        <div className="container-luxury">
          {/* Section Header */}
          <FadeIn>
            <div className="text-center mb-24">
              <span className="label-luxury mb-4 block">Why Choose Us</span>
              <h2
                className="heading-display mb-6"
                style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
              >
                Trusted by{" "}
                <span className="heading-editorial" style={{ color: "var(--color-accent-gold)" }}>
                  Families
                </span>
              </h2>
              <div className="gold-line-center mb-6" />
              <p
                className="text-premium max-w-2xl mx-auto"
                style={{ fontSize: "clamp(0.95rem, 1.3vw, 1.1rem)" }}
              >
                Every vehicle is personally inspected, verified, and certified.
                Absolute transparency, honest pricing, and a relationship built to last.
              </p>
            </div>
          </FadeIn>

          {/* Stats Grid */}
          <StaggerChildren className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-24">
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={staggerItem}
                className="glass rounded-xl p-6 lg:p-8 text-center group hover:border-[rgba(200,169,107,0.2)] transition-all duration-700"
                style={{ borderColor: "transparent" }}
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-5 transition-all duration-500 group-hover:scale-110"
                  style={{ background: "var(--color-accent-gold-dim)" }}
                >
                  <stat.icon size={22} style={{ color: "var(--color-accent-gold)" }} />
                </div>
                <div
                  className="mb-2"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                    fontWeight: 700,
                    color: "var(--color-text-primary)",
                  }}
                >
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </div>
                <div
                  className="text-sm font-medium mb-1"
                  style={{ color: "var(--color-accent-gold)" }}
                >
                  {stat.label}
                </div>
                <div
                  className="text-xs"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </StaggerChildren>

          {/* Trust Badges */}
          <FadeIn delay={0.3}>
            <div className="flex flex-wrap justify-center gap-3 lg:gap-4">
              {trustBadges.map((badge) => (
                <div
                  key={badge}
                  className="px-5 py-2.5 rounded-full text-[11px] font-medium tracking-[0.1em] uppercase transition-all duration-500 hover:border-[rgba(200,169,107,0.3)]"
                  style={{
                    border: "1px solid var(--color-border-subtle)",
                    color: "var(--color-text-secondary)",
                    background: "var(--color-bg-glass-light)",
                  }}
                >
                  {badge}
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Featured trust image */}
          <FadeIn delay={0.4} className="mt-16">
            <div className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden image-reveal">
              <Image
                src="/images/trusted-dealer.webp"
                alt="Trusted dealer greeting customers at a quality pre-owned car dealership"
                width={1920}
                height={1080}
                className="w-full h-auto"
                sizes="(max-width: 768px) 100vw, 80vw"
                priority={false}
              />
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(180deg, transparent 40%, rgba(10,10,10,0.7) 100%)",
                }}
              />
              <div className="absolute bottom-6 left-6 right-6 lg:bottom-10 lg:left-10">
                <span className="label-luxury mb-2 block">Verified Quality</span>
                <p
                  className="text-lg lg:text-xl font-medium"
                  style={{
                    fontFamily: "var(--font-display)",
                    color: "var(--color-text-primary)",
                  }}
                >
                  Verified Cars. Honest Deals.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
