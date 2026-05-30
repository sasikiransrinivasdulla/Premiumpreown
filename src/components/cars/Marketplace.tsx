"use client";

import { useState, useMemo, useEffect } from "react";
import { FilterSidebar } from "./FilterSidebar";
import { CarCard } from "./CarCard";
import { Pagination } from "./Pagination";
import { Search, SlidersHorizontal, ChevronDown } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";

export interface FilterState {
  brands: string[];
  fuelTypes: string[];
  transmissions: string[];
  ownerships: string[];
  minPrice: string;
  maxPrice: string;
  featuredOnly: boolean;
}

export function Marketplace({ initialCars }: { initialCars: any[] }) {
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("Featured First");
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 12;

  const [filters, setFilters] = useState<FilterState>({
    brands: [],
    fuelTypes: [],
    transmissions: [],
    ownerships: [],
    minPrice: "",
    maxPrice: "",
    featuredOnly: false,
  });

  const availableBrands = useMemo(() => {
    const brands = new Set<string>();
    initialCars.forEach((c) => {
      if (c.brand) brands.add(c.brand);
    });
    return Array.from(brands).sort();
  }, [initialCars]);

  const processedCars = useMemo(() => {
    let result = [...initialCars];

    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase();
      result = result.filter((c) =>
        c.carName.toLowerCase().includes(q) ||
        c.brand.toLowerCase().includes(q) ||
        c.variant?.toLowerCase().includes(q)
      );
    }

    if (filters.featuredOnly) {
      result = result.filter((c) => c.featured);
    }
    if (filters.brands.length > 0) {
      result = result.filter((c) => filters.brands.includes(c.brand));
    }
    if (filters.fuelTypes.length > 0) {
      result = result.filter((c) => filters.fuelTypes.includes(c.fuelType));
    }
    if (filters.transmissions.length > 0) {
      result = result.filter((c) => filters.transmissions.includes(c.transmission));
    }
    if (filters.ownerships.length > 0) {
      result = result.filter((c) => filters.ownerships.includes(c.ownership));
    }
    if (filters.minPrice !== "") {
      result = result.filter((c) => c.price >= Number(filters.minPrice));
    }
    if (filters.maxPrice !== "") {
      result = result.filter((c) => c.price <= Number(filters.maxPrice));
    }

    result.sort((a, b) => {
      switch (sortOption) {
        case "Price: Low to High":
          return a.price - b.price;
        case "Price: High to Low":
          return b.price - a.price;
        case "Newest First":
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        case "Oldest First":
          return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
        case "Lowest KM":
          return a.kilometersDriven - b.kilometersDriven;
        case "Highest KM":
          return b.kilometersDriven - a.kilometersDriven;
        case "Featured First":
        default:
          if (a.featured === b.featured) {
            return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
          }
          return a.featured ? -1 : 1;
      }
    });

    return result;
  }, [initialCars, searchQuery, filters, sortOption]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, filters, sortOption]);

  const totalPages = Math.ceil(processedCars.length / ITEMS_PER_PAGE);
  const currentCars = processedCars.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const sortOptionsList = [
    "Featured First",
    "Price: Low to High",
    "Price: High to Low",
    "Newest First",
    "Oldest First",
    "Lowest KM",
    "Highest KM",
  ];

  return (
    <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 mt-[100px] lg:mt-[120px]">
      
      {/* ─── EDITORIAL HEADER ─── */}
      <FadeIn>
        <div className="mb-6 md:mb-10 lg:mb-20">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 lg:gap-8">
            <div className="flex-1">
              <span className="block text-[9px] uppercase tracking-[0.3em] mb-2 lg:mb-4" style={{ color: "var(--color-accent-gold)" }}>
                Premium Pre-Owned
              </span>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-tight" style={{ fontFamily: "var(--font-display)", color: "var(--color-text-primary)" }}>
                Our <span className="italic" style={{ color: "var(--color-text-secondary)" }}>Collection</span>.
              </h1>
            </div>
            
            {/* Elegant horizontal toolbar directly beside/below header */}
            <div className="flex items-center gap-3 md:gap-6 w-full lg:w-auto mt-6 lg:mt-0">
              {/* Search */}
              <div className="relative w-full lg:w-[320px] group">
                <Search className="absolute left-0 top-1/2 -translate-y-1/2 transition-colors duration-500" size={16} style={{ color: "var(--color-text-muted)" }} />
                <input
                  type="text"
                  placeholder="Search by brand or model..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-transparent border-b pl-8 pr-4 py-2.5 md:py-3 text-[13px] md:text-sm text-white outline-none transition-all duration-500 placeholder:text-white/20"
                  style={{ borderColor: "rgba(255,255,255,0.1)" }}
                  onFocus={(e) => e.currentTarget.style.borderColor = "var(--color-accent-gold)"}
                  onBlur={(e) => e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"}
                />
              </div>

              {/* Sort */}
              <div className="relative hidden xl:block w-[200px]">
                <button
                  onClick={() => setIsSortOpen(!isSortOpen)}
                  className="w-full flex items-center justify-between border-b py-3 text-sm transition-all duration-500 group"
                  style={{ borderColor: "rgba(255,255,255,0.1)", color: "var(--color-text-primary)" }}
                >
                  <span className="truncate text-xs tracking-wider font-light group-hover:text-white">{sortOption}</span>
                  <ChevronDown size={14} className={`transition-transform duration-500 ${isSortOpen ? "rotate-180" : ""}`} style={{ color: "var(--color-text-muted)" }} />
                </button>

                {isSortOpen && (
                  <>
                    <div className="fixed inset-0 z-40" onClick={() => setIsSortOpen(false)} />
                    <div
                      className="absolute top-full right-0 mt-2 w-56 rounded-xl shadow-2xl z-50 overflow-hidden py-2"
                      style={{ background: "rgba(10,10,10,0.8)", backdropFilter: "blur(24px)", border: "1px solid rgba(255,255,255,0.05)" }}
                    >
                      {sortOptionsList.map((opt) => (
                        <button
                          key={opt}
                          onClick={() => { setSortOption(opt); setIsSortOpen(false); }}
                          className={`w-full text-left px-5 py-2.5 text-[11px] uppercase tracking-[0.1em] transition-colors ${
                            sortOption === opt ? "text-[var(--color-accent-gold)]" : "text-[var(--color-text-secondary)] hover:text-white hover:bg-white/[0.02]"
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Mobile Filter Toggle */}
              <button
                onClick={() => setIsMobileFiltersOpen(true)}
                className="xl:hidden flex items-center justify-center gap-2 border px-4 py-2 md:py-2.5 rounded-full text-[10px] md:text-xs uppercase tracking-[0.15em] transition-all"
                style={{ borderColor: "rgba(255,255,255,0.2)", color: "var(--color-text-primary)" }}
              >
                <SlidersHorizontal size={14} />
                <span>Filters</span>
              </button>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* ─── MAIN LAYOUT: Sidebar + Cinematic Grid ─── */}
      <div className="flex items-start gap-10 lg:gap-16">
        
        {/* Soft Glass Sidebar */}
        <FilterSidebar
          filters={filters}
          setFilters={setFilters}
          isMobileOpen={isMobileFiltersOpen}
          setIsMobileOpen={setIsMobileFiltersOpen}
          availableBrands={availableBrands}
        />

        {/* Cars Grid */}
        <div className="flex-1 min-w-0">
          
          <div className="mb-8 flex items-center justify-between">
            <span className="text-[10px] uppercase tracking-[0.2em] font-medium" style={{ color: "var(--color-text-muted)" }}>
              {processedCars.length} <span className="text-white font-light lowercase tracking-normal">vehicles found</span>
            </span>
          </div>

          {currentCars.length === 0 ? (
            <FadeIn>
              <div className="text-center py-40 flex flex-col items-center justify-center">
                <span className="text-3xl mb-4 font-light tracking-tight" style={{ fontFamily: "var(--font-display)", color: "var(--color-text-secondary)" }}>
                  No vehicles match your criteria.
                </span>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setFilters({ brands: [], fuelTypes: [], transmissions: [], ownerships: [], minPrice: "", maxPrice: "", featuredOnly: false });
                  }}
                  className="mt-6 text-[11px] uppercase tracking-[0.2em] transition-colors pb-1 border-b"
                  style={{ color: "var(--color-text-primary)", borderColor: "rgba(255,255,255,0.2)" }}
                >
                  Reset All Filters
                </button>
              </div>
            </FadeIn>
          ) : (
            <>
              {/* Massive Cinematic Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 lg:gap-x-10 gap-y-10 lg:gap-y-16">
                {currentCars.map((car, i) => (
                  <CarCard key={car._id} car={car} index={i} />
                ))}
              </div>

              {totalPages > 1 && (
                <div className="mt-24 pt-12" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                  />
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
