let str = "Test regular expressions";

const regexp = /test/;

//flags i - not register sensitive, g - search all matches
console.log(str.search(/test/)); //-1
console.log(str.search(/test/i));// 0
console.log(str.search(/e/g));// 1

//search - only seek first match

console.log(str.match(/test/)); //null
console.log(str.match(/test/i));//return array with matching information
console.log(str.match(/es/g));// return all matches


console.log(str.split(/test/i))// split can work with regular expressions too.
console.log("part1 part2".replace(/(part1) (part2)/, "$2, $1"));//example replace with regular expression

console.log(/test/i.test(str));// test if str has at least one matched

console.log(/test/ig.exec(str));
console.log(/test/ig.exec(str));

