// Create a function getNumber() to get multiple of 2 printed after every 1 second using promises then().


const getNumber = new Promise((resolve,reject) => {
    for( let i = 1 ; i<=10 ; i++){
        setTimeout(() => {
            console.log(i * 2)
        }, 1000);
    }
    resolve();
});

getNumber.then((number) =>{
    
});
