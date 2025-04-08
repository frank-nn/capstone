const express = require("express");
const router = express.Router();
const { getPost } = require("../controllers/postController");

router.get("/", getPost);

module.exports = router;
