//Importing the express
const express = require("express");
const router = express.Router();

// Profile Router which would handle get request to fetch the profile
router.get("/profile", (req, res) => {
  res.send("request to fetch the profile");
});

//exporting the module
module.exports = router;
