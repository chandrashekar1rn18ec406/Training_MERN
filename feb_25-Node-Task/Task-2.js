// import http
const http = require("http");

const fs = require("fs").promises;
const path = require("path");

const host = "localhost";
const port = 8002;

const requestData = function (req, res) {
  fs.readFile(path.resolve() + "/book.json").then((contents) => {
    res.setHeader("Content-type", "application/json");
    res.writeHead(200);
    res.end(contents);
  });
};

const server = http.createServer(requestData);

server.listen(port, host, () => {
  console.log(`Server is started and running on http:// ${host}: ${port}`);
});
