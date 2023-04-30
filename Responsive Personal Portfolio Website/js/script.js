
const header = document.querySelector("header");

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", this.window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

const sr = ScrollReveal ({
    distance: '125px',
    duration: 1500,
    reset: true
})

sr.reveal('.home-text', { delay:190, origin: 'right' })

sr.reveal('.services, .portfolio, .contact', { delay:250, origin: 'top' })

sr.reveal('.about', { delay:250, origin: 'left' })

//Cursor:
let cursor1 = document.querySelector('.cursor1');
let cursor2 = document.querySelector('.cursor2');

window.onmousemove = (e) =>{
    cursor1.style.top = e.pageY + 'px';
    cursor1.style.left = e.pageX + 'px';
    cursor2.style.top = e.pageY + 'px';
    cursor2.style.left = e.pageX + 'px';
}
let maxwidth =  window.innerWidth;

document.addEventListener('mouseleave', () => {
    if(maxwidth > 600){
        cursor1.style.display = 'none';
        cursor2.style.display = 'none';
    }
});
document.addEventListener('mouseenter', () => {
    if(maxwidth > 600){
        cursor1.style.display = 'block';
        cursor2.style.display = 'block';
    }
});

let links = document.querySelectorAll('a').forEach(links =>{

    links.onmouseenter = () =>{
        cursor1.classList.add('active');  
        cursor2.classList.add('active');  
    }
    links.onmouseleave = () =>{
        cursor1.classList.remove('active');  
        cursor2.classList.remove('active');  
    }
})