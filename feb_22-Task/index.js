// print dir name
console.log("dir name  is =", __dirname);

//
var path = require("path");
var filename = path.basename("document/d/users/index.js");
console.log(filename);

path1 = path.basename("/home/user/bash/index.txt");
console.log(path1);

// Using the extension parameter
path2 = path.basename("/home/user/bash/index.txt", ".txt");
console.log(path2);

//Using path.parse() print the dirname of document/d/users/index.js

path1 = path.parse("document/d/users/index.js");
console.log(path1);
