let a=5;
let b=10;

console.log("Before swap: a =", a, ", b =", b);
 const temp = a;
a = b;
b = temp;
console.log("After swap: a =", a, ", b =", b);

let x=5;
let y=10;
console.log("Before swap: x =", x, ", y =", y);
[x, y] = [y, x];
console.log("After swap: x =", x, ", y =", y);