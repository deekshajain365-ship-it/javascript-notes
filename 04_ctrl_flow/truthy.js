const username = [] //"ha@land.ai"

if(username){
    console.log('got username');  
}
else{
    console.log("don't have username ");
}


//falsy values : 
// ""(emptystring), null , undefined , bigint -> 0n , 0 , false , -0 , Nan(not a number)

// truthy values : 
// "0", 'false' , " " , {}(empty object ) ,[] (empty array), 
// function(){} (empty-function) , true , 1 , 


//checking array and object
if(username.length === 0 ){
    console.log("array is empty");
}

const emptyObj = {}

if(Object.keys(emptyObj).length === 0 ){
    console.log("object is empty");
}


// Nullish coalescing Operator (??) : null , undefined 

let val1 ;
val1 = 5 ?? 10 ;  // 5
val1 = null ?? 10 ; // 10
val1 = undefined ??  15 // 15
val1 = null ?? 10 ?? 15 // 10

console.log(val1);

// ternary operator 
// condition  ? true : false ; 

const iceTeaPrice = 100 ;

iceTeaPrice <= 80 ? console.log("lass then 80") : console.log("more than 80");





