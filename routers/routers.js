import express from "express";
import controller from "../controllers/student-controller.js";
//Student routers
const router = express.Router();
router.get("/", controller.getStudents)
router.post("/", controller.addStudent)
router.get('/:id', controller.getUninqueStudent)
router.put('/:id', controller.updateStudent);
router.delete('/:id', controller.removeStudent);
//exporting router
export default router;