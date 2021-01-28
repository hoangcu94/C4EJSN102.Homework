let input = document.getElementById("input");
let start = document.getElementById("startBtn");
let end = document.getElementById("stopBtn");
let number = document.getElementById("result");
let count = 0; 
start.addEventListener ("click", () => {
   td ();
})
function td () {
    number.innerHTML = input.value;
    count = setInterval (() => {
    number.innerHTML--}, 1000
    );
    };
function stop () {
    clearInterval(count);
};
end.addEventListener ("click" , () => {
    stop ();
    number.innerHTML = "Stopped";
})