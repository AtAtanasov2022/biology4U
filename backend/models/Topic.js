const { DataTypes } = require("sequelize");

const sequelize = require("../connect");

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
