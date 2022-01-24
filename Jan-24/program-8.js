
function addDuplicates(str) {
    let s = "";

    for (let i = 0; i < str.length; i++) {
        s += str[i] + str[i];
       
    }

    return s;
}

function exclaim(str) {
    return str += "!";
}

const repeat = (input, num, callback) => {
    let result = input;
    for (i = 0; i < num; i++) {
        result = callback(result);
    }
    return result;
}

console.log(repeat('infinite power', 3, exclaim));
console.log(repeat('triple', 2, addDuplicates));
console.log(repeat('trogdor', 3, t => `°${t}°`));