const rule = document.getElementById("rule");
const start = document.getElementById("form-start");
const content = document.getElementById("content");
const agree = document.getElementById("agree");
content.style.display = "none";
start.style.display = "none";
rule.onclick = function () {
    start.style.display = "none";
    content.style.display = "block";
}
agree.onclick = function () {
    start.style.display = "flex";
    content.style.display = "none";
}   


