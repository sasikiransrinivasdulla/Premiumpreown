"use client";

import { motion } from "framer-motion";
import { useFrameSequence } from "@/hooks/useFrameSequence";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { ChevronDown } from "lucide-react";

export function HeroSection() {
  const { canvasRef, containerRef, isLoaded, loadProgress } = useFrameSequence();

  return (
    <section id="hero" ref={containerRef} className="relative" style={{ height: "400vh" }}>
      {/* Sticky Canvas Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Canvas for frame sequence */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
          style={{ objectFit: "cover" }}
        />

        {/* Fallback image while loading */}
        {!isLoaded && (
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000"
            style={{
              backgroundImage: "url(/images/hero-car-exterior.webp)",
              opacity: loadProgress > 5 ? 0 : 1,
            }}
          />
        )}

        {/* Cinematic gradient overlays */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(10,10,10,0.6) 0%, rgba(10,10,10,0.1) 30%, rgba(10,10,10,0.1) 60%, rgba(10,10,10,0.8) 100%)",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, rgba(10,10,10,0.5) 0%, transparent 40%, transparent 60%, rgba(10,10,10,0.3) 100%)",
          }}
        />

        {/* Loading indicator */}
        {!isLoaded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-20"
          >
            <div
              className="h-[2px] rounded-full overflow-hidden"
              style={{
                width: "120px",
                background: "rgba(255,255,255,0.1)",
              }}
            >
              <motion.div
                className="h-full rounded-full"
                style={{
                  background:
                    "linear-gradient(90deg, var(--color-accent-gold), var(--color-accent-gold-light))",
                }}
                initial={{ width: "0%" }}
                animate={{ width: `${loadProgress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <span
              className="text-[10px] tracking-[0.25em] uppercase"
              style={{ color: "var(--color-text-muted)" }}
            >
              Loading Experience
            </span>
          </motion.div>
        )}

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-start z-10">
          <div className="container-luxury w-full">
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1, ease: [0.25, 0.1, 0.25, 1] }}
              className="mb-6"
            >
              <span className="label-luxury">Premium Automotive Experience</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="heading-display max-w-4xl"
              style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)" }}
            >
              Curated Cars.
              <br />
              <span
                className="heading-editorial"
                style={{
                  color: "var(--color-accent-gold)",
                  fontSize: "clamp(2.2rem, 6.5vw, 5rem)",
                }}
              >
                Trusted Journeys.
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-premium mt-6 max-w-lg"
              style={{ fontSize: "clamp(0.95rem, 1.5vw, 1.15rem)" }}
            >
              Experience a new standard in pre-owned vehicles. Every car
              handpicked, inspected, and certified for your peace of mind.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.8, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex flex-wrap gap-5 mt-10"
            >
              <MagneticButton>
                <a href="#curated" className="btn-primary">
                  <span>Explore Collection</span>
                </a>
              </MagneticButton>
              <MagneticButton>
                <a href="#contact" className="btn-secondary">
                  Talk to an Expert
                </a>
              </MagneticButton>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        >
          <span
            className="text-[10px] tracking-[0.3em] uppercase"
            style={{ color: "var(--color-text-muted)" }}
          >
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ChevronDown size={18} style={{ color: "var(--color-accent-gold)" }} />
          </motion.div>
        </motion.div>

        {/* Decorative gold line */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[1px]"
          style={{
            background:
              "linear-gradient(90deg, transparent, var(--color-accent-gold), transparent)",
            opacity: 0.3,
          }}
        />
      </div>
    </section>
  );
}
