function multiply(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return 'Both arguments must be numbers';
    }
    const mult= a * b;
    return mult;
}
const result = multiply ("5",7);
//console.log(result); 
function fullName(firstName, lastName) {
    if (typeof firstName !== 'string' || typeof lastName !== 'string') {
        return 'Both arguments must be strings';
    }
    const fullName = firstName + ' ' + lastName;
    return fullName;
}
const fullNameResult = fullName("5", "7");
console.log(fullNameResult);