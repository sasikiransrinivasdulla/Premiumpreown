"use client";

import Image from "next/image";
import { FadeIn } from "@/components/motion/FadeIn";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { ArrowRight, Fuel, Gauge, Calendar } from "lucide-react";

const curatedCars = [
  {
    name: "Toyota Corolla",
    image: "/images/toyota_corolla.webp",
    year: "2021",
    fuel: "Petrol",
    km: "28,000",
    price: "₹9.5 Lakh",
    badge: "Bestseller",
  },
  {
    name: "Honda Civic",
    image: "/images/honda_civic.webp",
    year: "2020",
    fuel: "Petrol",
    km: "35,000",
    price: "₹12.8 Lakh",
    badge: "Premium Pick",
  },
  {
    name: "Ford Focus",
    image: "/images/ford_focus.webp",
    year: "2019",
    fuel: "Diesel",
    km: "42,000",
    price: "₹7.2 Lakh",
    badge: "Great Value",
  },
  {
    name: "Volkswagen Jetta",
    image: "/images/volkswagen_jetta.webp",
    year: "2021",
    fuel: "Petrol",
    km: "22,000",
    price: "₹11.5 Lakh",
    badge: "Low Mileage",
  },
  {
    name: "Mazda 3",
    image: "/images/mazda_3.webp",
    year: "2020",
    fuel: "Petrol",
    km: "30,000",
    price: "₹10.2 Lakh",
    badge: "Certified",
  },
  {
    name: "Nissan Altima",
    image: "/images/nissan_altima.webp",
    year: "2019",
    fuel: "Petrol",
    km: "45,000",
    price: "₹8.8 Lakh",
    badge: "Family Choice",
  },
];

export function CuratedSection() {
  return (
    <section
      id="curated"
      className="relative overflow-hidden"
      style={{ background: "var(--color-bg-secondary)" }}
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/curated-ones.webp"
          alt="Row of certified pre-owned vehicles at the dealership"
          fill
          className="object-cover"
          style={{ opacity: 0.06 }}
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, var(--color-bg-secondary) 0%, rgba(17,17,17,0.9) 50%, var(--color-bg-secondary) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 section-padding">
        <div className="container-luxury">
          {/* Header */}
          <FadeIn>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16">
              <div>
                <span className="label-luxury mb-4 block">Our Collection</span>
                <h2
                  className="heading-display mb-4"
                  style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
                >
                  The{" "}
                  <span className="heading-editorial" style={{ color: "var(--color-accent-gold)" }}>
                    Curated Ones
                  </span>
                </h2>
                <p className="text-premium max-w-xl">
                  Every vehicle is handpicked for quality, reliability, and value.
                  Only the best make it to our showroom floor.
                </p>
              </div>
              <MagneticButton className="mt-6 lg:mt-0">
                <a href="#contact" className="btn-secondary flex items-center gap-2">
                  View All Cars
                  <ArrowRight size={16} />
                </a>
              </MagneticButton>
            </div>
          </FadeIn>

          {/* Featured Image Banner */}
          <FadeIn className="mb-16">
            <div className="relative rounded-2xl overflow-hidden image-reveal" style={{ height: "clamp(250px, 40vw, 450px)" }}>
              <Image
                src="/images/curated-ones.webp"
                alt="Lineup of certified quality-checked pre-owned cars"
                fill
                className="object-cover"
                sizes="100vw"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(90deg, rgba(10,10,10,0.8) 0%, rgba(10,10,10,0.2) 50%, rgba(10,10,10,0.6) 100%)",
                }}
              />
              <div className="absolute inset-0 flex items-center">
                <div className="container-luxury">
                  <span className="label-luxury mb-3 block">Handpicked Selection</span>
                  <h3
                    className="heading-display text-3xl lg:text-5xl mb-3"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Only the Best Picks.
                  </h3>
                  <p className="text-premium max-w-md">
                    Certified, quality-checked vehicles chosen for families who value trust and reliability.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Car Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {curatedCars.map((car, i) => (
              <FadeIn key={car.name} delay={i * 0.1}>
                <div
                  className="group rounded-xl overflow-hidden transition-all duration-700 hover:transform hover:-translate-y-2"
                  style={{
                    background: "var(--color-bg-card)",
                    border: "1px solid var(--color-border-subtle)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(200,169,107,0.2)";
                    e.currentTarget.style.boxShadow = "0 20px 60px rgba(0,0,0,0.4)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  {/* Image */}
                  <div className="relative overflow-hidden" style={{ height: "220px" }}>
                    <Image
                      src={car.image}
                      alt={`${car.name} - Premium Pre-Owned`}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background: "linear-gradient(180deg, transparent 50%, rgba(10,10,10,0.5) 100%)",
                      }}
                    />
                    {/* Badge */}
                    <div
                      className="absolute top-4 left-4 px-3 py-1.5 rounded-full text-[10px] font-semibold tracking-[0.1em] uppercase"
                      style={{
                        background: "rgba(200,169,107,0.9)",
                        color: "var(--color-bg-primary)",
                      }}
                    >
                      {car.badge}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h4
                      className="text-lg font-semibold mb-3"
                      style={{
                        fontFamily: "var(--font-display)",
                        color: "var(--color-text-primary)",
                      }}
                    >
                      {car.name}
                    </h4>

                    {/* Specs */}
                    <div className="flex gap-4 mb-4">
                      <div className="flex items-center gap-1.5">
                        <Calendar size={13} style={{ color: "var(--color-text-muted)" }} />
                        <span className="text-xs" style={{ color: "var(--color-text-secondary)" }}>
                          {car.year}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Fuel size={13} style={{ color: "var(--color-text-muted)" }} />
                        <span className="text-xs" style={{ color: "var(--color-text-secondary)" }}>
                          {car.fuel}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Gauge size={13} style={{ color: "var(--color-text-muted)" }} />
                        <span className="text-xs" style={{ color: "var(--color-text-secondary)" }}>
                          {car.km} km
                        </span>
                      </div>
                    </div>

                    {/* Price + CTA */}
                    <div className="flex items-center justify-between pt-4" style={{ borderTop: "1px solid var(--color-border-subtle)" }}>
                      <div>
                        <span className="text-xs" style={{ color: "var(--color-text-muted)" }}>
                          Starting at
                        </span>
                        <p
                          className="text-xl font-bold"
                          style={{
                            fontFamily: "var(--font-display)",
                            color: "var(--color-accent-gold)",
                          }}
                        >
                          {car.price}
                        </p>
                      </div>
                      <button
                        className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110"
                        style={{
                          background: "var(--color-accent-gold-dim)",
                          border: "1px solid var(--color-border-gold)",
                        }}
                      >
                        <ArrowRight size={16} style={{ color: "var(--color-accent-gold)" }} />
                      </button>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
