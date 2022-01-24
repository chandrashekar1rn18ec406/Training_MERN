
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