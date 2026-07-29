
// Date : Date is an object in javascript. 
// JavaScript stores dates as number of milliseconds since January 01, 1970
const myDate = new Date();
console.log(myDate) //Output : 2023-10-09T14:38:09.847Z
// We can use various methods to convert this date into more readable value.
console.log(myDate.toString()) //Output : Mon Oct 09 2023 07:39:18 GMT-0700 (Pacific Daylight Time)

console.log(myDate.toLocaleString()) // Output : 10/9/2023, 7:44:20 AM
console.log(myDate.toLocaleDateString()) //Output : 10/9/2023
console.log(myDate.toLocaleTimeString()) // Output : 7:45:31 AM

console.log(myDate.toDateString()) //Output : Mon Oct 09 2023
console.log(myDate.toTimeString()) // Output : 07:46:40 GMT-0700 (Pacific Daylight Time)

console.log(myDate.toISOString()) // Output : 2023-10-09T14:43:39.337Z
console.log(myDate.toJSON()) //Output : 2023-10-09T14:40:58.495Z


let mycreateddate = new Date(2023, 0, 9); // Month is zero-based (0-11)
console.log(mycreateddate.toDateString()) // Output : Mon Oct 09 2023 00:00:00 GMT-0700 (Pacific Daylight Time)
let mytimestamp= Date.now(); // Returns the number of milliseconds since January 1, 1970
console.log(mytimestamp) // Output : 1696868820000


console.log(mycreateddate.getTime()) // Output : 1673222400000
console.log(Math.floor(Date.now()/1000))

console.log(myDate.toLocaleString('default', {
     weekday: 'long', 
     year: 'numeric', 
     month: 'long',
     day: 'numeric' }) )// Output : Monday, October 9, 2023
     

