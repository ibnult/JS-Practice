const sentence='I am learning JavaScript';

let reverse='';
for (const letter of sentence) {
  reverse = letter + reverse;
}
console.log(reverse); // Output: tpircSavaJ gninrael ma I

//for loop
//ignore 
for (let i=0; i<sentence.length; i++) {
  //console.log(i);
  console.log(sentence[i]);
}