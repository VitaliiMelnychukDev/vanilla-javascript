let obj = {};

let proxy = new Proxy(obj, {
    get(targetObj, property) {
        console.log(`Get property ${property} that equal ${targetObj[property]}`);
        return targetObj[property];
    },
    set(targetObj, property, value) {
        console.log(`Set property ${property} value ${value}`);
        targetObj[property] = value;
    },
});

proxy.test = 22; //Set property test value 22
let test = proxy.test; //Get property test that equal 22
console.log(obj); //{ test: 22 }