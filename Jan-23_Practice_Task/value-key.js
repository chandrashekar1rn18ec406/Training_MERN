// Write a JavaScript ES6 function to get a copy of the object where the keys have become the values and the values the keys.

function getKeyByValue(object, value) {
    return Object.keys(object).find(key => 
            object[key] === value);
}

var exampleObject = {
    name : 'chandrashekar',
    email : 'chandrashekar853@gmail.com',
    mobile : 9535262717
};

ans = getKeyByValue(exampleObject, 9535262717);
console.log(ans);