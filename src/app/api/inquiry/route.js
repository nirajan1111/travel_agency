import { NextResponse } from "next/server";
import PackageDesc from "../../../models/package.model.js";
import Destination from "../../../models/destination.model.js";

import { connect } from "@/uitils/db.js";
import Inquiry from "@/models/inquiry.model.js";

export async function GET(req, res) {
  try {
    await connect();

    const inquiries = await Inquiry.find();
    if (!inquiries) {
      const response = NextResponse.json({
        message: "Destination not found",
        success: false,
      });
      return response;
    }
    const response = NextResponse.json({
      message: "Destination created successfully!",
      success: true,
      data: inquiries || [],
    });
    return response;
  } catch (error) {
    console.log(error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req, res) {
  try {
    await connect();

    const { name, email, number, message } = await req.json();

    const inquiry = new Inquiry({
      name,
      email,
      number,
      message,
    });

    await inquiry.save();

    const response = NextResponse.json({
      message: "Inquiry created successfully!",
      success: true,
    });
    return response;
  } catch (error) {
    console.log(error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(req, res) {
  try {
    await connect();
    const { id } = await req.json();
    const inquiry = await Inquiry.findById(id);
    if (!inquiry) {
      return NextResponse.json({ error: "Inquiry not found" }, { status: 404 });
    }
    await inquiry.remove();
    const response = NextResponse.json({
      message: "Inquiry deleted successfully!",
      success: true,
    });
    return response;
  } catch (error) {
    console.log(error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
