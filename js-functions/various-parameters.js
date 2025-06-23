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