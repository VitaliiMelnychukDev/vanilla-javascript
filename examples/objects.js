let person = {
    getAge: function () {
        return 2018 - this.yearOfBirth;
    }
};

const Taras = Object.create(person);
person.name = "Taras";
person.yearOfBirth = 1980;

const John = Object.create(person, {
    name: {value: "John"},
    age: {value: 1970}
});