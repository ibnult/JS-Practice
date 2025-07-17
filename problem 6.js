function mostFrequent(arr) {
    // Validate input
    if (!Array.isArray(arr)) {
        return "Invalid";
    }

    // Edge case: empty array
    if (arr.length === 0) {
        return undefined;
    }

    const freq = {};
    let maxCount = 0;
    let maxElement;

    for (let item of arr) {
        freq[item] = (freq[item] || 0) + 1;

        if (freq[item] > maxCount) {
            maxCount = freq[item];
            maxElement = item;
        }
    }

    return typeof maxElement === 'string' && !isNaN(Number(maxElement))
        ? Number(maxElement)
        : maxElement;
}


console.log(mostFrequent([1, 2, 2, 3, 3, 3, 4]));    
console.log(mostFrequent(["a", "b", "a", "c", "a"])); 
console.log(mostFrequent([7, 7, 8, 8, 9]));           
console.log(mostFrequent([]));                      
console.log(mostFrequent(123));                     

