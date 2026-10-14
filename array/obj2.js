//  singleton 
// const user = new Object()

// non singleton object 
// const user = {}

const tuser = {}
tuser.id = "11344"
tuser.name = " nimisha"
tuser.logged = false

// object k andra object 

const ruser = {
    email: " asd@12",
    fullname: {
        userfullname: {
            firstname: " suman",
            lastname: "rao"

        }

    }

}

// console.log(ruser.fullname?.userfullname.firstname.lastname )

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "c", 4: " b" }

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({} , obj1 , obj2)
const obj3 = { ...obj1, ...obj2 }
// console.log(obj3)


console.log(Object.keys(tuser))
console.log(Object.values(tuser))
console.log(Object.entries(tuser))

console.log(tuser.hasOwnProperty('logged')

)

const course = {
    name: "hindi",
    price: "999 ",
    insrtuctor: "hitesh"

}
const { insrtuctor: ins } = course
console.log(ins)

