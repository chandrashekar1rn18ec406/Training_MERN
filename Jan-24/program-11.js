const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
    resolve("10"); }, 3000);
});

promise.then((value)=> console.log(value));