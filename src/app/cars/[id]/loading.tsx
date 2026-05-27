import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function Loading() {
  return (
    <div style={{ background: "var(--color-bg-primary)", minHeight: "100vh" }}>
      {/* Minimal Nav Skeleton */}
      <nav className="fixed top-0 left-0 right-0 z-50 py-5" style={{ background: "rgba(10, 10, 10, 0.9)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="container-luxury flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-sm animate-pulse" style={{ background: "var(--color-bg-card)" }} />
            <div className="w-24 h-4 rounded animate-pulse hidden sm:block" style={{ background: "var(--color-bg-card)" }} />
          </div>
          <div className="flex items-center gap-2 px-5 py-2.5 rounded-sm animate-pulse" style={{ background: "var(--color-bg-card)", width: "160px", height: "36px" }} />
        </div>
      </nav>

      {/* Hero Skeleton */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="container-luxury">
          {/* Image */}
          <div className="relative w-full rounded-2xl overflow-hidden mb-12 animate-pulse" style={{ height: "clamp(300px, 50vw, 600px)", background: "var(--color-bg-card)", border: "1px solid var(--color-border-subtle)" }} />
          
          {/* Title & Price */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
            <div>
              <div className="w-64 h-12 rounded animate-pulse mb-4" style={{ background: "var(--color-bg-card)" }} />
              <div className="w-32 h-6 rounded animate-pulse" style={{ background: "var(--color-bg-card)" }} />
            </div>
            <div className="lg:text-right">
              <div className="w-24 h-4 rounded animate-pulse mb-2 ml-auto" style={{ background: "var(--color-bg-card)" }} />
              <div className="w-48 h-10 rounded animate-pulse ml-auto" style={{ background: "var(--color-bg-card)" }} />
            </div>
          </div>
          
          <div className="gold-line w-full opacity-20 mb-16" />

          {/* Specs Grid Skeleton */}
          <div className="w-32 h-4 rounded animate-pulse mb-8" style={{ background: "var(--color-bg-card)" }} />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-20">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="glass p-5 rounded-xl flex items-center gap-4 animate-pulse">
                <div className="w-10 h-10 rounded-lg" style={{ background: "var(--color-bg-card)" }} />
                <div className="flex flex-col gap-2">
                  <div className="w-16 h-3 rounded" style={{ background: "var(--color-bg-card)" }} />
                  <div className="w-24 h-4 rounded" style={{ background: "var(--color-bg-card)" }} />
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-16">
              {/* Description Skeleton */}
              <div>
                <div className="w-32 h-4 rounded animate-pulse mb-8" style={{ background: "var(--color-bg-card)" }} />
                <div className="space-y-3">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="w-full h-4 rounded animate-pulse" style={{ background: "var(--color-bg-card)" }} />
                  ))}
                  <div className="w-3/4 h-4 rounded animate-pulse" style={{ background: "var(--color-bg-card)" }} />
                </div>
              </div>
              
              {/* Details List Skeleton */}
              <div>
                <div className="w-32 h-4 rounded animate-pulse mb-8" style={{ background: "var(--color-bg-card)" }} />
                <div className="glass rounded-xl overflow-hidden animate-pulse" style={{ height: "300px" }} />
              </div>
            </div>

            {/* CTA Sidebar Skeleton */}
            <div>
              <div className="glass rounded-xl p-8 animate-pulse" style={{ height: "250px" }} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
