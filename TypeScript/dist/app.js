console.log("Hello2");
let age = 18;
// age = "eighteen"; ERROR Type 'string' is not assignable to type 'number'
age = 20; // ok
let ageAsString = "eighteen";
// ageAsString = 30; ERROR Type 'number' is not assignable to type 'string'
ageAsString = "twenty"; //ok
ageAsString = `${age}`; //ok
console.log(ageAsString);
const add = (v1, v2) => v1 + v2;
console.log(add(10, 50));
