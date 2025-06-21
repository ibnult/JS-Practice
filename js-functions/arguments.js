function doubleIt (number){
    const doubled = number*2;
    console.log(number, doubled);
}

console.log('I will call the function');
doubleIt(5);
console.log('I will call the function again');
doubleIt(10);
console.log('I will call the function again');
doubleIt(15);

//

function difference (num1, num2){
    const diff = num1 - num2;
    console.log(num1, num2,'Age difference is', diff);
}

const fatherAge = 50;
const sonAge = 20;

difference(fatherAge, sonAge);