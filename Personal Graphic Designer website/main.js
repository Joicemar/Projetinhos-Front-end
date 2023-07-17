
let toggle = document.querySelector('.toggle');
let nav = document.querySelector('.nav_list');

toggle.addEventListener('click', () =>{
    toggle.classList.toggle('is-clicked');
    nav.classList.toggle('active');
})
