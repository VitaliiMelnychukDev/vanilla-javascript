//Method Object.values(). It returns object values.
//Method Object.entries()
console.log("New object methods: Object.values() and Object.entries()");
const marks = {
    Halk: 5,
    Batman: 4,
    Superman: 5
};

console.log(Object.values(marks)); //[ 5, 4, 5 ]
console.log(Object.entries(marks)); //[ [ 'Halk', 5 ], [ 'Batman', 4 ], [ 'Superman', 5 ] ]

//Added method Object.getOwnPropertiesDescriptor.
console.log("\nNew Object.getOwnPropertiesDescriptor method: ");
const audiA6 = {
    make: "Audi",
    model: "A6",
    set discount(value) {
        this.d = value;
    },
    get discount() {
        return this.d;
    }
};

console.log("Base object:");
console.log(audiA6); //{ make: 'Audi', model: 'A6', discount: [Getter/Setter] }

const audiA61 = Object.assign({}, audiA6); //Here is problem that Object.assign doesn't copy getter/setter
console.log("Base object copy with Object.assign method:");
console.log(audiA61); //{ make: 'Audi', model: 'A6', discount: undefined }

const audiA62 = Object.defineProperties({}, Object.getOwnPropertyDescriptors(audiA6));
console.log("Base object capy with Object.getOwnPropertyDescriptors method:");
console.log(audiA62); //{ make: 'Audi', model: 'A6', discount: [Getter/Setter] }

//String methods padStart, padEnd

console.log("\nNew string methods: padStart and padEnd ");
let str = "21";

console.log(str.padStart(10, "0")); //0000000021
console.log(str.padEnd(10, "0")); //2100000000

//Trailing comma in function parameters

console.log("\nTrailing comma in function parameters: ");

function sum(a, b,) {
    return a + b;
}

console.log(sum(1, 2)); //3

//Async/Await
console.log("\nAsync\/Await Examples:");

function getUserId(userNickName) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userNickName === "AndrySuperman") {
                resolve(10);
            } else {
                reject("User doesn't exist");
            }
        }, 100);
    });
}

function getUserMovies(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId === 10) {
                resolve(["Aquaman", "Wonder Woman"]);
            } else {
                reject(null);
            }
        }, 100);
    });
}

async function userMovies(userNickName) {
    const userId = await getUserId(userNickName);
    const userMovies = await getUserMovies(userId);
    return (userMovies);
}

function userMoviesHandler(userNickName) {
    userMovies(userNickName).then(movies => {
        console.log(movies);
    }).catch(err => {
        console.log(err);
    });
}

userMoviesHandler("userNotExist");
userMoviesHandler("AndrySuperman");