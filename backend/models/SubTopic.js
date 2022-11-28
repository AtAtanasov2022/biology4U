const { DataTypes } = require("sequelize");

const sequelize = require("../connect");
const AdditionalFile = require("./AdditionalFile");
const Comment = require("./Comment");
const Question = require("./SubTopic");
const Topic = require("./Topic");

const SubTopic = sequelize.define("SubTopic", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  sub_topic_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT('long'),
    allowNull: false,
  }
});



module.exports = SubTopic;