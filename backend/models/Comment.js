const { DataTypes } = require("sequelize");

const sequelize = require("../connect");
const SubTopic = require("./SubTopic");
const User = require("./User");

const Comment = sequelize.define("Comment", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Comment.belongsTo(User);
Comment.belongsTo(SubTopic);

module.exports = Comment;
