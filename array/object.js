//  constrctore se hamesha singleton banega 
// 

// *********


// objects literal 

// const obj = {
// key: " value "}

const mysum = Symbol("sum")
const jsuser = {
    name: "nimisha",
    age: 22,
    [mysum]: "sum1",
    email: "xt@213",
    " fulname ": "nimisha xt",
    lastlogin: ["monday", "tuesday"],


}

// two ways to acces 
console.log(jsuser.name)
console.log(jsuser["name"])

console.log(jsuser.mysum)
// console.log(typeof jsuser.mysum)// imporant concept 

console.log(jsuser[mysum]) // correct way to acces 


//  to change the value 
jsuser.email = " asd@123"
console.log(jsuser)
// to not change freeze it 
Object.freeze(jsuser)
jsuser.email = " wer@123"
console.log(jsuser)


//  now to define in functin 
jsuser.greeting = function () {
    console.log(" hello")
}

jsuser.greeting2 = function () {
    console.log(`hello,${this.email}`);
}
console.log(jsuser.greeting())
console.log(jsuser.greeting2())