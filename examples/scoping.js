//Each function creates a scope. It is place where variables which are defined in function are accessible.

//Scope chain: If function declared in some function. Than the function has access to own scope, parent function scope
// and global windows scope.


let a = 1;

function first() { //In this case first function has access to own scope and to global scope
    let b = 2;
    function second() { //In this case second function has access to own scope to scope of first function and to global scope
        let c = 3;
        console.log(a + b + c);
    }
    second();
}

first();