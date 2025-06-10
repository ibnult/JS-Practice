let text = "Xenon and xylophone";
let updatedText = "";

for (let char of text) {
    if (char === 'x') {
        updatedText += 'y';
    } else if (char === 'X') {
        updatedText += 'Y';
    } else {
        updatedText += char;
    }
}

console.log("Updated string:", updatedText);