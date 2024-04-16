import { connect } from "@/uitils/db";
import { NextResponse } from "next/server";
import Blog from "../../../../models/blog.model.js";
export async function GET(req, res) {
    try {
      await connect();
      const pathname = req.nextUrl.pathname;
      const id = pathname.split("/")[3];
      const blogs = await Blog.findById(id);
      const response = NextResponse.json(blogs);
      return response;
    } catch (error) {
      console.log(error.message);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  }
  