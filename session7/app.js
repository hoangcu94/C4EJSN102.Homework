// Ex1. Vi tri trong documentation

// beforebegin
// <ul>
    // afterbegin
    // beforeend
// </ul>
// afterend
// 1-d; 2-a
// 3-c ; 4-b 


// const container = document.getElementById(`list`);
// for(i = 0; i < 3; i++) {
//     container.insertAdjacentHTML(`beforeend`, `<li>${i}</li>`)
// }

// Ex2. setTimeout va setInterval
// setTimeout chi kich hoat 1 lan, muon kich hoat tiep thi phai them 1 dong setTimeout nua
// setInterval kich hoat lien tiep. De dung lai thi phai co them ham clearInterval()

// function myTime() {
//     console.log(`say Hello`);
// }
// setTimeout(myTime,1000);

// let myTime = setInterval(() => {
//     console.log(`hello world`)
// }, 1000);
// setTimeout(() => {
//    clearInterval(myTime) 
// }, 4000);

// ex3. 
// 3.1 Yes
// 3.2 NO

//ex4.
// function myFunction() {
//     const x = document.getElementsByTagName(`li`);
//     for(i=0; i< x.length; i++) {
//         console.log(x[i].innerHTML);
//         console.log(x[i].innerText);
//     }   
// }
// myFunction()

//ex5.
// function myFunction() {
//     const x = document.getElementsByClassName(`singer`);
//     console.log(x[1]);   
// }
// myFunction()

// Ex12
// const items = ["Backpack","MiBand watch", "Ring"];
// const list = document.getElementById(`list`);
// console.log(list);

// render(items);

// function render(arr) {
//     list.innerHTML = "";
//     for (let item of arr) {
//         //cach 1
//         let li = `<li class="list-item">${item}<button class="remove-btn">Remove</button></li>`;
//         list.innerHTML += li;
//     }
// }
// let input = document.getElementById(`input`);
// let add = document.getElementById(`add-btn`);
// console.log(input);
// console.log(add);
// add.onclick = function (){
//     // Lay ra gia tri cua input
//     const value = input.value;
//     //Day gia tri vao trong mang item
//     items.push(value);
//     console.log(items);
//     render(items);
//     // Reset lai gia tri cho o input
//     input.value = "";
// }

// list.onclick = function (event) {
//     // Goi btn ra
//     if (event.target.classList.contains("remove-btn")){
//         // console.log(`Hello world`);
//         // Logic
//         let content = event.target.parentElement.innerText;
//         content = content.replace("Remove", "");
//         console.log(content);

//         // // Tien hanh xoa khoi mang
//         //cach 1
//         // // let newItems = items.filter(function(item, index){
//         // //     return item !== content;
//         // // });
//         // //render(newItems);

//         // Cach 2
//         items.forEach(function(item, index){
//             if (item === content) {
//                 items.splice(index, 1);
//             }
//         });
//         // // Render lai voi mang moi
//         render(items);       
//     };
//     // Goi li ra
//     if (event.target.classList.contains("list-item")) {
//         if(event.target.style.textDecoration != "line-through") {
//             event.target.style.textDecoration = "line-through";           
//         } else {
//             event.target.style.textDecoration = "";
//         }
//     }
// };


//FORM

const mainForm = document.getElementById("main-form");
mainForm.onsubmit = function (event) {
    event.preventDefault();
    // Logic
    // console.log("Hello world");

    let email = mainForm.email.value;
    let password = mainForm.password.value;
    if(!email && !password) {
        document.getElementById("error1").innerHTML = 'Invalid email';
        document.getElementById("error2").innerHTML = 'Invalid password';
    } else if(!email) {
        document.getElementById("error1").innerHTML = "Invalid email";
        document.getElementById("error2").style.display = 'none';
    } else if (!password){
        document.getElementById("error1").style.display = 'none';
        document.getElementById("error2").innerHTML = "Invalid password";
    } else {
        // document.getElementById("error").innerHTML = "";
        document.getElementById("error1").style.display = 'none';
        document.getElementById("error2").style.display = 'none';
        alert("Login successfully");
    }
}


