const accountId = 13545353;
let accountEmail ="deekshajaingmail.com";  // 'let' have block scope
var accountPass ="12345"; //'var' have global scope and prefer not to use 'var' (coz of functional and block scope problem)

accountCity = "jaipur";
let accountstate;  // o/p: undefined   ->in js not null or garbage value

//accountId =2 // not allowed as it is const variable
accountPass="56789";
accountEmail ="jhdjsg.com";
accountCity ="udaipur";

console.table([accountId,accountEmail,accountPass,accountCity,accountstate]);