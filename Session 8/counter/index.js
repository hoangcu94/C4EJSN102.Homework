let count = 0;
let add = document.getElementById("add");
let sub = document.getElementById("subtract");
let result = document.getElementById("number");
add.addEventListener ("click", () => {
    count++;
    result.innerHTML = count;
})
sub.addEventListener ("click", () => {
    count--;
    result.innerHTML = count;
})