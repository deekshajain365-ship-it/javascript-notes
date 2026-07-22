// while loop 
let i =0 ;
while (i<=10) {
    console.log(i)
    i = i+2
}

let myarr = ["rancho" ,"farhan", "raju"]
let j =0 
while (j<myarr.length) {
    console.log(myarr[j]);
    j++ ;
}

// do-while loop : do before condition check
// executed once even after  condition is not true 

let score =11;

do {
    console.log(`score is : ${score}`);
    score +=2
    
} while (score<=10);