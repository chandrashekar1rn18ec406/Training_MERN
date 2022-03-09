const e = require("express");
const express = require("express");
const app = express();
const { user } = require("./data");

app.use(express.urlencoded());
app.use(express.json());
//return list of all users
app.get("/user", (req, res) => {
  res.json(user);
  res.send(user);
});

// return user details by id
app.get("/getuser/:id", (req, res) => {
  const singleUser = user.find((user) => user.Id == req.params.id);
  res.json(singleUser);
  res.send(singleUser);
});

//delete user by id
app.delete("/deleteuser/:id", (req, res) => {
  const deleteById = user.filter((user) => user.Id != req.params.id);
  res.json(deleteById);
  res.send(deleteById);
});

// update user by id
app.put("/updateuser/:id", (req, res) => {
  const updateUser = req.body;
  const userId = req.params.id - 1;
  console.log(updateUser);
  user.splice(userId, 1, updateUser);
  //   res.json(user);
  res.send(user);
});

//listen the server
app.listen(8080, () => {
  console.log(`server is runnning port ${8080}`);
});
