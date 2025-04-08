const validator = require("validator");
const { User } = require("../models"); // adjust path if needed

// Signup controller
const signup = async (req, res) => {
  const { name, email, password } = req.body;

  if (!validator.isEmail(email)) {
    return res.status(400).json({ message: "Invalid email format." });
  }

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: "Email already registered." });
    }

    // Create new user (no password hashing as per your setup)
    const newUser = await User.create({ name, email, password });

    const { password: _, ...userWithoutPassword } = newUser.dataValues;

    return res.status(201).json({
      message: "User registered successfully.",
      user: userWithoutPassword,
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

  try {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(404).json("User not found");
    }

    if (password === user.password) {
      return res.json("Success");
    } else {
      return res.status(401).json("Invalid credentials");
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Database error", error: err });
  }
};

// Logout
const logout = (req, res) => {
  res.json({ message: "User logged out successfully" });
};

module.exports = {
  signup,
  login,
  logout,
};
