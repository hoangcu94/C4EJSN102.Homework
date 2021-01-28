let timeSheetData = [
    {
        project:"Learn front-end",
        task: "Learn HTML" ,
        timeSpent:6,
    }, 
    {
        project:"Learn front-end",
        task: "Learn CSS",
        timeSpent:8,
    },
    {
        project:"Learn front-end",
        task: "Learn JS Variables and Data Types",
        timeSpent:6,
    },    {
        project:"Learn git",
        task: "Learn git basics",
        timeSpent:2,
    },
];
const tbody = document.getElementById("table-body");
const add = document.getElementById("add");
const project = document.getElementById("project");
const task = document.getElementById("task");
const timeSpent = document.getElementById("time-spent");
const update = document.getElementById("update");
// let updateIndex = undefined;
let updateIndex = "";
// console.log(tbody);

render(timeSheetData);

function render(arr) {
    tbody.innerHTML = "";
    arr.forEach(function(item,index){
        let row = `
        <tr>
            <td>${item.project}</td>
            <td>${item.task}</td>
            <td>${item.timeSpent}</td>
            <td id="${index}">
                <button class="delete">X</button>
                <button class="update">U</button>
            </td>
        </tr>
        `;
        // tbody.innerHTML += row;
        tbody.insertAdjacentHTML("beforeend",row);
    });
    update.style.display = "none";
}
add.onclick = function () {
    let projectValue = project.value;
    let taskValue = task.value;
    let timeSpentValue = timeSpent.value;
    // console.log(projectValue, taskValue, timeSpendValue);
    let newproject = {
        project: projectValue,
        task: taskValue,
        timeSpent: timeSpentValue,
    };
    timeSheetData.push(newproject);
    render(timeSheetData);
    // console.log(timeSheetData);
};
// // Su dung even object
tbody.onclick = function(e) {
    // console.log(e.target);
    if(e.target.classList.contains("delete")) {
        let index = e.target.parentElement.id;
        // console.log(index);
        timeSheetData.splice(index,1);
        render(timeSheetData);
    }
    if(e.target.classList.contains("update")) {
        let index = e.target.parentElement.id;
        // console.log(index);
        let item = timeSheetData[index];
        project.value = item.project;
        task.value = item.task;
        timeSpent.value = item.timeSpent;
        updateIndex = index;
        // Show nut update
        // update.classList.remove("hidden");
        update.style.display = "inline-block";
        add.style.display = "none";

    }
};

update.onclick = function() {
    if(updateIndex) {
        timeSheetData[updateIndex].project = project.value;
        timeSheetData[updateIndex].task = task.value;
        timeSheetData[updateIndex].timeSpent = timeSpent.value;
        render(timeSheetData);
        // update.classList.add("hidden");
        update.style.display = "none";
        add.style.display = "inline-block";
        project.value = "";
        task.value = "";
        timeSpent.value = "";
    }
};

// let request = fetch(`https://jsonplaceholder.typicode.com/todos`);
// console.log(request);
// request
// .then(function(response) {
//     // console.log(response.json);
//     return response.json;
// })
// .then(function(data) {
//     console.log(data);
// })
// .catch(function (error) {
//     console.log(error);
// });