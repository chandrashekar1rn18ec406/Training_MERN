//Importing the express
const express = require("express");
const router = express.Router();

// Signup Router which would handle post request of login email & password
router.post("/signup", (req, res) => {
  res.send("sign up Email and Password");
});

//exporting the module
module.exports = router;
