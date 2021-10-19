// var num = 0;

// for (var i = 1; i <= 100; i++);

// if (i % 3 == 1);
// console.log("Fizz");

// if (i % 5 == 1);

// console.log("Buzz");

// if (i % 3 != 0 && i % 5 != 0);

// console.log("FizzBuzz");

// For each number that is a multiple of 3, print "Fizz"
// For each number that is a multiple of 5, print "Buzz"
// For numbers which are a multiple of both 3 and 5, print "FizzBuzz"

var fizzBuzz = () => {
  for (let number = 1; number < 101; number++) {
    var isMultipleOfThree = number % 3 === 0; // true or false
    var isMultipleOfFive = number % 5 === 0; // true or false
    var isMultipleOfBoth = isMultipleOfThree && isMultipleOfFive;

    if (isMultipleOfBoth) {
      console.log("FizzBuzz");
    } else if (isMultipleOfThree) {
      console.log("Fizz");
    } else if (isMultipleOfFive) {
      console.log("Buzz");
    }
  }
};

fizzBuzz();
