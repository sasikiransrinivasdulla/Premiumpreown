"use client";

import Image from "next/image";
import { FadeIn } from "@/components/motion/FadeIn";

export function EthosSection() {
  return (
    <section id="ethos" className="relative bg-[#0A0A0A] section-padding overflow-hidden">
      <div className="container-luxury">
        <div className="text-center mb-32">
          <FadeIn>
            <span className="label-luxury mb-6 block">Our Ethos</span>
            <h2 className="heading-display text-4xl lg:text-5xl">Quiet Confidence.</h2>
            <div className="gold-line-center mt-8" />
          </FadeIn>
        </div>

        <div className="space-y-32 lg:space-y-48">
          {/* Block 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
            <FadeIn direction="left">
              <div className="relative w-full aspect-[4/3] rounded-sm overflow-hidden image-reveal">
                <Image 
                  src="/images/trusted-dealer.webp" 
                  alt="Verified Vehicles" 
                  fill 
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover" 
                />
              </div>
            </FadeIn>
            <FadeIn>
              <h3 className="heading-display text-3xl lg:text-4xl mb-6">Verified Vehicles.</h3>
              <p className="text-premium text-lg lg:text-xl" style={{ color: "var(--color-text-secondary)" }}>
                Every car personally inspected, fully documented, and certified.
              </p>
            </FadeIn>
          </div>

          {/* Block 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
            <FadeIn className="order-2 lg:order-1 lg:text-right">
              <h3 className="heading-display text-3xl lg:text-4xl mb-6">Honest Process.</h3>
              <p className="text-premium text-lg lg:text-xl lg:ml-auto max-w-md" style={{ color: "var(--color-text-secondary)" }}>
                A seamless, transparent journey from your first inquiry to keys in hand.
              </p>
            </FadeIn>
            <FadeIn direction="right" className="order-1 lg:order-2">
              <div className="relative w-full aspect-[4/3] rounded-sm overflow-hidden image-reveal">
                <Image 
                  src="/images/better-experience.webp" 
                  alt="Honest Process" 
                  fill 
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover" 
                />
              </div>
            </FadeIn>
          </div>

          {/* Block 3 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
            <FadeIn direction="left">
              <div className="relative w-full aspect-[4/3] rounded-sm overflow-hidden image-reveal">
                <Image 
                  src="/images/hero-car-exterior.webp" 
                  alt="Trusted Experience" 
                  fill 
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover" 
                />
              </div>
            </FadeIn>
            <FadeIn>
              <h3 className="heading-display text-3xl lg:text-4xl mb-6">Trusted Experience.</h3>
              <p className="text-premium text-lg lg:text-xl" style={{ color: "var(--color-text-secondary)" }}>
                We don&apos;t just sell cars. We earn trust, one family at a time.
              </p>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
