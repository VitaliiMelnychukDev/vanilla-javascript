//map collection to store data in format key - value.
console.log('Map collections');
const person = new Map([
    ["name", "John"],
    ["age", 30]
]);
person.set(1, "was born");
person.set(6, "entered school");
person.set(18, "graduates school");

console.log(person.get(1));
console.log(person.get(6));
console.log(person.size);
console.log(person.has(1));//check whether key exist
console.log(person.delete(6));

console.log("Print map collection keys");
for (let key of person.keys()) {
    console.log(key);
}

console.log("Print map collection values");
for (let value of person.values()) {
    console.log(value);
}

console.log("Print map collection records");
for (let record of person) {
    console.log(record);
}
//method forEach also can be used to go through collection records.

//Set - collection where each record can exist only one time
console.log("\nSet collections");

const cars = new Set();
const bmw = {name: "bmw"};
const audi = {name: "audi"};
const mazda = {name: "mazda"};
cars.add(audi);
cars.add(bmw);
cars.add(mazda);
cars.add(bmw);

cars.forEach(car => console.log(car));

// WeakMap and WeakSet - it is the same like Map and Set, but element will be in collection to time it is alive.
// If object is deleted than it will be deleted for WeakMap or WeakSet too.
//WeakMap and WeakSet objects are not iterable, they don't have method clear and property size;

console.log("\n WeakSet and WeakMap collections");
const teamsWeakMap = new WeakMap();

const teams = [
    {name: "Real"},
    {name: "Barcelona"},
    {name: "Atletico"}
];

teamsWeakMap.set(teams[0], 1);
teamsWeakMap.set(teams[1], 2);
console.log(teamsWeakMap.get(teams[0])); //1
console.log(teamsWeakMap.get(teams[1])); //2

delete teams[0];
console.log(teamsWeakMap.get(teams[0])); //undefined
console.log(teamsWeakMap.get(teams[1])); //2