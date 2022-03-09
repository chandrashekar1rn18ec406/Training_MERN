const express = require("express");

const app = express();

app.get("/home/:name", (req, res) => {
  // send the response to server its shows the data in web
  res.send("This is Home Page");

  //Query of the url it show the after ?
  console.log("Query URL", req.query);

  //console the params passing with url
  console.log("params", req.params.name);

  //see original URl passing in router
  console.log("full URL", req.originalUrl);
});

app.listen(9090);
