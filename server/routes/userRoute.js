// server/routes/userRoute.js
const express = require("express");
const router = express.Router();
const authenticateToken = require("../middleware/authMiddleware");

const {
  getUser,
  createUser,
  updateUser,
  deleteUser,
  getCurrentUser,
} = require("../controllers/userController");

// Public routes
router.post("/", createUser);

// Protected routes
router.get("/", authenticateToken, getUser);
router.get("/profile", authenticateToken, getCurrentUser);
router.put("/:id", authenticateToken, updateUser);
router.delete("/:id", authenticateToken, deleteUser);

module.exports = router;
