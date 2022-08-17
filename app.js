import express from "express";
import db from "./config/config.js";
import bodyParser from "body-parser";
import path from "path";
import studentRouter from "./routers/routers.js";
const app = express();
const PORT = process.env.PORT || 8000;


//middelware
app.use(express.json());
app.use('/students', studentRouter);

app.get("/", (req, res) => {
    res.send("<h1>this is a test</h1>");
})



app.listen(PORT, () => console.log(`Server is listening on port ${PORT} ...`));