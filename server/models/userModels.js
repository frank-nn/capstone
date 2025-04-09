const { DataTypes, Model } = require("sequelize");

module.exports = (sequelize) => {
  class User extends Model {}

  User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      coverPic: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      profilePic: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      city: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      desc: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      followers: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      following: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      from: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      relationship: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "User", // Capitalized model name
      tableName: "users", // actual table name
      timestamps: true,
      freezeTableName: true,
    }
  );

  return User;
};
