let score = "33abc"

console.log(typeof score)

let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)//NaN => Not a Number


 let isLoggedIn = null
console.log(typeof isLoggedIn)
let loggedIn = Number(isLoggedIn)
console.log(loggedIn)//0

let isLoggedIn1 = true
console.log(typeof isLoggedIn1)
let loggedIn1 = Number(isLoggedIn1)
console.log(typeof loggedIn1)
console.log(loggedIn1)
//"33" => 33
//"33abc" => NaN
//true => 1
//false => 0
//null => 0
let is2LoggedIn2 = "bharat"
let booleanIs2LoggedIn2 = Boolean(is2LoggedIn2)
console.log(booleanIs2LoggedIn2)//true
//"" => false
//"bharat " => true
//1 => true
let somenumber = 33
let stringNumber = String(somenumber)
console.log( stringNumber)
console.log(typeof stringNumber)//"33" => "33"