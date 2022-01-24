function atLeasteven(arr, callback){
    console.log( (arr.filter % 2 ==0 ? true : false ));
}
 function atLeastodd(callback){
     console.log( (arr.filter % 2 !=0 ? true : false));
 }

let arr =[1,2,3,4,5,6,7,8];
atLeastodd(atLeasteven);
atLeasteven(atLeastodd);
