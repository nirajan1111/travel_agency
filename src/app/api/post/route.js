import { NextResponse } from "next/server";
import { connect } from "@/uitils/db.js";
import TravelPolicyData from "../../../models/travel.js";
export async function POST(req,res) {
  try {
    await connect();

    const {company, companyLogo, planName, destinationType, prices} = await req.json();
    console.log(company, companyLogo, planName, destinationType, prices);

    const TravelPolicy = new TravelPolicyData({
        company,
        companyLogo,
        planName,
        destinationType,
        prices,
    })
    console.log(TravelPolicy);
    await  TravelPolicy.save();

  
    const response = NextResponse.json({
      message: "data created successfully!",
      success: true,
    });
    return response;
  } catch (error) {
    console.log(error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

