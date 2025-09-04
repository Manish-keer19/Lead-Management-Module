import express from "express"
import { leadroute } from "./routes/lead.route.js";

export const  app = express();


app.use(express.json())

app.use("/api/v1/leads",leadroute)

app.get("/", (req, res) => {
    res.send("Welcom to the manish's Lead managment Module ")
})




