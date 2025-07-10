function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num2 === 0) {
        throw new Error("Division by zero is not allowed");
    }
    return num1 / num2;
}

function calculator(num1, num2, operation) {
    if (operation === "add") {
        return add(num1, num2);
    } else if (operation === "subtract") {
        return subtract(num1, num2);
    } else if (operation === "multiply") {
        return multiply(num1, num2);
    } else if (operation === "divide") {
        return divide(num1, num2);
    } else {
        throw new Error("Invalid operation");
    }
}


console.log(calculator(5, 3, "add"));       
console.log(calculator(5, 3, "subtract"));  
console.log(calculator(5, 3, "multiply"));  
console.log(calculator(5, 3, "divide"));   
