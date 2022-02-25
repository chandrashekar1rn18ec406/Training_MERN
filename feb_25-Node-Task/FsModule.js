const fs = require("fs");
const path = require("path");

//File System appendFile module

fs.appendFile("index.js", 'console.log("This is Node js module !")', (err) => {
  if (err) throw err;
  console.log("In appendFile is create file and also put the data");
});

//File system readFile module

fs.readFile("index.js", "utf-8", (err, data) => {
  if (err) throw err;
  console.log("This is index.js file data = ", data);
});

//File system writeFile module

fs.writeFile(
  "hello.txt",
  "Hello world this is node writeFile system",
  "utf8",
  (err, data) => {
    if (err) throw err;
    console.log("We writing a new data in file");
  }
);

//Create a New Folder using File System Module

fs.mkdir("Components", (err) => {
  if (err) throw err;
  console.log("The folder is created as per the above mention name");
});
