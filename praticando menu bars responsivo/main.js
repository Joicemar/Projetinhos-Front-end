

let menu2Toggle = document.querySelector('.menu2');
let menu_ulToggle = document.querySelector('.menu-ul');
let barToggle = document.querySelector('.bar');

barToggle.onclick = function () {
    barToggle.classList.toggle('active');
    menu2Toggle.classList.toggle('active')
    menu_ulToggle.classList.toggle('active')
}


