var student = {
    name : "Jocob",
    sclass : "VI",
    rollno: 12
};

// 1. Write a JavaScript program to list the propertites of a JavaScript objects. Samples output name,sclass, rollno

console.log(student);


// 2. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.


// Before Deleting rollno
console.log(student);


// After Deleteing rollno
delete student.rollno;
console.log(student);

// 3.Write a JavaScript program to get the length of a JavaScript object
var objsize = Object.keys(student).length;
console.log("Length of Object :" + objsize);


// Write a JavaScript program to display the reading status of the author: Bill Gates
var library = [{
    author: 'Bill Gates',
    title: 'The Road Ahead',
    readingStatus: true
}]


function getReadingStatus(obj) {
    var getAuthor = obj[0].author;
  
    if (getAuthor === "Bill Gates") {
      var readingStatus = obj[0].readingStatus;
      console.log(readingStatus);
    } else {
      console.log("author not found");
    }
  }
  getReadingStatus(library);