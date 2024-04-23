import { NextResponse } from "next/server";
import Blogs from "../../../models/blog.model.js";
import { connect } from "@/uitils/db.js";
export async function GET(req, res) {
  try {
    await connect();

    const blogs = await Blogs.find();

    const response = NextResponse.json({
      message: "Blog created successfully!",
      success: true,
      data: blogs || [],
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
    const { image, title, paragraph } = await req.json();

    if (!image || !title || !paragraph) {
      return NextResponse.json(
        { error: "Please fill all the fields" },
        { status: 400 }
      );
    }
    const blog = new Blogs({
      image,
      title,
      paragraph,
    });
    await blog.save();
    const response = NextResponse.json({
      message: "Blog created successfully!",
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
    const blog = await Blogs.findById(id);
    if (!blog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }
    await blog.remove();
    const response = NextResponse.json({
      message: "Blog deleted successfully!",
      success: true,
    });
    return response;
  } catch (error) {
    console.log(error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PUT(req, res) {
  try {
    await connect();
    const {
      id,
      grid_img,
      standard_img,
      author,
      grid_title,
      standard_title,
      description,
      category,
      comment,
    } = await req.json();
    const blog = await Blogs.findById(id);
    if (!blog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }
    blog.grid_img = grid_img;
    blog.standard_img = standard_img;
    blog.author = author;
    blog.grid_title = grid_title;
    blog.standard_title = standard_title;
    blog.description = description;
    blog.category = category;
    blog.comment = comment;
    await blog.save();
    const response = NextResponse.json({
      message: "Blog updated successfully!",
      success: true,
    });
    return response;
  } catch (error) {
    console.log(error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
