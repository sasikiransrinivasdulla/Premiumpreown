import mongoose from 'mongoose';

const CarSchema = new mongoose.Schema({
  carName: { type: String, required: true },
  brand: { type: String, required: true },
  variant: { type: String, required: true },
  year: { type: Number, required: true },
  price: { type: Number, required: true },
  fuelType: { type: String, required: true },
  transmission: { type: String, required: true },
  kilometersDriven: { type: Number, required: true },
  ownership: { type: String, required: true },
  color: { type: String, required: true },
  insuranceValidity: { type: String, required: true },
  registrationState: { type: String, required: true },
  emiAvailable: { type: String, enum: ['Yes', 'No'], default: 'No' },
  description: { type: String, required: true },
  thumbnailImage: { type: String, required: true },
  galleryImages: { type: [String], default: [] },
  status: { type: String, enum: ['Available', 'Sold'], default: 'Available' },
  featured: { type: Boolean, default: false },
}, { timestamps: true });

export default mongoose.models.Car || mongoose.model('Car', CarSchema);
