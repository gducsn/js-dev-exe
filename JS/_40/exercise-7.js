class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get _firstName() {
    return this.firstName;
}
  set _firstName(name) {
    this.firstName = name;
}

get _lastName() {
  return this.lastName;
}
set _lastName(cn) {
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
