// You are a shepherd who owns a flock of sheep
// Each of your sheep of your flock has varied sizes:
// 8.1 Create an array to represent the sizes of your flock, 
//     and log all of your flock size, expected screen output:

let userInput = prompt(`nhap kich thuoc dan cuu cua ban cach nhau boi dau phay`);
let arr = userInput.split(`,`);
console.log(`hello, my name is Cu. kich thuoc dan cuu cua toi la:`);
console.log(...arr);

// 8.2 At the end of each month, you have to choose one and only one sheep to shear 
//     and thus you want to choose the biggest one to maximize your profit. 
//     Add scripts to search for the biggest sheep in your list:
//     Hint: Google ‘JS Array find max’: Math.max(...arr);

// console.log(`now my biggest sheep has ${Math.max(...arr)}, let's shave it`);

// 8.3  When your biggest sheer, its size will return to the default size, which is 8.
//      Hint: Google ‘JS Array indexOf

// let n = Math.max(...arr);
// for (i=0; i<arr.length; i++) {    
//     if (arr[i]== n) {
//         arr[i] =8
//     }
// }
// console.log(`after shaving, here is my flock`);
// console.log(...arr);

// 8.4 In the following month, EVERY sheep in your flock grow, they have their size increased by 50.
//     Log them out

// for (i=0; i<arr.length; i++) {
//     arr[i] = Number(arr[i])+50;
// }
// console.log(...arr);

// 8.5 Let’s do this for 4 months (or as long as you want)

for (i=1; i<=3; i++) {
    let n = Math.max(...arr);
    for (k=0; k<arr.length; k++) {    
        if (arr[k]== n) {
            arr[k] =8
        }
    }
    console.log(`after shaving, here is my flock`);
    console.log(...arr);    
    for (j=0; j<arr.length; j++) {
        arr[j] = Number(arr[j])+50;
    }
    console.log(`Month ${i}`);
    console.log(`one month has`);
    console.log(...arr);
    console.log(`now my biggest sheep has ${Math.max(...arr)}, let's shave it`);    
}
let total = 0;
for (i=0; i<arr.length; i++) {
    total = total + Number(arr[i]);
}
let money = total * 2;
console.log(total);
console.log(money);
