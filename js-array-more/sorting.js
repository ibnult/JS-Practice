const persons = [ 'rakib', 'nokib', 'sakib', 'akib', 'dakib' ];
const sortedPersons = persons.sort();
console.log(sortedPersons);

//sort 

/*
Ascending order----> smaller to larger: [2, 3, 4, 6, 7, 8]
Descending order----> larger to smaller : [8, 7, 6, 4, 3, 2]
*/
const numbers = [4,7,12,8,43,6,1];
// const numbers_asc = numbers.sort() not work for numbers
const numbers_asc = [...numbers].sort((a, b) => a - b); // Ascending order
const numbers_desc = [...numbers].sort((a, b) => b - a); // Descending order

console.log(numbers_asc);
console.log(numbers_desc);