"use strict";
const dbConnect = require("../lib/dbConnect");
const sequelize = dbConnect.Sequelize;

const UserModel = require("./userModels");
const PostModel = require("./postModels");

const User = UserModel(sequelize);
const Post = PostModel(sequelize);

(async () => {
  await sequelize.sync(); // Sync all models
})();

module.exports = {
  User,
  Post,
};
