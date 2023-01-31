const { DataTypes } = require("sequelize");

const sequelize = require("../connect");

const Question = sequelize.define("Question", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  questionName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Question;