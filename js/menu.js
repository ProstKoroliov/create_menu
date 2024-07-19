// menu.js 

function createMenu() {

let elemMenu = formMenu.elemMenu.value;

let fc = formMenu.fc.value;
let bc = formMenu.bc.value;
let hc = formMenu.hc.value;

// console.log(elemMenu, fc, bc, hc);

let arrMenu = elemMenu.split(", ");
// console.log(arrMenu);

// создаем меню
myMenu.innerHTML = "";
for (i=0; i<arrMenu.length; i++) 
myMenu.innerHTML += `
<li><a href="#">${arrMenu[i]}</a></li>
`;

myMenu.innerHTML = `<ul>${myMenu.innerHTML}</ul>`;

formMenu.myButton.value = "Изменить меню";


newStyle.innerHTML = `

a {
    background: ${bc};
    color: ${fc};
}


a:hover {
    background:${hc}; 
}

`;

}