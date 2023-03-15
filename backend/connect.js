const Sequelize = require("sequelize");
require("dotenv").config();
module.exports = new Sequelize(
  process.env.SQL_DATABASE,
  process.env.SQL_USER,
  process.env.SQL_PASSWORD,
  {
    host: process.env.SQL_SERVER,
    dialect: process.env.SQL_DIALECT
  }
);