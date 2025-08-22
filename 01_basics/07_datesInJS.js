const myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);  // object
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());

// Difference from toISOString()

// toISOString() → You call it directly to get a UTC ISO string.

// toJSON() → Meant specifically for JSON conversion, but internally it just calls toISOString().
// When you JSON.stringify() an object that contains a Date, JavaScript automatically calls toJSON() on the Date.


// custom date object
// const myCreatedDate = new Date(2023,3,24);  // in js month index starts from 0
// const myCreatedDate = new Date(2023,3,24, 23, 15); 
let myCreatedDate = new Date("2025-12-17");
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));   // to convert it into seconds



let newDate = new Date();
console.log(newDate.getTime());
console.log(newDate.getDay());
console.log(newDate.getDate());
console.log(newDate.getMonth());  // will return 7 bcoz in js months starts from 0



// more customized format: 

console.log( newDate.toLocaleString("default", {
    weekday: "long",
    
}));
 





