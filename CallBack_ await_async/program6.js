const arr =[1,3,4,5,6,8,9,2,7]

function sumArray(arr){
    var total =0;
    arr.forEach(function(element){
        total += element;
    })
    console.log(total)
}
sumArray(arr);