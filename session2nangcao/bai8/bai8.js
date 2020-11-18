// 8. Viết chương trình để giải bài toán sau
// Vừa gà vừa chó
// bó lại cho tròn
// ba mươi sáu (36) con
// một trăm (100) chân chẵn
// Hỏi có bao nhiêu con gà và bao nhiêu con chó.

let dog;
let chicken;
let leg = Number(prompt(`nhap so chan`));
let number = Number(prompt(`nhap tong so con`));
dog = (leg - 2*number)/2;
chicken = number-dog;
console.log(`so con cho: ${dog}`);
console.log(`so con ga: ${chicken}`);