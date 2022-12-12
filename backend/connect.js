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

// let mysql = require("mysql");

// let connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "password!1914",
//   database: "Biology4U",
// });

// connection.connect(function (err) {
//   if (err) {
//     return console.error("error: " + err.message);
//   }

//   console.log("Connected to the MySQL server.");
// });

// connection.end(function (err) {
//   if (err) {
//     return console.log("error:" + err.message);
//   }
//   console.log("Close the database connection.");
// });

// connection.destroy();
