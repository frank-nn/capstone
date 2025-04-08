"use strict";
let Models = require("../models"); // matches index.js
const getPost = async (req, res) => {
  try {
    console.log("getPost");
    const posts = await Models.Post.findAll({}); // This fetches all users
    res.status(200).json(posts);
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ message: "Error fetching posts" });
  }
};
module.exports = { getPost };
