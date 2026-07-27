const name = "bharat"
const repocount = 22
//console.log(name + repocount + "value")

console.log(`${name} has ${repocount} repo`)//working

const gamename =new String("pubg")
console.log(gamename[0])
console.log(gamename.__proto__)
console.log(gamename.length)
console.log(gamename.toUpperCase())
console.log(gamename.charAt(0))
console.log(gamename.indexOf('g'))

const newString = gamename.substring(0,3)
console.log(newString)
const newString2 = gamename.slice(0,3)
console.log(newString2)

const newString3 = "    bharat    "
console.log(newString3)
console.log(newString3.trim())
