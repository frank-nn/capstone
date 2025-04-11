// server/middleware/authMiddleware.js
const { verifyToken } = require("../lib/jwt");

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token)
    return res
      .status(401)
      .json({ message: "Access denied: No token provided" });

  const decoded = verifyToken(token);
  if (!decoded)
    return res.status(403).json({ message: "Invalid or expired token" });

  req.user = decoded;
  next();
}

module.exports = authenticateToken;
