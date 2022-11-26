const { DataTypes } = require("sequelize");

const sequelize = require("../connect");

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