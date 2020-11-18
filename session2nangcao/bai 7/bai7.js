// 7. Viết chương trình nhập vào 2 số M, N. In ra màn hình hình chữ nhật có
// kích thước M x N 

let x = Number(prompt(`nhap chieu dai`));
let y = Number(prompt(`nhap chieu rong`));
   
for (i=1 ; i<=x; i++) {
    let a = ``;
    for(j=1; j<=y; j++) {
        a = a + `*`;  
    }
    console.log(`${i} ${a}`);
}