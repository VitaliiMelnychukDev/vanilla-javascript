console.log("1 + 2 = " + (1 + 2)); //3
console.log("2 - 1 = " + (2 - 1)); //1
console.log("4 / 2 = " + (4 / 2)); //2
console.log("2 * 2 = " + (2 * 2)); //4
console.log("5 / 3 = " + (5 / 3)); //1.66666....7
console.log("5 % 3 = " + (5 % 3)); //2
console.log("2 + 4 = " + (2 ** 4)); //16

console.log("\n");
console.log("test + 10 = " + ("test" + 10)); //test1
console.log("test + 1 + 11 = " + ("test" + 1 + 11)); //test111
console.log("test - 1 = " + ("test" - 1)); //NaN
console.log("test / 1 = " + ("test" / 1)); //NaN
console.log("test * 1 = " + ("test" * 1)); //NaN
console.log("1 + test = " + (1 + "test")); //1test
console.log("1 + 10 + test = " + (1 + 10 + "test")); //11test
console.log("1 * test = " + (1 * "test")); //NaN


console.log("\n");
let a = 1;
console.log("a = " + a); //1
console.log("a++ = " + (a++)); //1
console.log("a = " + a); //2
console.log("++a = " + (++a)); //3
console.log("a = " + a); //3
console.log("1 + a++ = " + (1 + a++));//4
console.log("a = " + a); //4
console.log("1 + ++a = " + (1 + ++a));//6
console.log("a = " + a); //5


//logical operators
console.log("\n");

//if some of them equal false then return false, last in other case
console.log("true && true = " + (true && true)); //true
console.log("true && false = " + (true && false)); //false
console.log("false && false = " + (false && false)); //false
console.log("t && t2 && t3 = " + ("t" && "t2" && "t3")); //t3

//if all of them equal false then return false, first in other case
console.log("true || true = " + (true || true)); //true
console.log("true || false = " + (true || false)); //true
console.log("false || false = " + (false || false)); //false
console.log("false || t2 || t3 = " + (false || "t2" || "t3")); //t2


console.log("\n");
console.log("5 == 5 = " + (5 == 5)); //true
console.log("'5' == 5 = " + ('5' == 5)); //true
console.log("'5' === 5 = " + ('5' === 5)); //false
console.log("5 === 5 = " + (5 === 5)); //true
console.log("false == undefined = " + (false == undefined)); //false
console.log("'' == undefined = " + ('' == undefined)); //false
console.log("0 == undefined = " + (0 == undefined)); //false
console.log("null == undefined = " + (null == undefined)); //true
console.log("null == 0 = " + (null == 0)); //false
console.log("null == false = " + (null == false)); //false
console.log("null == '' = " + (null == '')); //false
console.log("false == '' = " + (false == '')); //true
console.log("0 == '' = " + (0 == '')); //true
console.log("false == 0 = " + (false == 0)); //true
console.log("false == '0' = " + (false == '0')); //true
console.log("0 == '0' = " + (0 == '0')); //true
console.log("'' == '0' = " + ('' == '0')); //false
console.log("undefined == '0' = " + (undefined == '0')); //false
console.log("null == '0' = " + (null == '0')); //false
