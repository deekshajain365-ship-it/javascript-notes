
// comparison of same datatype (safe and simple)

// console.log(2>3);
// console.log(4==3);
// console.log(2>=4);
// console.log(2!=2);
// console.log(2<3);

//comparison of different datatype (hard to predict)

// avoid such conversion and prefer clean code 

console.log("2">1);//true
console.log("03">1);//true

console.log(null > 0); //false
console.log(null >= 0);  // true , here numeric conversion happend 
console.log(null == 0); //false  , but not here 


console.log(undefined == 0);//false
console.log(undefined > 0); //false
console.log(undefined < 0); //false

// ===  : strict compare , compare datatype along with value 

console.log("2"===2); // false, numeric conversion will not take place here 
