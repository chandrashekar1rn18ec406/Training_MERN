var student = {
    name : "Jocob",
    sclass : "VI",
    rollno: 12
};

// 1. Write a JavaScript program to list the propertites of a JavaScript objects. Samples output name,sclass, rollno

var keys = Object.keys(student);
console.log(keys);




// 2. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.


// Before Deleting rollno
console.log();
console.log(student);


// After Deleteing rollno
console.log();
delete student.rollno;
console.log(student);

// 3.Write a JavaScript program to get the length of a JavaScript object
console.log();
var objsize = Object.keys(student).length;
console.log("Length of Object :" + objsize);





// Write a JavaScript program to display the reading status of the author: Bill Gates
console.log();
var library = [{
    author: 'Bill Gates',
    title: 'The Road Ahead',
    readingStatus: true
}]

function displayBooks(arr){
    for( let i=0; i <arr.length; i++){
        console.log(`Book title is ${arr[i].title}, the author is ${arr[i].author}, and the status is ${arr[i].readingStatus}`);
    }
}
displayBooks(library);