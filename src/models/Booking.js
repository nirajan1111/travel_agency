// models/Booking.js

import mongoose from 'mongoose';

const BookingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  passport: {
    type: String,
    required: true
  },
  phone: {
    type: String,
  },
  persons: {
    type: Number,
  },
  arrival: {
    type: Date,
  },
  for_: {
    type: Date,
  },
  id:{
    type: String,
    required: true
  }
});

const Booking = mongoose.models.Booking || mongoose.model('Booking', BookingSchema);

export default Booking;
