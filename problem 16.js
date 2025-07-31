function calculateCartTotal(cart) {
  if (!Array.isArray(cart)) return "Invalid";

  let total = 0;

  for (let item of cart) {
    if (
      typeof item.name !== "string" ||
      typeof item.quantity !== "number" ||
      typeof item.price !== "number"
    ) {
      return "Invalid";
    }
    const freeItems = Math.floor(item.quantity / 3);
    const paidItems = item.quantity - freeItems;
    total += paidItems * item.price;
  }

  let discount = 0;

  if (total > 2000) {
    discount = total * 0.1;
  }

  let totalAfterDiscount = total - discount;

  return {
    totalBeforeDiscount: total,
    discount: Math.round(discount),
    totalAfterDiscount: Math.round(totalAfterDiscount)
  };
}
const cart = [
  { name: "Rice", quantity: 5, price: 50 },
  { name: "Oil", quantity: 2, price: 150 },
  { name: "Salt", quantity: 3, price: 30 },
  { name: "Chicken", quantity: 4, price: 300 }
];

console.log(calculateCartTotal(cart));
