const express = require("express");
const app = express();
const { studentList } = require("./StudentData");
// const router = express.Router();

app.use(express.urlencoded());
app.use(express.json());
// app.use(router);

app.route("/student").get((req, res) => {
  res.send(studentList);
  console.log("Hello World");
});

app
  .route("/student/:id")
  .put((req, res) => {
    // res.send("PUT method invokes");
    const updateUser = req.body;
    const userId = req.params.id - 1;
    console.log(updateUser);
    studentList.splice(userId, 1, updateUser);
    res.send(studentList);
  })
  .delete((req, res) => {
    // res.send("delete method invoked");
    const deleteById = studentList.filter(
      (studentList) => studentList.id != req.params.id
    );
    // res.json(deleteById);
    res.send(deleteById);
  });

//start the server here
app.listen(8080, () => {
  console.log("Hello server is running in port no 8080");
});
