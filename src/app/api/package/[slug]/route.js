import { connect } from "@/uitils/db";
import { NextResponse } from "next/server";
import PackageDesc from "@/models/package.model";
export async function GET(req, res) {
    try {
      await connect();
      const pathname = req.nextUrl.pathname;
    const id = pathname.split("/")[3];
      const packagedesc = await PackageDesc.findById(id);
      const response = NextResponse.json(packagedesc);
      return response;
    } catch (error) {
      console.log(error.message);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  }
  