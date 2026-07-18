// Array 

// SHALLOW COPY : points to same reference point 
// DEEP COPY : 

let myarr = [22,34,"string",true,42]  // mix datatypes rae allowed 
console.log(myarr[4]);

let arr2 = new Array(2,32,5,78,4)

// METHODS 

myarr.push(90);
console.log(myarr);

console.log(myarr.length);
myarr.pop() ;
console.log(myarr);

myarr.unshift(8) ; // place the digit at first position
console.log(myarr);

myarr.shift() ;// remove the first element 
console.log(myarr);

console.log(myarr.includes(34)); // true
console.log(myarr.indexOf(17));  //-1 , as it does not exist in array
console.log(myarr.indexOf(34)); // 1 

const newarr = myarr.join() // change the datatype of array to string 

console.log(myarr);
console.log(newarr);

//SLICE AND SPLICE ------------------

console.log("myarr before ", myarr); // [ 22, 34, 'string', true, 42 ]

const myn1 = myarr.slice(1,3) // [1,3) , ending index is not included
 console.log(myn1);           // [ 34, 'string' ]
console.log("after slice myarr ",myarr);  //[ 22, 34, 'string', true, 42 ]

const myn2 = myarr.splice(2,4) //  [2,4] , ending index is included
console.log(myn2);                  //  ['string', true, 42 ]
console.log("after splice myarr ",myarr); //  [ 22, 34 ]

// in splice last index is included ,also it manipulate the og array



