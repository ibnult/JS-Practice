const numbers=[1,2,3,4,5,6,7,8,9,10];

//const reversed= numbers.reverse();
//console.log(reversed); // Output: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

const rev_numbers=[];

for(const num of numbers){
    rev_numbers.unshift(num);
}

console.log(rev_numbers); // Output: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
