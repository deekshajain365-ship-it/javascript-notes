// IF 
// < , > , <= , >= , == , != , === , !==
//if (condition) { body}

//const userloggedin = true 
// if (userloggedin == true){
//     console.log('welcome');
    
// }

if (2 == '2'){
    console.log('executed');
    
}

let score = 100 ;

if (score > 90){
    const power ="time-machine";
    console.log(power); 
}
else if(score>80){
 console.log('bamboo-copter');
}
else{
    console.log('release oxygen');   
}

// console.log(power);  // out of scope - if it was declared with var then only u can access , but using var is not recommended

//short hand notation--------------
let temperature = 35
//if(temperature > 28 ) console.log('summer');

// for writing multiple lines use ',' , but such manner is not recommended

if(temperature > 28 ) console.log('summer'),console.log('holiday') ; // semicolon is imp here


// use && (and)  , || (or) for cheking multiple conditions

const userloggedin = true 
debitcard = true 
const loginwithgoogle = false
const loginwithemail = true

if(userloggedin && debitcard){
    console.log('allow to buy course'); 
}

if(loginwithemail || loginwithgoogle){
    console.log('user logged in '); 
}




