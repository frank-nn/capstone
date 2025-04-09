"use strict";
let Models = require("../models"); // matches index.js

// GET all users
const getUser = async (req, res) => {
  try {
    const users = await Models.User.findAll();
    res.status(200).json(users);
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ message: "Error fetching users" });
  }
};

// POST create user
const createUser = async (req, res) => {
  try {
    const newUser = await Models.User.create(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    console.error("Create error:", error);
    res.status(500).json({ message: "Error creating user" });
  }
};

// PUT update user
const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const [updated] = await Models.User.update(req.body, { where: { id } });
    if (updated) {
      const updatedUser = await Models.User.findByPk(id);
      res.status(200).json(updatedUser);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.error("Update error:", error);
    res.status(500).json({ message: "Error updating user" });
  }
};

// DELETE user
const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const deleted = await Models.User.destroy({ where: { id } });
    if (deleted) {
      res.status(200).json({ message: "User deleted successfully" });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.error("Delete error:", error);
    res.status(500).json({ message: "Error deleting user" });
  }
};

// ✅ EXPORT ALL
module.exports = {
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
