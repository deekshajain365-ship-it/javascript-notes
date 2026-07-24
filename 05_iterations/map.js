// map 

const mynums = [1,2,3,4,5,6,7,8,9,10]

const newnums = mynums.map((num)=> num+10)
console.log(newnums); // [  11, 12, 13, 14, 15, 16, 17, 18, 19, 2 ]

// --------------chaining-------------------
const newnums1 = mynums.map((num)=> num*10)
                       .map((num)=> num+(num/10)) 
                       .filter((num)=> num>50)

console.log(newnums1);
