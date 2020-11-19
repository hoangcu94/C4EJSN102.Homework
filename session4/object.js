const phoneList = [
    {
        name: `Peter`,
        phone: `0973712312`
    },
    {
        name: `Tony`,
        phone: `09812321`
    }
];
let loop = true;
while(loop) {
    
    let userInput = prompt(`Ban muon lam gi C/R/U/D/E`);
    userInput = userInput.toUpperCase();
    let dem = 0;
    if (userInput == `C`) {
        let newPhone = {};
        newPhone.name = prompt(`Nhap ten nguoi dung moi`);
        newPhone.phone = Number(prompt(`nhap sdt cua ${newPhone.name}`));
        phoneList.push(newPhone);        
    } else if (userInput == `U`) {
        let checkName = prompt(`nhap ten ban muon tim`);
        checkName = checkName.toUpperCase();
        
        for (i=0; i<phoneList.length; i++) {
            if(checkName == phoneList[i].name.toUpperCase()) {
                dem =dem + 1;
                phoneList[i].name = prompt(`nhap ten moi`);
                phoneList[i].phone = prompt(`nhap sdt moi`);
            }
        }
        if(dem ==0) {
            alert(`khong tim thay contact nay`);
        }        
    } else if (userInput == `D`) {
        let checkName2 = prompt(`Nhap ten ban muon xoa`);
        checkName2 = checkName2.toUpperCase();
        for(i=0; i<phoneList.length; i++){
            if(checkName2 == phoneList[i].name.toUpperCase()) {
                phoneList.splice(i,1);
                alert(`da xoa thanh cong`);
                dem++;
            }
        }
        if(dem == 0){
            alert(`khong tim thay ten trong contact`);
        }
    } else if (userInput == `R`) {
        for (i=0; i<phoneList.length; i++) {
            console.log(`${phoneList[i].name}: ${phoneList[i].phone}`);            
        }
        console.log(`--------------------------`);
    } else {
        loop = false;
    }
}
