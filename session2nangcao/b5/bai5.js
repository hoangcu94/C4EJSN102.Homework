// 5. Viết chương trình nhập vào số ngẫu nhiên, nếu số đó lớn hơn hoặc bằng
// 0 thì nhập tiếp. Chương trình chỉ dừng lại khi người dùng nhập số âm.
// Tính tổng của các số trước đó và in ra ngoài màn hình.


// let loop = true;
// let x = 0;
// while(loop) {
//     let n = Number(prompt(`nhap so ngau nhien`));
    
//     if ( n >= 0) {
//         x +=n;
        
//     } else {
//         loop = false;
//     }
//     console.log(`${x}`);
// }


// 6. Viết chương trình nhập vào 1 chuỗi bất kì, kiểm tra xem chuỗi đó có đối
// xứng hay không

// let user = prompt(`moi ban nhap chuoi`);
// let n = user.length;

// // console.log(`${n} ${user}`);
// let dom = 0;
// for (i=0; i<=(n-1)/2; i++) {
    
//     // console.log(`${user[i]}`, `${user[n-1-i]}`);
//     if (user[i] !== user[n-1-i]) {
//         dom = dom +1;
//         // break;
//     } 
//     // console.log(dom);
// }
// if (dom == 0) {
//     console.log(true);
// } else console.log(false);
    
    
// 7. Viết chương trình nhập vào 2 số M, N. In ra màn hình hình chữ nhật có
// kích thước M x N 


//////////////////////////////////////////

// 8. Viết chương trình để giải bài toán sau
// Vừa gà vừa chó
// bó lại cho tròn
// ba mươi sáu (36) con
// một trăm (100) chân chẵn
// Hỏi có bao nhiêu con gà và bao nhiêu con chó.

// let dog;
// let chicken;
// let leg = Number(prompt(`nhap so chan`));
// let number = Number(prompt(`nhap tong so con`));
// dog = (leg - 2*number)/2;
// chicken = number-dog;
// console.log(`so con cho: ${dog}`);
// console.log(`so con ga: ${chicken}`);

// 9. (Thích thì làm, không thích thì làm @@) – Nhập vào các số:
// a1, b1, c1
// a2,b2, c2
// Hãy tìm nghiệm của hệ phương trình:

// let x;
// let y;
// let a1 = Number(prompt(`nhap a1`));
// let b1 = Number(prompt(`nhap b1`));
// let c1 = Number(prompt(`nhap c1`));
// let a2 = Number(prompt(`nhap a2`));
// let b2 = Number(prompt(`nhap b2`));
// let c2 = Number(prompt(`nhap c2`));
// x=(c1*b2 -c2*b1)/(a1*b2-a2*b1);
// y = (c1-a1*x)/b1;
// console.log(`x= ${x}`);
// console.log(`y= ${y}`);

