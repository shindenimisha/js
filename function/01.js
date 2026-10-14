//  function 

// function n() {
//     console.log(1)
//     console.log(2)
    
// }
// n()

// function sum(num1, num2) {
//     console.log( num1+num2)
// }
// sum(5, 7)
// sum(3, "4")
// sum("5", 6)
// sum(-7, 6)


function sum(num1 , num) {
    let result = num1 + num
    return result // or we can do return num1 + num
}

const result = sum(5, 6)
console.log("result", result)


function login(usernsme) {
    if(usernsme === undefined) {
        console.log("please entre ")
    }
    return `${ usernsme} jsut logged in`
}

console.log(login())


function price(val1, val2, ...num1) {
    return num1
}
console.log(price(200,2,400,700))