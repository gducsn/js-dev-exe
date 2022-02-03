const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
};

function rp(key, value) {
  if (typeof value === 'string') {
    return undefined;
  }
  else {
    return value;
  }
  
}

const json = JSON.stringify(person, rp);

console.log(json); // Should return: { id: 1, age: 25 }