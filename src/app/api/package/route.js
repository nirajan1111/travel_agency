import { NextResponse } from "next/server";
import PackageDesc from "../../../models/package.model.js";
import { connect } from "@/uitils/db.js";
export async function POST(req,res) {
  try {
    console.log("Processing POST request")
    await connect();
    const {batch, img, title, price, place_list} = await req.json();

    console.log(batch, img, title, price, place_list);
    const PackageDescs = new PackageDesc({
        batch,
        img,
        title,
        price,
        place_list,
    })
     await  PackageDescs.save();   
    const response = NextResponse.json({
      message: "Package created successfully!",
      success: true,
    });
    return response;
  } catch (error) {
    console.log(error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}


export async function DELETE(req,res) {
  try {
    console.log("Processing DELETE request")
    await connect();
    const { id } = await req.json();
    const packageDesc = await PackageDesc.findById(id);
    if(!packageDesc){
      return NextResponse.json({ error: "Package not found" }, { status: 404 });
    }
    await packageDesc.remove();
    const response = NextResponse.json({
      message: "Package deleted successfully!",
      success: true,
    });

    return response;
  }
  catch(error){
    console.log(error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PUT(req,res) {
  try {
    console.log("Processing PUT request")
    await connect();
    const { id, batch, img, title, price, place_list } = await req.json();
    const packageDesc = await PackageDesc.findById(id);
    if(!packageDesc){
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
  catch(error){
    console.log(error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

