//Importing the express
const express = require("express");
const router = express.Router();

// Dashboard Router would handle GET
router.get("/getproduct", (req, res) => {
  res.send("GET requests to handle products");
});

// Dashboard Router would handle POST
router.post("/postproduct", (req, res) => {
  res.send("POST requests to handle products ");
});
// Dashboard Router  would handle PUT
router.put("/putproduct", (req, res) => {
  res.send("PUT requests to handle products ");
});
// Dashboard Router  would handle DELETE
router.delete("/deleteproduct", (req, res) => {
  res.send("DELETE requests to handle products ");
});
//exporting the module
module.exports = router;
