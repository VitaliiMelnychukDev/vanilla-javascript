let number = 2.355464;

console.log(number.toFixed(3));//2.355
console.log(number.toFixed(0));//2

console.log(parseInt(number));//2
console.log(parseInt("1"));//1
console.log(parseInt("1 5"));//1
console.log(parseInt("   1"));//1
console.log(parseInt("1  test"));//1
console.log(parseInt("test 1"));//NaN
console.log(parseFloat("1"));//1
console.log(parseFloat("1.1"));//1.1
console.log(parseFloat("1.1test"));//1.1
console.log(parseFloat("test1.1"));//NaN

//Math
console.log(Math.round(1.8));//2
console.log(Math.round(1.4));//1
console.log(Math.ceil(1.4));//2
console.log(Math.floor(1.8));//1
console.log(Math.random());//Get random number from 0 to 1
