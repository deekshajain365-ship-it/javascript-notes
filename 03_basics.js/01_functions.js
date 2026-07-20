function sayMyName(){
    console.log("Deeksha")
}

sayMyName // reference 
sayMyName() ; //execution 

// function addTwoNumber(number1 , number2){
//     console.log(number1 + number2 );
// } 

function addTwoNumber(number1 , number2){ // these are parameters , we set while defining the function
          
    // let result = number1+ number2 ;
    // return result ;

    return number1 + number2 ;
    // console.log("hello"); // return ke baad kuch print nahi hota
}
const result = addTwoNumber(3,5) ;  // the values we have passed to the function while callin it are arguments
console.log(result);


function login(username ){

    // u can use (username = " sam") , this is called default value 
    // here condition of undefined will never occur 
    // if a person enter the value then it will overwrite the default value 

    // if (username === undefined ){
    //     console.log("please , enter username ");
    //     return
    // }
  // equivalent to this following functn

     if (!username){  // empty string and undefined are false values
        console.log("please , enter username ");
        return
    }
    return `${username} , just logged in `;
}
console.log(login("deeksha")); //deeksha , just logged in
console.log(login()); // undefined ,just logged in , if if-statement was not written



// rest operator --------(have diiferent place of use than spread operator , notation is same) :

/*
function calculateCartPrice (...num1) {
    return num1 ;
}
console.log(calculateCartPrice(200, 345,7000)); // [ 200, 345, 7000 ]
*/

function calculateCartPrice (val1,val2,...num1) {
    return num1 ;
}// val1 = 200 and val2 = 345
console.log(calculateCartPrice(200, 345,7000 , 908 )); // [  7000, 908 ]

const user = {
    username : "harry potter ",
    price : 934 
}
function handleObject (anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price} `);    
}

//handleObject(user);
handleObject({
     username : "harry potter ",
    price : 934 
})

const myarray =[1,3,32,4,65]
function returnsecondval( getarray){
    return getarray[1] ;
}
//console.log(returnsecondval(myarray));

console.log(returnsecondval([23,5,65,323,56]));



