//  for of 


// ["", " ", ""]
// [{} , {} , {}]

// const arr = [1, 2, 3, 4, 5]

// for (const num of arr) {
//     console.log(num);
// }

// const greeting = " hello" 
// for (greet of greeting) {
//     console .log(`each char is ${greet}`)
// }

// maps 

const map = new Map()
map.set(" in", " india")
map.set(" usa", " united ")

console.log(map)

for (const [key , value] of map) {
    console .log( key , ":-" , value)
}
//  this for of doesnot works in object