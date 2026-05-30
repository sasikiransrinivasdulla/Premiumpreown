"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-center gap-2 mt-16">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="w-10 h-10 flex items-center justify-center rounded-sm transition-all disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[rgba(255,255,255,0.05)]"
      >
        <ChevronLeft size={16} style={{ color: "var(--color-text-secondary)" }} />
      </button>

      <div className="flex gap-2">
        {Array.from({ length: totalPages }).map((_, i) => {
          const page = i + 1;
          const isActive = page === currentPage;
          return (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={`w-10 h-10 flex items-center justify-center rounded-sm text-sm font-medium transition-all ${
                isActive ? "bg-[rgba(200,169,107,0.1)] text-[#C8A96B]" : "text-[var(--color-text-secondary)] hover:bg-[rgba(255,255,255,0.05)]"
              }`}
            >
              {page}
            </button>
          );
        })}
      </div>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="w-10 h-10 flex items-center justify-center rounded-sm transition-all disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[rgba(255,255,255,0.05)]"
      >
        <ChevronRight size={16} style={{ color: "var(--color-text-secondary)" }} />
      </button>
    </div>
  );
}
