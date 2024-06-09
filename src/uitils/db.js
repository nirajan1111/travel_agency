
import mongoose from "mongoose";

export async function connect() {
    try {
        
        await mongoose.connect(process.env.MONGODB_URI);
        const connection = mongoose.connection;
        connection.on("connected", () => {
            
        });  
    } catch (error) {
        
        
    }
}

