"use client";

import { FadeIn } from "@/components/motion/FadeIn";
import { ArrowUpRight } from "lucide-react";

const quickLinks = [
  { name: "Home", href: "#hero" },
  { name: "Collection", href: "#curated" },
  { name: "Ethos", href: "#ethos" },
  { name: "Contact", href: "#contact" },
];

export function Footer() {
  const handleClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      className="relative py-16"
      style={{
        background: "var(--color-bg-secondary)",
        borderTop: "1px solid var(--color-border-subtle)",
      }}
    >
      <div className="container-luxury">
        <FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center lg:text-left">
            {/* Brand Column */}
            <div className="lg:col-span-1 flex flex-col items-center lg:items-start">
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-8 h-8 rounded-sm flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, #C8A96B, #D6B36A)",
                  }}
                >
                  <span className="text-xs font-bold" style={{ fontFamily: "var(--font-display)", color: "#0A0A0A" }}>
                    P
                  </span>
                </div>
                <div className="text-left">
                  <span className="text-sm font-semibold tracking-wide block" style={{ fontFamily: "var(--font-display)", color: "var(--color-text-primary)" }}>
                    Premium
                  </span>
                  <span className="text-[8px] font-medium tracking-[0.25em] uppercase" style={{ color: "var(--color-accent-gold)" }}>
                    Pre-Owned
                  </span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-3 mt-4">
                {[
                  { label: "Instagram", href: "#", path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" },
                  { label: "Facebook", href: "#", path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" },
                  { label: "Twitter", href: "#", path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-8 h-8 rounded-md flex items-center justify-center transition-all duration-500 hover:scale-110"
                    style={{ background: "var(--color-bg-glass-light)", border: "1px solid var(--color-border-subtle)" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "rgba(200,169,107,0.3)";
                      e.currentTarget.style.background = "var(--color-accent-gold-dim)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                      e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="var(--color-text-secondary)">
                      <path d={social.path} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col items-center lg:items-start">
              <h4 className="text-[10px] font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: "var(--color-accent-gold)" }}>
                Quick Links
              </h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleClick(link.href);
                      }}
                      className="text-xs transition-colors duration-500 flex items-center gap-1 group"
                      style={{ color: "var(--color-text-secondary)" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-text-primary)")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-text-secondary)")}
                    >
                      {link.name}
                      <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col items-center lg:items-start">
              <h4 className="text-[10px] font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: "var(--color-accent-gold)" }}>
                Contact
              </h4>
              <ul className="space-y-3">
                <li>
                  <a href="tel:+919876543210" className="text-xs transition-colors duration-500 block" style={{ color: "var(--color-text-secondary)" }}>
                    +91 98765 43210
                  </a>
                </li>
                <li>
                  <a href="mailto:hello@premiumpreown.in" className="text-xs transition-colors duration-500 block" style={{ color: "var(--color-text-secondary)" }}>
                    hello@premiumpreown.in
                  </a>
                </li>
                <li>
                  <p className="text-xs" style={{ color: "var(--color-text-secondary)" }}>
                    Jubilee Hills, Hyderabad
                  </p>
                </li>
              </ul>
            </div>

            {/* Business Hours */}
            <div className="flex flex-col items-center lg:items-start">
              <h4 className="text-[10px] font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: "var(--color-accent-gold)" }}>
                Showroom Hours
              </h4>
              <ul className="space-y-2 text-xs" style={{ color: "var(--color-text-secondary)" }}>
                <li className="flex justify-between w-full max-w-[140px] mx-auto lg:mx-0">
                  <span>Mon – Fri</span>
                  <span style={{ color: "var(--color-text-muted)" }}>10 AM – 8 PM</span>
                </li>
                <li className="flex justify-between w-full max-w-[140px] mx-auto lg:mx-0">
                  <span>Saturday</span>
                  <span style={{ color: "var(--color-text-muted)" }}>10 AM – 6 PM</span>
                </li>
                <li className="flex justify-between w-full max-w-[140px] mx-auto lg:mx-0">
                  <span>Sunday</span>
                  <span style={{ color: "var(--color-text-muted)" }}>Appt Only</span>
                </li>
              </ul>
            </div>
          </div>
        </FadeIn>

        {/* Bottom Bar */}
        <div
          className="mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left"
          style={{ borderTop: "1px solid var(--color-border-subtle)" }}
        >
          <p className="text-[10px]" style={{ color: "var(--color-text-muted)" }}>
            © {new Date().getFullYear()} Premium Pre-Owned. All rights reserved.
          </p>
          <div className="flex gap-4">
            {["Privacy Policy", "Terms of Service"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-[10px] transition-colors duration-500"
                style={{ color: "var(--color-text-muted)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-text-secondary)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-text-muted)")}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
