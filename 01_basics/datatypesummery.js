//primitive

//7 types :string,number,boolean,null,undefined,symbol,bigint



//non primitive : object, array, function(reference)//data type =function,and function ka object function
const id=Symbol('123')
const id2=Symbol('123')
console.log(id==id2)
console.log(id===id2)

const bignumber = 1234567890123412344n//undefined

const heros = ['shaktiman','batman','spiderman'];

let myobj = {
   name:'shaktiman',
   age :22,


}

const myFunction = function() {
    console.log("Hello World");
}

console.log(typeof myFunction);
/*
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object


*/

//+++++++++++++++++++++++++++++++

//stack (premitive ),heap(non-premitive)
let myname = "bharat"
let another = "myname"
another="chai"
console.log(myname)
console.log(another)

let userone = {
    name:"bharat",
    age:22}

let usertwo = userone
usertwo.name="swaraj"
console.log(userone.name)
console.log(usertwo.name)