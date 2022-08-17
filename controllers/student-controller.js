import student from "../models/student-models.js";
import bodyParser from "body-parser";
import user from "../models/student-models.js"
const getStudents = (req, res) => {
    res.send("this is controller functions");
}


//Adding data into a database

const addStudent = (req, res) => {
    const { firstName, lastName, gender, email, grade } = req.body;
    user.create({
        firstName,
        lastName,
        gender,
        email,
        grade,
    })
        .then(student => res.send("Student added to database successifull"))
        .catch((err) => res.send("Failed to add  student to database "))
};


export default {
    getStudents,
    addStudent,
}