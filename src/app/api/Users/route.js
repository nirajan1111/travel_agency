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

    const duplicate = await User.findOne({ email: email })
      .lean()
      .exec();

    if (duplicate) {
      return NextResponse.json({ message: "Duplicate Email" }, { status: 409 });
    }
    const hashPassword = await bcrypt.hash(password, 10);
    password = hashPassword;

    await User.create({ email, password });
    return NextResponse.json({ message: "User Created." }, { status: 201 });
  } catch (error) {
    console.log(err);
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
