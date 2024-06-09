import { connect } from "@/uitils/db";
import { NextResponse } from "next/server";
import Destination from "../../../../models/destination.model.js";
export async function GET(req, res) {
    try {
      await connect();
      const destinations = await Destination.find().sort({ name: 1 });
      const response = NextResponse.json(destinations);
      return response;
    } catch (error) {
      
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  }
  