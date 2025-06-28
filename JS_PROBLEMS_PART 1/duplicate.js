/**
 * array has duplicate elements 
 */

const biryaniKhor=['abul', 'babul','cabul', 'abul', 'babul', 'dabul1','kabul','cabul'];

const numbers=[1,5,61,5,87,7,5,81,61];

const unique=[];
function noDuplicate(arr){
   for (const item of arr) {
     if (unique.includes(item) === false) {
       unique.push(item);
     }
   }
   return unique;
}

const uniqueArray=noDuplicate(biryaniKhor);
console.log(uniqueArray);