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

console.log("Rich people:");
people.filter((person) => person.salary > 5000).forEach(logPersonInfo);

console.log("Polish people:");
people.filter((person) => person.country === "Polska").forEach(logPersonInfo);
