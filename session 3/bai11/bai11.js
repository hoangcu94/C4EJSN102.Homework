// (Optional) Write a script asking users to enter a sequence of Numbers, separated bycommas (,). 
// Create a new array containing only the odd Numbers of the entered sequence. 
// If you need hints, they are at the end of this homework
// <<<<<< DELETE  ============= FILTER >>>>>>>>>
// <<<<<< arr.splice ______________ arr.filter >>>>>>>

// let userInput = prompt(` nhap chuoi so cach nhau bang dau phay`);
// let array1 = userInput.split(`,`);
const array1 = [1,2,3,4,5,6,7,8,9];
// console.log({array1});

// cach 1

// for(i=0; i<array1.length; i++) {   
//     if (Number(array1[i])%2 == 0) {
//         array1.splice(i,1);
//     }    
// }
// alert(`${userInput} => ${array1}`);

// Cach 2

let array2 = array1.filter(x=> x%2!=0);
console.log (`${array2}`);