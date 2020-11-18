// 5. Viết chương trình nhập vào số ngẫu nhiên, nếu số đó lớn hơn hoặc bằng
// 0 thì nhập tiếp. Chương trình chỉ dừng lại khi người dùng nhập số âm.
// Tính tổng của các số trước đó và in ra ngoài màn hình.


let loop = true;
let x = 0;
while(loop) {
    let n = Number(prompt(`nhap so ngau nhien`));
    
    if ( n >= 0) {
        x +=n;
        
    } else {
        loop = false;
    }
    console.log(`${x}`);
}

