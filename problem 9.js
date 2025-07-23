function countLetters(text) {
  // Check if input is a string
  if (typeof text !== "string") {
    return "Invalid";
  }

  const vowelsList = ["a", "e", "i", "o", "u"];
  let vowels = 0;
  let consonants = 0;

  for (let char of text.toLowerCase()) {
    if (/[a-z]/.test(char)) {
      if (vowelsList.includes(char)) {
        vowels++;
      } else {
        consonants++;
      }
    }
  }

  return { vowels: vowels, consonants: consonants };
}

console.log(countLetters("JavaScript is awesome!")); 
console.log(countLetters("HELLO World")); 
console.log(countLetters("12345"));
console.log(countLetters(["Not", "a", "string"]));  
