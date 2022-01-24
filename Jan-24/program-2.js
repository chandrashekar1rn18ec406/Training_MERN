
// function evenNumber(num){
//     console.log(num + " is even!");
// }
// function oddNumber(num){
//     console.log(num + " is odd!");   
// }
// function number(num, oddCallback, evenCallback){
//     if(num % 2 == 0){
//         evenCallback(num);
//     } else {
//         oddCallback(num);
//     }
// }
// var testNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// testNumbers.forEach(function(num){
//     number(num, oddNumber, evenNumber)
// });

function isOdd(number) {
    return number % 2 != 0;
  }
  function isEven(number) {
    return number % 2 == 0;
  }
  
  function filter(numbers, fn) {
    let results = [];
    for (const number of numbers) {
      if (fn(number)) {
        results.push(number);
      }
    }
    return results;
  }
  let numbers = [1, 2, 4, 7, 3, 5, 6];
  
  console.log(filter(numbers, isOdd));
  console.log(filter(numbers, isEven));