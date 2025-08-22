// Primitive

// 7 types: String, number, boolean, null, undefined, symbol, bigint

// const id = Symbol("123");
// const anotherId = Symbol("123");


// console.log(id === anotherId);  // false coz symbol helps to make them unique even if they have same value


const bigNum = 51487456184787455885244886677999633355n  // by using "n" we can mark it as bigint

// It is dynamically typed language!!!


// non primitive or reference type

// array, objects, functions


const fruits = ["Apple", "Orange", "Mango"];

const student1 = {
    name: "Tirth",
    age : 20,
};

const myFun = function() {
    console.log("Hello, World!");
    
}

// console.log(typeof null);   // returns object


// console.log(typeof myFun);   // return is called object function







// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let myYtName = "Tirthvyas";
let anotherName = myYtName;

anotherName = "TirthDVyas";

console.log(myYtName);   // we expect myYtName to also get changed but it doesn't bcoz in primitive dtype a copy of variable is passed not it's reference
console.log(anotherName);



let user1 = {
    email : "abc@gmail.com",
    upi: "user@ax.ok"
}

let user2 = user1;

user2.email = "tirthq@gmail.com"

console.log(user1.email);
console.log(user2.email);









