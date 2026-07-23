// for in loop

const myobj = {
    js : "javascript",
    cpp : "C plus plus",
    py : "python",
    rb : "ruby",
    swift : "swift by apple"
}
for (const key in myobj) {
  console.log(`${key} : is the shortcut for ${myobj[key]}`);   
}
// js : is the shortcut for javascript
// cpp : is the shortcut for C plus plus
// py : is the shortcut for python
// rb : is the shortcut for ruby
// swift : is the shortcut for swift by apple  



const programming = ['cpp', 'c', 'java','ruby' , 'rust','dart']
for (const key in programming) {
    console.log(`${key} : ${programming[key]}`);
    
}
//  0 : cpp
// 1 : c
// 2 : java
// 3 : ruby
// 4 : rust
// 5 : dart   

// ------------map is not iterable ----------
// const map = new Map()   
// map.set("IN" ,"INDIA")
// map.set("BH","BHARAT")
// map.set("HI","HINDUSTAN")

// for (const key in map) {
//     console.log(key);
// }