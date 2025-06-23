/**
 * for a given string tell me whether it has even   number of characters or not 
 */
function evenSizedString(str){
    const size=str.length;
    console.log("String: " + str,",Size: " + size);
    if(size % 2 === 0){
        console.log("The string has an even number of characters.");
    } else {
        console.log("The string has an odd number of characters.");
    
    }
}
evenSizedString("Hello, I am a string.");

function doubleOrtTriple(num,doDouble){
    if(doDouble=== true){
        const result= num * 2;
        return result;
    } else {
        const result= num * 3;
        return result;
    }
}
console.log(doubleOrtTriple(5,true));  // Output: 10
console.log(doubleOrtTriple(5,false)); // Output: 15

function numberOfElements(numbers){
    const len=numbers.length;
    return len;
}
console.log(numberOfElements([1,2,3,4,5])); // Output: 5