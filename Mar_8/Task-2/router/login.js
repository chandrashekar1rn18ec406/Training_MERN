//Importing the express
const express = require("express");
const router = express.Router();

// Login Router which would handle post request of log in email & password;
router.post("/login", (req, res) => {
  res.send("Login Email and password");
});

//exporting the module
module.exports = router;
