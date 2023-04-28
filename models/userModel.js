const { DataTypes, BOOLEAN } = require("sequelize");

module.exports = (sequelize, datatTypes) => {
  const User = sequelize.define("user", {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return User;
};
