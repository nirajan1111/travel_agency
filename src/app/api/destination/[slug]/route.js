import { connect } from "@/uitils/db";
import { NextResponse } from "next/server";
import Destination from "../../../../models/destination.model.js";
export async function GET(req, res) {
    try {
      await connect();
      const pathname = req.nextUrl.pathname;
        const id = pathname.split("/")[3];
      const destinations = await Destination.findById(id);
      const response = NextResponse.json(destinations);
      return response;
    } catch (error) {
      
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  }
  