const express = require("express");
const app = express();
require("dotenv").config(); // Make sure to load environment variables from .env
let dbConnect = require("./lib/dbConnect");
const cors = require("cors"); // Corrected the typo here

app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "Welcome to my MySQL application." });
});

app.post("/signup", (req, res) => {
  const sql = "INSERT INTO login (name, email, password) VALUES (?)"; // Corrected column name 'passwoord' to 'password'
  const values = [
    req.body.name,
    req.body.email,
    req.body.password, // Ensure this is hashed before storing in production
  ];

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
});

// login

// app.post("/login", (req, res) => {

//   const { email, password } = req.body;

//   const sql = "SELECT * FROM login WHERE `email` = ?";

//   dbConnect.query(sql, [email], async (err, data) => {
//     if (err) {
//       console.error(err); // Log the error for debugging
//       return res.status(500).json({ message: "Error fetching user." });
//     }

//     if (data.length > 0) {
//       // Compare the provided password with the stored hashed password
//       const user = data[0];
//       const isMatch = await bcrypt.compare(password, user.password);

//       if (isMatch) {
//         return res.json({ message: "Success", user });
//       } else {
//         return res.status(400).json({ message: "Failed: Invalid password." });
//       }
//     } else {
//       return res.status(400).json({ message: "Failed: User not found." });
//     }
//   });
// });

// Set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
