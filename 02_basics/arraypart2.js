const Marvelheros= ["thor","ironmane","spiderman"]
const DCheroes=["superman","flsah","batman"]

//Marvelheros.push(DCheroes)
//console.log(Marvelheros[3][1])

//const allHEroes=Marvelheros.concat(DCheroes);
//console.log(allHEroes);
//const all_new_heros =[...DCheroes,...Marvelheros  ]
//console.log(all_new_heros)
const otherarry= [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const realanotherarr= otherarry.flat(Infinity)
console.log(realanotherarr)


console.log(Array.isArray("bharat"))
console.log(Array.from("bharat"))

console.log(Array.from({name:"bharat"}))
let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3))