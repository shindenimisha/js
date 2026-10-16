(function chai() {
    // named iife
    console.log(`db connected `)
})
    ();
//  global scope k pollution hatane k liye hum  use karte h 

(() => {
    console.log(`conncetd`)
})();
((name) => {
    console.log(`connected ${name}`)
})("nimisha")