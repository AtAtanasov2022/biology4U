const Sequelize = require("sequelize");
const sequelize = new Sequelize(
 'Biology4U',
 'root',
 '',
  {
    host: 'localhost',
    dialect: 'mysql'
  }
);

sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully.');
}).catch((error) => {
  console.error('Unable to connect to the database: ', error);
});

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
