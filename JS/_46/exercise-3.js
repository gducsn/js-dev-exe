function isAdult(person) {
  return age >= 18;
}

const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

let { age} = person;

console.log(isAdult(person));

