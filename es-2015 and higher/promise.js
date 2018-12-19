let booleanValue = true;
const changeBooleanValue = setInterval(() => {
    booleanValue = !booleanValue;
}, 1);

var promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        clearInterval(changeBooleanValue);
        if (booleanValue) {
            resolve(true);
        } else {
            reject(false);
        }
    }, 100);
});

promise.then((res) => {
    console.log("Resolved: " + res);
}).catch((err) => console.log("Rejected: " + err));

//Promise has four properties: PromiseState, PromiseResult, PromiseFulfillReactions, PromiseRejectReactions
//PromiseState has next states: pending, resolved, rejected
//PromiseFulfillReactions - list of functions for resolved state
//PromiseRejectReactions - list of functions for rejected state