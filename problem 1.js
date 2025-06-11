let products = ["Laptop", "Phone", "Laptop", "Tablet", "Phone"];

let uniqueProducts = [];
for (let i = 0; i < products.length; i++) {
  const element = products[i];
  if (!uniqueProducts.includes(element)) {
    uniqueProducts.push(element);
  }
}
console.log(uniqueProducts); // Output: ["Laptop", "Phone", "Tablet"]
