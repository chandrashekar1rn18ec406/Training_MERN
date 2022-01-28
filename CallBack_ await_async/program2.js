
const getNumber = (number) => {
    for(let i = 1 ; i <= number ; i++){
    setTimeout(() => {
        console.log(i * 2);
    }, 1000);
}
}
getNumber(10);