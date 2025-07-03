const heights=[65,66,68,72,78,60];


function tallest(heights) {
 const tallestHeight = Math.max(...heights);
 return tallestHeight;
}

const max=tallest(heights);
console.log('max height:', max);