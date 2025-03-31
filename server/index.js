const express = require("express");
const app = express();
require("dotenv").config(); // Make sure to load environment variables from .env
let dbConnect = require("./lib/dbConnect");
const cors = require("cors");
// const bcrypt = require("bcryptjs"); // Import bcryptjs
const validator = require("validator"); // Import validator for email validation
// import userRoutes from "./routes/users.js";  //HELP ?

app.use(express.json());
app.use(cors()); // Use CORS middleware
// Basic endpoint
app.get("/", (req, res) => {
  res.json({ message: "Welcome to my MySQL application." });
});

// app.use("/api/users", userRoutes); // Help!!!

// Signup route with password hashing
app.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  // Validate email format
  if (!validator.isEmail(email)) {
    return res.status(400).json({ message: "Invalid email format." });
  }

  try {
    // Hash the password before storing it
    // const hashedPassword = await bcrypt.hash(password, 10);

    const sql = "INSERT INTO users (name, email, password) VALUES (?)";
    const values = [name, email, password];

    dbConnect.query(sql, [values], (err, data) => {
      if (err) {
        console.error(err); // Log the error for debugging
        return res.status(500).json({
          message: "Error inserting data into the database.",
          error: err,
        });
      }
      return res
        .status(201)
        .json({ message: "User registered successfully.", data });
    });
  } catch (error) {
    console.error(error); // Log the error for debugging
    return res
      .status(500)
      .json({ message: "Error during user registration.", error });
  }
});

// Login route with password comparison
app.post("/login", (req, res) => {
  const sql = "SELECT * FROM users WHERE `email` = ? AND `password` = ?";
  dbConnect.query(sql, [req.body.email, req.body.password], (err, data) => {
    if (err) {
      return res.json("Error");
    }
    if (data.length > 0) {
      return res.json("Success");
    } else {
      return res.json("Failed");
    }
  });
});

// Set port and listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
