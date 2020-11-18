// 10. (Optional) Write a script asking users to enter a sequence of names,
// separated bycommas (,),
// Create a new array containing the names, each surrounded with < >;. 
// update < > ========= arr.map (thay cac phan tu trong mang)

// cach 1

let userInput = prompt(`nhap chuoi ten cach nhau bang dau phay`);
let array1 = userInput.split(`,`);
for (i=0; i< array1.length; i++) {
    array1[i] = `<`+ array1[i] + `>`;
}
alert(`${userInput} => ${array1}`);
// cach 2

// let array2 = array1.map(x=> `<` + x + `>`);
// alert(`${userInput} => ${array2}`);

