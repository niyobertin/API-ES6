import Sequelize from "sequelize";
const db = new Sequelize('studentDb', 'postgres', 'nikuze', {
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
//testing water db is connected.
db.authenticate()
    .then(() => console.log("Database connection sucessfully"))
    .catch(err => console.log(`Unable to connect to a database ${err}`));

export default db;