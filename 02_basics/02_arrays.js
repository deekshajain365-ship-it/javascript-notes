const marvel_heros = ["ironman","wanda","black widow"]
const dc_heroes = ["flash","batman","catwoman"]

// push , make changes in original array 
// in JS array can have elemenst od different datatypes 
// that's why it took array as the element 

//marvel_heros.push(dc_heroes);

console.log(marvel_heros); // ['ironman', 'wanda','black widow', [ 'flash', 'batman', 'catwoman' ]]


// concat => returns a new array and does make changes in og array
const all_heroes = marvel_heros.concat(dc_heroes);
console.log(all_heroes);   //[ 'ironman', 'wanda', 'black widow', 'flash', 'batman', 'catwoman' ]

//spread operator
const allHeroes = [...marvel_heros,...dc_heroes]
console.log(allHeroes); // preferred over concat as u can add multiple arrays 


const arr2 = [ 1, 23 , [2,4,5] , [7,5,[9,6]]]
const arr3 = arr2.flat(Infinity); // u have to enter depth here 

console.log(arr3);

console.log(Array.isArray('deeksha')); // false

console.log(Array.from('deeksha'));//[ 'd', 'e', 'e', 'k', 's', 'h', 'a']

console.log(Array.from({name : "deeksha", age :19})); // []
// return empty array coz u have to enter wheather to make array using keys or values 

const obj1 = {name : "deeksha", age :19}
const arr5 = Object.keys(obj1);
console.log(arr5);  //[ 'name', 'age' ]


let score1=1000
let score2=2000
let score3=3000

console.log(Array.of(score1,score2,score3));//[ 1000, 2000, 3000 ]


