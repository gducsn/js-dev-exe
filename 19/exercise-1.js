const person1 = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25
};

person1.firstName = "Simon";
const person2 = person1;

// Modifica la proprietà "firstName" di person2 in "Simon"

console.log(person1);
console.log(person2);