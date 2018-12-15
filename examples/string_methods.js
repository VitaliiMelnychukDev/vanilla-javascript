let str = "Test string for testing";

console.log(str.length);//23
console.log(str.indexOf("string"));//5
console.log(str.indexOf("ing", 15));//20
console.log(str.indexOf("not found", 6));//-1
console.log(str.lastIndexOf("ing"));//20
console.log(str.slice(5, 7));//st
console.log(str.slice(-11, -6));//for t
console.log(str.slice(12));//for testing
console.log(str.substring(3, 8));//t str
console.log(str.substr(5, 5));//strin
console.log(str.replace("ing", "REPLACE"));//Test strREPLACE for testing
console.log(str.replace(/ing/g, "REPLACE"));//Test strREPLACE for testREPLACE
console.log(str.toUpperCase());//TEST STRING FOR TESTING
console.log(str.toLowerCase());//test string for testing
console.log(str.concat(" concat1 ", " concat2 ", " concat3 "));//Test string for testing concat1  concat2  concat3
console.log("   trim  ".trim());//trim
console.log(str.charAt(3));//t
console.log(str[3]);//t
console.log(str.charAt(333));//
console.log(str[333]);//undefined
console.log(str.split(' '));//[ 'Test', 'string', 'for', 'testing' ]