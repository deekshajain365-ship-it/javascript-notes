const num = 400 
console.log(num);

const score = new Number(190);
console.log(score);

console.log(typeof(score.toString()));

console.log(score.toString().length);

console.log(score.toFixed(3)); // decides decimals

const num2 = 123.546 ;
console.log(num2.toPrecision(4)); // 123.5 => round-off , will show the no. of digits u entered

const num3 =100000;
//digit group separators
console.log(num3.toLocaleString()); // 100,000=> by-default US 
console.log(num3.toLocaleString('en-IN')); // 1,00,000 => NOW BHARTIYA

/*Number.MAX_VALUE
1.7976931348623157e+308

Number.MAX_SAFE_INTEGER
9007199254740991*/

// +++++++++++++++++  MATHS : library +++++++++++++++++

console.log("maths ....");

console.log(Math); // Object [Math] {}
console.log(Math.PI); //3.141592653589793
console.log(Math.abs(-4)); // give absolute value 
console.log(Math.ceil(4.05)); //5 , ceil function 
console.log(Math.floor(4.9)); //4 ,floor function
console.log(Math.round(6.5));  //6 , round off

console.log(Math.min(2,3,5,4,13,131)); // similarly ,max is also there

console.log(Math.random()); // give random value between 0 to 1 , mostly decimal 

console.log(Math.floor(Math.random()*10)+ 1); // value can be zero , if don't want it add 1 

const min = 7
const max = 15
console.log(Math.floor(Math.random()*(max - min +1))+min); // if u want a particular range 


