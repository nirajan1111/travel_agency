import Blog from "@/models/blog.model";
import { connect } from "@/uitils/db";
import { NextResponse } from "next/server";

export async function GET(req, res) {
    try {
      console.log('get is from get')
      await connect();
      const pathname = req.nextUrl.pathname;
      const id = pathname.split("/")[3];

      const blogs = await Blog.findById(id);
      console.log('blogs is ', blogs)
      const response = NextResponse.json({
        message: "Blogs fetch successfully",
        success: true,
        data: blogs
      });
      return response;
    } catch (error) {
      console.log(error.message);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  }
  