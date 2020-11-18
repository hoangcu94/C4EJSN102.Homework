// Create an array containing at least 5 numbers, 
// then ask users enter a number, 
// perform a search to look for the number in the array, 
// if the number is found, tell user that with the index of it in the array, 
// if not, also tell them so

const arr = [3, 4, 6, -9, 10, -88, 2];
let userInput = prompt(`enter number you want locking for my array`);
let dem = 0;
for (i=0; i<arr.length; i++) {
    if (userInput == Number(arr[i])) {
        dem =dem + 1;
        alert(`${userInput} is found in my array at the index ${i}`);
    }          
}
if (dem == 0) {
    alert(`${userInput} is not found in my array`); 
}