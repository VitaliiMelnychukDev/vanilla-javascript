//Object.setPrototypeOf(obj, proto) - you can set prototype of objecin es6.

let car = {
    make: "Honda"
};

let details = {
    model: "Civic",
    fuel: "gas"
};

Object.assign(car, details);

console.log(car); //{ make: 'Honda', model: 'Civic', fuel: 'gas' }

let make = "BMW", model = "X6";
let BMWCar = {
    make,
    model,
    //Object methods. It was added in es6. Before was getFullName: function() { return `${make} ${model}` }
    getFullName() {
        return `${make} ${model}`
    }
};

console.log(JSON.stringify(BMWCar)); //{"make":"BMW","model":"X6"}
console.log(BMWCar.getFullName()); //BMW X6


let print = {
    printInConsole(text) {
        console.log(text);
    }
};

let user = {
    __proto__: print,
    name: "John",
    lastName: "Wick",
    //super key word work only for methods.
    printInConsole() {
        super.printInConsole(`${this.name} ${this.lastName}.`);
    }
};
user.printInConsole();