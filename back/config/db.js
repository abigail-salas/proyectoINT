const Sequelize = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(process.env.DBNAME, null, null, {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});

module.exports = sequelize;
