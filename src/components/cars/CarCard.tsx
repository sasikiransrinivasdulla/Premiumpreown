"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";

interface Car {
  _id: string;
  carName: string;
  brand: string;
  year: number;
  price: number;
  fuelType: string;
  transmission: string;
  kilometersDriven: number;
  ownership: string;
  thumbnailImage: string;
  featured: boolean;
}

interface CarCardProps {
  car: Car;
  index?: number;
}

export function CarCard({ car, index = 0 }: CarCardProps) {
  const renderPrice = (price: number) => {
    let formattedNum = price.toLocaleString("en-IN");
    let suffix = "";
    
    if (price >= 100000) {
      formattedNum = (price / 100000).toFixed(2).replace(/\.00$/, "");
      suffix = "Lakh";
    }

    return (
      <span className="flex items-baseline gap-1">
        <span className="text-[0.65em] font-medium opacity-40 relative -top-[0.1em] tracking-normal font-sans">₹</span>
        <span className="tracking-tight">{formattedNum}</span>
        {suffix && (
          <span className="text-[0.55em] uppercase tracking-[0.25em] font-medium opacity-50 ml-1 font-sans">
            {suffix}
          </span>
        )}
      </span>
    );
  };

  return (
    <FadeIn delay={index * 0.05} className="h-full">
      <div className="group h-full flex flex-col relative w-full">
        
        {/* Full-card clickable link */}
        <Link href={`/cars/${car._id}`} className="absolute inset-0 z-20">
          <span className="sr-only">View {car.carName} details</span>
        </Link>

        {/* ─── CINEMATIC IMAGE ─── */}
        {/* Aspect ratio 16:9 on mobile for compactness, 3:2 on desktop for cinematic landscape */}
        <div 
          className="relative w-full aspect-video md:aspect-[3/2] overflow-hidden rounded-xl mb-4 md:mb-6 transition-all duration-[1500ms] ease-out" 
          style={{ 
            background: "#0A0A0A",
            boxShadow: "0 10px 30px rgba(0,0,0,0.5)"
          }}
        >
          <Image
            src={car.thumbnailImage || "/images/placeholder-car.webp"}
            alt={`${car.carName} - Premium Pre-Owned`}
            fill
            className="object-cover transition-transform duration-[1500ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />

          {/* Extremely subtle interior vignette */}
          <div className="absolute inset-0 pointer-events-none transition-opacity duration-1000 opacity-40 group-hover:opacity-20" style={{ background: "radial-gradient(circle at center, transparent 40%, rgba(0,0,0,0.8) 100%)" }} />

          {/* Badges */}
          <div className="absolute top-5 left-5 right-5 flex items-start justify-between z-10">
            {car.featured ? (
              <span className="px-4 py-1.5 rounded-full text-[9px] font-semibold uppercase tracking-[0.2em] shadow-lg" style={{ background: "rgba(200,169,107,0.95)", color: "#000", backdropFilter: "blur(4px)" }}>
                Featured
              </span>
            ) : <span />}
            <span className="px-4 py-1.5 rounded-full text-[9px] uppercase tracking-[0.2em]" style={{ background: "rgba(0,0,0,0.6)", color: "var(--color-text-primary)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.1)" }}>
              Available
            </span>
          </div>
        </div>

        {/* ─── PREMIUM TYPOGRAPHY METADATA ─── */}
        <div className="flex flex-col flex-1 relative z-10 px-2 transition-transform duration-1000 group-hover:-translate-y-1">
          
          <div className="flex items-start justify-between gap-3 md:gap-4 mb-2">
            <h4
              className="text-lg md:text-xl lg:text-2xl font-light tracking-tight line-clamp-1"
              style={{ fontFamily: "var(--font-display)", color: "var(--color-text-primary)" }}
              title={car.carName}
            >
              {car.carName}
            </h4>
            <div className="text-base md:text-lg lg:text-xl font-light shrink-0" style={{ fontFamily: "var(--font-display)", color: "var(--color-text-primary)" }}>
              {renderPrice(car.price)}
            </div>
          </div>

          <div className="h-px w-full my-3 md:my-4 opacity-50" style={{ background: "linear-gradient(90deg, rgba(255,255,255,0.1), transparent)" }} />

          {/* High-tracking editorial spec line */}
          <p className="text-[10px] uppercase tracking-[0.25em] font-medium leading-relaxed flex flex-wrap gap-x-3 gap-y-1" style={{ color: "var(--color-text-secondary)" }}>
            <span>{car.year}</span>
            <span className="opacity-30">/</span>
            <span>{car.fuelType}</span>
            <span className="opacity-30">/</span>
            <span>{car.transmission}</span>
            <span className="opacity-30">/</span>
            <span>{car.ownership}</span>
            <span className="opacity-30">/</span>
            <span>{car.kilometersDriven?.toLocaleString("en-IN") || 0} km</span>
          </p>

          {/* Subtle View Details affordance */}
          <div className="mt-4 md:mt-8 flex items-center gap-3 opacity-0 -translate-x-4 transition-all duration-700 ease-out group-hover:opacity-100 group-hover:translate-x-0">
            <span className="text-[9px] uppercase tracking-[0.2em]" style={{ color: "var(--color-accent-gold)" }}>Explore Vehicle</span>
            <ArrowRight size={14} style={{ color: "var(--color-accent-gold)" }} />
          </div>

        </div>
      </div>
    </FadeIn>
  );
}
