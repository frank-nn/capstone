"use strict";
const User = require("./userModels");
const Post = require("./postModels"); //require the model
async function init() {
  await User.sync();
  await Post.sync(); // sync the model
  // also sync any extra models here
}
init();
module.exports = {
  User,
  Post, // export the model
  // also export any extra models here
};
