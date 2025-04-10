const validator = require("validator");
const bcrypt = require("bcrypt");
const { User } = require("../models"); // adjust path if needed

const SALT_ROUNDS = 10;

// Signup controller
const signup = async (req, res) => {
  const { name, email, password } = req.body;

  console.log("Signup request received:", { name, email });

  if (!validator.isEmail(email)) {
    return res.status(400).json({ message: "Invalid email format." });
  }

  try {
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: "Email already registered." });
    }

    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    console.log("New user created:", newUser.dataValues);

    const { password: _, ...userWithoutPassword } = newUser.dataValues;

    return res.status(201).json({
      message: "User registered successfully.",
      user: userWithoutPassword,
    });
  } catch (error) {
    console.error("Signup error:", error);
    return res
      .status(500)
      .json({ message: "Error during user registration.", error });
  }
};

// Login controller
const login = async (req, res) => {
  const { email, password } = req.body;

  console.log("Login attempt for:", email);

  try {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      console.log("User not found");
      return res.status(404).json({ message: "User not found" });
    }

    console.log("User found:", user.email);
    console.log("Entered password:", password);
    console.log("Hashed password in DB:", user.password);

    const isMatch = await bcrypt.compare(password, user.password);

    console.log("Password match:", isMatch);

    if (isMatch) {
      const { password: _, ...userWithoutPassword } = user.dataValues;
      return res.status(200).json({
        message: "Login successful",
        user: userWithoutPassword,
      });
    } else {
      return res.status(401).json({ message: "Invalid credentials" });
    }
  } catch (err) {
    console.error("Login error:", err);
    return res.status(500).json({ message: "Database error", error: err });
  }
};

// Logout controller
const logout = (req, res) => {
  res.json({ message: "User logged out successfully" });
};

module.exports = {
  signup,
  login,
  logout,
};
