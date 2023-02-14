const { DataTypes } = require("sequelize");

const sequelize = require("../connect");

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
  }
});




module.exports = AdditionalFile;
