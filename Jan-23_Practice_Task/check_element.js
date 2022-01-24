// Write a ES6 function that checks whether an element occurs in a list.
//  using includes opertor
const array = [1, 3, 4, 9, 5, 7, 8, 9, 79];
const value = 9;
const inArray = array.includes(value);
console.log(inArray);


//using Set and has operotor
const mySet =new Set(array);
const has1 =mySet.has(10);
console.log(has1);