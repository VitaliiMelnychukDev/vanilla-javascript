//Spread operator.
console.log("Rest operator");

//Rest operator allows export all properties that are not exported
let {make, model, ...other} = {
    make: "honda",
    year: 2007,
    price: "3000$",
    model: "civic",
    country: "Japan"
};

console.log(make); //honda
console.log(model); //civic
console.log(other); //{ year: 2007, price: '3000$', country: 'Japan' }

//Finally method for Promices;

console.log("\nPromise finally block.");

function testPromise() {
    return new Promise((resolve, reject) => {
        resolve("Return resolve.");
    });
}

testPromise().then(res => {
    console.log("Resolve block: " + res);
}).catch(err => {
    console.log("Catch block: " + res);
}).finally(res => {
    console.log("Finally block: " + res);
});

//Asynchronous Iteration

setTimeout(() => {
    console.log("\nAsynchronous Iteration");

    const promisesArray = [
        new Promise(resolve => resolve(0)),
        new Promise(resolve => resolve(1)),
        new Promise(resolve => resolve(2))
    ];


    async function testArrayOfPromises() {
        for await (let promise of promisesArray) {
            console.log(promise);
        }
    }

    testArrayOfPromises();
}, 100);