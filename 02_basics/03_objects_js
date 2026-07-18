
// singleton
Object.create

// object literals 

const mysym = Symbol("plant")
const myobj = {
    name : "deeksha", // BTS, all keys are stored as strings
    "location" : "planet earth",
    [mysym] : 'key1', // symbol as a key  , imp => interviews
                        // if un don't use brackets it will behave as string only
    age  : 18 ,
    email : "deeksha@gmail.com",
    isloggedin : false,
    lastlogindays : ["monday","friday"]

}

console.log(myobj.location);
console.log(myobj["age"]);  // other to access key value pair 
console.log(myobj[mysym]); // only option to acess symbol

myobj.email = "deeksha@chatgpt.com"
//Object.freeze(myobj);  // object can't be change now 
//myobj.email = "deeksha@microsoft.com" // will not throw any error, just the execution will not take place 

console.log(myobj);/* o/p :{
  name: 'deeksha',
  location: 'planet earth',
  age: 18,
  email: 'deeksha@chatgpt.com',
  isloggedin: false,
  lastlogindays: [ 'monday', 'friday' ],
  Symbol(plant): 'key1'
} */

myobj.greeting1 = function(){
    console.log('hello , JS USER');

}
myobj.greeting2= function(){
    console.log(`hello ,${this.name}`);

}
console.log(myobj.greeting); // [Function (anonymous)]
console.log(myobj.greeting1()); // hello , JS USER undefined 
console.log(myobj.greeting2()); // hello ,deeksha undefined


