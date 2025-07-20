function reverseOddWords(sentence) {
  if (typeof sentence !== "string") {
    return "Invalid";
  }

  const words = sentence.split(" ");
  const result = [];

  for (let i = 0; i < words.length; i++) {
    if (i % 2 === 1) {
      // Reverse odd-indexed words
      result.push(words[i].split("").reverse().join(""));
    } else {
      result.push(words[i]);
    }
  }

  return result.join(" ");
}


 console.log(reverseOddWords("I love programming a lot"));     
 console.log(reverseOddWords("Today is a good day"));         
 console.log(reverseOddWords("This is another test case"));    
 console.log(reverseOddWords("OnlyOne"));                      
 console.log(reverseOddWords(12345));                         
