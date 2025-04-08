"use strict";
let Models = require("../models"); // matches index.js
const getUser = async (req, res) => {
  try {
    console.log("getUser");
    const users = await Models.User.findAll({}); // This fetches all users
    res.status(200).json(users);
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ message: "Error fetching users" });
  }
};

module.exports = { getUser };
