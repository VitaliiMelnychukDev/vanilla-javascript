//Javascript has two types of values - primitives and objects
//Primitives are numbers, strings, booleans, undefined, null
//Objects are arrays, functions, objects, dates, wrappers for numbers, strings and booleans

//prototype. By default function has prototype. it is object, which has one property constructor.
//This property refers on the function.

//__proto__ - it is hidden property of each object. When we call some function or property of object
// it is searches in function.prototype at first. If it not found there it is search in function prototype.__proto__.
// If it is not found there then it searches in next prototype.__proto__ and so on till __proto__ is null.
// It is called prototype chain.

//When new object is created. __proto__ its object will be equal prototype of function.


//Example

function test() {
}

function test2() {
}

// here test2.prototype.__proto__ of test2 will be changed from Object.prototype on test.prototype
test2.prototype = Object.create(test.prototype);

//In this case obj.__proto__ will refers on test2.prototype
//new key word do next steps:
//1. create empty object let obj = {};
//2. write in object __proto__  function prototype. obj.__proto__ = test2.__proto__;
//3. call the function test2.apply(obj, arguments),
let obj = new test2();
//Here toString method searches in test2 prototype. It doesn't exist there. After it searches in
// test2.prototype.__proto__ that equal test.prototype. It doesn't exist there. Then it searches in
// test.prototype.__proto__ that equal Object.prototype. toString exists there and it executes there.
obj.toString();