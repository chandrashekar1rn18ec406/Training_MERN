// Using a spread operator write a program to add 2 arrays: A = [2,5,7,9] and B = [20, 50, 70, 90]

const A = [2, 5, 7, 9];
const B = [20, 50, 70, 90];
const C = [...A,  ...B];
console.log(C);



//Add two array using spread and push operator

const array1 = [2, 5, 7, 9];
const array2 = [20, 50, 70, 90];
array1.push(...array2);
console.log(array1);