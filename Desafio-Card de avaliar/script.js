const lista = document.querySelectorAll("ul li");
const result = document.querySelector('b');
for (let i = 0; i < lista.length; i++) {
    lista[i].onclick = function () {
        var local = this;
        this.classList.toggle('selected');
        result.replaceChildren(this.innerHTML)
        lista.forEach(function (li) {
            if (li !== local && li.classList.contains('selected')) {
                li.classList.remove('selected');
            }
        });
    }
}

const submit = document.querySelector(".submit");
const card2 = document.querySelector(".card2");
const card3 = document.querySelector(".card3");
submit.onclick = function () {
    let result = parseInt(document.querySelector('b').innerText);
    if (result > 0) {
        card2.classList.toggle('active');
    } else {
        card3.classList.toggle('active');
    }
}

const voltar = document.querySelector('.voltar');
voltar.onclick = function () {
    card3.classList.toggle('active');
}
