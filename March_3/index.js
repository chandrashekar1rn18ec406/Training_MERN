//import express
const express = require("express");

const app = express();

//Asssign port number
const port = 8000;

app.get("/", (request, response) => {
  response.send("Hello this is Express tutorials");
});

app.get("/authors", (request, response) => {
  response.sendFile("./author.txt", { root: __dirname });
});

app.get("/users", (request, response) => {
  response.sendFile("./user.txt", { root: __dirname });
});

app.listen(port, () => {
  console.log(`Server is started port ${port}`);
});
