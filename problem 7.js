function reverseOddWords(sentence) {
  if (typeof sentence !== "string") {
    return "Invalid";
  }

  const words = sentence.split(" ");
  const result = words.map((word, index) => {
    if (index % 2 !== 0) {
      return word.split("").reverse().join("");
    } else {
      return word;
    }
  });

  return result.join(" ");
}


console.log(reverseOddWords("I love programming a lot"));
console.log(reverseOddWords("Today is a good day"));
console.log(reverseOddWords("This is another test case"));
console.log(reverseOddWords("OnlyOne"));
console.log(reverseOddWords(12345));
