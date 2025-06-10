let text = "Education is a powerful tool";
let lowerText = text.toLowerCase();
let vowels = ['a', 'e', 'i', 'o', 'u'];

let found = 0;

for (let i = 0; i < vowels.length; i++) {
    if (lowerText.includes(vowels[i])) {
        found++;
    }
}

if (found === vowels.length) {
    console.log("Contains all vowels: true");
} else {
    console.log("Contains all vowels: false");
}
