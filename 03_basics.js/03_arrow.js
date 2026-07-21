
const user = {
    username : "Deeksha",
    price : 990 ,

    welcomemssg : function (){
        console.log(` ${this.username} , welcome to  website`); // using this for current value/context
        console.log(this);  // will print whole object with current values 
        
    }
}
user.welcomemssg()
user.username = "sam"
user.welcomemssg() // we have used this that is why value got updated 

console.log(this); // {} , when u are in node environment then this will be refering to an empty object 
               // when are in browser , it will show a window object(global onject in browser)




 function chai () {
    let username = "draco" 

    console.log(`${username} , hello `) // draco hello
   console.log(this.username ) // undefined 
   //  console.log(this.username ) // print draco if let keyword was not used, w/o 'let' variables got global scope 
   // console.log(this);  // ref object global
}
chai();

const chai2 = function(){
    let username = "draco" 
     console.log(this.username ) // undefined , as here the method of declaration does not matter
         console.log(this);  // <ref *1> Object [global]
}
chai2();
// arrow function

// explicit declaration

const chai3 = () => {    // remove function keyword and add arrow after parenthesis
    let username = "draco" 
     console.log(this.username )  //undefined
     console.log(this) // {}
}
chai3();



// implicit  declaration

// const addtwo = (num1 ,num2 ) => {      // if u r using braces then u have to use return 
//     return( num1 + num2 )
// }

//const addtwo = (num1 ,num2 ) => ( num1 + num2 )
 //const res = addtwo(3,4)

//----------------------------------------- returning object
const addtwo = (num1 ,num2 ) => ({ name : "marky"})

const res = addtwo()
console.log(res)//{ name: 'marky' }