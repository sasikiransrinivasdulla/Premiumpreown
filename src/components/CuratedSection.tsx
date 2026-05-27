"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/motion/FadeIn";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { ArrowRight, Fuel, Gauge, Settings } from "lucide-react";

export function CuratedSection() {
  const [cars, setCars] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const res = await fetch("/api/cars");
        if (!res.ok) throw new Error("Failed to fetch cars");
        const data = await res.json();
        setCars(data);
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  const formatPrice = (price: number) => {
    if (price >= 100000) {
      return `₹${(price / 100000).toFixed(2).replace(/\.00$/, "")} Lakh`;
    }
    return `₹${price.toLocaleString("en-IN")}`;
  };

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

          {/* Loading State */}
          {loading && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="rounded-xl overflow-hidden animate-pulse"
                  style={{
                    background: "var(--color-bg-card)",
                    border: "1px solid var(--color-border-subtle)",
                    height: "400px"
                  }}
                >
                  <div className="h-[220px]" style={{ background: "rgba(255,255,255,0.02)" }} />
                  <div className="p-6">
                    <div className="h-6 rounded mb-4 w-3/4" style={{ background: "rgba(255,255,255,0.05)" }} />
                    <div className="h-4 rounded mb-6 w-full" style={{ background: "rgba(255,255,255,0.03)" }} />
                    <div className="flex justify-between items-center pt-4" style={{ borderTop: "1px solid var(--color-border-subtle)" }}>
                      <div className="h-6 rounded w-1/3" style={{ background: "rgba(255,255,255,0.05)" }} />
                      <div className="h-10 w-10 rounded-full" style={{ background: "var(--color-accent-gold-dim)" }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Empty State */}
          {!loading && !error && cars.length === 0 && (
            <FadeIn>
              <div 
                className="text-center py-20 rounded-xl"
                style={{
                  background: "var(--color-bg-card)",
                  border: "1px solid var(--color-border-subtle)",
                }}
              >
                <p className="text-xl" style={{ fontFamily: "var(--font-display)", color: "var(--color-text-primary)" }}>
                  No curated vehicles available yet
                </p>
                <p className="text-sm mt-2" style={{ color: "var(--color-text-secondary)" }}>
                  Please check back soon for our latest arrivals.
                </p>
              </div>
            </FadeIn>
          )}

          {/* Error State */}
          {!loading && error && (
            <FadeIn>
              <div 
                className="text-center py-20 rounded-xl"
                style={{
                  background: "var(--color-bg-card)",
                  border: "1px solid rgba(255,0,0,0.1)",
                }}
              >
                <p className="text-xl" style={{ color: "var(--color-text-primary)" }}>
                  Unable to load vehicles
                </p>
              </div>
            </FadeIn>
          )}

          {/* Car Grid */}
          {!loading && !error && cars.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {cars.map((car, i) => (
                <FadeIn key={car._id} delay={i * 0.1}>
                  <div
                    className="group rounded-xl overflow-hidden transition-all duration-700 hover:transform hover:-translate-y-2 relative"
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
                    <Link href={`/cars/${car._id}`} className="absolute inset-0 z-10">
                      <span className="sr-only">View {car.carName} details</span>
                    </Link>

                    {/* Image */}
                    <div className="relative overflow-hidden" style={{ height: "220px" }}>
                      <Image
                        src={car.thumbnailImage || "/images/placeholder-car.webp"}
                        alt={`${car.carName} - Premium Pre-Owned`}
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
                      {car.featured && (
                        <div
                          className="absolute top-4 left-4 px-3 py-1.5 rounded-full text-[10px] font-semibold tracking-[0.1em] uppercase"
                          style={{
                            background: "rgba(200,169,107,0.9)",
                            color: "var(--color-bg-primary)",
                          }}
                        >
                          Featured
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6 relative z-20 pointer-events-none">
                      <h4
                        className="text-lg font-semibold mb-3 truncate"
                        style={{
                          fontFamily: "var(--font-display)",
                          color: "var(--color-text-primary)",
                        }}
                        title={car.carName}
                      >
                        {car.carName}
                      </h4>

                      {/* Specs */}
                      <div className="flex gap-4 mb-4">
                        <div className="flex items-center gap-1.5">
                          <Fuel size={13} style={{ color: "var(--color-text-muted)" }} />
                          <span className="text-xs" style={{ color: "var(--color-text-secondary)" }}>
                            {car.fuelType}
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Settings size={13} style={{ color: "var(--color-text-muted)" }} />
                          <span className="text-xs" style={{ color: "var(--color-text-secondary)" }}>
                            {car.transmission}
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Gauge size={13} style={{ color: "var(--color-text-muted)" }} />
                          <span className="text-xs" style={{ color: "var(--color-text-secondary)" }}>
                            {car.kilometersDriven?.toLocaleString("en-IN") || 0} km
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
                            {formatPrice(car.price)}
                          </p>
                        </div>
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110"
                          style={{
                            background: "var(--color-accent-gold-dim)",
                            border: "1px solid var(--color-border-gold)",
                          }}
                        >
                          <ArrowRight size={16} style={{ color: "var(--color-accent-gold)" }} />
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
