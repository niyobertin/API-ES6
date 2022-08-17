import express from "express";
import student from "../models/student-models.js";
import controller from "../controllers/student-controller.js";
const router = express.Router();



router.get("/", controller.getStudents)
router.post("/", controller.addStudent)




export default router;