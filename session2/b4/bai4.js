// Write a program to calculate the factorial of n: (1 * 2 * 3 *... *n), n enter by user

let n = prompt(`nhap n`);
let x = 1;
for (let i=1; i<=n; i++) {
    x=x*i;
}
alert(`${n}! = ${x}`);