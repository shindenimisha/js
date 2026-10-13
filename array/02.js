const hero = ["Superman", "Batman", "Wonder Woman", "Flash", "Aquaman"];
const villan = ["Joker", "Cheetah", "Reverse Flash"];

// hero.push(villan)
// console.log(hero[3][1])

// hero.concat(villan)
// console.log(hero)

// const newhero = hero.concat(villan)
// console.log(newhero)

const newhero1 = [...hero, ...villan]
console.log(newhero1)

const arr = [1, 2, 3, [4, 5, 6], 7, 8, [9, 10]]
const arr1 = arr.flat()
console.log(arr1)



console.log(Array.isArray("nimisha"))
console.log(Array.from("nimisha"))
console.log(Array.from({ name: "nimisha" })) //important



let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))
