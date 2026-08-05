/*const tinderuser =new Object();
tinderuser.name="bharat";
tinderuser.age=23;
tinderuser.email="bharat@"
console.log(tinderuser)//singleton object*/
const tinderuser ={}
tinderuser.name="bharat";
tinderuser.age=23;
tinderuser.email="bharat@"
//console.log(tinderuser)//non singleton object


const regularuser ={
 email:"bharat@g",
 fullname :{
    userfullname:{
        firstname:"bharat",
        lastname:"kumar",

    }

 }


}
//console.log(regularuser.fullname.userfullname.firstname)
const obj1 ={
    1:"a",
    2:"b",
}
const obj2 ={
    3:"a",
    4:"b",

}

//const obj3 ={obj1,obj2}
//const obj3 =Object.assign({},obj1,obj2)
const obj3 ={...obj1,...obj2}
//console.log(obj3)


const users=[
    {
        id:1,
        email:"bharat@56",
    },
   {
        id:1,
        email:"bharat@56",
    },
 {
        id:1,
        email:"bharat@56",
    },
]

/*users[1].email
console.log(Object.keys(tinderuser))
console.log(Object.values(tinderuser))
console.log(Object.entries(tinderuser))
console.log(tinderuser.hasOwnProperty("age"))*/


const course={
 coursename:"js",
 price:99,
 courseInstructor:"bharat",

}

//couse.courseInstructor

const{courseInstructor}=course
//console.log(courseInstructor)
const{courseInstructor:instructor}=course
console.log(instructor)

const navbar =({company}) => {


}
navbar(company="bharat"),

{
    name:"bharatswaraj",
    coursename:"js",
    price:"free"



}

[
  {},
  {},
  {}

]