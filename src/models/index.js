
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const { ne } = require('sequelize/types/lib/operators');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

// let sequelize;
// if (config.use_env_variable) {
//     sequelize = new Sequelize(process.env[config.use_env_variable], config);
// } else {
//     sequelize = new Sequelize(config.database, config.username, config.password, config);
// }

const databases = Object(config.databases);

for (let i = 0; i < databases.length; i++) {
    let database = databases[i];
    let dbPath = config.databases[database];
    db[database] = new Sequelize(
        dbPath.database,
        dbPath.username,
        dbPath.password,
        dbPath
    );
}

fs
    .readdirSync(__dirname + '/rest')
    .filter(file => {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach(file => {
        const model = require(path.join(__dirname + '/rest', file))//(sequelize, Sequelize.DataTypes);
        db[model.name] = model;
    });

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

// db.sequelize = sequelize;
// db.Sequelize = Sequelize;

module.exports = db;