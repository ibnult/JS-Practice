/**
 * first100 =100;
 * 101-200 = 90;
 * above 200 = 70;
 */

function layerdDdiscountedPrice(quantity) {
    const first100Price = 100;
    const second100Price = 90;
    const above200Price = 70;

    if (quantity <= 100) {
        const total= quantity * first100Price;
        return total;
    }
    else if (quantity <= 200) {
        const first100Total = 100 * first100Price;
        const remainingQuantity = quantity - 100;
        const remainingTotal= remainingQuantity * second100Price;
        const total = first100Total + remainingTotal;
        return total;
    }
    else {
        const first100Total = 100 * first100Price;
        const secondTotal= 100 * second100Price;
        const remainingQuantity = quantity - 200;
        const remainingTotal = remainingQuantity * above200Price;
        const total = first100Total + secondTotal + remainingTotal;
        return total;
    }
}

const total = layerdDdiscountedPrice(5);
console.log(total); 
const total2 = layerdDdiscountedPrice(150);
console.log(total2); 
const total3 = layerdDdiscountedPrice(250);
console.log(total3);

