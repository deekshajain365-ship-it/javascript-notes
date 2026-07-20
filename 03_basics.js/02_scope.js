var c = 300;

// what ever declared globally is available in every scope but not vice versa

if (true){
let a = 10 ;
const b = 20 ;
var c = 30 ; //  have global scope ,  has global scope, but only when it is declared outside of any function.
            // var is only function scoped not block scped that,s why it ignores 'if'
            // and returned value 30 , even if u declared twice the value got just updated 
}

// console.log(a);
// console.log(b);
console.log(c); // 30 

//-----------------------lecture 22------------------

// nesting of function 
// parent function cannot access the varibles declared inside child function
// but child can access those in parent function 
// example : u can't take icecream of a small child but he/she can  

function one(){
    const username = " deeksha" ;
     function two(){
        const website = " youtube"
        console.log(username + website);
     }
     // console.log(website) // error
     two() 
}
one(); 

if (true){
    const name = "deeksha"
    if ( name == "deeksha"){
        const website = "whatsapp"
        console.log(username + website);
        
    }
    // console.log(website); // error   
}
// console.log(username); // error

// different declaration 


//++++++++++++++++++++++++++++++ interesting ++++++++++++++++++++++++++++++++++++
// js variables are so powerfull they can hold a function, json value 

addone(4) // no error , because we just declared the function
function addone (num) {
    console.log(num+1);
   return num+1 ;
}
addone (4);

// addtwo(9);  // will give an error , as we are holding the value 
                // so cannot access add two before initialization

const addtwo = function (num){
    console.log(num+2)
    return num+2;
}
addtwo(6); 