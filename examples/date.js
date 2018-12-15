const date = new Date();
console.log(date);
console.log(date.getTime());
console.log(new Date(Date.parse("2015 10 9")));
const timestamp = Date.now();
console.log(timestamp);
console.log(new Date(timestamp));
console.log(new Date(2001, 5, 7));
console.log(new Date(date - 10 * 1000));// 10 секунд назад
console.log(new Date(date - 10 * 60 * 1000));// 10 хвилин назад
console.log(date.getFullYear());
date.setFullYear(2010);
console.log(date);