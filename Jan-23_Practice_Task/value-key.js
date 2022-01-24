// var getKey = function( obj, value ) {
// 	var inverse = _.invert( obj );
// 	return _.get( inverse, value, false );
// };

// var objects ={
//     name : 'chandrashekar',
//     email : 'chandrashekar853@gmail.com',
//     mobile : 9535262717
// };


// // var key = objects.getKey(9535262717);
// // console.log(key); 

// // keyByValue(9535262717);

// console.log( 'The key for "Massachusetts" is "' + getKey( objects, 9535262717 ) + '"' );

function getKeyByValue(object, value) {
    return Object.keys(object).find(key => 
            object[key] === value);
}

var exampleObject = {
    name : 'chandrashekar',
    email : 'chandrashekar853@gmail.com',
    mobile : 9535262717
};

ans = getKeyByValue(exampleObject, 9535262717);
console.log(ans);