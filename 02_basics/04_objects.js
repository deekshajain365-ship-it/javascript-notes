//const tinderuser = new Object() // {}

const tinderuser2 = {}
tinderuser2.id = "user7687abc"
tinderuser2.name = "karen"
tinderuser2.isloggedin = false

const tinderuser3 ={
    email : "user@tinder.com",
    fullname  :{
     username : {
         firstname : "deeksha",
         lastname : "jain"
        }
    }
}
console.log(tinderuser3.fullname.username.firstname); //deeksha

//optional chaining => safer
// what if fullname does not exist
console.log(tinderuser3.fullname?.username.firstname);


const obj1 ={ 1: "a" , 2 : "b"}
const obj2 ={ 3: "a" , 4 : "b"}

const obj3 = {obj1 , obj2 }
console.log(obj3); //  { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

const obj4 = Object.assign(obj2,obj1)
console.log(obj4);      // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const obj5= Object.assign({} ,obj2,obj1)  // target : empty object
console.log(obj5);     // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' } 

// spread operator 
const obj6 = {...obj1 ,...obj2}
console.log(obj6);     // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const users =[
    {
        id : 1,
        email : 'demo1@gmail.com'
    },
      {
        id :2 ,
        email : 'demo2@gmail.com'
    },
      {
        id :3 ,
        email : 'demo3@gmail.com'
    }
]

users[1].email 

console.log(Object.keys(tinderuser2)); // [ 'id', 'name', 'isloggedin' ]
console.log(Object.values(tinderuser2)); // [ 'user7687abc', 'karen', false ]
console.log(Object.entries(tinderuser2)); // [[ 'id', 'user7687abc' ],[ 'name', 'karen' ],[ 'isloggedin', false ]]

console.log(tinderuser2.hasOwnProperty('isloggedin')); // true 



