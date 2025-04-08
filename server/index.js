// server.js

const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const authRoutes = require("./routes/authRoute");
const userRoutes = require("./routes/userRoute");
const postRoutes = require("./routes/postRoute");
const commentRoutes = require("./routes/commentRoute");
const likeRoutes = require("./routes/likeRoute");

app.use(express.json());
app.use(cors()); // Enable Cross-Origin Resource Sharing (CORS)

app.get("/", (req, res) => {
  res.json({ message: "Welcome to my MySQL application." });
});

// Use the auth routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/comment", commentRoutes);
app.use("/api/like", likeRoutes);

// Set port and listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
