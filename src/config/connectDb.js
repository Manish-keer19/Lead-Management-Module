import mongoose from "mongoose"

import dotenv from "dotenv";


dotenv.config();

const connectionURI = process.env.MONGODB_URI || "mongodb://localhost:27017/LeadManagementDB"
console.log("connection uri", connectionURI);
export const connectionDB = async () => {
    try {
        mongoose.connect(connectionURI)
        console.log("Connected to DB")
    } catch (error) {
        console.log(error)
        console.log("Error while connecting to DB");
        process.exit(1);
    }
}