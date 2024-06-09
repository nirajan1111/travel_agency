import Booking from "@/models/Booking";
import { NextResponse } from "next/server";

import { connect } from "@/uitils/db.js";

export async function GET(req, res) {
  try {
    await connect();
    const bookings = await Booking.find();
    if (!bookings) {
      const response = NextResponse.json({
        message: "Booking not found",
        success: false,
      });
      return response;
    }
    const response = NextResponse.json({
      message: "Booking created successfully!",
      success: true,
      data: bookings || [],
    });
    return response;
  } catch (error) {
    
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req, res) {
  try {
    await connect();

    const { name, email, passport, phone, persons, arrival, for_, id } = await req.json();
    if(!name|| !email|| !id){
        return NextResponse.json({ error: " Please Fill the fields" }, { status: 400 });
    }
    const booking = new Booking({
      name,
      email,
      passport,
      phone,
      persons,
      arrival,
      for_,
      id
    });

    await booking.save();
    const response = NextResponse.json({
        message: "Booking created successfully!",
        success: true,
        
    })
    return response;
  } catch (error) {
    
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(req, res) {
  try {
    await connect();
    const { id } = await req.json();
    const booking = await Booking.findByIdAndDelete(id);
    if (!booking) {
      const response = NextResponse.json({
        message: "Booking not found",
        success: false,
      });
      return response;
    }
    const response = NextResponse.json({
      message: "Booking deleted successfully!",
      success: true,
    });
    return response;
  } catch (error) {
    
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
