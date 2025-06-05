const sentence='I am learning JavaScript';

let reverse='';
for (const letter of sentence) {
  reverse = letter + reverse;
}
 console.log(reverse); // Output: tpircSavaJ gninrael ma I

//for loop
//ignore 
let rev='';
for (let i=0; i<sentence.length; i++) {
  //console.log(i);
  //console.log(sentence[i]);
  const letter = sentence[i];
  rev = letter + rev;
}
console.log(rev); // Output: tpircSavaJ gninrael ma I

//shortcut
const reversed= sentence.split('').reverse().join('');
console.log(reversed); // Output: [ 'I am learning JavaScript' ]