
let n = Number(prompt(`nhap n`));
let output = [];
if (n<2) {
    console.log(`khong co so nguyen to`);
} else {
    for(i=2; i<=n; i++) {
        let dem = 0;
        for (j=1; j<=i; j++) {
            if(i%j == 0) {
                dem++;
            }    
        }
        if (dem == 2) {
                output.push(i);
            }
    }
    console.log(output);
}