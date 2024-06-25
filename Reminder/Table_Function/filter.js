const people = [
  { name: "Jan", LastName: "Kowalski", country: "Polska", salary: 5000 },
  { name: "Anna", LastName: "Schmidt", country: "Niemcy", salary: 2500 },
  { name: "John", LastName: "Smith", country: "USA", salary: 8000 },
  { name: "Maria", LastName: "Garcia", country: "Hiszpania", salary: 3500 },
  { name: "David", LastName: "Brown", country: "UK", salary: 10000 },
  { name: "Sophie", LastName: "Dubois", country: "Francja", salary: 6000 },
  { name: "Freddy", LastName: "Kamionka", country: "USA", salary: 14500 },
  { name: "Kamil", LastName: "Ślmiak", country: "Polska", salary: 4000 },
  { name: "Luis", LastName: "Silva", country: "Portugalia", salary: 3000 },
  { name: "Sarah", LastName: "Taylor", country: "Australia", salary: 50000 },
];

const logPersonInfo = (person, index, arr) => {
  console.log(
    `${index + 1} z ${arr.length}: ${person.name} ${person.LastName}, kraj: ${
      person.country
    }`
  );
};

console.log("###");
console.log(".filter");
console.log("###");

people.forEach(logPersonInfo);

const richPeople = [];

for (let i = 0; i < people.length; i++) {
  const person = people[i];
  if (person.salary > 5000) {
    richPeople.push(person);
  }
}

console.log("Rich people:");
console.log(richPeople);

const polishPeople = [];

for (let i = 0; i < people.length; i++) {
  const person = people[i];
  if (person.country === "Polska") {
    polishPeople.push(person);
  }
}

console.log("Polish people:");
console.log(polishPeople);
