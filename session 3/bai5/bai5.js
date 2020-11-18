// Write a script to ask users enter a sequence of numbers
// the Numbers are separated by commas
// calculate the sum of the numbers and show it to users

let userInput = prompt(`enter a sequence of numbers , the Number are separated by commas`);
let arr = userInput.split(`,`);
// console.log(arr);
let total = 0;
for (i=0; i<arr.length; i++) {
    total+=Number(arr[i]);
}
console.log(total);