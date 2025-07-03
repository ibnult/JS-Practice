const heights=[65,66,68,72,78,60];


function tallest(heights) {
let maxHeight = heights[0];
for (const num of heights) {
    if (num > maxHeight) {
        maxHeight = num;
    }
}
return maxHeight;
}

const max=tallest(heights);
console.log('max height:', max);