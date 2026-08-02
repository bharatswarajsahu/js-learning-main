//singleton
//object literal
//object.create

const mysym = Symbol("key1");

const jsuser = {
  name: "bharat",
  "fullname": "bharatkumar",
  [mysym]: "mykey1",
  age: 23,
  email: "bharat@gmail.com",
  islogin: false,
  lastlogin: ["monday", "tuesday"],
};

console.log(jsuser.name);
console.log(jsuser["name"]);
console.log(jsuser["fullname"]);
console.log(jsuser[mysym]); // string

jsuser.email="bro@gmail.com"
//Object.freeze(jsuser)
jsuser.email="bro@gmail.com"
console.log(jsuser);

jsuser.greeting = function () {
  console.log("hello js user");
}
 console.log(jsuser.greeting());//function call
//console.log(jsuser.greeting);//function reference
jsuser.greeting2 = function () {
  console.log(`hello js user,${this.name}`);
}
console.log(jsuser.greeting2());//function call