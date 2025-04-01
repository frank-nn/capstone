const express = require("express");
const router = express.Router();
const { getUser } = require("../controllers/userController");

router.get("/find/userId", getUser);

module.exports = router;
