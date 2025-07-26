function filterLongWords(sentence) {
  if (typeof sentence !== "string") {
    return "Invalid";
  }


  const words = sentence.split(" ");

  const longWords = words.filter(word => word.length >= 5);

  return longWords;
}

console.log(filterLongWords("A quick brown fox jumps over the lazy dog")); 

console.log(filterLongWords("JavaScript is awesome and very powerful"));


console.log(filterLongWords(12345)); 
