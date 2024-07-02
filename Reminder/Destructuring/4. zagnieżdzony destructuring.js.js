const filip = {
  name: "Filip",
  age: 29,
  city: {
    name: "Kraków",
    population: 800_000,
  },
  id: 2137,
};

const {
  city: { population, name },
  age,
  name: personName,
} = filip;

console.log(population);
console.log(age);
console.log(personName);

// Zagnieżdzone tablice

const people = [
  ["Filip", 29, "Kraków"],
  ["Kacper", 30],
];

const [[personOneName, personOneAge], [personTwoName, personTwoAge]] = people;

console.log(personOneName, personOneAge);
console.log(personTwoName, personTwoAge);

// Zagnieżdzone tablice i obiekty

const people2 = [
  { name: "Filip", age: 29, city: "Kraków", hobbies: ["Books", "Running"] },
  { name: "Kacper", age: 30 },
];

const [
  {
    name: firstpersonName,
    hobbies: [mainHobby],
  },
  { name: secondPersonName, city = "Warszawa" },
] = people2;

console.log(firstpersonName);
console.log(secondPersonName);
console.log(city);
console.log(mainHobby);
