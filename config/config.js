import Sequelize from "sequelize";
import pg from "pg";

const db = new Sequelize('api', 'postgres', 'nikuze', {
    host: "localhost",
    port: 12345,
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})

db.authenticate()
    .then(() => console.log("Database connection sucessfully"))
    .catch(err => console.log(`Unable to connect to a database ${err}`));

export default db;