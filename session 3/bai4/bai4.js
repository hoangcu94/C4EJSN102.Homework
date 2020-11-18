// 4. Write a script to simulate a clothes shop, asking and performing certain tasks from users
let loop = true;
let clothes = [`Jeans`, `T-Shirt`, `Shocks`];
while(loop) {
    let userInput = prompt(`hi there, welcome to shop clothes, what do you want (C/R/U/D)`);
    let userInput2 = userInput.toUpperCase();
    if (userInput2 == `C`) {
        let newItem = prompt(`enter the newitem`);
        clothes.push(newItem);
        alert(`Done!!`);
    } else if (userInput2 == `U`) {
        let x = prompt(`enter the position you want to update`);
        clothes[x-1] = prompt(`enter new name of item`);
        alert(`Done!`);
    
    } else if (userInput2 == `D`) {
        let y = prompt(`enter the position you want delete`);
        clothes.splice(y-1,1);
        alert(`Done!`);
    } else if (userInput2 == `R`) {
        console.log(`The current item are:`);
        for (i=1; i<=clothes.length; i++)
        console.log(`${i}. ${clothes[i-1]}`);
    } else {
        loop = false;
        alert(`This command is not supposted`);
    }
}
