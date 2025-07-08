const numbers=[300,100,700,1200];

const products=[
    {name: 'shampo', price:300},
    {name: 'chiruni', price:100},
    {name: 'shirt', price:700},
    {name: 'pant', price:1200}
]

function getShoppingTotal(products) {
    for (const product of products) {
        console.log(product);
    }
}
const total= getShoppingTotal(products);
console.log('total ajk khosabe:', total);