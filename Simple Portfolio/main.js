let typingText = new Typed("#text", {
  strings: ["Joicemar", "Programador", "Dev front-end"],
  loop: true,
  backDelay: 3000,
  typeSpeed: 100,
  backSpeed: 30,
  loop: true,
})

const circle = document.querySelector(".dayNight");
let body = document.querySelector(".body");


let dayNight = document.querySelector("#box");
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