let arr = [1, 2, 3, 4];

for (let el of arr) {
    console.log(el);
}

//own iterator
console.log("Custom iterator");
let range = {
    from: 1,
    to: 3
};

range[Symbol.iterator] = function () {
    let current = this.from;
    let end = this.to;
    return {
        next() {
            if (current <= end) {
                return {
                    done: false,
                    value: current++
                }
            } else {
                return {
                    done: true
                }
            }
        }
    }
};

for (let el of range) {
    console.log(el);
}

console.log(Math.min(...range));//1