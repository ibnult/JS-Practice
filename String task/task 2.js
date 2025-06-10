let text = "Amazing Apple And banana";
let count = 0;

for (let i = 0; i < text.length; i++) {
    if (text[i] === 'a' || text[i] === 'A') {
        count++;
    }
}

console.log("Number of 'a' or 'A':", count);
