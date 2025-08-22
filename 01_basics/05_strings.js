let name = "tirth"
let repoCount = 5;

// console.log(name + repoCount + " Value");   // this method is outdated and it is not recommended to use

// instead we will use string interpolation
// console.log(`My name is ${name} and my repo count is ${repoCount}. `);


const gameName = new String("tirthvyas");
// console.log(gameName.__proto__);     // prints the object

// In JavaScript, a prototype is an object from which other objects inherit properties and methods. Every object has a hidden internal property called [[Prototype]], which can be accessed using proto.

// For example, all string values inherit methods like toUpperCase() and slice() from String.prototype. When you access a property or method on an object, JavaScript first looks for it on the object itself, and if it doesn't find it, it looks up the prototype chain.

// In short: A prototype is a template object that other objects use to inherit shared behavior and functionality.


// console.log(typeof gameName);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());   // Here, gameName is actually a String object, not a primitive string. But even though it’s an object, its internal value (the string "tirthvyas") is still stored as an immutable primitive string.
console.log(gameName);

console.log(gameName.charAt(3));
console.log(gameName.toLowerCase());
console.log(gameName.lastIndexOf("t"));

console.log(gameName.substring(0,5));
console.log(gameName.slice(-8,4));


console.log("    tirth    ");
console.log("    tirth    ".trim());

const url = "https://tirth.com%20vyas";
console.log(url.replace("%20", "-"));

console.log(url.includes("tirth"));


const naam = "kamya-tirth-17-24";
console.log(naam.split("-"));

console.log(naam.endsWith("24"));

console.log(gameName.bold());   // retunrs value of gameName wrapped around <b> tag of html

console.log(gameName.blink());
















