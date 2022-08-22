
import Student from "../models/student-models.js";
// Getting all Students.
const getStudents = (req, res) => {
    Student.findAll()
        .then((Students) => {
            res.json(Students);
        })
        .catch(err => console.log(err));
};
//Getting Student by primary key
const getUninqueStudent = (req, res) => {
    const id = parseInt(req.params.id);
    Student.findByPk(id)
        .then((student) => {
            if (student) {
                res.json(student);
            } else {
                res.sendStatus(400).send("Bad resquest: user not found.")
            }
        })
        .catch(err => console.log(err));
};
//Adding data into a database
const addStudent = (req, res) => {
    const { firstName, lastName, gender, email, grade } = req.body;
    Student.create({
        firstName,
        lastName,
        gender,
        email,
        grade,
    })
        .then(student => res.send("Student added to database successifull"))
        .catch((err) => res.send("Failed to add  student to database "))
};
//Updating student 
const updateStudent = (req, res) => {
    const { firstName, lastName, gender, email, grade } = req.body;
    const id = parseInt(req.params.id);
    Student.findByPk(id)
        .then((students) => {
            students.update({
                firstName: firstName || students.firstName,
                lastName: lastName || students.lastName,
                gender: gender || students.gender,
                email: email || students.email,
                grade: grade || students.grade
            })
                .then(() => {
                    res.send("Student apdated successifully !!")
                })
                .catch(err => console.log(err));
        })
        .catch(err => console.log(err));
}
// Deleting a student
const removeStudent = (req, res) => {
    const id = parseInt(req.params.id);
    Student.findByPk(id)
        .then((deleteStudent) => {
            if (!deleteStudent) {
                res.sendStatus(404).send("Student does not found");
            } else {
                deleteStudent.destroy()
                    .then(() => res.send("Student deleted successifully!!!"))
                    .catch(err => console.log(err))
            }
        })
        .catch(err => console.log(err));
}
//exporting 
export default {
    getStudents,
    addStudent,
    getUninqueStudent,
    updateStudent,
    removeStudent,
}