function countLetters(text) {
  if (typeof text !== "string") {
    return "Invalid";
  }

  const vowelsList = ['a', 'e', 'i', 'o', 'u'];
  let vowels = 0;
  let consonants = 0;

  for (let char of text.toLowerCase()) {
    if (char >= 'a' && char <= 'z') {
      if (vowelsList.includes(char)) {
        vowels++;
      } else {
        consonants++;
      }
    }
  }

  return { vowels, consonants };
}

console.log(reverseOddWords("I love programming a lot"));
console.log(countLetters("hello"));
console.log(countLetters("Subah watches TikTok 24/7"));
console.log(countLetters("AEIOU")); 
console.log(countLetters(""));
console.log(countLetters(42));