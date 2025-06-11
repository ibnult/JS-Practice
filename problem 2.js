//Given an array of products, each  with a category, separate them into two arrays: one for electronics and one for clothing. Store the results in an object.

const products = [
    { name: "Laptop", category: "electronics" },
    { name: "T-shirt", category: "clothing" },
    { name: "Headphones", category: "electronics" },
    { name: "Jeans", category: "clothing" },
];

const categorizedProducts = {
    electronics: [],
    clothing: []
};

for (let i = 0; i < products.length; i++) {
    const singleProduct = products[i];
    if (singleProduct.category === "electronics") {
        categorizedProducts.electronics.push(singleProduct.name);
    } else if (singleProduct.category === "clothing") {
        categorizedProducts.clothing.push(singleProduct.name);
    }
}
console.log(categorizedProducts);
// Output: { electronics: ["Laptop", "Headphones"], clothing: ["T-shirt", "Jeans"] }
