class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get getnome() {
    return this.firstName;
}
  set setnome(name) {
    this.firstName = name;
}

get getcognome() {
  return this.lastName;
}
set setcognome(cn) {
  this.lastName = cn;
}

  get fullName() {
    return this.firstName + " " + this.lastName
  }

  
  
}

const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);

person.firstName = 'Maria';
person.lastName = 'Verdi';
console.log(person.fullName);
