function add(numA, numB) {
    return numA + numB;
}

function multiply(numA, numB) {
    return numA * numB;
}
let result, expected;

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
function test(message, callback) {
    try{
        callback();
        console.log("✔️", message);
    }catch(error) {
        console.error(error);
        console.log("❎", message);
    }
}
function checkingAddType() {
    result = add(10, "abc");
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