import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import mongoose from "mongoose";
import connectToDatabase from "@/lib/mongodb";
import Car from "@/models/Car";
import { 
  ArrowLeft, Fuel, Gauge, Settings, Calendar, 
  Shield, MapPin, CreditCard, CheckCircle2, User 
} from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";

async function getCar(id: string) {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return null;
  }
  await connectToDatabase();
  const car = await Car.findById(id).lean();
  return car;
}

export default async function CarDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const car = await getCar(id);

  if (!car) {
    return (
      <div className="min-h-screen flex items-center justify-center section-padding" style={{ background: "var(--color-bg-primary)" }}>
        <FadeIn className="text-center max-w-md mx-auto">
          <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: "var(--color-accent-gold-dim)" }}>
            <Shield size={28} style={{ color: "var(--color-accent-gold)" }} />
          </div>
          <h1 className="heading-display text-4xl mb-4">Vehicle Not Found</h1>
          <p className="text-premium mb-8">
            The vehicle you are looking for is no longer available or the link is invalid.
          </p>
          <Link href="/#curated" className="btn-primary">
            <span>Back to Collection</span>
          </Link>
        </FadeIn>
      </div>
    );
  }

  const formatPrice = (price: number) => {
    if (price >= 100000) {
      return `₹${(price / 100000).toFixed(2).replace(/\.00$/, "")} Lakh`;
    }
    return `₹${price.toLocaleString("en-IN")}`;
  };

  const renderPrice = (price: number) => {
    let formattedNum = price.toLocaleString("en-IN");
    let suffix = "";
    
    if (price >= 100000) {
      formattedNum = (price / 100000).toFixed(2).replace(/\.00$/, "");
      suffix = "Lakh";
    }

    return (
      <div className="flex items-baseline justify-start lg:justify-end gap-1.5">
        <span className="text-[0.6em] font-medium opacity-40 relative -top-[0.1em] tracking-normal font-sans">₹</span>
        <span className="tracking-tight">{formattedNum}</span>
        {suffix && (
          <span className="text-[0.55em] uppercase tracking-[0.25em] font-medium opacity-50 ml-1.5 font-sans">
            {suffix}
          </span>
        )}
      </div>
    );
  };

  const whatsappMessage = encodeURIComponent(
    `Hello, I am interested in the ${car.carName} listed on your website. Price: ${formatPrice(car.price)}. Please share more details.`
  );
  const whatsappUrl = `https://wa.me/919876543210?text=${whatsappMessage}`;

  return (
    <div style={{ background: "var(--color-bg-primary)", minHeight: "100vh" }}>
      {/* Detail Page Minimal Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 py-5 transition-all duration-700" style={{ background: "linear-gradient(180deg, rgba(10,10,10,0.9) 0%, rgba(10,10,10,0) 100%)", backdropFilter: "blur(4px)" }}>
        <div className="container-luxury flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-sm flex items-center justify-center" style={{ background: "linear-gradient(135deg, #C8A96B, #D6B36A)" }}>
              <span className="text-sm font-bold" style={{ fontFamily: "var(--font-display)", color: "#0A0A0A" }}>P</span>
            </div>
            <div className="flex flex-col hidden sm:flex">
              <span className="text-[15px] font-semibold tracking-wide" style={{ fontFamily: "var(--font-display)", color: "var(--color-text-primary)", textShadow: "0 2px 4px rgba(0,0,0,0.5)" }}>Premium</span>
              <span className="text-[9px] font-medium tracking-[0.25em] uppercase" style={{ color: "var(--color-accent-gold)", textShadow: "0 2px 4px rgba(0,0,0,0.5)" }}>Pre-Owned</span>
            </div>
          </Link>
          <Link href="/#curated" className="flex items-center gap-2 px-5 py-2.5 text-[11px] font-medium tracking-[0.1em] uppercase rounded-sm transition-all duration-500 hover:bg-[rgba(255,255,255,0.1)]" style={{ color: "var(--color-text-primary)", background: "rgba(10,10,10,0.4)", border: "1px solid rgba(255,255,255,0.15)", backdropFilter: "blur(10px)" }}>
            <ArrowLeft size={14} />
            <span className="hidden sm:inline">Back to Collection</span>
          </Link>
        </div>
      </nav>

      {/* Cinematic Hero */}
      <section className="relative w-full h-[60vh] min-h-[500px] 2xl:h-[70vh] bg-[#0a0a0a]">
        <Image src={car.thumbnailImage} alt={car.carName} fill className="object-cover opacity-90" priority sizes="100vw" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(10,10,10,0.4) 0%, transparent 40%, rgba(10,10,10,0.95) 100%)" }} />
      </section>

      <section className="relative z-10 pb-24">
        <div className="container-luxury">
          {/* Title Block (Lifted into the hero gradient) */}
          <FadeIn>
            <div className="-mt-32 mb-16 lg:-mt-40 lg:mb-24 flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-[rgba(255,255,255,0.05)] pb-12">
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  {car.featured && (
                    <span className="px-3 py-1.5 text-[10px] font-semibold tracking-[0.15em] uppercase" style={{ background: "var(--color-accent-gold)", color: "var(--color-bg-primary)" }}>
                      Featured
                    </span>
                  )}
                  <span className="px-3 py-1.5 text-[10px] font-semibold tracking-[0.15em] uppercase" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid var(--color-border-subtle)", color: "var(--color-text-secondary)" }}>
                    {car.status}
                  </span>
                </div>
                <h1 className="heading-display text-4xl lg:text-6xl xl:text-7xl mb-3">{car.carName}</h1>
                <p className="text-xl lg:text-2xl" style={{ color: "var(--color-text-secondary)" }}>{car.variant}</p>
              </div>
              <div className="lg:text-right">
                <span className="text-xs uppercase tracking-[0.2em] block mb-2 opacity-50 font-medium font-sans">Asking Price</span>
                <div className="text-4xl lg:text-5xl font-light" style={{ fontFamily: "var(--font-display)", color: "var(--color-text-primary)" }}>
                  {renderPrice(car.price)}
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Quick Specs Cards */}
          <FadeIn delay={0.1}>
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-px bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.05)] mb-24 rounded-sm overflow-hidden">
              {[
                { icon: Fuel, label: "Fuel", value: car.fuelType },
                { icon: Settings, label: "Transmission", value: car.transmission },
                { icon: Gauge, label: "Mileage", value: `${car.kilometersDriven?.toLocaleString("en-IN") || 0} km` },
                { icon: User, label: "Ownership", value: car.ownership },
                { icon: Calendar, label: "Year", value: car.year },
                { icon: CheckCircle2, label: "Color", value: car.color },
              ].map((spec, i) => (
                <div key={i} className="bg-[var(--color-bg-primary)] p-6 flex flex-col justify-between gap-6 hover:bg-[rgba(200,169,107,0.02)] transition-colors duration-500 group">
                  <spec.icon size={20} className="opacity-50 group-hover:opacity-100 group-hover:text-[var(--color-accent-gold)] transition-all duration-500" />
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.15em] mb-1" style={{ color: "var(--color-text-muted)" }}>{spec.label}</p>
                    <p className="text-lg" style={{ fontFamily: "var(--font-display)", color: "var(--color-text-primary)" }}>{spec.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            
            {/* Main Content Column */}
            <div className="lg:col-span-7 xl:col-span-8">
              
              {/* Description */}
              <FadeIn delay={0.2}>
                <h3 className="text-sm font-semibold tracking-[0.15em] uppercase mb-8 pb-4 border-b border-[rgba(255,255,255,0.05)]" style={{ color: "var(--color-text-primary)" }}>Overview</h3>
                <div className="space-y-6 whitespace-pre-wrap leading-loose" style={{ fontSize: "1.1rem", color: "var(--color-text-secondary)" }}>
                  {car.description || "No description provided."}
                </div>
              </FadeIn>

              {/* Technical Details List (No Clipping, Elegant Rows) */}
              <FadeIn delay={0.3} className="mt-20">
                <h3 className="text-sm font-semibold tracking-[0.15em] uppercase mb-8 pb-4 border-b border-[rgba(255,255,255,0.05)]" style={{ color: "var(--color-text-primary)" }}>Specifications</h3>
                <div className="border-t border-[rgba(255,255,255,0.05)]">
                  {[
                    { label: "Brand", value: car.brand },
                    { label: "Variant", value: car.variant },
                    { label: "Insurance Validity", value: car.insuranceValidity },
                    { label: "Registration State", value: car.registrationState },
                    { label: "EMI Options", value: car.emiAvailable },
                  ].map((detail, i) => (
                    <div key={i} className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-6 border-b border-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.01)] transition-colors px-4 -mx-4 rounded-sm">
                      <span className="text-sm tracking-[0.1em] uppercase mb-1 sm:mb-0" style={{ color: "var(--color-text-muted)" }}>{detail.label}</span>
                      <span className="text-lg font-medium" style={{ color: "var(--color-text-primary)" }}>{detail.value}</span>
                    </div>
                  ))}
                </div>
              </FadeIn>

              {/* Gallery */}
              {car.galleryImages && car.galleryImages.length > 0 && (
                <FadeIn delay={0.4} className="mt-24">
                  <h3 className="text-sm font-semibold tracking-[0.15em] uppercase mb-8 pb-4 border-b border-[rgba(255,255,255,0.05)]" style={{ color: "var(--color-text-primary)" }}>Gallery</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {car.galleryImages.map((img: string, i: number) => (
                      <div key={i} className="relative w-full aspect-[4/3] rounded-sm overflow-hidden image-reveal group">
                        <Image src={img} alt={`Gallery Image ${i + 1}`} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 50vw" />
                      </div>
                    ))}
                  </div>
                </FadeIn>
              )}
            </div>

            {/* Sticky Sidebar CTA */}
            <div className="lg:col-span-5 xl:col-span-4">
              <FadeIn delay={0.5} className="sticky top-32">
                <div className="glass p-8 lg:p-12 border border-[rgba(200,169,107,0.15)] rounded-sm" style={{ background: "rgba(15,15,15,0.8)", boxShadow: "0 20px 40px rgba(0,0,0,0.4)" }}>
                  <span className="text-[10px] font-semibold tracking-[0.2em] uppercase mb-4 block" style={{ color: "var(--color-accent-gold)" }}>Next Steps</span>
                  <h3 className="heading-display text-3xl mb-4">Contact Dealership</h3>
                  <p className="text-sm leading-relaxed mb-8" style={{ color: "var(--color-text-secondary)" }}>
                    Connect with our specialists for a tailored viewing experience and priority test drive of the {car.brand} {car.carName}.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3 pb-4 border-b border-[rgba(255,255,255,0.05)]">
                      <Shield size={16} style={{ color: "var(--color-accent-gold)" }} />
                      <span className="text-sm" style={{ color: "var(--color-text-primary)" }}>Premium Certified Vehicle</span>
                    </div>
                    <div className="flex items-center gap-3 pb-4 border-b border-[rgba(255,255,255,0.05)]">
                      <MapPin size={16} style={{ color: "var(--color-accent-gold)" }} />
                      <span className="text-sm" style={{ color: "var(--color-text-primary)" }}>Available at Showroom</span>
                    </div>
                  </div>

                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-primary w-full flex justify-center py-4 text-sm tracking-[0.1em] uppercase group">
                    <span className="group-hover:scale-105 transition-transform duration-500">Inquire via WhatsApp</span>
                  </a>
                </div>
              </FadeIn>
            </div>

          </div>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="py-12 border-t border-[rgba(255,255,255,0.05)] bg-[#050505]">
        <div className="container-luxury flex flex-col md:flex-row items-center justify-between gap-6 text-center">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-lg font-bold" style={{ fontFamily: "var(--font-display)", color: "var(--color-text-primary)" }}>P</span>
            <span className="text-xs tracking-[0.2em] uppercase" style={{ color: "var(--color-accent-gold)" }}>Pre-Owned</span>
          </Link>
          <p className="text-xs tracking-wide" style={{ color: "var(--color-text-muted)" }}>
            © {new Date().getFullYear()} Premium Pre-Owned. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
