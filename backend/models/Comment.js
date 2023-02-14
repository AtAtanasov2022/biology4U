const { DataTypes } = require("sequelize");

const sequelize = require("../connect");

const Comment = sequelize.define("Comment", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  content: {
    type: DataTypes.TEXT('tiny'),
    allowNull: false,
  },
});


module.exports = Comment;
