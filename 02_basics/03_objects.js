// object literals

// Symbol asked in interviews
const mySym = Symbol("key1");

const jsUser = {
    name : "Tirth",
    age: 20,
    [mySym] : "myKey1",  // syntax to define symbol
    "Full name" : "Tirth Vyas",
    location : "Ahmedabad",
    email: "tirth@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Tuesday"]
}

console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser ["Full name"]);
console.log(jsUser [mySym]);

jsUser.email = "tirth@ibm.com"
console.log(jsUser ["email"]);
// Object.freeze(jsUser);   // modification on the objest is disabled
jsUser.email = "tirth@acc.com"

// console.log(jsUser);

jsUser.greeting = function () {
    console.log("Hello Js User!!");
}
jsUser.greetingTwo = function () {
    console.log(`Hello Js User, ${this.name}`);
}

console.log(jsUser.greeting);  // returns the reference to the function
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());













