const Sequelize = require("sequelize");
module.exports = new Sequelize(
 'Biology4U',
 'root',
 'password!1914',
  {
    host: 'localhost',
    dialect: 'mysql'
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
