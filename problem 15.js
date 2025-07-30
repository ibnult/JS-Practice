function isAnagram(str1, str2) {
  
  const cleanStr1 = str1.replace(/[^a-z]/gi, '').toLowerCase();
  const cleanStr2 = str2.replace(/[^a-z]/gi, '').toLowerCase();

  const sortedStr1 = cleanStr1.split('').sort().join('');
  const sortedStr2 = cleanStr2.split('').sort().join('');

  return sortedStr1 === sortedStr2;
}

console.log(isAnagram("Listen", "Silent"));           
console.log(isAnagram("The Eyes", "They See"));     
console.log(isAnagram("Hello", "Olelh"));        
console.log(isAnagram("Hello", "World"));  
console.log(isAnagram("Astronomer", "Moon starer"));    
