const { DataTypes } = require("sequelize");

const sequelize = require("../connect");
const SubTopic = require("./SubTopic");
const TestResult = require("./TestResult");

const Topic = sequelize.define("Topic", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  topic_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT('long'),
    allowNull: false,
  },
});



module.exports = Topic;
