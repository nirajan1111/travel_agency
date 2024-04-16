import Todo from "@/model/hello";
import connectDb from "@/uitils/db";
import { NextResponse } from "next/server";

connectDb();
export async function GET(req) {
  try {
 
    console.log('helloworld this is me ')
    const todo = new Todo({
      item: "hello",
      completed: true,
    });
    await todo.save();
    return new NextResponse(
      JSON.stringify({
        success: true,
        message: "Todo completed 1111",
        data: todo,
      }),
      { status: 200, headers: { "content-type": "application/json" } }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "An error occurred while resetting the password of the user.",
      },
      { status: 500 }
    );
  }
}
