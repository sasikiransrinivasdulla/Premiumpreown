"use client";

import Image from "next/image";
import { FadeIn } from "@/components/motion/FadeIn";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { Phone, MapPin, Clock, Mail } from "lucide-react";

const contactDetails = [
  { icon: Phone, label: "Call Us", value: "+91 98765 43210" },
  { icon: Mail, label: "Email", value: "hello@premiumpreown.in" },
  { icon: MapPin, label: "Visit", value: "Hyderabad, Telangana" },
  { icon: Clock, label: "Hours", value: "10 AM – 8 PM, Mon – Sat" },
];

export function CTASection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden flex items-center justify-center"
      style={{ minHeight: "90vh" }}
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-car-interior.webp"
          alt="Luxury car interior cockpit view"
          fill
          className="object-cover"
          sizes="100vw"
          style={{ opacity: 0.2 }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, var(--color-bg-primary) 0%, rgba(10,10,10,0.85) 30%, rgba(10,10,10,0.9) 70%, var(--color-bg-primary) 100%)",
          }}
        />
      </div>

      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(200,169,107,0.06) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 w-full py-16 lg:py-24">
        <div className="container-luxury">
          {/* Main CTA Content */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <FadeIn>
              <span className="label-luxury mb-6 block">Begin Your Journey</span>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h2
                className="heading-display mb-6"
                style={{ fontSize: "clamp(2.2rem, 6vw, 4rem)" }}
              >
                Ready to Find{" "}
                <span className="heading-editorial" style={{ color: "var(--color-accent-gold)" }}>
                  Your Match?
                </span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="gold-line-center mb-8" />
            </FadeIn>

            <FadeIn delay={0.3}>
              <p
                className="text-premium mb-10 max-w-xl mx-auto"
                style={{ fontSize: "clamp(1rem, 1.4vw, 1.15rem)" }}
              >
                Visit our showroom for a premium experience. No pressure, no
                gimmicks — just honest conversations and quality vehicles waiting
                for the right family.
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="flex flex-wrap justify-center gap-5">
                <MagneticButton>
                  <a href="tel:+919876543210" className="btn-primary">
                    <Phone size={16} />
                    <span>Book a Visit</span>
                  </a>
                </MagneticButton>
                <MagneticButton>
                  <a href="#curated" className="btn-secondary">
                    Explore Collection
                  </a>
                </MagneticButton>
              </div>
            </FadeIn>
          </div>

          {/* Contact Cards */}
          <FadeIn delay={0.5}>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 max-w-4xl mx-auto">
              {contactDetails.map((contact) => (
                <div
                  key={contact.label}
                  className="glass rounded-xl p-6 text-center group hover:border-[rgba(200,169,107,0.2)] transition-all duration-700"
                >
                  <div
                    className="w-11 h-11 rounded-lg flex items-center justify-center mx-auto mb-4 transition-all duration-500 group-hover:scale-110"
                    style={{ background: "var(--color-accent-gold-dim)" }}
                  >
                    <contact.icon size={18} style={{ color: "var(--color-accent-gold)" }} />
                  </div>
                  <p
                    className="text-[10px] font-medium tracking-[0.15em] uppercase mb-1"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    {contact.label}
                  </p>
                  <p
                    className="text-sm font-medium"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    {contact.value}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Decorative bottom line */}
          <div
            className="mt-20 h-[1px] max-w-2xl mx-auto"
            style={{
              background:
                "linear-gradient(90deg, transparent, var(--color-accent-gold), transparent)",
              opacity: 0.2,
            }}
          />
        </div>
      </div>
    </section>
  );
}
