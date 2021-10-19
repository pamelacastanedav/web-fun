// Print odds 1-20
// Using a loop write code that will console.log all of the odd values from 1 up to 20.

var printOdds = () => {
  for (var x = 1; x < 21; x++) {
    var isOdd = x % 2 === 1; // true or false
    var isEven = x % 2 === 0;

    if (isOdd) {
      console.log(x);
    }
  }
};

// Decreasing Multiples of 3
// Using a loop write code that will console.log all of the values that are evenly divisible by 3 from 100 down to 0.
var printDecreasingMultiplesOfthree = () => {
  for (var i = 100; i >= 0; i--) {
    var divisibleByThree = i % 3 === 0;
    if (divisibleByThree) {
      console.log(i);
    }
  }
};

// Print the sequence
// Using a loop write code that will console.log the values in this sequence 4, 2.5, 1, -0.5, -2, -3.5.

var printSequence = () => {
  var sequence = [4, 2.5, 1, -0.5, -2, -3.5];
  for (let index = 0; index < sequence.length; index++) {
    const element = sequence[index];
    console.log(element);
  }
};

// Sigma
// Write code that will add all of the values from 1-100 onto some variable sum and at the end console.log the result 1 + 2 + 3 + ... + 98 + 99 + 100. We should get back 5050 at the end.
var sigma = () => {
  let total = 0;
  for (var x = 1; x < 101; x++) {
    total = total + x;
  }
  console.log(total);
};

// Factorial
// Write code that will multiply all of the values from 1-12 onto some variable product and at the end console.log the result 1 * 2 * 3 * ... * 10 * 11 * 12. We should get back 479001600 at the end.

var factorial = () => {
  let total = 1;
  for (var x = 1; x < 13; x++) {
    total = total * x;
  }
  console.log(total);
};

factorial();
