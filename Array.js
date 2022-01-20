var array = [1,3,5,7];


//Add an element to the back of an array.
array.push(9);
console.log(array);


//Remove an element from the back of an array.
array.pop(9);
console.log(array);

// Add an element to the front of an array.

function addElement(arr) {
    arr.unshift(4);
    console.log(arr);
}

addElement(array);

// Remove an element from the front of an array.
function removeElement(arr) {
    arr.shift(4);
    console.log(arr);
}

removeElement(array);

// Concatenates all the elements in an array into a string.
function Concatenates(){
    let str = '';
    for(let i=0; i<array.length;i++){
        str += array[i].toString();
    }
    console.log(str);
}
Concatenates();

// Separates the characters of a string into an array. This one is a string method.
function toCharArray(string){
    var result = string.split(" ");
    console.log(result);
}
toCharArray("chandrashekar");