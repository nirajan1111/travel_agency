import { NextResponse } from "next/server";
import PackageDesc from "../../../models/package.model.js";
import Destination from "../../../models/destination.model.js";
import { connect } from "@/uitils/db.js";

export async function GET(req, res) {
  try {
    await connect();

    const destinations = await Destination.find();
    if (!destinations) {
      const response = NextResponse.json({
        message: "Destination not found",
        success: false,
        data: destinations || [],
      });
      return response;
    }
    const response = NextResponse.json({
      message: "Destination created successfully!",
      success: true,
      data: destinations || [],
    });
    return response;
  } catch (error) {
    
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req, res) {
  try {
    await connect();

    const { name, image } = await req.json();
    
    

    const destination = new Destination({
      name,
      image,
    });

    await destination.save();

    const response = NextResponse.json({
      message: "Destination created successfully!",
      success: true,
    });
    return response;
  } catch (error) {
    
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(req, res) {
  try {
    await connect();
    const { id } = await req.json();
    const destination = await Destination.findById(id);
    if (!destination) {
      return NextResponse.json(
        { error: "Destination not found" },
        { status: 404 }
      );
    }
    await destination.remove();
    const response = NextResponse.json({
      message: "Destination deleted successfully!",
      success: true,
    });
    return response;
  } catch (error) {
    
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PUT(req, res) {
  try {
    await connect();
    const { id, name, locations, tourCount, packageDesc } = await req.json();
    const destination = await Destination.findById(id);
    if (!destination) {
      return NextResponse.json(
        { error: "Destination not found" },
        { status: 404 }
      );
    }
    destination.name = name;
    destination.locations = locations;
    destination.tourCount = tourCount;
    destination.packageDesc = packageDesc;
    await destination.save();
    const response = NextResponse.json({
      message: "Destination updated successfully!",
      success: true,
    });
    return response;
  } catch (error) {
    
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
