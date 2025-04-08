const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../lib/dbConnect");
const sequelizeInstance = dbConnect.Sequelize;
class Post extends Model {}
// Sequelize will create this table if it doesn't exist on startup
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
      allowNull: false,
    },
    img: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    user_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "posts", // use lowercase plural format
    timestamps: true,
    freezeTableName: true,
  }
);
module.exports = Post;
