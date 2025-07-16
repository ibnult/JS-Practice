function countVowels(sentence) {
    // Validate input type
    if (typeof sentence !== 'string') {
        return "Invalid";
    }

    // Convert string to lowercase for case-insensitive matching
    sentence = sentence.toLowerCase();

    // Define vowels
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    // Initialize counter
    let count = 0;

    // Loop through each character and count if it's a vowel
    for (let char of sentence) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}

console.log(countVowels("The quick brown fox jumps over the lazy dog")); 
console.log(countVowels("Hello JavaScript developer"));
console.log(countVowels("a bb ccc dddd"));
console.log(countVowels(42));
