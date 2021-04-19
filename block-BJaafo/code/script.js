
 function getFullName(firstName, lastName) {
     return firstName + " " +lastName;
 }
     let result = getFullName("John", "Snow");

     let expected = "Arya Stark";
      if(result !== expected) {
          throw new Error(`${result} is not equal to ${expected}`);
      }
     result = getFullName("Arya", "Stark");
     if(result !== expected) {
         throw new Error(`${result} is not equal to ${expected}`);
     }


   //No


function totalAmount(amount, taxtRate) {
    amount += (amount * taxtRate);
    return amount;
}

  result = totalAmount(1000, .10);

  expected = 2200;

 if(result !== expected) {
     throw new Error(`${result} is not equal to ${expected}`);
 }

result = totalAmount(2000, .10);

if(result !== expected) {
    throw new Error(`${result} is not equal to ${expected}`);
}

//No