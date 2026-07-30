const myArr = [1, 2, 3, 4, 5];  
//console.log(myArr[0]) // Output : [1, 2, 3, 4, 5]

const myarr2= new Array(1, 2, 3, 4, 5);
//console.log(myarr2) // Output : [1, 2, 3, 4, 5]

//array methods

myArr.push(6); // Adds 6 to the end of the array
console.log(myArr) // Output : [1, 2, 3, 4, 5, 6]

myarr2.pop(); // Removes the last element from the array
console.log(myarr2) // Output : [1, 2, 3, 4]

myArr.unshift(0); // Adds 0 to the beginning of the array
console.log(myArr) // Output : [0, 1, 2, 3, 4, 5]

myarr2.shift(); // Removes the first element from the array
console.log(myarr2) // Output : [2, 3, 4, 5]

console.log(myArr.includes(4))//checks availability of element

const newARR =myArr.join()

console.log(myArr)
console.log(newARR)

//slice,splice

console.log("A",myArr);

const myn1 =myArr.slice(1,3)

console.log(myn1)

const myn2 =myArr.splice(1,3)
console.log("c",myArr)
console.log(myn2)
