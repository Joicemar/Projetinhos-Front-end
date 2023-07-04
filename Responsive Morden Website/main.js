let nav = document.querySelector('nav');
let open = document.querySelector('.open');
let navLink = document.querySelector('.nav-link');
window.addEventListener('scroll', ()=>{
    nav.classList.toggle('nav-shadow', window.scrollY>0)
})

open.addEventListener('click',()=>{
    navLink.classList.toggle('navButton')
})