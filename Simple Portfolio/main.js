let typingText = new Typed("#text", {
    strings: ["Meu nome é Joicemar", "Sou Dev front-end", "Sou Programador"],
    loop: true,
    backDelay: 3000,
    typeSpeed: 80,
    backSpeed: 20,
    loop: true,
})

const circle = document.querySelector(".dayNight");
let body = document.querySelector(".body");


let dayNight = document.querySelector("#day-select");
dayNight.addEventListener('click', function () {
    if (body.classList.contains("day")) {
        body.classList.remove("day");
        body.classList.add("night");
    } else {
        body.classList.remove("night");
        body.classList.add("day");
    }
});

let bars = document.querySelector(".bars");
let menu = document.querySelector(".menu");

bars.addEventListener('click', function () {

    menu.classList.toggle('active');

});

// Cursor do mouse:
const mouse_circle = document.querySelector('.circle');

document.addEventListener('mouseleave', () => {
    const minhaDiv = document.getElementById('circle');
    minhaDiv.style.display = 'none';
});
document.addEventListener('mouseenter', () => {
    const minhaDiv = document.getElementById('circle');
    minhaDiv.style.display = 'block';
});

document.addEventListener("mousemove", function (event) {
    let x = event.clientX - mouse_circle.offsetWidth / 2;
    let y = event.clientY - mouse_circle.offsetHeight / 2;
    mouse_circle.style.left = x + "px";
    mouse_circle.style.top = y + "px";
});

