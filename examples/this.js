// This refers on object that called the method.

testThis("str");

function testThis(str) {
    console.log(this); // it is called in window so this refers to window here.
}

testThis.prototype.test2 = function () {
    console.log(this); // it is called in testThis object so this refers to testThis here
};

const obj = new testThis("Test2");
obj.test2();

const test3 = {
    name: "test3",
    writeLine: function (line) {
        console.log(this); // it is called in test3 object so this refers to test3 here
    },
    testThisInsideOfOblect: function () {
        console.log(this); // it is called in test3 object so this refers to test3 here
        function testInsideObjectMethod() {
            console.log(this); // In this case this refers to window. Because it called in window object.
        }

        testInsideObjectMethod();
    }
};

test3.writeLine('Test3');
test3.testThisInsideOfOblect();
