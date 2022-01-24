// Write a simple function to find sum of all the values in this object

let objects = {
    salary_emp1 : 1000,
    salary_emp2 : 1200,
    salary_emp3 : 1100,
    salary_emp4 : 1400
};

// using for loop method-1
let sum = 0;
for (let salary of Object.values(objects)){
    sum += salary;
}
console.log(sum);


// using for loop method-2
let total = 0;
for (key in objects){
    total +=(+objects[key]);
}
console.log(total);


// using reduce operator
console.log(Object.values(objects).reduce((a, b) => a + b, 0));

