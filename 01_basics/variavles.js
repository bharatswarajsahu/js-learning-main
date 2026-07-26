const accountid =144553
let accountemail = "bharatswaraj@gmail.com"
var accountpassword = "1234"
accountcity = "Bangalore"
let accountstate;//

//accountid = 2 not allowed because accountid is a constant
accountemail = "hcd"
accountpassword = "12345"
accountcity = "Chennai"

console.log(accountid);
/*
prefer not to use var because it is function scoped and can be redeclared and updated.
*/
console.table([accountemail, accountpassword, accountcity,accountstate]);