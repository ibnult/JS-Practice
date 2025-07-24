function findUniqueNumbers(arr) {
  if (!Array.isArray(arr)) {
    return "Invalid";
  }

  for (let item of arr) {
    if (typeof item !== "number") {
      return "Invalid";
    }
  }

  const freq = {};
  for (let num of arr) {
    if (freq[num]) {
      freq[num]++;
    } else {
      freq[num] = 1;
    }
  }

  const unique = [];
  for (let key in freq) {
    if (freq[key] === 1) {
      unique.push(Number(key));
    }
  }

  return unique;
}


console.log(findUniqueNumbers([1, 2, 2, 3, 4, 4, 5])); 
console.log(findUniqueNumbers([7, 8, 8, 9, 10, 7, 11]));  
console.log(findUniqueNumbers([1, 1, 1, 1]));     
console.log(findUniqueNumbers(["a", 1, 2]));   
console.log(findUniqueNumbers("1, 2, 3"));            