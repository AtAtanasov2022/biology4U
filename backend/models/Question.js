const { DataTypes } = require("sequelize");

const sequelize = require("../connect");
// const SubTopic = require("./SubTopic");

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
  // correctAnswer: {
  //   type: DataTypes.STRING,
  //   allowNull: false,
  // },
  // incorrectAnswers: {
  //   type: DataTypes.ARRAY(DataTypes.STRING),
  //   allowNull: false,
  // }
});

module.exports = Question;