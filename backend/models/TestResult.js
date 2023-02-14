const { DataTypes } = require("sequelize");

const sequelize = require("../connect");

const TestResult = sequelize.define("TestResult", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  score: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});




module.exports = TestResult;
