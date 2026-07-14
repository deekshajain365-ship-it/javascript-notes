let score = true 

// console.log(typeof score)
// console.log(typeof(score))

let valueInNumber = Number(score)

console.log(valueInNumber);
console.log(typeof valueInNumber) 

// "33"=>33
//'33andd" => Nan

//datatype -> typeof,value after conversion
//number -> number,value 
//string -> number,Nan (not a number) [conversion happen in js but still not a number ]
//null -> number,0
//undefined -> number,Nan
//true/false -> number ,0/1

//----------------------------------

let isloggedin = 1
let booleanLogin = Boolean(isloggedin)

console.log(booleanLogin);
console.log(typeof booleanLogin);


//1=>true
//""  => false 
// "deeksha" =>true


//----------------------------------

let num =32

let stringnum = String(num)
console.log(num);
console.log(typeof stringnum);

//-------------operations-------------

let value =32
let negvalue = -value 
//console.log(negvalue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);//exponentiation
// console.log(2/2);
// console.log(2%2);

let str1 ="hello"
let str2 =" horrid henry"
let str3 = str1 +str2 
console.log(str3);

//operate according to the first operend 
// console.log(1+"2"); //12
// console.log("1"+2)  //12
// console.log(1 + 2 + "2"); //32
// console.log("1" +3 +5);    //135

// console.log( (3+2)*5 %3) 

console.log(+true);//1
console.log(+""); //0

let num1 ,num2 ,num3
num1=num2=num3=2+2

let gamecounter=200
++ gamecounter;
console.log(gamecounter);

gamecounter++;
console.log(gamecounter);
