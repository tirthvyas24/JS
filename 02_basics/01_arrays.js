// array

const nums = [1,23,4,5,6]
const fruits = ["apple", "banana", "chickoo"]

// console.log(fruits[2]);


// array methods

const numbers = [1,4,5,2,3,7,9]

// numbers.push(55);  // inserts element at the end
// console.log(numbers);
// numbers.pop();  // removes last element inserted
// console.log(numbers);

// numbers.unshift(17);  // inserts element at the start of the array
// console.log(numbers);
// numbers.shift();   // removes elements from the start of the array
// console.log(numbers);


// console.log(numbers.includes(9));
// console.log(numbers.indexOf(5));


const newArray = numbers.join();

// console.log(numbers);
// console.log(newArray);
// console.log(typeof newArray);



// [slice and splice]

const myArr = [1,2,3,4,5]
console.log("A: ",myArr);
console.log(myArr.slice(1,3));  // returns elements from index specified in the first position till one less than the 2nd index specified


console.log("B: ", myArr);
const mynArr = myArr.splice(1,3);  //  it includes the last element specified and it also removes the specified index values from the array.
console.log(mynArr);

console.log("C:", myArr );  // will print [1,5]













