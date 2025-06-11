let student = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};

// Easiest: Object.keys().length
let count = Object.keys(student).length;

console.log(count);
// Harder: Using a for...in loop
let count2 = 0;     
for (let key in student) {
    count2++;
}
console.log(count2);