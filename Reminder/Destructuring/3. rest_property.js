// Table
const letters = ["a", "b", "c", "d", "e", "f", "g"];

const [firstLetter, secondLetter, ...othersLetters] = letters;

console.log(firstLetter);
console.log(secondLetter);
console.log(othersLetters);

// Object
const filip = { name: "Filip", age: 29, city: "Kraków", id: 2137 };

const { id, ...personInfo } = filip;

console.log(id);
console.log(personInfo);
