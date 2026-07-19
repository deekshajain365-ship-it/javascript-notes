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



