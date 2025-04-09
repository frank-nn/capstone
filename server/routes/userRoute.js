const express = require("express");
const router = express.Router();

const {
  getUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/userController"); // ✅ Correct path and name

router.get("/", getUser);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
