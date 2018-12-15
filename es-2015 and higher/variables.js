
/*
 *  1. Scope. Let variables are block scoped. Let variables are available in blocks were they were defined.
 */
console.log("\nVariables scopes:");

var testVarScope = 1;
if (true) {
    var testVarScope = 2;
}
console.log(testVarScope);

let testLetScope = 1;
if (true) {
    let testLetScope = 2;
}
console.log(testLetScope);


//2. Let variables  is available only after it declaration.

console.log("\nVariables availability:");

console.log(testVar);
var testVar = 1;

try {
    console.log(testLet);
} catch (e) {
    if (e instanceof ReferenceError) {
        console.log(e.message);
    }
}
let testLet = 1;

//3. Loops

console.log("\nVariables in loops:");

for (var i = 0; i < 3; i++) {
    setTimeout(() => { console.log(i) }, 10);
}

setTimeout( () => {
    for (let j = 0; j < 3; j++) {
        setTimeout(() => { console.log(j) }, 10);
    }
}, 100);