const { DataTypes } = require("sequelize");

const sequelize = require("../connect");

const SubTopic = sequelize.define("SubTopic", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  subTopicName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT('long'),
    allowNull: false,
  }
});



module.exports = SubTopic;