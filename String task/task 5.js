let text = "hello world! this is ibnul tahsin.";
let words = text.split(" ");
let capitalizedWords = [];

for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (word.length > 0) {
        capitalizedWords.push(word[0].toUpperCase() + word.substring(1));
    } else {
        capitalizedWords.push(word); // handle empty strings if any
    }
}

let capitalized = capitalizedWords.join(" ");
console.log("Capitalized:", capitalized);
