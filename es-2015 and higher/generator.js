function* generator() {
    console.log("Before first yield");
    yield 1;
    yield 2;
    yield 3;
}

const generatorTest = generator();
console.log(generatorTest.next()); //{ value: 1, done: false }
console.log(generatorTest.next()); //{ value: 2, done: false }
console.log(generatorTest.next()); //{ value: 3, done: false }
console.log(generatorTest.next()); //{ value: undefined, done: true }
