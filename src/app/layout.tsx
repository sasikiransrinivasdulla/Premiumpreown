import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Premium Pre-Owned | Curated Cars. Trusted Journeys.",
  description:
    "Discover handpicked, quality pre-owned vehicles at Premium Pre-Owned. India's most trusted curated used-car experience — verified cars, honest deals, premium service.",
  keywords: [
    "premium used cars",
    "pre-owned cars India",
    "certified used cars",
    "trusted car dealer",
    "quality pre-owned vehicles",
  ],
  openGraph: {
    title: "Premium Pre-Owned | Curated Cars. Trusted Journeys.",
    description:
      "India's most trusted curated used-car experience. Verified cars, honest deals, premium service.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
