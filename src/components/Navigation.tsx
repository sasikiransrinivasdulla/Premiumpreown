"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/#hero" },
  { name: "Collection", href: "/cars" },
  { name: "Ethos", href: "/#ethos" },
  { name: "Contact", href: "/#contact" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.includes('#')) {
      const hash = href.substring(href.indexOf('#'));
      const el = document.querySelector(hash);
      
      // If we are already on the page with the element, smooth scroll
      if (el && pathname === '/') {
        e.preventDefault();
        setMobileOpen(false);
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    // Otherwise let Next.js Link handle the navigation
    setMobileOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled ? "py-3" : "py-5"
        }`}
        style={{
          background: scrolled ? "rgba(10, 10, 10, 0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(20px) saturate(120%)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
        }}
      >
        <div className="container-luxury flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/#hero"
            onClick={(e) => handleNavClick(e, "/#hero")}
            className="flex items-center gap-3 group"
          >
            <div className="relative">
              <div
                className="w-9 h-9 rounded-sm flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #C8A96B, #D6B36A)" }}
              >
                <span className="text-sm font-bold" style={{ fontFamily: "var(--font-display)", color: "#0A0A0A" }}>
                  P
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-[15px] font-semibold tracking-wide" style={{ fontFamily: "var(--font-display)", color: "var(--color-text-primary)" }}>
                Premium
              </span>
              <span className="text-[9px] font-medium tracking-[0.25em] uppercase" style={{ color: "var(--color-accent-gold)" }}>
                Pre-Owned
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="relative text-[12px] font-medium tracking-[0.15em] uppercase transition-colors duration-500 group"
                style={{ color: "var(--color-text-secondary)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-text-primary)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-text-secondary)")}
              >
                {link.name}
                <span
                  className="absolute -bottom-1 left-0 w-0 h-[1px] transition-all duration-500 group-hover:w-full"
                  style={{ background: "linear-gradient(90deg, var(--color-accent-gold), transparent)" }}
                />
              </Link>
            ))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-5">
            <Link
              href="/#contact"
              onClick={(e) => handleNavClick(e, "/#contact")}
              className="hidden md:inline-flex items-center gap-2 px-6 py-2.5 text-[11px] font-semibold tracking-[0.15em] uppercase rounded-sm transition-all duration-500 hover:shadow-lg"
              style={{
                background: "linear-gradient(135deg, var(--color-accent-gold), var(--color-accent-gold-light))",
                color: "var(--color-bg-primary)",
              }}
            >
              Book a Visit
            </Link>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X size={22} style={{ color: "var(--color-text-primary)" }} />
              ) : (
                <Menu size={22} style={{ color: "var(--color-text-primary)" }} />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 lg:hidden"
            style={{ background: "rgba(10, 10, 10, 0.95)", backdropFilter: "blur(30px)" }}
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: i * 0.08, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  <Link
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-2xl font-light tracking-[0.1em]"
                    style={{ fontFamily: "var(--font-display)", color: "var(--color-text-primary)" }}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="mt-4"
              >
                <Link
                  href="/#contact"
                  onClick={(e) => handleNavClick(e, "/#contact")}
                  className="btn-primary inline-flex"
                >
                  <span>Book a Visit</span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
