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

// Using reduce
const reversedWithReduce = sentence.split('').reduce((acc, letter) => letter + acc, '');
console.log(reversedWithReduce); // Output: tpircSavaJ gninrael ma I

// Using recursion
function reverseString(str) {
  if (str === '') {
    return '';
  } else {
    return reverseString(str.substr(1)) + str.charAt(0);
  }
}

console.log(reverseString(sentence)); // Output: tpircSavaJ gninrael ma I

// Using a stack
function reverseWithStack(str) {
  const stack = [];
  for (const char of str) {
    stack.push(char);
  }
  let reversed = '';
  while (stack.length > 0) {
    reversed += stack.pop();
  }
  return reversed;
} 
console.log(reverseWithStack(sentence)); // Output: tpircSavaJ gninrael ma I

// Using a forEach loop
function reverseWithForEach(str) {
  let reversed = '';
  str.split('').forEach(letter => {
    reversed = letter + reversed;
  });
  return reversed;
}
console.log(reverseWithForEach(sentence)); // Output: tpircSavaJ gninrael ma I  

// Using a while loop
function reverseWithWhile(str) {
  let reversed = '';
  let i = str.length - 1;
  while (i >= 0) {
    reversed += str[i];
    i--;
  }
  return reversed;
}
console.log(reverseWithWhile(sentence)); // Output: tpircSavaJ gninrael ma I

// Using a do-while loop
function reverseWithDoWhile(str) {
  let reversed = '';
  let i = str.length - 1;
  do {
    reversed += str[i];
    i--;
  } while (i >= 0);
  return reversed;
} 
console.log(reverseWithDoWhile(sentence)); // Output: tpircSavaJ gninrael ma I

// Using a generator function
function* reverseGenerator(str) {
  for (let i = str.length - 1; i >= 0; i--) {
    yield str[i];
  }
}
function reverseWithGenerator(str) {
  let reversed = '';
  for (const char of reverseGenerator(str)) {
    reversed += char;
  }
  return reversed;
}
console.log(reverseWithGenerator(sentence)); // Output: tpircSavaJ gninrael ma I

// Using Array.prototype.map
function reverseWithMap(str) {
  return str.split('').map((_, i, arr) => arr[arr.length - 1 - i]).join('');
}
console.log(reverseWithMap(sentence)); // Output: tpircSavaJ gninrael ma I

// Using Array.prototype.filter
function reverseWithFilter(str) {
  return str.split('').filter((_, i, arr) => {
    return arr[arr.length - 1 - i];
  }).join('');
}
console.log(reverseWithFilter(sentence)); // Output: tpircSavaJ gninrael ma I

// Using Array.prototype.reduceRight
function reverseWithReduceRight(str) {
  return str.split('').reduceRight((acc, letter) => acc + letter, '');
} 
console.log(reverseWithReduceRight(sentence)); // Output: tpircSavaJ gninrael ma I

// Using Array.prototype.flatMap
function reverseWithFlatMap(str) {
  return str.split('').flatMap((letter, i, arr) => arr[arr.length - 1 - i]).join('');
}
console.log(reverseWithFlatMap(sentence)); // Output: tpircSavaJ gninrael ma I

// Using Array.prototype.some
function reverseWithSome(str) {
  let reversed = '';
  str.split('').some((letter, i, arr) => {
    reversed += arr[arr.length - 1 - i];
    return false; // Continue until the end
  });
  return reversed;
}
console.log(reverseWithSome(sentence)); // Output: tpircSavaJ gninrael ma I

// Using Array.prototype.every
function reverseWithEvery(str) {
  let reversed = '';
  str.split('').every((letter, i, arr) => {
    reversed += arr[arr.length - 1 - i];
    return true; // Continue until the end
  });
  return reversed;
}
console.log(reverseWithEvery(sentence)); // Output: tpircSavaJ gninrael ma I


// Using Array.prototype.find
function reverseWithFind(str) {
  let reversed = '';
  str.split('').find((letter, i, arr) => {
    reversed += arr[arr.length - 1 - i];
    return false; // Continue until the end
  });
  return reversed;
}
console.log(reverseWithFind(sentence)); // Output: tpircSavaJ gninrael ma I

// Using Array.prototype.findIndex
function reverseWithFindIndex(str) {
  let reversed = '';
  str.split('').findIndex((letter, i, arr) => {
    reversed += arr[arr.length - 1 - i];
    return false; // Continue until the end
  });
  return reversed;
}
console.log(reverseWithFindIndex(sentence)); // Output: tpircSavaJ gninrael ma I

// Using Array.prototype.includes
function reverseWithIncludes(str) {
  let reversed = '';
  str.split('').forEach((letter, i, arr) => {
    if (arr.includes(letter)) {
      reversed += arr[arr.length - 1 - i];
    }
  });
  return reversed;
}
console.log(reverseWithIncludes(sentence)); // Output: tpircSavaJ gninrael ma I