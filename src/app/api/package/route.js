import { NextResponse } from "next/server";
import PackageDesc from "../../../models/package.model.js";
import Tour from "@/models/destination.model.js";
import { connect } from "@/uitils/db.js";
export async function GET(req, res) {
  try {
    await connect();
    const packages = await PackageDesc.find().populate("destination");

    if(!packages){
      return NextResponse.json({ error: "No packages found" }, { status: 404 });
    }
    
    const response = NextResponse.json({
      message: "Package created successfully!",
      success: true,
      data: packages || []
    });
    return response;
  } catch (error) {
    
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
export async function POST(req, res) {
  try {
    
    await connect();
    const { heading, price, duration, activity, destination, overview, included,image,excluded, highlights, itinerary } = await req.json();
    
    const destinationobj = await Tour.findById(destination)
    if (!destinationobj) {
      return NextResponse.json({ error: "Destination not found" }, { status: 404 });
    }
    if(!heading || !price || !duration || !activity || !destination || !overview ){
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    const PackageDescs = new PackageDesc({
      heading,
      price,
      duration,
      activity,
      destination: destinationobj._id,
      overview,
      image,
      included,
      excluded,
      highlights,
      itinerary
    })
    await PackageDescs.save();
    const response = NextResponse.json({
      message: "Package created successfully!",
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
    const packageDesc = await PackageDesc.findById(id);
    if (!packageDesc) {
      return NextResponse.json({ error: "Package not found" }, { status: 404 });
    }
    await packageDesc.remove();
    const response = NextResponse.json({
      message: "Package deleted successfully!",
      success: true,
    });

    return response;
  }
  catch (error) {
    
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PUT(req, res) {
  try {
    
    await connect();
    const { id, batch, img, title, price, place_list } = await req.json();
    const packageDesc = await PackageDesc.findById(id);
    if (!packageDesc) {
      return NextResponse.json({ error: "Package not found" }, { status: 404 });
    }
    packageDesc.batch = batch;
    packageDesc.img = img;
    packageDesc.title = title;
    packageDesc.price = price;
    packageDesc.place_list = place_list;
    await packageDesc.save();
    const response = NextResponse.json({
      message: "Package updated successfully!",
      success: true,
    });
    return response;
  }
  catch (error) {
    
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

