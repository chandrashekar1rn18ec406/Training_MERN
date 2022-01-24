// Create a Program with a Promise. : Creating a promise: the Promise constructor


let completed = true;

let learn  = new Promise (function(resolve, rejects){
    if (completed){
        resolve('I am completed task')
    }else{
        rejects('I am  not completed task')
    }
});

learn.then((value)=>console.log(value));