import connectToDatabase from "@/lib/mongodb";
import Car from "@/models/Car";
import { Marketplace } from "@/components/cars/Marketplace";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export const revalidate = 0;

export const metadata = {
  title: "Collection | Premium Pre-Owned",
  description: "Browse our curated collection of verified, fully inspected luxury and premium pre-owned vehicles.",
};

export default async function CarsPage() {
  await connectToDatabase();

  const cars = await Car.find({ status: { $ne: "Sold" } })
    .sort({ featured: -1, createdAt: -1 })
    .lean();

  const serializedCars = cars.map((car: any) => ({
    ...car,
    _id: car._id.toString(),
    createdAt: car.createdAt?.toISOString(),
    updatedAt: car.updatedAt?.toISOString(),
  }));

  return (
    <main className="min-h-screen relative" style={{ background: "var(--color-bg-primary)" }}>
      {/* Absolute subtle gradient map for the entire page background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 0%, rgba(200,169,107,0.05) 0%, transparent 60%)",
        }}
      />
      
      <div className="relative z-10">
        <Navigation />

        {/* The Marketplace component is the true hero of this page. */}
        <Marketplace initialCars={serializedCars} />

        {/* Massive separation before footer to prevent crushing */}
        <div className="h-40 lg:h-64" />

        <Footer />
      </div>
    </main>
  );
}
