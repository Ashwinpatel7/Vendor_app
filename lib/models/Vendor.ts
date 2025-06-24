import mongoose from 'mongoose'

const VendorSchema = new mongoose.Schema({
  vendorName: {
    type: String,
    required: true,
  },
  bankAccountNo: {
    type: String,
    required: true,
  },
  bankName: {
    type: String,
    required: true,
  },
  addressLine1: {
    type: String,
  },
  addressLine2: {
    type: String,
    required: true,
  },
  city: {
    type: String,
  },
  country: {
    type: String,
  },
  zipCode: {
    type: String,
  },
  userEmail: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
})

export default mongoose.models.Vendor || mongoose.model('Vendor', VendorSchema)