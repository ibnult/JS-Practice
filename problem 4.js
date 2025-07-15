function longestWord(sentence) {
  if (typeof sentence !== "string") {
    return "Invalid";
  }

  const words = sentence.split(" ");

  let longest = "";

  for (let word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }

  return longest;
}

console.log(longestWord("The quick brown fox jumps over the lazy dog"));
console.log(longestWord("Hello JavaScript developer"));
console.log(longestWord("a bb ccc dddd"));
console.log(longestWord(42));
console.log(longestWord(["not", "a", "string"]));
