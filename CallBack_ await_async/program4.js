// Create a function getNumber() to get multiple of 2 printed after every 1 second using promises async await().


async function getNumber () {
 let promise = new Promise((resolve, reject) =>{
     setTimeout(() => {
         for (let i =1 ; i < 10 ; i++){
             console.log(i*2)
         }
         resolve()
     }, 1000);
});
let result = await promise;
console.log(result)
}
getNumber();