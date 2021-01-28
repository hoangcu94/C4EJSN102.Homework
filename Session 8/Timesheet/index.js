let add = document.getElementById("add");
let project1 = document.getElementById("project");
let task1 = document.getElementById("task");
let timespent1 = document.getElementById("timespent");
let tableSection = document.getElementById("table");

add.addEventListener ("click", () => {
    var x = {};
    x.Project = project1.value;
    x.Task = task1.value;
    x.Time = timespent1.value;
    timeSheetData.push (x);
    console.log (timeSheetData);
    let td1 = `<tr>
    <td>${project1.value}</td>
    <td>${task1.value}</td>
    <td>${timespent1.value}</td>
    </tr> `
    tableSection.innerHTML += td1;
})

project1.value ="";
task1.value= "";
timespent1.value="";
render();
function render () {
    tableSection.innerHTML = "";
for ( let item of timeSheetData) {
    let td2 = `<tr>
    <td>${item.Project}</td>
    <td>${item.Task}</td>
    <td>${item.Time}</td>
    <td class = "remove"><button>X</button></td>
    </tr>`;
    tableSection.innerHTML += td2
}
}
render();

// tableSection.onclick = function(event) {
//     if(event.target.classList.contains("remove")) {
//         let content = event.target.parentElement.innerText;
//     } 
// }