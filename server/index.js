const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "signup",
});

// const express = require("express");
// const app = express();
// require("dotenv").config();
// let dbConnect = require("./lib/dbConnect");

// // parse requests of content-type - application / json;

// app.use(express.json());
// //

// app.get("/", (req, res) => {
//   res.json({ message: "Welcome to my express backend!!!" });
// });

// // set port, listen for requests
// const PORT = process.env.PORT || 8080;
// app.listen(PORT, () => {
//   console.log(`Server is running on port
// ${PORT}.`);
// });
