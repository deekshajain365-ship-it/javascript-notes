// for 

for (let i = 0; i < 10; i++) {
    const element = i;
    if(element == 5 ){
        console.log('5 is best number');
    }
    console.log(element);   
}


for (let i = 1; i < 5; i++) {

    for (let j = 1; j <=10; j++) {
       // console.log( i + " * " + j + " = " + i*j );  
    }
   // console.log("--------------")
}


let myarray = [ "pikachu" , "bulbasaur" , "jiggly puff"]
for (let i = 0; i < myarray.length; i++) {
    const element = myarray[i];
    console.log(element);
}

// break(khel khatam) and continue(ek baar maaf kardo)

for (let i = 1; i <= 20; i++) {
    if(i==5){
        console.log("5 detected");
        continue;
    }

    if(i==10){
        console.log("10 detected");
        break ;
    }
    const element = i ;
     console.log(`value if i = ${element}`);
}