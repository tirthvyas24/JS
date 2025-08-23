const marvel_heros = ["Thor","IronMan","Dr.Strange"]
const dc_heros = ["Superman", "Flash", "BatMan"]

// console.log(marvel_heros.push(dc_heros))  // returns the new lenght of the array
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros);   // concat returns new array instead of modifying the existing array
// console.log(allHeros);


// spread operator ( glass example)

// const allNewHeros = [...marvel_heros, ...dc_heros, ...dc_heros];
// console.log(allNewHeros);


// const arr = [1,2,3,[3,45],5,6,[4,7,[9,8,0]]]
// const usable_arr = arr.flat(2);  // we can also give depth as infinity
// console.log(usable_arr);

console.log(Array.isArray("Tirth"));
console.log(Array.from("Tirth"));  // converts it into array

console.log(Array.from({fName:"Tirth Vyas"}));  // returns empty array
console.log(Array.from(Object.keys({fName:"Tirth Vyas"})));  
console.log(Array.from(Object.values({fName:"Tirth Vyas"})));  
console.log(Array.from(Object.entries({fName:"Tirth Vyas"})));  

score1 = 78;
score2 = 48;
score3 = 98;

console.log(Array.of(score1, score2, score3));










