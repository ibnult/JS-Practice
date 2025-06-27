function oddAverage(numbers) {
  const odds = [];
  for (const number of numbers) {
    if (number % 2 === 1) {
      odds.push(number);
    }
  }
  // odds is the array that contains all the odd numbers
  //console.log(odds)
  let sum = 0;
  for (const number of odds) {
    sum += number;
  }
  const count= odds.length;
  const avg=sum/ count;
  return avg;


}

const numbers = [42, 13, 58, 65, 81, 96, 7];
const avg = oddAverage(numbers);
console.log("Average of the odd number is:" + avg);
