/**
 * create function that will return only the even numbers
 * return the sum of even numbers
 */
function evenNumbersOnly(numbers) {
  const evens = [];
  for (const num of numbers) {
    if (num % 2 === 0) {
      evens.push(num);
    }
  }
  return evens;
}

const numbers = [5, 8, 91, 24, 6];
// const evens = evenNumbersOnly(numbers);
// console.log("Even numbers:", evens);
function sumOfEvens(numbers) {
  const evens = evenNumbersOnly(numbers);
  let sum = 0;
  for (const num of evens) {
    sum += num;
  }
  return sum;
}

const sum = sumOfEvens(numbers);
console.log("Sum of even numbers:", sum);