
import mongoose from "mongoose";

export async function connect() {
    try {
        console.log(">>> Connecting to DB");
        mongoose.connect(process.env.MONGODB_URI);
        const connection = mongoose.connection;
        connection.on("connected", () => {
            console.log(">>> DB is connected");
        });  
    } catch (error) {
        console.log("Something went wrong");
        console.log(error);
    }
}

