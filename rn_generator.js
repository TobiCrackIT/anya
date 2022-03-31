console.log("Anya Test!");

//Generate random number between 9 and 20 (both inclusive)
var baseRandomNumber = generateRandomNumber(9,20);

//Get the decimal part
var decimalPart = baseRandomNumber % 1;



var finalRandomNumber = Math.floor(decimalPart * 100) + 1;

console.log("Random Number -",finalRandomNumber);

//Returns a random number between min and max (both inclusive)
function generateRandomNumber(min, max){
  return (Math.random()*(max-min)) + min;
}

export {generateRandomNumber};
