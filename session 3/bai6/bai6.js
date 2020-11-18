// Write a script asking users to enter a sequence of numbers, 
// the numbers are separated by commas, 
// find the smallest number and log it out to users

let userInput = prompt(`enter the numbers are separated by commas`);
let arr = userInput.split(`,`);
let min = 0;
console.log(arr);
for (i=0; i<arr.length; i++) {
    if (min > Number(arr[i])) {
        min = arr[i];
    }   
}
console.log(min);