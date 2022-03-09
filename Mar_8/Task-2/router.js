const express = require("express");
const login = require("./router/login");
const signup = require("./router/sign");
const profile = require("./router/profile");
const dashBoard = require("./router/dashBoard");
const app = express();

app.use("/", login);
app.use("/", signup);
app.use("/", profile);
app.use("/", dashBoard);
app.listen(9090, () => {
  console.log(`server running port ${9090}`);
});
