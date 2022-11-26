const { DataTypes } = require("sequelize");

const sequelize = require("../connect");
const SubTopic = require("./SubTopic");
const User = require("./User");

const AdditionalFile = sequelize.define("AdditionalFile", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  pathName: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  fileName: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

AdditionalFile.belongsTo(SubTopic);
AdditionalFile.belongsTo(User)

module.exports = AdditionalFile;
