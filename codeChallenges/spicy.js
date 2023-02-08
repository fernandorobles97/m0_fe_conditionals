var luckyNumber = 10

if (luckyNumber % 3 === 0 && luckyNumber % 5 === 0) {
    console.log("FizzBuzz");
} else if (luckyNumber % 3 === 0) {
    console.log("Fizz");
} else if (luckyNumber % 5 ===0) {
    console.log("Buzz");
} else {
    console.log(luckyNumber);
}