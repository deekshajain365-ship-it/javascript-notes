let mydate = new Date() ;  
console.log(typeof mydate); //object

/*
console.log(mydate.toDateString()); //  Fri Jul 17 2026
console.log(mydate.toISOString());  //  2026-07-17T11:16:33.587Z
console.log(mydate.toJSON());        //  2026-07-17T11:16:33.587Z
console.log(mydate.toLocaleDateString()); //  7/17/2026
console.log(mydate.toLocaleString());  // 7/17/2026, 4:54:24 PM
console.log(mydate.toString());//Fri Jul 17 2026 16:46:33 GMT+0530 (India Standard Time)
*/

// let mycreatedate = new Date(2026 , 0 , 21) // 0 => jan ,indexing starts from 0
//let mycreatedate = new Date(2026 , 0 , 21 , 5, 3 , 6 )  // 1/21/2026, 5:03:06 AM
// let mycreatedate = new Date('2023-01-21') // 1/21/2026, 5:30:00 AM  , using yyyy-mm-dd format , here u have start from 1
let mycreatedate = new Date("01-02-2014") ; // mm-dd-yyyy ,mostly used in bharat
//console.log(mycreatedate.toLocaleString());


// to find first-come

let timestamp = Date.now();
console.log(timestamp); // 1784291576498  -> in miliseconds 
console.log(mycreatedate.getTime()); // 1388601000000
console.log(Date.now());  // 1784297267561

// conversion in seconds 
console.log(Math.floor(Date.now()/1000));  // 1784297500



let newdate = new Date() ;
console.log(newdate);
console.log(newdate.getMonth()+1);
console.log(newdate.getHours());

`month is ${newdate.getMonth()+1}`

newdate.toLocaleString('default' ,{
  weekday : 'long',
  month  : 'short',
  day : 'numeric' ,
})




