"use client";

import { useState } from "react";
import { X, ChevronDown } from "lucide-react";
import { FilterState } from "./Marketplace";

interface FilterSidebarProps {
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
  isMobileOpen: boolean;
  setIsMobileOpen: (val: boolean) => void;
  availableBrands: string[];
}

const filterOptions = {
  fuelTypes: ["Petrol", "Diesel", "Electric", "Hybrid", "CNG"],
  transmissions: ["Automatic", "Manual"],
  ownerships: ["1st Owner", "2nd Owner", "3rd Owner+"],
};

export function FilterSidebar({
  filters,
  setFilters,
  isMobileOpen,
  setIsMobileOpen,
  availableBrands,
}: FilterSidebarProps) {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    brand: true,
    price: true,
    fuel: true,
    transmission: true,
    ownership: true,
  });

  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const toggleArrayItem = (key: keyof FilterState, value: string) => {
    setFilters((prev) => {
      const arr = prev[key] as string[];
      if (arr.includes(value)) {
        return { ...prev, [key]: arr.filter((v) => v !== value) };
      }
      return { ...prev, [key]: [...arr, value] };
    });
  };

  const resetFilters = () => {
    setFilters({
      brands: [],
      fuelTypes: [],
      transmissions: [],
      ownerships: [],
      minPrice: "",
      maxPrice: "",
      featuredOnly: false,
    });
  };

  const activeFiltersCount =
    filters.brands.length +
    filters.fuelTypes.length +
    filters.transmissions.length +
    filters.ownerships.length +
    (filters.minPrice ? 1 : 0) +
    (filters.maxPrice ? 1 : 0) +
    (filters.featuredOnly ? 1 : 0);

  const content = (
    <div className="flex flex-col h-full px-1">
      {/* Soft Header */}
      <div className="flex items-center justify-between mb-10">
        <span className="text-[11px] uppercase tracking-[0.25em]" style={{ color: "var(--color-text-primary)" }}>
          Refine {activeFiltersCount > 0 && <span style={{ color: "var(--color-accent-gold)" }}>({activeFiltersCount})</span>}
        </span>
        {activeFiltersCount > 0 && (
          <button onClick={resetFilters} className="text-[9px] uppercase tracking-[0.2em] transition-colors hover:text-white" style={{ color: "var(--color-text-muted)" }}>
            Clear All
          </button>
        )}
      </div>

      <div className="flex-1 overflow-y-auto space-y-8 custom-scrollbar pb-12 pr-4">

        {/* Featured Toggle (Soft Hardware Feel) */}
        <div>
          <label className="flex items-center justify-between cursor-pointer group">
            <span className="text-[11px] tracking-wide" style={{ color: filters.featuredOnly ? "var(--color-text-primary)" : "var(--color-text-secondary)" }}>Featured Vehicles Only</span>
            <div className="relative w-11 h-6 rounded-full transition-all duration-500" style={{ background: filters.featuredOnly ? "rgba(200,169,107,0.2)" : "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)" }}>
              <div className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full transition-all duration-500 shadow-lg ${filters.featuredOnly ? "left-[22px] bg-[var(--color-accent-gold)] shadow-[0_0_10px_rgba(200,169,107,0.5)]" : "left-1 bg-[var(--color-text-muted)]"}`} />
            </div>
            <input type="checkbox" className="sr-only" checked={filters.featuredOnly} onChange={(e) => setFilters(prev => ({ ...prev, featuredOnly: e.target.checked }))} />
          </label>
        </div>

        {/* Brand (Soft Toggles) */}
        {availableBrands.length > 0 && (
          <div className="pt-8" style={{ borderTop: "1px solid rgba(255,255,255,0.03)" }}>
            <button className="flex items-center justify-between w-full group mb-5" onClick={() => toggleSection("brand")}>
              <span className="text-[10px] uppercase tracking-[0.2em] font-medium" style={{ color: "var(--color-text-muted)" }}>Marque</span>
              <ChevronDown size={14} className={`transition-transform duration-500 ${openSections.brand ? "rotate-180" : ""}`} style={{ color: "var(--color-text-muted)" }} />
            </button>
            <div className={`transition-all duration-500 overflow-hidden ${openSections.brand ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
              <div className="space-y-4">
                {availableBrands.map((brand) => {
                  const active = filters.brands.includes(brand);
                  return (
                    <label key={brand} className="flex items-center justify-between cursor-pointer group/item">
                      <span className="text-[13px] font-light transition-colors group-hover/item:text-white" style={{ color: active ? "var(--color-text-primary)" : "var(--color-text-secondary)" }}>
                        {brand}
                      </span>
                      <div className="w-3 h-3 rounded-full transition-all duration-500" style={{ border: active ? "1px solid var(--color-accent-gold)" : "1px solid rgba(255,255,255,0.1)", background: active ? "var(--color-accent-gold)" : "transparent", boxShadow: active ? "0 0 8px rgba(200,169,107,0.4)" : "none" }} />
                    </label>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Price Range (Refined Underlines) */}
        <div className="pt-8" style={{ borderTop: "1px solid rgba(255,255,255,0.03)" }}>
          <button className="flex items-center justify-between w-full group mb-5" onClick={() => toggleSection("price")}>
            <span className="text-[10px] uppercase tracking-[0.2em] font-medium" style={{ color: "var(--color-text-muted)" }}>Investment</span>
            <ChevronDown size={14} className={`transition-transform duration-500 ${openSections.price ? "rotate-180" : ""}`} style={{ color: "var(--color-text-muted)" }} />
          </button>
          <div className={`transition-all duration-500 overflow-hidden ${openSections.price ? "max-h-24 opacity-100" : "max-h-0 opacity-0"}`}>
            <div className="flex items-center gap-4">
              <div className="relative flex-1">
                <span className="absolute left-0 top-1/2 -translate-y-1/2 text-[10px]" style={{ color: "var(--color-text-muted)" }}>₹</span>
                <input
                  type="number"
                  placeholder="Min"
                  className="w-full bg-transparent pl-4 pb-2 text-[13px] text-white outline-none placeholder:text-white/20 transition-all duration-500"
                  style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
                  onFocus={(e) => e.currentTarget.style.borderBottomColor = "var(--color-accent-gold)"}
                  onBlur={(e) => e.currentTarget.style.borderBottomColor = "rgba(255,255,255,0.05)"}
                  value={filters.minPrice}
                  onChange={(e) => setFilters((prev) => ({ ...prev, minPrice: e.target.value }))}
                />
              </div>
              <span className="text-[10px]" style={{ color: "var(--color-text-muted)" }}>to</span>
              <div className="relative flex-1">
                <span className="absolute left-0 top-1/2 -translate-y-1/2 text-[10px]" style={{ color: "var(--color-text-muted)" }}>₹</span>
                <input
                  type="number"
                  placeholder="Max"
                  className="w-full bg-transparent pl-4 pb-2 text-[13px] text-white outline-none placeholder:text-white/20 transition-all duration-500"
                  style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
                  onFocus={(e) => e.currentTarget.style.borderBottomColor = "var(--color-accent-gold)"}
                  onBlur={(e) => e.currentTarget.style.borderBottomColor = "rgba(255,255,255,0.05)"}
                  value={filters.maxPrice}
                  onChange={(e) => setFilters((prev) => ({ ...prev, maxPrice: e.target.value }))}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Fuel Type (Elegant Soft Pills) */}
        <div className="pt-8" style={{ borderTop: "1px solid rgba(255,255,255,0.03)" }}>
          <button className="flex items-center justify-between w-full group mb-5" onClick={() => toggleSection("fuel")}>
            <span className="text-[10px] uppercase tracking-[0.2em] font-medium" style={{ color: "var(--color-text-muted)" }}>Powertrain</span>
            <ChevronDown size={14} className={`transition-transform duration-500 ${openSections.fuel ? "rotate-180" : ""}`} style={{ color: "var(--color-text-muted)" }} />
          </button>
          <div className={`transition-all duration-500 overflow-hidden ${openSections.fuel ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
            <div className="flex flex-wrap gap-3">
              {filterOptions.fuelTypes.map((fuel) => {
                const active = filters.fuelTypes.includes(fuel);
                return (
                  <button
                    key={fuel}
                    onClick={() => toggleArrayItem("fuelTypes", fuel)}
                    className="px-5 py-2 rounded-full text-[11px] tracking-widest transition-all duration-500"
                    style={{
                      color: active ? "var(--color-accent-gold)" : "var(--color-text-secondary)",
                      background: active ? "rgba(200,169,107,0.05)" : "transparent",
                      border: `1px solid ${active ? "rgba(200,169,107,0.3)" : "rgba(255,255,255,0.05)"}`,
                      boxShadow: active ? "inset 0 0 20px rgba(200,169,107,0.05)" : "none"
                    }}
                  >
                    {fuel}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Transmission (Elegant Soft Pills) */}
        <div className="pt-8" style={{ borderTop: "1px solid rgba(255,255,255,0.03)" }}>
          <button className="flex items-center justify-between w-full group mb-5" onClick={() => toggleSection("transmission")}>
            <span className="text-[10px] uppercase tracking-[0.2em] font-medium" style={{ color: "var(--color-text-muted)" }}>Gearbox</span>
            <ChevronDown size={14} className={`transition-transform duration-500 ${openSections.transmission ? "rotate-180" : ""}`} style={{ color: "var(--color-text-muted)" }} />
          </button>
          <div className={`transition-all duration-500 overflow-hidden ${openSections.transmission ? "max-h-24 opacity-100" : "max-h-0 opacity-0"}`}>
            <div className="flex flex-wrap gap-3">
              {filterOptions.transmissions.map((trans) => {
                const active = filters.transmissions.includes(trans);
                return (
                  <button
                    key={trans}
                    onClick={() => toggleArrayItem("transmissions", trans)}
                    className="px-5 py-2 rounded-full text-[11px] tracking-widest transition-all duration-500"
                    style={{
                      color: active ? "var(--color-accent-gold)" : "var(--color-text-secondary)",
                      background: active ? "rgba(200,169,107,0.05)" : "transparent",
                      border: `1px solid ${active ? "rgba(200,169,107,0.3)" : "rgba(255,255,255,0.05)"}`,
                      boxShadow: active ? "inset 0 0 20px rgba(200,169,107,0.05)" : "none"
                    }}
                  >
                    {trans}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Ownership (Soft Toggles) */}
        <div className="pt-8" style={{ borderTop: "1px solid rgba(255,255,255,0.03)" }}>
          <button className="flex items-center justify-between w-full group mb-5" onClick={() => toggleSection("ownership")}>
            <span className="text-[10px] uppercase tracking-[0.2em] font-medium" style={{ color: "var(--color-text-muted)" }}>History</span>
            <ChevronDown size={14} className={`transition-transform duration-500 ${openSections.ownership ? "rotate-180" : ""}`} style={{ color: "var(--color-text-muted)" }} />
          </button>
          <div className={`transition-all duration-500 overflow-hidden ${openSections.ownership ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
            <div className="space-y-4">
              {filterOptions.ownerships.map((own) => {
                const active = filters.ownerships.includes(own);
                return (
                  <label key={own} className="flex items-center justify-between cursor-pointer group/item">
                    <span className="text-[13px] font-light transition-colors group-hover/item:text-white" style={{ color: active ? "var(--color-text-primary)" : "var(--color-text-secondary)" }}>
                      {own}
                    </span>
                    <div className="w-3 h-3 rounded-full transition-all duration-500" style={{ border: active ? "1px solid var(--color-accent-gold)" : "1px solid rgba(255,255,255,0.1)", background: active ? "var(--color-accent-gold)" : "transparent", boxShadow: active ? "0 0 8px rgba(200,169,107,0.4)" : "none" }} />
                  </label>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar — Floating Glassmorphic Panel */}
      <aside className="hidden xl:block w-[320px] shrink-0">
        <div 
          className="sticky top-32 p-8 rounded-3xl" 
          style={{ 
            maxHeight: "calc(100vh - 160px)",
            background: "rgba(255,255,255,0.01)",
            backdropFilter: "blur(40px)",
            border: "1px solid rgba(255,255,255,0.03)",
            boxShadow: "0 30px 60px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)"
          }}
        >
          {content}
        </div>
      </aside>

      {/* Mobile Drawer */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-[100] xl:hidden flex">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={() => setIsMobileOpen(false)} />
          <div
            className="relative w-full max-w-[340px] h-full p-8 shadow-2xl overflow-hidden flex flex-col"
            style={{ 
              background: "rgba(10,10,10,0.6)", 
              backdropFilter: "blur(40px)",
              borderRight: "1px solid rgba(255,255,255,0.05)" 
            }}
          >
            <button onClick={() => setIsMobileOpen(false)} className="absolute top-8 right-8 transition-colors hover:text-white" style={{ color: "var(--color-text-muted)" }}>
              <X size={20} />
            </button>
            <div className="mt-12 flex-1 overflow-hidden">
              {content}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
