let mydate = new Date();
console.log(mydate);

console.log(mydate.toDateString());
console.log(mydate.toTimeString());

console.log(mydate.toLocaleDateString());
console.log(mydate.toLocaleTimeString());

console.log(mydate.getFullYear());
console.log(mydate.getMonth());
console.log(mydate.getDate());
console.log(mydate.getDay());
console.log(mydate.toJSON());

console.log(mydate.toISOString());


let mydate1 = new Date(2024, 5, 20, 10, 30, 0);
console.log(mydate1.toDateString());