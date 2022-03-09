//Import express
const express = require("express");
const app = express();

//declear port no
const port = 8000;

//Import the data from voter.js
const voterData = require("./voter");

//
const getAge = (id) => {
  const voter = voterData.find((eachvoter) => {
    return eachvoter.id === parseInt(id);
  });
  console.log(voter);
  if (!voter) {
    return 404;
  } else {
    return voter.age;
  }
};

//get the all data
app.get("/", (req, res) => {
  res.json(voterData);
  console.log(" ALL Voter DATA", voterData);
});

//get the data particulat data
app.get("/voter/:id", (req, res) => {
  const { id } = req.params;
  let age = getAge(id);
  console.log(age);
  if (age >= 18 && age < 200) {
    res.status(200).json("Eligible to vote");
  } else if (age < 18 && age > 0) {
    res.status(400).json("Not eligible to vote");
  } else {
    console.log(age);
    res.status(402).json("Invalid age");
  }
});

//start server and console the port no
app.listen(port, () => {
  console.log("App running in Port", port);
});
