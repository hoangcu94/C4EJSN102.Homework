const so = document.getElementById("count")
console.log(so)
console.dir(so)
num = 0
function countup(){
    num += 1
    so.textContent = num
}
function countdown(){
    num -= 1
    so.textContent = num
}

