// reduce : very helpful for e-commerce website

mynums = [1,2,3,4]
//  array.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue to accumulator,
// );

const mytotal = mynums.reduce(function (acc , currval) {
    console.log(`acc : ${acc} , current value : ${currval}`);
    return acc+currval ;
}, 0 )
// acc : 0 , current value : 1
// acc : 1 , current value : 2
// acc : 3 , current value : 3
// acc : 6 , current value : 4
console.log(mytotal); //10

const total = mynums.reduce((acc, val )=> (acc+val), 0)
console.log(total);  // 10

const shopingCart = [
    { 
        itemName : "js course",
        price : 999
    },
      { 
        itemName : "python course",
        price : 1999
    },  { 
        itemName : "cpp course",
        price : 2999
    },  { 
        itemName : "assembly course",
        price : 3999
    }
]
const priceToPay = shopingCart.reduce((acc,item)=> acc+item.price , 0) 
console.log(priceToPay);
