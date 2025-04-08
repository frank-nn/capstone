const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../lib/dbConnect");
const sequelizeInstance = dbConnect.Sequelize;
class User extends Model {}
// Sequelize will create this table if it doesn't exist on startup
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
      allowNull: false,
    },
    coverPic: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    profilePic: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    desc: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    followers: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    following: {
      type: DataTypes.INTEGER,
      allowNull: false,
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
    sequelize: sequelizeInstance,
    modelName: "users", // use lowercase plural format
    timestamps: true,
    freezeTableName: true,
  }
);
module.exports = User;
