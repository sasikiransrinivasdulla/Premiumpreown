import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import Car from '@/models/Car';

export async function GET() {
  try {
    await connectToDatabase();

    // Fetch cars: Exclude sold, sort by featured first, then newest
    const cars = await Car.find({ status: { $ne: 'Sold' } })
      .sort({ featured: -1, createdAt: -1 })
      .lean();

    // Serialize MongoDB IDs to strings for the frontend
    const serializedCars = cars.map((car: any) => ({
      ...car,
      _id: car._id.toString(),
      createdAt: car.createdAt?.toISOString(),
      updatedAt: car.updatedAt?.toISOString(),
    }));

    return NextResponse.json(serializedCars);
  } catch (error) {
    console.error('Error fetching cars:', error);
    return NextResponse.json(
      { error: 'Failed to fetch cars' },
      { status: 500 }
    );
  }
}
