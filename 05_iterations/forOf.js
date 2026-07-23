// for of loop

// for (const element of object) {      // here 'object' refers to anything iterable   
// }

const arr = [1,2,3,4,5]
for (const element of arr) {
    //console.log(element);
}

const greeting = "hello world"
for (const greet of greeting) {
    if (greet == ' '){   // if u don't want space 
        continue;
    }
  //  console.log(`char : ${greet}`);
    
}

//  MAPS(collection of key value pair , in insertion order) : store unique values

const map = new Map()  // type of map -> object 
map.set("IN" ,"INDIA")
map.set("BH","BHARAT")
map.set("HI","HINDUSTAN")

// for (const val of map) {
//     console.log(val);
// }

// returning array of each key value pair 
// [ 'IN', 'INDIA' ]
// [ 'BH', 'BHARAT' ]
// [ 'HI', 'HINDUSTAN' ]

//-----other way 

for (const [key,val] of map) {
    //console.log(key , '->' , val );   
}
// IN -> INDIA
// BH -> BHARAT
// HI -> HINDUSTAN

//---------- forof do not work on object

const myobj = {
    "game1" :"freefire",
    "game2 ": "PUBG",
   " game3 ": "mini militia",
   ' game4' : "red ball"
}

for (const key of myobj) {
    console.log(key);
}


