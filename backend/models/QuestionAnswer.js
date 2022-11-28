const { DataTypes } = require("sequelize");

const sequelize = require("../connect");
// const SubTopic = require("./SubTopic");

const QuestionAnswer = sequelize.define("QuestionAnswer", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  answerContent: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  isCorrect: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  }
});

module.exports = QuestionAnswer;