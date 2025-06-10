const first = 'Abid';
const last = 'Hassan';

const fullName = first + ' ' + last;
console.log(fullName); // Output: Abid Hassan

//using concat method
const fullNameConcat = first.concat(' ', last);
console.log(fullNameConcat); // Output: Abid Hassan
// Note: The concat method is not necessary here, but it can be used for demonstration.
//includes 
console.log(last.includes('s'));