// 3. Cho người dùng nhập vào 1 số N, hãy in ra các số nguyên tố nhỏ hơn
// hoặc bằng N.

let n = Number(prompt(`nhap n`));
let output = [];
if (n<2) {
    console.log(`Khong co so nguyen to nao`);
} else {
    for(i=2; i<=n; i++){
        let dem = 0;
        for(let j=1; j<=i; j++){
            if(i%j == 0){
            dem++;
            }
        }
        if(dem == 2){
            output.push(i);    
        }
    }
    console.log(output);
}

