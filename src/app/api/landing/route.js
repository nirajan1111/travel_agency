import { NextResponse } from "next/server";
import PackageDesc from "../../../models/package.model.js";
import Destination from "../../../models/destination.model.js";
import Landing from "@/models/landing.model.js";
import { connect } from "@/uitils/db.js";

export async function GET(req, res) {
  try {
    const landings = await Landing.find();
    const response = NextResponse.json({
      message: "All landing",
      success: true,
      data: landings || [],
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
    const {heading, paragraph, image} = await req.json();
  
    const landing = new Landing({
      heading: heading,
      paragraph: paragraph,
      image: image,
    });

    await landing.save();

    const response = NextResponse.json({
      message: "Landing created successfully",
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
    const landing = await Landing.findById(id);
    if (!landing) {
      return NextResponse.json({ error: "Landing not found" }, { status: 404 });
    }
    await landing.remove();
    const response = NextResponse.json({
      message: "Landing deleted successfully!",
      success: true,
    });
    return response;
  } catch (error) {
    console.log(error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
