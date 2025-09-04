import dotenv from "dotenv"

import { connectionDB } from "./config/connectDb.js";
import { app } from "./app.js";
dotenv.config();


const PORT= process.env.PORT||3000;



connectionDB();

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${process.env.PORT}`)
})