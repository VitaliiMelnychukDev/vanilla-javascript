//Each function has variable object(lexical environment). It contains all arguments, variables and functions of this function.
//Scope is pointer on variable object where function was created.
//Scope chain: If function declared in some function. Than the function has access to own scope, parent function scope
// and global windows scope.
// Closure is function variable object with its scope.


//If function is created via new Function the its scope refers on window variables object

let a = 1;

/**
 * In this case first function has access to own variable object and to own scope.
 * Scope is pointer on global variable object
 */
function first() {
    let b = 2;

    /**
     * In this case first function has access to own variable object and to own scope.
     * Scope is pointer on first function variable object
     */
    function second() {
        let c = 3;
        console.log(a + b + c);
    }

    second();
}

first();