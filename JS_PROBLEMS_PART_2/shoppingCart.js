const products=[
    {name: 'shampo', price:300, quantity: 5},
    {name: 'chiruni', price:100, quantity: 4},
    {name: 'shirt', price:700, quantity: 3},
    {name: 'pant', price:1200, quantity: 2}
]

function getShoppingTotal(products) {
    let total = 0;
    for (const product of products) {
        const thisProductCost = product.price * product.quantity;
        total += thisProductCost;
    }
    return total;
}
const total = getShoppingTotal(products);
console.log('total ajk khosabe:', total);