const validator = require("validator");
const dbConnect = require("../lib/dbConnect");

// Signup controller
const signup = async (req, res) => {
  const { name, email, password } = req.body;

  // Validate email format
  if (!validator.isEmail(email)) {
    return res.status(400).json({ message: "Invalid email format." });
  }

  try {
    // Has to remove password hashing as was complicated (not recommended)
    const sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
    const values = [name, email, password]; // No password hashing

    dbConnect.query(sql, values, (err, data) => {
      if (err) {
        console.error(err);
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
    console.error(error);
    return res
      .status(500)
      .json({ message: "Error during user registration.", error });
  }
};

// Login controller
const login = async (req, res) => {
  const { email, password } = req.body;

  const sql = "SELECT * FROM users WHERE `email` = ?";
  dbConnect.query(sql, [email], (err, data) => {
    if (err) {
      return res.status(500).json({ message: "Database error", error: err });
    }

    if (data.length > 0) {
      const user = data[0];

      // Compare password directly (still not secure)
      if (password === user.password) {
        return res.json("Success");
      } else {
        return res.status(401).json("Invalid credentials");
      }
    } else {
      return res.status(404).json("User not found");
    }
  });
};

//Log out

const logout = (req, res) => {
  res.json({ message: "User logged out successfully" });
};

module.exports = {
  signup,
  login,
  logout,
};
