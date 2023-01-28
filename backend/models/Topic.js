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
  topicName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});



module.exports = Topic;
