// 9. (Thích thì làm, không thích thì làm @@) – Nhập vào các số:
// a1, b1, c1
// a2,b2, c2
// Hãy tìm nghiệm của hệ phương trình:

let x;
let y;
let a1 = Number(prompt(`nhap a1`));
let b1 = Number(prompt(`nhap b1`));
let c1 = Number(prompt(`nhap c1`));
let a2 = Number(prompt(`nhap a2`));
let b2 = Number(prompt(`nhap b2`));
let c2 = Number(prompt(`nhap c2`));
x=(c1*b2 -c2*b1)/(a1*b2-a2*b1);
y = (c1-a1*x)/b1;
console.log(`x= ${x}`);
console.log(`y= ${y}`);
