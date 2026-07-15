let name = "Deeksha"
 let num = 19

 console.log(name + num + " gwalior"); // concatination --> not recommended 
   
 //use backticks `` instead  and ${] : placeholder}
 console.log(`Hello , my name is ${name} and my age is ${num}`);

 const str1 = new String('Hello-world')  // string is now a object, also every character is stored as a key value pair like this => 0 : "H"
// console.log(str1.__proto__.toUpperCase());
 console.log(str1[0]); // H

 console.log(str1.toUpperCase()); // original value of str1 will remain same 

console.log(str1.italics());
console.log(str1.charAt(8));  //r : do not count space
console.log(str1.indexOf('l')); // l : is on multiple indexes but it will give u the first one only

const str2 = str1.substring(0,5) ; //  [ start , end ) , -ve values are not allowed 
console.log(str2);

const str3 = str1.slice(-8,5); // equivalent to (length-8 ,5)
 console.log(str3);

 const str = "JavaScript";

// 1. One argument: starts at index and goes to the end
console.log(str.slice(4)); // "Script"

// 2. Two arguments: extracts from start up to (but not including) end
console.log(str.slice(0, 4)); // "Java"

// 3. Negative values: count backwards from the end of the string
console.log(str.slice(-6)); // "Script"


const str4 = "   Deeksha-jain-december    ";
console.log(str4);
console.log(str4.trim());  // remove the unwanted spaces , generally added by users filling forms 


const url = "https://todolist%20netlify.app";

console.log(url.replace('%20' ,'-')); //  https://todolist-netlify.app

console.log(url.includes('list'));  // true 

console.log(str4.split('-')); // "-" : this is called seperator  //o/p :[ '   Deeksha', 'jain', 'december    ' ]








 

 