import User from "@/models/User";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(req) {
  try {
    const body = await req.json();
    let {email,password} = body
   

    if (!email|| !password) {
      
      return NextResponse.json(
        { message: "All fields are required." },
        { status: 400 }
      );
    }

    const user = await User.findOne({ email})
    if (!user) {
      return NextResponse.json(
        { message: "User not found." },
        { status: 400 }
      );
    }
    const is_Match = await bcrypt.compare(password, user.password);
    if(!is_Match){
        return NextResponse.json(
            { message: "Invalid Credentials." },
            { status: 400 }
        );
    }
    return NextResponse.json({ message: "User Logged In." }, { status: 201 });
  } catch (error) {
    
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
