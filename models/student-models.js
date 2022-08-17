import Sequelize from "sequelize";
import db from "../config/config.js";


const Students = db.define('studentsManagement', {
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING
    },
    gender: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    grade: {
        type: Sequelize.STRING,
        allowNull: false
    },
})

await Students.sync();

export default Students;