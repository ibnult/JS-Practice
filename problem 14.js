function countVowels(sentence) {
  if (typeof sentence !== "string") {
    return "Invalid";
  }

  const lower = sentence.toLowerCase();
  let count = 0;

  const vowels = ['a', 'e', 'i', 'o', 'u'];


  for (let char of lower) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

console.log(countVowels("Programming is super fun!")); 
console.log(countVowels("HELLO World")); 
console.log(countVowels("rhythm")); 
console.log(countVowels(12345)); 
