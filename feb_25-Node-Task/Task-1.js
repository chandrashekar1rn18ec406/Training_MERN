const http = require("http");
const path = require("path");

const fs = require("fs").promises;

const host = "localhost";

//Declear port number
const port = 8006;
const porttext = 8008;
const portHtml = 8009;

//Declear a data
const employee = [
  {
    id: 1,
    first_name: "Ramesh",
    last_name: "M",
    age: 32,
    post: "Developer",
  },
  {
    id: 2,
    first_name: "Suresh",
    last_name: "J",
    age: 32,
    post: "Accounts",
  },
];

//using Json module
const dataOfEmployee = function (req, res) {
  res.setHeader("Content-type", "application/json");
  res.writeHead(200);
  res.end(JSON.stringify(employee));
};

//Using text module
const textHttpListener = function (req, response) {
  response.writeHead(200);
  response.end("Hi this is text HTTP module");
};

//using HTML http module
const htmlHttpListener = function (request, response) {
  response.writeHead(200);
  response.end(
    "<html><title> Html http</title><style>body{background:#332787} h1{color:white;text-align:center } h2{color:white; text-align:center}</style><head><body><h1>Node Js</h1><h2>This is HTML http Module</h2></body></head></html>"
  );
};

//Declear  json server
const serverJson = http.createServer(dataOfEmployee);

serverJson.listen(port, host, () => {
  console.log(`server is started and on running on http://${host}:${port}`);
});

// text server
const serverText = http.createServer(textHttpListener);

serverText.listen(porttext, host, () => {
  console.log(`server is stared and on running on http://${host}:${porttext}`);
});

//html server
const serverHTML = http.createServer(htmlHttpListener);

serverHTML.listen(portHtml, host, () => {
  console.log(`server is stared and on running on http://${host}:${portHtml}`);
});
