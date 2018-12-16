//Hoisting

//Each function has variable object. It contains all arguments, variables and functions af this function.

//Functions (Function can be executed before declaration)

printMessage("Test hoisting");

function printMessage(message) {
    console.log(message);
}

//if variable declared with var key word then it will be added to variable object of global context before execution.
//It will be equal undefined till moment of declaration
console.log(hello);
var hello = "Hello";