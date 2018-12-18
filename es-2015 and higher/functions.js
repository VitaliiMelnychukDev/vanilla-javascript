function getDefaultCity() {
    return "London";
}

function address(country = "UK", city = getDefaultCity()) {
    console.log(`Address: ${country}, ${city}`);
}

address();

function concatStrings(...strings) {
    let concatedStrings = "";
    for (let str of strings) {
        concatedStrings += str;
    }

    console.log(concatedStrings);
}

concatStrings("New", " ", "York");

function rectanglePerimeter({height, width}) {
    console.log(2 * (height + width));
}

let rectangle = {
    height: 10,
    width: 20
};
rectanglePerimeter(rectangle);

//Arrow functions

let sum = (a, b) => a + b;

console.log(sum(2, 3));

let sortedArray = [1, 4, 2, 3].sort((a, b) => a - b);
console.log(sortedArray);


//Arrow function does not have own this. Inside of arrow functions this is the same outside of it.
//Arrow function does not have arguments property.
//Arrow functions can't be use to create object, because they don't have own this.
// In this case this inside of timeout the same like in printMessageWithTimeout function.
function printMessageWithTimeout(message, timeout) {
    this.message = message;
    setTimeout(() => {
        console.log(this.message)
    }, timeout);
}

printMessageWithTimeout("Hello", 100);

