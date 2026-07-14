/*JavaScript is a dynamically typed language. 
This means that variable types are determined at runtime, 
and you do not need to explicitly declare the type of a variable before using it. 
You can assign different types of values to a variable during its lifetime. */


// primitive : call by value 

//7 types : string , number , boolean , null , undefined , symbol ,BigInt

const str ="hello"
let num =3231
let isloggedIn = false 

let temp = null // empty does not mean zero 

let score ;//undefined 
let score1 = undefined ;

const id = Symbol("121");
const id2 = Symbol("121");

console.log( id === id2); //false 

const bigNum = 2334546665322267n





// Reference (non primitive)
// array , objects , functions 

const heros = ["shaktimaan","mighty raju","krrish"];

const myObj = {
    name : "gogo",
    age : 65
}

const myfunc = function(){
    console.log("Helloooo world!!");
    
}

console.log(typeof id );  //symbol
console.log(typeof  score); //undefined 
console.log(typeof myObj); //object
console.log(typeof myfunc); //function object
console.log(typeof heros );  //object
console.log(typeof bigNum);  //bigint

/*Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object

 */