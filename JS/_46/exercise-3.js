function isAdult({age = person.age}) {
  return age;
}

const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};



console.log(isAdult(person));

