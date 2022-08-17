import Sequelize from "sequelize";
import db from "../config/config.js";


const Students = db.define('students', {
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: true
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
    class: {
        type: Sequelize.STRING,
        allowNull: false
    },
})

await Students.sync();

export default Students;