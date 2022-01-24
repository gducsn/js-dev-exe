const person = {
    get firstName() {
        return this.name;
    },
    get lastName() {
        return this.surname;
    },
    set firstName(name) {
        return this.name = name;
    },
    set lastName(surname) {
        return this.surname = surname;
    },

    fullName() {
        return `${this.firstName} ${this.lastName}`;
    },


}

const john = Object.create(person);
const simon = Object.create(person);

john.firstName = "John";
simon.firstName = "Simon";
john.lastName = "Doe";
simon.lastName = "Collins"



console.log(john.fullName()); // John Doe
console.log(simon.fullName()); // Simon Collins