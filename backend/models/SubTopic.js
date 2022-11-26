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
    type: DataTypes.STRING,
    allowNull: false,
  }
});

SubTopic.belongsTo(Topic);
SubTopic.hasMany(Question);
SubTopic.hasMany(Comment);
SubTopic.hasMany(AdditionalFile);

module.exports = SubTopic;