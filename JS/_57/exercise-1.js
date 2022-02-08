const persons = [
  {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25
  },
  {
    id: 2,
    firstName: 'Maria',
    lastName: 'Verdi',
    age: 32
  },
  {
    id: 3,
    firstName: 'Giovanni',
    lastName: 'Rossi',
    age: 35
  }
];

function fetchPersonById(id) {
  id = persons.find((item) => item.id == id);
  
  return new Promise((resolve, reject) => {
    setTimeout(() =>
    resolve(`${id.id} ${id.firstName} ${id.lastName} ${id.age}`),1500)
  })


}

fetchPersonById(2).then((x) => console.log(x))


// code here