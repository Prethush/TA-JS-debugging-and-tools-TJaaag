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
            if(typeof a !== expected || typeof b !== expected) {
                throw new Error(`typeof the arguments is not a number`);
              }
         },

     }
 }
function test(message, callback) {
    try{
        callback(5, 4);
        console.log("✔️", message);
    }catch(error) {
        console.error(error);
        console.log("❎", message);
    }
}
function checkingType(a, b) {
    result = add(a, b);
    expected = "number";
   expect(add(a, b)).typeCheck(expected);
}

test("Checking the arguments type", checkingType);

function addTwo() {
    result = add(30, 20);
    expected = 20;
   expect(result).toEqual(expected);
}

test("Adding two numbers", addTwo);

function muliplyTwo() {
    result = muliplyTwo(10, 20);
    expected = 100;
    expect(result).toEqual(expected);
}

test("Multiply two numbers", muliplyTwo);