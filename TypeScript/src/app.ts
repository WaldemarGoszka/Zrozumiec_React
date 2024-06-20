console.log("Hello2");

let age: number = 18;
// age = "eighteen"; ERROR Type 'string' is not assignable to type 'number'
age = 20; // ok

let ageAsString: string = "eighteen";
// ageAsString = 30; ERROR Type 'number' is not assignable to type 'string'
ageAsString = "twenty"; //ok
ageAsString = `${age}`; //ok

const add = (v1: number, v2: number) => v1 + v2;
console.log(add(10, 50));
