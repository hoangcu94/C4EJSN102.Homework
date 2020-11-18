// 1. Cho người dùng nhập vào số N, sử dụng vòng lặp for hãy tính:
// Tổng các số chẵn trong đoạn từ 1 đến N
// Tổng các số lẻ trong đoạn từ 1 đến N

let n = Number(prompt(`Enter N number`));
let x = 0;
let y = 0;
for (i=1; i<=n; i++) {
    if (i%2 ==0) {
        x = x + i;
    } else {
        y = y+i;
    }
} 
console.log(`Tong cac so chan tu 1 den ${n} la ${x}`);
console.log(`Tong cac so le tu 1 den ${n} la ${y}`);