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

// Using arithmetic operations
let m = 5;
let n = 10;

console.log("Using arithmetic operations:");
console.log("Before swap: m =", m, ", n =", n);

m = m + n; 
n = m - n; 
m = m - n; 

console.log("After swap: m =", m, ", n =", n);

