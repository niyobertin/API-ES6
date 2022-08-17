import express from "express";
import student from "../models/student-models.js";
const router = express.Router();



router.get("/", (req, res) => {
    res.send("This is student routeres")
})




export default router;