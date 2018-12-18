
//Not new Symbol(), because it is primitive. All symbols are unique
let symbol = Symbol("name");

console.log(symbol == Symbol("name")); //false