// 2. Số nguyên tố là số tự nhiên lớn hơn 1 và chỉ chia hết cho 1 và chính nó.
// Cho người dùng nhập vào số N, kiểm tra xem N có phải là số nguyên tố
// hay không.

// let n = Number(prompt(`enter N number`));
// let x = true;
//     if ( n < 2) {
//         x = false;
//     } else if ( n == 2) 
//     {
//         x = true;  
//     } else {
//         for(j=3; j<=n; j+=1) {
//            for (i = 2; i<j; i+=1) {
//             if (j%i == 0) {
//                 x = false;
//                 break;
//             }
//         } 
//         }
        
//     }
// if (x == true) {
//     console.log(`la so nguyen to`);
// } else console.log(`khong phai so nguyen to`);

// Cach 2

let userInput = Number(prompt(`enter N number`));
let dem = 0;
if(userInput<2) {
    console.log(`${userInput} khong phai so nguyen to`);
} else if(userInput == 2) {
    console.log(`${userInput} la so nguyen to`);
} else {
    for(i=1; i<=userInput; i++) {
        if(userInput%i == 0) {
            dem = dem +1;
        }
        
    }
    if (dem == 2) {
            console.log(`${userInput} la so nguyen to`);
        } else console.log(`${userInput} khong phai so nguyen to`);
}



    