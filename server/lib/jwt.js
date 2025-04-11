// server/lib/jwt.js
const jwt = require("jsonwebtoken");
const SECRET = process.env.JWT_SECRET || "supersecret";
const EXPIRES_IN = "1h";

function generateToken(payload) {
  return jwt.sign(payload, SECRET, { expiresIn: EXPIRES_IN });
}

function verifyToken(token) {
  try {
    return jwt.verify(token, SECRET);
  } catch (err) {
    return null;
  }
}

module.exports = {
  generateToken,
  verifyToken,
};
