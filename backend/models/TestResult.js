const { DataTypes } = require("sequelize");

const sequelize = require("../connect");
const Topic = require("./Topic");
const User = require("./User");

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

TestResult.belongsTo(Topic);
TestResult.belongsTo(User);

module.exports = TestResult;
