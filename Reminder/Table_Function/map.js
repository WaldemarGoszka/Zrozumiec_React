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

console.log("###");
console.log(".map");
console.log("###");

const yearlySalaries = people.map((person) => person.salary * 12);

console.log(yearlySalaries);

const peopleWitchYearlySalaries = people.map((person) => ({
  ...person,
  yearlySalary: person.salary * 12,
}));

console.log(peopleWitchYearlySalaries);
