"use strict";
let Models = require("../models"); // matches index.js

// GET all posts
const getPost = async (req, res) => {
  try {
    const posts = await Models.Post.findAll();
    res.status(200).json(posts);
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ message: "Error fetching posts" });
  }
};

// POST create post
const createPost = async (req, res) => {
  try {
    const newPost = await Models.Post.create(req.body);
    res.status(201).json(newPost);
  } catch (error) {
    console.error("Create error:", error);
    res.status(500).json({ message: "Error creating post" });
  }
};

// PUT update post
const updatePost = async (req, res) => {
  try {
    const id = req.params.id;
    const [updated] = await Models.Post.update(req.body, { where: { id } });
    if (updated) {
      const updatedPost = await Models.Post.findByPk(id);
      res.status(200).json(updatedPost);
    } else {
      res.status(404).json({ message: "Post not found" });
    }
  } catch (error) {
    console.error("Update error:", error);
    res.status(500).json({ message: "Error updating post" });
  }
};

// DELETE post
const deletePost = async (req, res) => {
  try {
    const id = req.params.id;
    const deleted = await Models.Post.destroy({ where: { id } });
    if (deleted) {
      res.status(200).json({ message: "Post deleted successfully" });
    } else {
      res.status(404).json({ message: "Post not found" });
    }
  } catch (error) {
    console.error("Delete error:", error);
    res.status(500).json({ message: "Error deleting post" });
  }
};

// ✅ EXPORT ALL
module.exports = {
  getPost,
  createPost,
  updatePost,
  deletePost,
};
