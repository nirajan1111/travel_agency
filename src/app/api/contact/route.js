import { NextResponse } from "next/server";


import {connect } from "@/uitils/db.js";
import Contact from "@/models/contact.js";

export  async function POST(req, res) {
    try {
    await connect()

        const { name, email, phone, message } = await req.json();
        console.log(name, email, phone, message);
    
        if (!name || !email || !message) {

            return NextResponse.json({ error: 'Please fill all the fields' }, { status: 400 });
        }
    
        const newContact = new Contact({ name, email, phone, message });
        await newContact.save();
      return NextResponse.json({ message: 'Contact created successfully' });

    } catch (error) {
      console.error('Error creating contact:', error);
        return NextResponse.json({ error: 'Error creating contact' }, { status: 500 });
    }
}


export async function GET(req, res) {

  try {
    const contacts = await Contact.find();
    return NextResponse.json({ message: 'All contacts', data: contacts });
  } catch (error) {
    console.error('Error getting contacts:', error);
    return NextResponse.json({ error: 'Error getting contacts' }, { status: 500 });
  }
}
export async function DELETE(req, res) {
  try {
    await connect()


    const { id } =await req.json();
    console.log(id)
    console.log(req)
    await Contact.findByIdAndDelete(id);
    return NextResponse.json({ message: 'Contact deleted successfully' });
  }
    catch(error){
      console.error('Error deleting contact:', error);
      return NextResponse.json({ error: 'Error deleting contact' }, { status: 500 });
    }
}