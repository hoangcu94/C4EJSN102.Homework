// 6. Viết chương trình nhập vào 1 chuỗi bất kì, kiểm tra xem chuỗi đó có đối
// xứng hay không

let user = prompt(`moi ban nhap chuoi`);
let n = user.length;

// console.log(`${n} ${user}`);
let dom = 0;
for (i=0; i<=(n-1)/2; i++) {
    
    // console.log(`${user[i]}`, `${user[n-1-i]}`);
    if (user[i] !== user[n-1-i]) {
        dom = dom +1;
        // break;
    } 
    // console.log(dom);
}
if (dom == 0) {
    console.log(true);
    console.log(`chuoi doi xung`);
    
} else {
    console.log(false);
    console.log(`chuoi khong doi xung`);
}
