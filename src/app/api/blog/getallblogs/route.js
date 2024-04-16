import { connect } from "@/uitils/db";
import { NextResponse } from "next/server";
import Blogs from "../../../../models/blog.model.js";
export async function GET(req, res) {
    try {
      await connect();
      const blogs = await Blogs.find().sort({ name: 1 });
      const response = NextResponse.json(blogs);
      return response;
    } catch (error) {
      console.log(error.message);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  }
  