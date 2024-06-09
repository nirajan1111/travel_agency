import { connect } from "@/uitils/db";
import { NextResponse } from "next/server";
import PackageDesc from "@/models/package.model.js";
export async function GET(req, res) {
    try {
      await connect();
      const Packages = await PackageDesc.find()
      const response = NextResponse.json(Packages);
      return response;
    } catch (error) {
      
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  }
  