const timer = document.getElementById("timer");
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const result = document.getElementById("result");
let id = undefined;
start.onclick = function(){
    console.log("hello word");
    let value = timer.value;
    console.log(value);
    id = setInterval(function() {
        value = value - 1;
        result.innerHTML = value;
        if( value === 0) {
            clearInterval(id);
            result.innerHTML = "Finish";
        }
    }, 1000);
};
stop.onclick = function() {
    if(id) {
        clearInterval(id);
        result.innerHTML = "Stop";
    }   
};