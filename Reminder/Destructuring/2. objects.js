const filip = { name: "Filip", age: 29, city: "Kraków" };

const getPersonInfo = ({ name, age, city }) => {
  return `Imię: ${name}, wiek: ${age}, miasto: ${city}`;
};
console.log(getPersonInfo(filip));

// Defult values

const filip2 = { name: "Filip", age: 29 }; //Object without one parameter

const getPersonInfo2 = ({ name, age, city = "Warszawa" }) => {
  // Default values of city
  return `Imię: ${name}, wiek: ${age}, miasto: ${city}`;
};
console.log(getPersonInfo2(filip2));
