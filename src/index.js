import dotenv from "dotenv"

import { connectionDB } from "./config/connectDb.js";
import { app } from "./app.js";
dotenv.config();


connectionDB();

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})