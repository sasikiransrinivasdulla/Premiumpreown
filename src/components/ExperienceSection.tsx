"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/motion/FadeIn";
import { StaggerChildren, staggerItem } from "@/components/motion/StaggerChildren";
import { Search, FileCheck, Wallet, Headphones } from "lucide-react";

const processSteps = [
  {
    icon: Search,
    title: "Rigorous Inspection",
    description:
      "Every vehicle undergoes a comprehensive multi-point inspection by certified technicians before joining our collection.",
  },
  {
    icon: FileCheck,
    title: "Complete Documentation",
    description:
      "Full transparency with verified service history, ownership records, and insurance transfer assistance.",
  },
  {
    icon: Wallet,
    title: "Easy Financing",
    description:
      "Flexible financing options with competitive rates. We work with leading banks to find the best plan for you.",
  },
  {
    icon: Headphones,
    title: "After-Sales Care",
    description:
      "Our relationship doesn't end at the handover. Enjoy dedicated support, service reminders, and priority assistance.",
  },
];

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden section-padding"
      style={{ background: "var(--color-bg-primary)" }}
    >
      {/* Subtle background texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 30% 50%, rgba(200,169,107,0.03) 0%, transparent 70%)",
        }}
      />

      <div className="container-luxury relative z-10">
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-20">
            <span className="label-luxury mb-4 block">The Process</span>
            <h2
              className="heading-display mb-6"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
            >
              A Better{" "}
              <span className="heading-editorial" style={{ color: "var(--color-accent-gold)" }}>
                Experience
              </span>
            </h2>
            <div className="gold-line-center mb-6" />
            <p
              className="text-premium max-w-2xl mx-auto"
              style={{ fontSize: "clamp(0.95rem, 1.3vw, 1.1rem)" }}
            >
              From first inquiry to keys in hand — every step is designed to be
              smooth, transparent, and stress-free.
            </p>
          </div>
        </FadeIn>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <FadeIn direction="left" className="order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden image-reveal">
              <Image
                src="/images/better-experience.webp"
                alt="Sales expert showing car details on tablet to a happy couple in a premium showroom"
                width={1920}
                height={1080}
                className="w-full h-auto"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(10,10,10,0.3) 0%, transparent 60%)",
                }}
              />
              {/* Floating badge */}
              <div className="absolute top-6 left-6 glass-gold rounded-lg px-5 py-3">
                <span
                  className="text-[11px] font-semibold tracking-[0.15em] uppercase"
                  style={{ color: "var(--color-accent-gold)" }}
                >
                  Smooth Process. Zero Stress.
                </span>
              </div>
            </div>
          </FadeIn>

          {/* Content Side */}
          <div className="order-1 lg:order-2">
            <StaggerChildren className="space-y-6">
              {processSteps.map((step, i) => (
                <motion.div
                  key={step.title}
                  variants={staggerItem}
                  className="flex gap-5 p-5 rounded-xl transition-all duration-700 group hover:bg-[rgba(255,255,255,0.02)]"
                  style={{ border: "1px solid transparent" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(200,169,107,0.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "transparent";
                  }}
                >
                  {/* Step number + icon */}
                  <div className="flex-shrink-0">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center relative transition-all duration-500 group-hover:scale-110"
                      style={{ background: "var(--color-accent-gold-dim)" }}
                    >
                      <step.icon size={22} style={{ color: "var(--color-accent-gold)" }} />
                      <span
                        className="absolute -top-2 -right-2 w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-bold"
                        style={{
                          background: "var(--color-accent-gold)",
                          color: "var(--color-bg-primary)",
                        }}
                      >
                        {i + 1}
                      </span>
                    </div>
                  </div>

                  {/* Text */}
                  <div>
                    <h3
                      className="text-lg font-semibold mb-2"
                      style={{
                        fontFamily: "var(--font-display)",
                        color: "var(--color-text-primary)",
                      }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "var(--color-text-secondary)" }}
                    >
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </StaggerChildren>
          </div>
        </div>
      </div>
    </section>
  );
}
