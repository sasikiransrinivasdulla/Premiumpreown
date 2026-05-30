"use client";

import Image from "next/image";
import { FadeIn } from "@/components/motion/FadeIn";

export function BrandPhilosophy() {
  return (
    <section
      id="philosophy"
      className="relative overflow-hidden section-padding"
      style={{ background: "var(--color-bg-primary)" }}
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 70% 30%, rgba(200,169,107,0.04) 0%, transparent 60%)",
        }}
      />

      <div className="container-luxury relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          {/* Content Side */}
          <div>
            <FadeIn>
              <span className="label-luxury mb-6 block">Our Philosophy</span>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h2
                className="heading-display mb-8"
                style={{ fontSize: "clamp(2rem, 4.5vw, 3.2rem)" }}
              >
                More Than Cars.
                <br />
                <span className="heading-editorial" style={{ color: "var(--color-accent-gold)" }}>
                  We Build Trust.
                </span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="gold-line mb-8" />
            </FadeIn>

            <FadeIn delay={0.3}>
              <p
                className="text-premium mb-6"
                style={{
                  fontSize: "clamp(1rem, 1.3vw, 1.15rem)",
                  lineHeight: 1.85,
                }}
              >
                We believe buying a pre-owned car should never feel like a compromise.
                It should be a confident, premium experience built on safety, quality,
                and mutual respect.
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <p
                className="text-premium mb-8"
                style={{
                  fontSize: "clamp(1rem, 1.3vw, 1.15rem)",
                  lineHeight: 1.85,
                }}
              >
                Every vehicle is personally vetted, certified, and fully documented.
                We don&apos;t just sell cars — we earn trust, one journey at a time.
              </p>
            </FadeIn>

            {/* Quote */}
            <FadeIn delay={0.5}>
              <div
                className="pl-6 py-4"
                style={{
                  borderLeft: "2px solid var(--color-accent-gold)",
                }}
              >
                <p
                  className="text-lg lg:text-xl italic"
                  style={{
                    fontFamily: "var(--font-display)",
                    color: "var(--color-text-primary)",
                    lineHeight: 1.6,
                  }}
                >
                  &ldquo;The right car isn&apos;t just about the drive — it&apos;s
                  about the journey it begins for your family.&rdquo;
                </p>
                <p
                  className="mt-3 text-sm"
                  style={{ color: "var(--color-accent-gold)" }}
                >
                  — Premium Pre-Owned Team
                </p>
              </div>
            </FadeIn>

            {/* Values */}
            <FadeIn delay={0.6}>
              <div className="grid grid-cols-3 gap-6 mt-10">
                {[
                  { value: "Transparency", desc: "in every deal" },
                  { value: "Quality", desc: "in every car" },
                  { value: "Care", desc: "in every interaction" },
                ].map((item) => (
                  <div key={item.value}>
                    <p
                      className="text-lg font-semibold mb-1"
                      style={{
                        fontFamily: "var(--font-display)",
                        color: "var(--color-accent-gold)",
                      }}
                    >
                      {item.value}
                    </p>
                    <p
                      className="text-xs"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Image Side */}
          <FadeIn direction="right" delay={0.2}>
            <div className="relative">
              {/* Main image */}
              <div className="relative rounded-2xl overflow-hidden image-reveal">
                <Image
                  src="/images/hero-car-exterior.webp"
                  alt="Premium automotive experience - exterior showcase"
                  width={1920}
                  height={1080}
                  className="w-full h-auto"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, transparent 60%, rgba(10,10,10,0.6) 100%)",
                  }}
                />
              </div>

              {/* Floating card */}
              <div
                className="absolute -bottom-8 -left-4 lg:-left-8 glass-gold rounded-xl p-6 max-w-xs"
                style={{ boxShadow: "var(--shadow-premium)" }}
              >
                <p
                  className="text-[11px] font-medium tracking-[0.15em] uppercase mb-2"
                  style={{ color: "var(--color-accent-gold)" }}
                >
                  Our Promise
                </p>
                <p
                  className="text-sm"
                  style={{ color: "var(--color-text-primary)", lineHeight: 1.6 }}
                >
                  Premium quality, transparent deals, and a buying experience you&apos;ll love.
                </p>
              </div>

              {/* Decorative element */}
              <div
                className="absolute -top-4 -right-4 w-24 h-24 rounded-full"
                style={{
                  border: "1px solid var(--color-border-gold)",
                  opacity: 0.3,
                }}
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
