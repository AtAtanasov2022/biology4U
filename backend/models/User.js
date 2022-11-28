const { DataTypes } = require("sequelize");

const sequelize = require("../connect");
// const AdditionalFile = require("./AdditionalFile");
// const Comment = require("./Comment");
// const TestResult = require("./TestResult");
// import './associations'

const User = sequelize.define("User", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  userPassword: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  firstname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  userType: {
    type: DataTypes.ENUM("student", "teacher", "admin"),
    allowNull: false,
  },
});



module.exports = User;
