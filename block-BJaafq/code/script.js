
// Basic functions

function add(numA, numB) {
    if(typeof numA === "number" && typeof numB === "number") {
    return numA + numB;
    } else {
        return `Not a number`;
    }
}

function multiply(numA, numB) {
    if(typeof numA === "number" && typeof numB === "number") {
        return numA * numB;
        } else {
            return `Not a number`;
        }
}
let result, expected;


//Assertion Library

 function expect(actual) {
     return {
         toEqual: function(expected) {
            if(actual !== expected) {
                throw new Error(`${actual} is not equal to ${expected}`);
            }
         }, 
         typeCheck: function(expected) {
            if(typeof result !== expected) {
                throw new Error(`typeof the arguments is not a number`);
              }
         },

     }
 }

 //Testing Framework

function test(message, callback) {
    try{
        callback();
        console.log("✔️", message);
    }catch(error) {
        console.error(error);
        console.log("❎", message);
    }
}


//Tests

//Addition functions

function checkingAddType() {
    result = add(10, 10);
    expected = "number";
   expect(result).typeCheck(expected);
}

test("Checking the arguments type of adding two numbers", checkingAddType);

function addTwo() {
    result = add(30, 20);
    expected = 20;
   expect(result).toEqual(expected);
}

test("Adding two numbers", addTwo);


test("Adding 10 + 40 to be equal to 50", () => {
    expect(add(10, 40)).toEqual(50);
});

test("Adding 20 + 20 to be equal to 100", () => {
    expect(add(20, 20)).toEqual(100);
});


//Muliplication functions

function multiplyTwo() {
    result = multiply(10, 20);
    expected = 100;
    expect(result).toEqual(expected);
}

test("Multiply two numbers", multiplyTwo);

function checkingMultiplyType() {
    result = multiply(10,"abc");
    expected = "number";
   expect(result).typeCheck(expected);
}

test("Checking the arguments type of multiplying two numbers", checkingMultiplyType);

test("multiplying 20 * 20 to be equal to 400", () => {
     expect(multiply(20, 20)).toEqual(400);
});

test("multiplying 10 * 20 to be eaual to 100", () => {
    expect(multiply(10, 20)).toEqual(100);
});