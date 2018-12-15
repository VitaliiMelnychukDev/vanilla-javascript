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
    console.log(value);
});

console.log("\nmap");
let arrayAfterMap = numberArray.map((value, index, array) => value * 2);
console.log(arrayAfterMap);

console.log("\nfilter");
let arrayAfterFilter = numberArray.filter((value, index, array) => value > 2);
console.log(arrayAfterFilter);

console.log("\nreduce");
let arraySumWithReduce = numberArray.reduce((sum, value, index, array) => sum + value);
console.log(arraySumWithReduce);

console.log("\nreduceRight");
let arraySumWithReduceRight = numberArray.reduceRight((sum, value, index, array) => sum + value);
console.log(arraySumWithReduceRight);

console.log("\nevery");
let arrayEvery = numberArray.every((value, index, array) => value < 10);
console.log(arrayEvery);
arrayEvery = numberArray.every((value, index, array) => value < 4);
console.log(arrayEvery);

console.log("\nsome");
let arraySome = numberArray.some((value, index, array) => value < 10);
console.log(arraySome);
arraySome = numberArray.some((value, index, array) => value < 4);
console.log(arraySome);

console.log("\nindexOf");
console.log(numberArray.indexOf(3));

console.log("\nlastIndexOf");
console.log(numberArray.lastIndexOf(3));

console.log("\nfind");
console.log(numberArray.find((value, index, array) => value > 3));

console.log("\nfindIndex");
console.log(numberArray.findIndex((value, index, array) => value > 3));

