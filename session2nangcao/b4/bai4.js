// 4. Dãy Fibonacci là dãy vô hạn các số tự nhiên bắt đầu bằng hai phần tử 0
// và 1, các phần tử sau đó được thiết lập theo quy tắc mỗi phần tử luôn
// bằng tổng hai phần tử trước nó

let n = Number(prompt(`nhap so can xet`));
let Fibonacci = [0,1];
for (i=2; i<=n; i++) {
    Fibonacci[i] = Fibonacci[i-1] + Fibonacci[i-2];
    
}console.log(Fibonacci[n]);