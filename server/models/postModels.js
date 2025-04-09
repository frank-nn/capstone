const { DataTypes, Model } = require("sequelize");

module.exports = (sequelize) => {
  class Post extends Model {}

  Post.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      desc: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      img: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "Post",
      tableName: "posts", // table name
      timestamps: true,
      freezeTableName: true,
    }
  );

  return Post;
};
