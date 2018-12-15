let array = ['a', 'b', 'c', 'b', 'd'];
let numberArray = [1, 2, 3, 4, 3, 1];

array.pop();
console.log(array);//[ 'a', 'b', 'c', 'b' ]
array.push('d');
console.log(array);//[ 'a', 'b', 'c', 'b', 'd' ]
array.shift();
console.log(array);//[ 'b', 'c', 'b', 'd' ]
array.unshift('a');
console.log(array);//[ 'a', 'b', 'c', 'b', 'd' ]
array.splice(2, 1, 'k', 't', 'k');
console.log(array);//[ 'a', 'b', 'k', 't', 'k', 'b', 'd' ]
array.splice(3, 1);
console.log(array);//[ 'a', 'b', 'k', 'k', 'b', 'd' ]
array = array.concat(['f', 'b']);
console.log(array);//[ 'a', 'b', 'k', 'k', 'b', 'd', 'f', 'b' ]
console.log(array.slice(2));//[ 'k', 'k', 'b', 'd', 'f', 'b' ]
console.log(array.slice(1, 3));//[ 'b', 'k' ]
console.log([...array].reverse());//[ 'b', 'f', 'd', 'b', 'k', 'k', 'b', 'a' ]
console.log(array);//[ 'a', 'b', 'k', 'k', 'b', 'd', 'f', 'b' ]
console.log([...array].sort());//[ 'a', 'b', 'k', 'k', 'b', 'd', 'f', 'b' ]
console.log(Math.max.apply(null, [1, 3, 6, 2, 4]));//6
console.log(array);//[ 'a', 'b', 'k', 'k', 'b', 'd', 'f', 'b' ]

console.log("\nforEach");
numberArray.forEach((value, index, array) => {
    console.log(value);// 1,2,3,4,5,6
});

console.log("\nmap");
let arrayAfterMap = numberArray.map((value, index, array) => value * 2);
console.log(arrayAfterMap);//[ 2, 4, 6, 8, 6, 2 ]

console.log("\nfilter");
let arrayAfterFilter = numberArray.filter((value, index, array) => value > 2);
console.log(arrayAfterFilter);//[ 3, 4, 3 ]

console.log("\nreduce");
let arraySumWithReduce = numberArray.reduce((sum, value, index, array) => sum + value);
console.log(arraySumWithReduce);//14

console.log("\nreduceRight");
let arraySumWithReduceRight = numberArray.reduceRight((sum, value, index, array) => sum + value);
console.log(arraySumWithReduceRight);//14

console.log("\nevery");
let arrayEvery = numberArray.every((value, index, array) => value < 10);
console.log(arrayEvery);//true
arrayEvery = numberArray.every((value, index, array) => value < 4);
console.log(arrayEvery);//false

console.log("\nsome");
let arraySome = numberArray.some((value, index, array) => value < 10);
console.log(arraySome);//true
arraySome = numberArray.some((value, index, array) => value < 4);
console.log(arraySome);//true

console.log("\nindexOf");
console.log(numberArray.indexOf(3));//2

console.log("\nlastIndexOf");
console.log(numberArray.lastIndexOf(3));//4

console.log("\nfind");
console.log(numberArray.find((value, index, array) => value > 3));//4

console.log("\nfindIndex");
console.log(numberArray.findIndex((value, index, array) => value > 3));//3

